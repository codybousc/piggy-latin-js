


var pig = function(word) {
  var result;
  var vowel = ["a", "e", "i", "o", "u"];
  var firstLet = word.slice(0,1);
  var rest_word = word.slice(1);
  var ending = "ay";

  if (firstLet === "a" || firstLet === "e" || firstLet === "i" || firstLet === "o" || firstLet === "u") {

    return word + ending;

  } else  {

    result = rest_word + firstLet + ending;
    return result;

  }
};
