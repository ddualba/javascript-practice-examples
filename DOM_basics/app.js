// // Select all LI's on the page:
// const allLis = document.querySelectorAll('li');

// // One option, a regular for loop:
// for (let i = 0; i < allLis.length; i++) {
//   // console.log(allLis[i].innerText);
//   allLis[i].innerText = 'WE ARE THE CHAMPIONS!';
// }

// //Another option using for...of:
// for (let li of allLis) {
//   li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>';
// }

const parentUL = document.querySelector('ul');
const newLI = document.createElement('li');
newLI.innerText = 'I AM A NEW LIST ITEM!';

//prepend will add newLI as the FIRST child of parentUL
parentUL.prepend(newLI); //Doesn't work in IE!

//We can also insert something BEFORE another element, using insertBefore.
// First, select the element to insert before:
const targetLI = document.querySelectorAll('li.todo')[2]; //3rd li with class of 'todo'
// To insert our new LI before targetLI...
//parent.insertBefore(what to insert, where to insert)
parentUL.insertBefore(newLI, targetLI);
