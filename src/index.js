import "./css/style.css";
import "./css/form.css";

import { createItem } from "./make-item";
import { newItemDOM } from "./make-item-DOM";
import { getFormData, formDataObject } from "./capture-form-data";
import { addNewItem } from "./add-new-item";
import { listDOM } from "./list-DOM";

console.log(createItem("sam"));

newItemDOM();
getFormData();
addNewItem("NEWListData");
listDOM("NEWListData");
