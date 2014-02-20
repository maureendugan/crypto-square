describe('prepSentence', function() {
  
  it('puts everything into lowercase', function() {
    prepSentence('nAjTiD').should.equal('najtid');
  });
  
  it('removes spaces from sentence', function() {
    prepSentence('a bunch of words').should.equal('abunchofwords');
  });
  
  it('removes punctuation from a sentence', function() {
    prepSentence('a se!tenc?,:. word').should.equal('asetencword');
  });

  it('removes numbers and special characters from a sentence', function() {
    prepSentence('t%he? f&ox9 ru@ns to4 th3e for,es;t').should.equal('thefoxrunstotheforest');
  });
});

describe('getLength', function() {
  it('return the length of a string', function() {
    getLength('abcdefghijklm').should.equal(13);
  });
});

describe('findRows', function() {
  it('finds the rows needed for a given string', function() {
    findRows('theyoungbird').should.equal(3);
  });
});

describe('findColumns', function() {
  it('finds the columns needed for a given string', function () {
    findColumns('abcdefghijklmno').should.equal(4);
  });
});

describe('encrypts', function() {

  it('encrypts sentence', function () {
    encrypts('abcdefghi').should.equal("adgbehcfi");
  });

  it ('encrypts a longer sentence', function () {
    encrypts('abcdabcdabcdabcd').should.equal('aaaabbbbccccdddd');
  });


});

