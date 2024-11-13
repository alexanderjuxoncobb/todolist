import "./css/style.css";
import "./css/form.css";
import "./css/homepage.css";
import "./css/deleteButton.css";

import { createItem } from "./make-item";
import { newItemDOM } from "./make-item-DOM";
import { getFormData, formDataObject } from "./capture-form-data";
import { addNewItem } from "./add-new-item";
import { listDOM, updateList } from "./list-DOM";
import {
  addNewList,
  listTitle,
  homeListEventListener,
  selectedListId,
} from "./make-list-DOM";
import { loadSavedLists } from "./load-saved-lists";

newItemDOM();
getFormData();
addNewList();
addNewItem();
listDOM(); // Adds the event listeners to display the lists when a tab is clicked.
homeListEventListener();

document.addEventListener("DOMContentLoaded", () => updateList());
document.addEventListener("DOMContentLoaded", () => loadSavedLists());

// redundatn as the event listener is already set up once wehn called above.
// document.addEventListener("changeList", function () {
//   addNewItem();
//   //   listDOM();
// });
