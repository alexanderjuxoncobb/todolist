import { createItem } from "./make-item";

const newItemDOM = function () {
  const newItem = document.querySelector("#new-item-button");
  const formCard = document.querySelector("#new-item-form-card");
  if (newItem) {
    newItem.addEventListener("click", function () {
      formCard.style.display = "";
    });
  }
};
export { newItemDOM };
