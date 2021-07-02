// ======= forEach ==========

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n, idx) {
  console.log(idx, n * n);
});

// nums.forEach(el => {
//   if (el % 2 != 0) {
//     console.log(el);
//   }
// });

// similar to forOf loop, which is newer
