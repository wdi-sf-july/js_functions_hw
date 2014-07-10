var list2 = [3,6,11];
var list1 = [2,4,5,8,9];

var merge = function(arr1, arr2) {
  var result = [], indexOne =0, indexTwo = 0;

  while (indexOne < arr1.length && indexTwo < arr2.length) {
   if (arr1[indexOne] <= arr2[indexTwo] ) {
     result.push(arr1[indexOne]);
     indexOne++
    } else {
     result.push(arr2[indexTwo]);
     indexTwo++
    }
  }
  return result.concat(arr1.slice(indexOne)).concat(arr2.slice(indexTwo));
}

console.log(merge(list1, list2));
