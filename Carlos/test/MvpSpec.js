

const expect = require('chai').expect;
const Mvp = require('../src/Mvp');

function check(done, f) {
  try {
    f();
    done();
  } catch (e) {
    done(e);
  }
}

describe('MVP', () => {

  describe('Calculate MVP', () => {

    it('Should calculate MVP', () => {
      const mvp = new Mvp(['data/basketball.txt', 'data/handball.txt']);
      mvp.calculateMvp();
      expect(mvp.valid).to.be.equal(true);
    });

    it('Should get MVP', () => {
      const mvp = new Mvp(['data/basketball.txt', 'data/handball.txt']);
      mvp.calculateMvp();
      expect(mvp.getMvp()).to.be.equal(false);
    });

  });

});
