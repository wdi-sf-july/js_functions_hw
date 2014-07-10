var word = "mississippi";

var letterCount = function(letters) {

  var result = {}

  for(var i = 0; i < letters.length; i++) {

    if (result[letters[i]]) {
      result[letters[i]] += 1;
    } else {
      result[letters[i]] = 1;
    }

  }

  return result;
}

console.log(letterCount(word));