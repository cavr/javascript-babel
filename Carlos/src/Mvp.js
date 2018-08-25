const Match = require('../src/Match');
const fs = require('fs');
const parse = require('csv-parse');
const async = require('async');

class Mvp {
  constructor(files) {
    this.files = files;
    this.valid = true;
    this.matches = [];
    this.playersPoints = {};
    this.basketBallKeys = ['player', 'nick', 'number', 'team', 'position', 'kind', 'scoredPoints', 'rebound', 'assist'];
    this.handBallKeys = ['player', 'nick', 'number', 'team', 'position', 'kind', 'goalMade', 'goalReceived'];
  }

  calculateMvp() {
    this.bulkFiles();
    for (let i = 0; i < this.matches.length; i += 1) {
      const playersMatch = this.matches[i].players;
      for (const player in playersMatch) {
        if (this.playersPoints[player]) {
          this.playersPoints[player] = this.playersPoints[player] + playersMatch[player];
          if (this.mvp) {
            this.mvp = this.mvp.points > this.playersPoints[player] ? this.mvp :
              {
                player,
                points: this.playersPoints[player],
              };
          } else {
            this.mvp = {
              player,
              points: this.playersPoints[player],
            };
          }
        }
      }
    }
    return this.valid;
  }

  getMvp() {
    if (this.valid && this.mvp) {
      this.mvp;
    }
    return false;
  }

  bulkFiles() {
    for (let i = 0; i < this.files.length && this.valid; i += 1) {
      const file = this.files[i];
      this.readFile(file, (data) => {
        if (this.valid) {
          const match = new Match(this.sport, data);
          if (match.validateMatch()) {
            this.matches.push(match);
          }
        }
      });
    }
  }

  readFile(inputFile, callback) {
    const parser = parse({delimiter: ';'}, (err, data) => {
      async.eachSeries(data, () => {
        callback(this.arrayToObject(data));
      });
    });
    fs.createReadStream(inputFile).pipe(parser);
  }

  arrayToObject(data) {
    let keys = [];
    if (this.data.length === 0) {
      this.valid = false;
    } else {
      this.sport = this.data[0][0];
    }
    if (this.sport == 'Basketbal') {
      keys = this.basketBallKeys;
    } else {
      keys = this.handBallKeys;
    }
    const csvArrayObject = [];
    for (let i = 1; i < data.length; i += 1) {
      const csvObject = {};
      if (this.sport === 'Basketball' && data[i].length !== 8) {
        this.valid = false;
      } else if (data[i].length !== 7) {
        this.valid = false;
      }
      for (let j = 0; j < data[i].length && this.valid; j += 1) {
        csvObject[keys[j]] = data[i][j];
      }
      csvArrayObject.push(csvObject);
    }
    return csvArrayObject;
  }
}

module.exports = Mvp;

