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
      listData.deleteItem(index, whichList + "Data", listData.listDataObject);
      updateList();
    });

    for (let key in element) {
      const itemInfo = document.createElement("div");
      itemInfo.className = key;

      if (key === "description") {
        element[key] = element[key].replace(/\n/g, "<br>");
        itemInfo.innerHTML =
          `<b>${key.charAt(0).toUpperCase()}` + `${key.slice(1)}:</b>`;
        listItem.appendChild(itemInfo);

        const descriptionInfo = document.createElement("div");
        descriptionInfo.className = key + "-info";
        descriptionInfo.innerHTML = `${element[key]}`;
        listItem.appendChild(descriptionInfo);
      } else {
        itemInfo.innerHTML =
          `<span><b>${key.charAt(0).toUpperCase()}` +
          `${key.slice(1)}:</b> ${element[key]}</span>`;
        if (key === "priority") {
          if (element[key] === "High") {
            itemInfo.style.backgroundColor = "red";
          } else if (element[key] === "Medium") {
            itemInfo.style.backgroundColor = "orange";
          } else if (element[key] === "Low") {
            itemInfo.style.backgroundColor = "green";
          }

          itemInfo.appendChild(deleteButton);
        }

        listItem.appendChild(itemInfo);
      }
    }

    // listItem.textContent = JSON.stringify(element);
    todoListDiv.appendChild(listItem);
  });
};

const listDOM = function () {
  document.addEventListener("dataAdded", updateList);
  document.addEventListener("changeList", updateList);
};
export { listDOM };

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
