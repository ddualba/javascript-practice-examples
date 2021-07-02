const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'indigo',
  'violet'
];

const container = document.querySelector('#boxes');

const changeColor = function (evt) {
  // console.log(this);
  // console.log(this.style.backgroundColor);
  console.log(evt);
  const h1 = document.querySelector('#mainHeader');
  h1.style.color = this.style.backgroundColor;
};

for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  container.appendChild(box);
  box.classList.add('box');
  box.addEventListener('click', changeColor);
}

document.body.addEventListener('keypress', function (e) {
  console.log(e);
});

// const changeColor = function () {
//   const h1 = document.querySelector('h1');
//   h1.style.color = this.style.backgroundColor;
// };
// const container = document.querySelector('#boxes');

// for (let color of colors) {
//   const box = document.createElement('div');
//   box.style.backgroundColor = color;
//   box.classList.add('box');
//   container.appendChild(box);
//   box.addEventListener('click', changeColor);
// }
