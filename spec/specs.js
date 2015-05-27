describe("pig", function() {
  it("will add 'ay' to end of a word if the word starts with vowel", function(){
    expect(pig("aint")).to.equal("aintay");
  });

  it("will remove first letter of word, if consonant, and place letter at end of word + add ay.", function() {
    expect(pig("carl")).to.equal("arlcay");
  });

});
