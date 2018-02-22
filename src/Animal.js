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
    let csvArrayObject = [];
    const parser = parse({ delimiter: ';' }, (err, data) => {
      async.eachSeries(data, () => {
        csvArrayObject = this.arrayToObject(data);
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
    console.log(JSON.stringify(csvArrayObject));
    console.log(data);
    return csvArrayObject;
  }
}

module.exports = Animal;

