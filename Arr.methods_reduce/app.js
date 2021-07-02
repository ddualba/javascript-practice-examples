// ======= reduce ==========
// execites a reducer function on each element in
// an array, resulting in a single value

// arr.reduce((accumulator, currentValue) => {
//    return accumulator + currentValue; 
// })

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const totalNums = nums.reduce((total, currentVal) => {
  return total + currentVal
})

let grades = [87, 64, 96, 92, 88, 99, 73, 70, 64]

const maxGrade = grades.reduce((max, currVal) => (
  currVal > max ?  currVal :  max

  // or
  // Math.max(max, currVal)
))


const votes = ['y', 'y', 'n', 'y', 'abstain', 'n', 'y', 'n', 'abstain', 'y', 'n', 'n', 'n', 'y', 'y'];

const vTotals = votes.reduce((tally, val) =>{
  if(tally[val]){
    tally[val]++
  } else {
    tally[val] = 1
  }
  return tally
}, {})


// To tally the votes:
// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {})

// The shorter version:
// const results = votes.reduce((tally, val) => {
//   tally[val] = (tally[val] || 0) + 1;
//   return tally;
// }, {});


const books = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'A Truly Horrible Book',
  authors: ['Xavier Time'],
  rating: 2.18,
  genres: ['fiction', 'garbage']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]

const darsBooks = books.reduce((groupedBooks, book) =>{
  const key = Math.floor(book.rating);
  if(!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book)
  return groupedBooks
}, {})

// To group books by rating: 
// const groupedByRatings = books.reduce((groupedBooks, book) => {
//   const key = Math.floor(book.rating);
//   if (!groupedBooks[key]) groupedBooks[key] = [];
//   groupedBooks[key].push(book)
//   return groupedBooks;
// }, {})