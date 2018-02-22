const Animal = require('./Animal');

class Dog extends Animal {
  constructor(kind) {
    super();
    this.kind = kind;
  }
  sayHello() {
    return JSON.stringify(this);
  }
}

module.exports = Dog;
