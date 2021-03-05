// function chunkArrayInGroups(arr, size) {
//   const newArray = [];
//   while (arr.length > 0) {
//     const tempArray = [];
//     for (let i = 0; i < size; i++) {
//       tempArray[i] = arr.shift();
//     }
//     newArray.push(tempArray);
//   }
//   return newArray;
// }

// better version

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
