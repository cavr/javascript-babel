/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const expect = require('chai').expect;
const Animal = require('../src/Animal');

function check(done, f) {
  try {
    f();
    done();
  } catch (e) {
    done(e);
  }
}

describe('Animal', () => {

  describe('Animal.hello()', () => {

    it('should return welcome message for a dog', () => {
      const animal = new Animal('');
      const message = animal.hello();
      expect(message).to.be.equal('Welcome, Dog!');
    });

    it('should return welcome message for a named user', () => {
      const animal = new Animal('Dog');
      const message = animal.hello();
      expect(message).to.be.equal('Welcome, Dog!');
    });

  });

  describe('Animal have dog', () => {
    it('Should have dog', (done) => {
      const animal = new Animal('Dog');
      const message = animal.haveDog();
      Animal.sayHola((data) => {
        check(done, () => { expect(data).to.be.equal([]); });
      });
    });
  });

});
