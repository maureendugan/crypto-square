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

var encrypts = function(string) {
  var string = prepSentence(string);
  var newSentence = "";
  var x = findColumns(string);
  for (var j=0; j < x; j++) {
    for (var i=0; i < string.length; i += x) {
       newSentence += string.charAt(i + j);
    }
  }
  return blocks(newSentence);
};

var blocks = function(string) {
  var newString = ''
  for (var i = 0; i < string.length ; i = i + 5) {
      newString += string.slice(i, i+5) + " ";
  }

  return newString.slice(0, newString.length - 1);

};

$(document).ready(function() {
  $('form#cryptoform').keyup(function() {
    var sentence = $('textarea#sentence').val(); 
    var encryptedSentence = encrypts(sentence);

    $('#textDisplay').text(encryptedSentence);

  });
});
