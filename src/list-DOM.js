import * as listData from "./list-data";
import { selectedListId } from "./make-list-DOM";
import { createDeleteButton } from "./createDeleteButton";

const todoListDiv = document.querySelector("#todo-list");

const updateList = function () {
  const whichList = selectedListId;
  todoListDiv.innerHTML = "";

  listData.listDataObject[whichList + "Data"].forEach((element, index) => {
    const listItem = document.createElement("div");
    listItem.className = "list-item";

    const deleteButton = createDeleteButton();

    deleteButton.addEventListener("click", function () {
      listData.deleteItem(index, whichList + "Data");
      updateList();
    });

    for (let key in element) {
      const itemInfo = document.createElement("div");
      itemInfo.className = key;

      let type = "text";

      if (key === "description") {
        type = "textarea";
        element[key] = element[key].replace(/\n/g, "<br>");
        itemInfo.innerHTML =
          `<b>${key.charAt(0).toUpperCase()}` + `${key.slice(1)}:</b>`;
        listItem.appendChild(itemInfo);

        const descriptionInfo = document.createElement("div");
        descriptionInfo.className = key + "-info";
        descriptionInfo.innerHTML = `${element[key]}`;
        listItem.appendChild(descriptionInfo);

        descriptionInfo.addEventListener("click", () =>
          makeEditable(descriptionInfo, element, key, index, whichList, type)
        );
      } else {
        itemInfo.innerHTML =
          `<span><b>${key.charAt(0).toUpperCase()}` +
          `${key.slice(1)}:</b> ${element[key]}</span>`;

        if (key === "priority") {
          type = "select";
          if (element[key] === "High") {
            itemInfo.style.backgroundColor = "red";
          } else if (element[key] === "Medium") {
            itemInfo.style.backgroundColor = "orange";
          } else if (element[key] === "Low") {
            itemInfo.style.backgroundColor = "green";
          }

          itemInfo.appendChild(deleteButton);
        } else if (key === "dueDate") {
          type = "date";
        }

        listItem.appendChild(itemInfo);
        itemInfo.addEventListener("click", () =>
          makeEditable(itemInfo, element, key, index, whichList, type)
        );
      }
    }

    // listItem.textContent = JSON.stringify(element);
    todoListDiv.appendChild(listItem);
  });
};

const makeEditable = (div, element, key, index, whichList, type) => {
  let input;
  if (type === "textarea") {
    input = document.createElement("textarea");
    input.value = element[key].replace(/<br>/g, "\n"); // Replace <br> with newlines
  } else if (type === "select") {
    input = document.createElement("select");
    const options = ["High", "Medium", "Low"];
    options.forEach((optionValue) => {
      const option = document.createElement("option");
      option.value = optionValue;
      option.textContent = optionValue;
      if (element[key] === optionValue) {
        option.selected = true;
      }
      input.appendChild(option);
    });
  } else if (type === "date") {
    input = document.createElement("input");
    input.type = "date";
    input.value = element[key];
  } else {
    input = document.createElement("input");
    input.type = "text";
    input.value = element[key];
  }

  input.className = div.className;
  div.replaceWith(input);

  const saveChanges = function () {
    element[key] = input.value;
    listData.listDataObject[whichList + "Data"][index] = element;
    updateList();
    listData.saveDataToLocalStorage();
  };
  input.addEventListener("blur", saveChanges);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && type !== "textarea") {
      saveChanges();
    }
  });
  input.focus();
};

const listDOM = function () {
  document.addEventListener("dataAdded", updateList);
  document.addEventListener("changeList", updateList);
};
export { listDOM, updateList };

// WAY 1:

// let handler;
// const listDOM = function () {
//   const previousHandler = handler;
//   handler = () => updateList();
//   // before this didn't work as was passing in whichList which was changing so it wasn't the same function reference.

//   document.removeEventListener("dataAdded", previousHandler);
//   document.addEventListener("dataAdded", handler);

//   document.removeEventListener("changeList", previousHandler);
//   document.addEventListener("changeList", handler);
// };

// WAY 2:

// const handler = () => updateList();

// const listDOM = function () {
//   document.removeEventListener("dataAdded", handler); // not strictly needed since browqser will spot it needs to be removed, but why risk it?
//   document.addEventListener("dataAdded", handler);

//   document.removeEventListener("changeList", handler);
//   document.addEventListener("changeList", handler);
// };
// export { listDOM };
