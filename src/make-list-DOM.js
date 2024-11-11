const newItemListButton = document.querySelector("#new-list-button");
const newItemListCard = document.querySelector("#new-item-list-card");
const newItemListForm = document.querySelector("#new-item-list");

let listTitle;
let selectedListId;

const addNewList = function () {
  newItemListButton.addEventListener("click", function () {
    newItemListCard.style.display = "";

    newItemListForm.addEventListener("submit", function () {
      event.preventDefault();

      const listTitleFormData = new FormData(this);
      listTitle = listTitleFormData.get("list-title");

      const newTitle = document.createElement("div");
      newTitle.textContent = listTitle;
      newTitle.id = listTitle + "-list";

      newTitle.addEventListener("click", () => (selectedListId = newTitle.id));

      newItemListButton.parentNode.insertBefore(newTitle, newItemListButton);
      newItemListCard.style.display = "none";
      newItemListForm.reset();
    });
  });
};

const homeListEventListener = function () {
  document.querySelector("#home-list").addEventListener("click", function () {
    
    selectedListId = "home-list";
  });
};

export { addNewList, listTitle, homeListEventListener, selectedListId };
