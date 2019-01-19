const db = require('../database/db.js');
db.connect();

const log = require('../logger.js');

class User {
  constructor (name) {
    this.name = name;
    this.sayHi();
  }
  sayHi() {
    log(`${db.getPhrase("Hello")} ${this.name}!`);
  }
}

module.exports = User;
