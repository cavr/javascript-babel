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

  static sayHola(callback) {
    const inputFile = 'src/example.txt';
    const parser = parse({ delimiter: ';' }, (err, data) => {
      async.eachSeries(data, () => {
        callback(this.arrayToObject(data));
      });
    });
    fs.createReadStream(inputFile).pipe(parser);
  }

  static arrayToObject(data) {
    let csvArrayObject = [];
    for (let i = 1; i < data.length; i += 1) {
      let csvObject = {};
      for (let j = 0; j < data[i].length; j += 1) {
        csvObject[data[0][j]] = data[i][j];
      }
      csvArrayObject.push(csvObject);
    }
    return csvArrayObject;
  }
}

module.exports = Animal;

