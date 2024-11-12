import { createItem } from "./make-item";

let formDataObject;

const getFormData = function () {
  const newItemForm = document.querySelector("#new-item-form");

  newItemForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    formDataObject = createItem(
      formData.get("title"),
      formData.get("dueDate"),
      formData.get("priority"),
      formData.get("description")
    );

    if (!formDataObject.priority) {
      formDataObject.priority = "Not Selected";
    }

    document.dispatchEvent(new CustomEvent("formDataCaptured"));
  });
};
export { getFormData, formDataObject };
