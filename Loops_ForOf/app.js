// FOR .. OF
//----------
// For (variable of iterable) {
//    statement
// }

// let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

// With a standard for loop
// for (let i = 0; i < subreddits.length; i++) {
//   console.log(subreddits[i]);
// }

// //Much cleaner  with a for...of loop!
// for (let sub of subreddits) {
//   console.log(sub);
// }

// //Works with other iterables, like strings!
// for (let char of 'cockadoodledoo') {
//   console.log(char.toUpperCase());
// }

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0;
//   for (let j = 0; j < row.length; j++) {
//     sum += row[j];
//   }
//   console.log(`Row ${i + 1}: ${magicSquare[i]} equals ${sum}`);
// }

for (let row of magicSquare) {
  let sum = 0;
  for (let digit of row) {
    sum += digit;
  }
  console.log(`Row ${row} equal ${sum}`);
}

// EXAMPLE 2
// If you need the indices, use a traditional for loop!
const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for (let i = 0; i < words1.length; i++) {
  //Access index i of both arrays
  console.log(`${words1[i]}${words2[i]}`);
}

// ForOf with Objects
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5
};

for (let movie of Object.keys(movieReviews)) {
  console.log(`You rated ${movie} ${movieReviews[movie]}`);
}

const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}
let avg = total / ratings.length;
console.log('Average Rating: ' + avg);
