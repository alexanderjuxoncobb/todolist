import * as listData from "./list-data";

const todoListDiv = document.querySelector("#todo-list ");

const listDOM = function (whichList) {
  document.addEventListener("dataAdded", function () {
    todoListDiv.innerHTML = "";
    listData[whichList].forEach((element) => {
      const listItem = document.createElement("div");
      listItem.textContent = JSON.stringify(element);
      todoListDiv.appendChild(listItem);
    });
  });
};

export { listDOM };
