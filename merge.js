// merge

var list1 = [3,6,11];
var list2 = [2,4,5,8,9];
// [2,3,4,5,6,8,9,11]

var merge = function(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length ) {

    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    }else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1).concat(arr2);
}

console.log(merge(list1, list2));
// console.log(list1);
// console.log(list2);