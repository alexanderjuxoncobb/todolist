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

export { addData, addList, listDataObject };
