// ======= Object Computed Properties ==========
// We can use a variable as a key name in an object literal property
//
// const user = 'Jools'
// const userRoles = { [user]: 'Admin' }

const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// OLD WAY <--
// const team = {};
// team[role] = person;
// team[role2] = person2;

const team = {
  [role]: person,
  [role2]: person2
};

// OLD WAY <--
// function addProp(obj, key, val) {
//   const copy = { ...obj };
//   copy[key] = val;
//   return copy;
// }

const addProp = (obj, key, val) => {
  return {
    ...obj,
    [key]: val
  };
};

const res = addProp(team, 'happy', ':)');
