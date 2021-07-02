// ======= EXAMPLE 1 ==========
// ready to practice

// setTimeout(function () {
//   alert('Welcome');
// }, 3000);

// setTimeout(() => {
//   alert('Welcome to my arrow function');
// }, 3000);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('I told you not to click me!');
});
