const Sport = require('./Sport');

class Basketball extends Sport {
  constructor() {
    super('Basketball');
    this.ratingPoints = {
      G: { scoredPoints: 2, rebound: 3, assist: 1 },
      F: { scoredPoints: 2, rebound: 3, assist: 1 },
      C: { scoredPoints: 2, rebound: 3, assist: 1 },
    };
  }

  calculatePoints(position, scoredPoints, rebound, assist) {
    const ratingPosition = this.ratingPoints[position];
    const scoredRatingPoints = ratingPosition.scoredPoints * scoredPoints;
    const reboundRating = ratingPosition.rebound * rebound;
    const assistRating = ratingPosition.assist * assist;
    this.points = scoredRatingPoints + reboundRating + assistRating;
    return this.points;
  }
}

module.exports = Basketball;
