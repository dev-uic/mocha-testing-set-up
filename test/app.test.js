import firstTest from '../src/app';

describe('My first tests',() => {
  describe('check data type', () => {
    it('should return undefined if no parameter passed', () => {
      expect(firstTest()).to.be.undefined;
    });
  
    it('should return a string when a string is passed', () => {
      expect(firstTest('a string')).to.be.a('string');
    });
  
    it('it should return a number when a number is passed', () => {
      expect(firstTest(10)).to.be.a('Number')
    });
  
    it('should not be a string when a number is passed', () => {
      expect(firstTest(12)).to.not.be.a('string');
    });
  });

  describe('checking equals', () => {
    it('should equal the string passed', () => {
      expect(firstTest('same string')).to.equal('same string');
    });
  
    it('should deep equal the object passed', () => {
      const givenObject = {
        hello: 'world'
      };
  
      expect(firstTest(givenObject)).to.equal(givenObject);
    });
  });


  // it('should throw and error when "error" is passed', () => {
  //   function wrappedFunction(params) {
  //     firstTest('error');
  //   };

  //   expect(wrappedFunction).to.throw('Cannot pass error');
  // });
});