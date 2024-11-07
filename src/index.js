import "./css/style.css";
import "./css/form.css";

import { createItem } from "./make-item";
import { newItemDOM } from "./make-item-DOM";
import { getFormData, formDataObject } from "./capture-form-data";

console.log(createItem("sam"));

newItemDOM();
getFormData();

document.addEventListener("formDataCaptured", function () {
  console.log(`here you go`, formDataObject);
});
