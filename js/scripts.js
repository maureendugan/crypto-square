var prepSentence = function(sentence) {
  var lowerSentence = sentence.toLowerCase();
  var re = /[,.!?;'":><%$&*@#1234567890 ]/g;
  return lowerSentence.replace(re, "");
};

var getLength = function(string) {
  return string.length;
};

var findRows = function(string) {
  return Math.floor(Math.sqrt(string.length));
};

var findColumns = function(string) {
  return Math.ceil(Math.sqrt(string.length));
};

// var encrypts = function(string) {
//   var newString = "";
//   var rowIncrement = findRows(string);
//   var columnIncrement = findColumns(string);
//   for (var i=0; i <= rowIncrement; i++){
//     alert('starting for loop');
//     newString += string.charAt(0 + columnIncrement);
//     alert(newString);
//     columnIncrement *= i;
//     alert(columnIncrement);
//   }

//   return newString;
// };

var encrypts = function(string) {
  var newArray = [];
  var newSentence = "";
  var x = findColumns(string);
  for (var i = 0; i < findRows(string); i++) {
    newArray.push(string.slice(i * x, (i + 1) * x)); 
  }
  for (var j = 0; j < newArray.length; j++) {
    for (var p = 0; p < newArray[j].length; p++) {
      newSentence += newArray[p].charAt([j]);
    }
  }

  return newSentence;
};
