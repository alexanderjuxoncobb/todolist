import { addList, listDataObject, saveDataToLocalStorage } from "./list-data";

const newItemListButton = document.querySelector("#new-list-button");
const newItemListCard = document.querySelector("#new-item-list-card");
const newItemListForm = document.querySelector("#new-item-list");

let listTitle;
let selectedListId = "homeList";

const setSelectedListId = (newId) => {
  selectedListId = newId;
};

const addNewList = function () {
  newItemListButton.addEventListener("click", function () {
    newItemListCard.style.display = "";

    newItemListForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const listTitleFormData = new FormData(this);
      listTitle = listTitleFormData.get("list-title");

      if (listTitle) {
        addList(listTitle + "ListData");
        saveDataToLocalStorage();

        const newTitle = document.createElement("div");
        newTitle.textContent = listTitle;
        newTitle.id = listTitle + "List";
        newTitle.className = "list-title";

        newTitle.addEventListener("click", () => {
          selectedListId = newTitle.id;

          document.dispatchEvent(new CustomEvent("changeList"));
        });

        newItemListButton.parentNode.insertBefore(newTitle, newItemListButton);
        newItemListCard.style.display = "none";
        newItemListForm.reset();
      }
    });
  });
};

const homeListEventListener = function () {
  document.querySelector("#homeList").addEventListener("click", function () {
    selectedListId = "homeList";
    document.dispatchEvent(new CustomEvent("changeList"));
  });
};

export {
  addNewList,
  listTitle,
  homeListEventListener,
  selectedListId,
  setSelectedListId,
};
