import "./css/style.css";
import "./css/form.css";
import "./css/homepage.css";

import { createItem } from "./make-item";
import { newItemDOM } from "./make-item-DOM";
import { getFormData, formDataObject } from "./capture-form-data";
import { addNewItem } from "./add-new-item";
import { listDOM } from "./list-DOM";
import {
  addNewList,
  listTitle,
  homeListEventListener,
  selectedListId,
} from "./make-list-DOM";

newItemDOM();
getFormData();
addNewList();
addNewItem();
listDOM(); // Adds the event listeners to display the lists when a tab is clicked.
homeListEventListener();

document.addEventListener("changeList", function () {
  addNewItem();
  //   listDOM();
});
