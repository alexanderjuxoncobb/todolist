import { getFormData, formDataObject } from "./capture-form-data";
import * as listData from "./list-data";
import { selectedListId } from "./make-list-DOM";

const formCard = document.querySelector("#new-item-form-card");
const newItemForm = document.querySelector("#new-item-form");

const handleFormDataCapture = function () {
  const whichList = selectedListId;
  listData.addData(whichList + "Data", formDataObject);
  formCard.style.display = "none";
  newItemForm.reset();

  document.dispatchEvent(new CustomEvent("dataAdded"));
};
let currentHandler;
const addNewItem = function () {
  if (currentHandler) {
    document.removeEventListener("formDataCaptured", currentHandler);
  }
  currentHandler = () => handleFormDataCapture();
  document.addEventListener("formDataCaptured", currentHandler);
};

export { addNewItem };
