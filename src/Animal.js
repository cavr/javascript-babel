import Person from '../src/Person';

class Animal {
  constructor(animal) {
    this.animal = animal || 'Dog';
    this.person = new Person();
  }

  hello() {
    return `Welcome, ${this.animal}!`;
  }

  haveDog() {
    return `Welcome, ${JSON.stringify(this.animal)} your ${JSON.stringify(this.person)}`;
  }
}

export default Animal;
