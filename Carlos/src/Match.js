const Basketball = require('./Basketball');
const Handball = require('./Handball');

class Match {
  constructor(sport, match) {
    this.setSport(sport);
    this.match = match;
    this.valid = true;
    this.calculatePlayersPoints(match);
  }

  setSport(sport) {
    this.sport = sport === 'Basketaball' ? new Basketball() : new Handball();
  }

  calculatePlayersPoints(match) {
    this.players = {};
    this.teams = {};
    for (let i = 0; i < match.length; i += 1) {
      const matchElement = match[i];
      this.players[matchElement.nickname] = this.calculatePlayerPoints(matchElement);
      this.teams[matchElement.team] = this.teams[matchElement.team] ? this.teams[matchElement.team] + this.players[matchElement.nickname].points : this.players[matchElement.nickname].points;
      if (this.teamWinner) {
        this.teamWinner = this.teamWinner.points > this.teams[matchElement.team] ? this.teamWinner : {
          team: matchElement.team,
          points: this.teams[matchElement.team],
        };
      } else {
        this.teamWinner = {team: matchElement.team, points: this.teams[matchElement.team]};
      }
    }
    for (const index in this.players) {
      if (this.players[index].team === this.teamWinner.team) {
        this.players[index].points += 10;
      }
    }
  }

  calculatePlayerPoints(matchElement) {
    const matchPoints = {};
    matchPoints.team = matchElement.team;
    if (this.sport.sport === 'Basketball') {
      matchPoints.points = this.sport.calculatePoints(matchElement.kind, matchElement.scoredPoints, matchElement.rebound, matchElement.assist);
    } else {
      matchPoints.points = this.sport.calculatePoints(matchElement.kind, matchElement.goalMade, matchElement.goalReceived);
    }
    return matchPoints;
  }

  validateMatch() {
    return this.valid;
  }


}

module.exports = Match;
