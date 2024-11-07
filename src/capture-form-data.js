let formDataObject = {};

const getFormData = function () {
  const newItemForm = document.querySelector("#new-item-form");

  newItemForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    formDataObject.title = formData.get("title");
    formDataObject.description = formData.get("description");
    formDataObject.dueDate = formData.get("dueDate");
    formDataObject.priority = formData.get("priority");
    document.dispatchEvent(new CustomEvent("formDataCaptured"));
  });
};
export { getFormData, formDataObject };
