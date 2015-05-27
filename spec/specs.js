describe("pig", function() {
  it("will add 'ay' to end of a word if the word starts with vowel", function(){
    expect(pig("aint")).to.equal("aintay");
  });

  it("will remove first letter of word, if consonant, and place letter at end of word + add ay.", function() {
    expect(pig("carl")).to.equal("arlcay");
  });

  it("will remove the second letter of a word, if consonant, and place letter and end of word + add ay.", function() {
    expect(pig("bball")).to.equal("allbbay");
  });

  it("will stop if the next letter after a consonant is a vowel", function() {
    expect(pig("bbcall")).to.equal("allbbcay");
  });

  it("will remove any 'qu' sequence within a word and move it to the end of the word", function() {
    expect(pig("quantom")).to.equal("antomquay");
  });

});
