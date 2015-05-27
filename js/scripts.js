var pig = function(words) {

var word = words.split("");
var vowels = ["a", "e", "i", "o", "u"];
var wordLength = word.length;
var ending = "ay";
var p =[];
var counter = 0
var removedLet;
var removedQ;

  if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") {
    var vowelWord = word + ending;
    var finalVowelWord = vowelWord.replace(/,/g, '');
    return finalVowelWord;
} else {

    for(var i = 0; i < wordLength; i++) {
    var isConsonant = vowels.indexOf(word[i]);

     if (isConsonant === -1) {
            if(word[i] === "q" && word[i + 1] === "u") {
              removedQ = word.slice(i, i + 2 );
              p.push(removedQ);
              counter += 2;
             }
              else {
              removedLet = word.slice(i, i + 1);
              p.push(removedLet);
              counter += 1;
              }
     }
       else if(isConsonant !== -1) {
          break;
        }
       else {
          alert("hello from else");
        }

    }
    var new_arr = word + p + ending;
    var finalWord = new_arr.replace(/,/g, '');
    var ffw = finalWord.substring(counter);
    return ffw;
  }

};
