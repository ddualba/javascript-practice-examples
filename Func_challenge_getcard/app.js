// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// refactored with help function below

// function getCard() {
//   const card = [
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'J',
//     'Q',
//     'K',
//     'A'
//   ];
//   const suit = ['clubs', 'spades', 'hearts', 'diamonds'];

//   let pCard = Math.floor(Math.random() * card.length);
//   let pSuit = Math.floor(Math.random() * suit.length);

//   return { value: card[pCard], suit: suit[pSuit] };
//   // console.log(`You picked card: ${card[pCard]} of ${suit[pSuit]}`);
// }

function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
function getCard() {
  const cards = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ];
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

  return { value: pick(cards), suit: pick(suits) };
}

console.log(getCard());
