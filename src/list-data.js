let listDataObject = { homeListData: [] };

const saveDataToLocalStorage = function () {
  localStorage.setItem("listData", JSON.stringify(listDataObject));
  console.log(listDataObject);
};

const loadDataFromLocalStorage = function () {
  const storedData = localStorage.getItem("listData");
  if (storedData) {
    Object.assign(listDataObject, JSON.parse(storedData));
  }
};

loadDataFromLocalStorage();

const addData = function (currentData, newData) {
  if (listDataObject[currentData]) {
    listDataObject[currentData].push(newData);
    saveDataToLocalStorage();
  } else {
    console.error(`${currentData} does not exist in listDataObject`);
  }
};

const addList = function (newList) {
  listDataObject[newList] = [];
  saveDataToLocalStorage();
  console.log("local storage: ", localStorage.getItem("listData"));
};

const deleteItem = function (i, currentData) {
  listDataObject[currentData].splice(i, 1);
  saveDataToLocalStorage();
};

export { addData, addList, deleteItem, listDataObject, saveDataToLocalStorage };
