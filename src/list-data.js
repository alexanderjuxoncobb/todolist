let homeListData = [];

let listDataObject = { homeListData };

const addData = function (currentData, newData) {
  listDataObject[currentData].push(newData);
};

export { addData, listDataObject };
