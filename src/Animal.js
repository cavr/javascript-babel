const Person = require('../src/Person');

const fs = require('fs');

const parse = require('csv-parse');

const async = require('async');

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

  static sayHola() {
    const inputFile = 'src/example.txt';
    const parser = parse({ delimiter: ';' }, (err, data) => {
      async.eachSeries(data, (line, callback) => {
        // do something with the line
        console.log(line);
        callback();
      });
    });
    fs.createReadStream(inputFile).pipe(parser);
  }
}

module.exports = Animal;

