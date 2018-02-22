const expect = require('chai').expect;

const Dog = require('../src/Dog');

describe('Dog', () => {

  describe('Dog.hello()', () => {

    it('should return welcome message for a guest Dog', () => {
      const dog = new Dog('Bulldog');
      expect(dog.kind).to.be.equal('Bulldog');
    });
    it('should return welcome message for a guest Message', () => {
      const dog = new Dog('Bulldog');
      expect(dog.sayHello()).to.be.equal(dog.sayHello());
    });

  });

});
