import { getFormData, formDataObject } from "./capture-form-data";
import * as listData from "./list-data";

const formCard = document.querySelector("#new-item-form-card");
const newItemForm = document.querySelector("#new-item-form");

const addNewItem = function (whichList) {
  document.addEventListener("formDataCaptured", function () {
    listData.addData(whichList, formDataObject);
    formCard.style.display = "none";
    newItemForm.reset();

    document.dispatchEvent(new CustomEvent("dataAdded"));
  });
};

export { addNewItem };
