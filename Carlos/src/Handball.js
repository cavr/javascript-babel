const Sport = require('./Sport');

class Handball extends Sport {
  constructor() {
    super('Handball');
    this.ratingPoints = {
      G: {initialRatingPoints: 50, goalMade: 5, goalReceived: -2},
      F: {initialRatingPoints: 20, goalMade: 1, goalReceived: -1},
    };
  }

  calculatePoints(position, goalMade, goalReceived) {
    const ratingPosition = this.ratingPoints[position];
    const initialRatingPoints = ratingPosition.initialRatingPoints;
    const goalMadeRating = ratingPosition.goalMade * goalMade;
    const goalReceivedRating = ratingPosition.goalReceived * goalReceived;
    this.points = initialRatingPoints + goalMadeRating + goalReceivedRating;
    return this.points;
  }
}

module.exports = Handball;
