// ======= Keyword this ==========

function sayHi() {
  console.log('HI');
  console.log(this);
}
const greet = function () {
  console.log(this);
};

const person = {
  first: 'Cherilyn',
  last: 'Sarkistian',
  nickName: 'Cher',
  fullName() {
    const { first, last, nickName } = this;

    // shorten with destructuring above
    return `${first} ${last} aka ${nickName}`;
    // console.log(`${this.first} ${this.last} aka ${this.nickName}`);
  },

  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },

  // with arrow function this refers to the global scope, thus arrow functions
  // should not normally be used to create methods within objects
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHA`);
  }
};

const printoBio = person.printBio;
