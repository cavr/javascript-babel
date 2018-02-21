/**
 * Babel Starter Kit (https://www.kriasoft.com/babel-starter-kit)
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const expect = require('chai').expect;

const Person = require('../src/Person');

describe('Person', () => {

  describe('Person.hello()', () => {

    it('should return welcome message for a guest user', () => {
      const person = new Person('');
      const message = person.hello();
      expect(message).to.be.equal('Welcome, Guest!');
    });

    it('should return welcome message for a named user', () => {
      const person = new Person('John');
      const message = person.hello();
      expect(message).to.be.equal('Welcome, John!');
    });

  });

});
