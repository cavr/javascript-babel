
class Person {
  constructor(name) {
    this.name = name || 'Guest';
  }

  hello() {
    return `Welcome, ${this.name}!`;
  }
}
module.exports = Person;
