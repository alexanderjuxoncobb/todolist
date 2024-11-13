import { listDataObject } from "./list-data";
import { selectedListId, setSelectedListId } from "./make-list-DOM";

const homeList = document.querySelector("#homeList");
const newItemListButton = document.querySelector("#new-list-button");

const loadSavedLists = function () {
  Object.keys(listDataObject).forEach((listKey) => {
    console.log("list key", listKey);

    const newTitle = document.createElement("div");
    newTitle.textContent = listKey;
    newTitle.id = listKey.slice(0, -4);
    console.log("id:", newTitle.id);
    newTitle.className = "list-title";

    newTitle.addEventListener("click", () => {
      setSelectedListId(newTitle.id);
      console.log("selectedListId = ", selectedListId);

      document.dispatchEvent(new CustomEvent("changeList"));
    });

    newItemListButton.parentNode.insertBefore(newTitle, newItemListButton);
  });
};

export { loadSavedLists };
