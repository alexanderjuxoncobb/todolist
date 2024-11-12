import * as listData from "./list-data";
import { selectedListId } from "./make-list-DOM";

const todoListDiv = document.querySelector("#todo-list");

const updateList = function () {
  const whichList = selectedListId;
  todoListDiv.innerHTML = "";

  listData.listDataObject[whichList + "Data"].forEach((element) => {
    const listItem = document.createElement("div");
    listItem.textContent = JSON.stringify(element);
    todoListDiv.appendChild(listItem);
  });
};

// WAY 1:

// let handler;
// const listDOM = function () {
//   const previousHandler = handler;
//   handler = () => updateList();
//   // before this didn't work as was passing in whichList which was changing so it wasn't the same function reference.

//   document.removeEventListener("dataAdded", previousHandler);
//   document.addEventListener("dataAdded", handler);

//   document.removeEventListener("changeList", previousHandler);
//   document.addEventListener("changeList", handler);
// };

// WAY 2:

// const handler = () => updateList();

// const listDOM = function () {
//   document.removeEventListener("dataAdded", handler); // not strictly needed since browqser will spot it needs to be removed, but why risk it?
//   document.addEventListener("dataAdded", handler);

//   document.removeEventListener("changeList", handler);
//   document.addEventListener("changeList", handler);
// };
// export { listDOM };

const listDOM = function () {
  document.addEventListener("dataAdded", updateList);
  document.addEventListener("changeList", updateList);
};
export { listDOM };
