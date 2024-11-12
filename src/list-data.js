let homeListData = [];

let listDataObject = { homeListData };

const addData = function (currentData, newData) {
  if (listDataObject[currentData]) {
    listDataObject[currentData].push(newData);
  } else {
    console.error(`${currentData} does not exist in listDataObject`);
  }
};

const addList = function (newList, listDataObject) {
  listDataObject[newList] = [];
};

const deleteItem = function (i, currentData, listDataObject) {
  listDataObject[currentData].splice(i, 1);
};

export { addData, addList, deleteItem, listDataObject };
