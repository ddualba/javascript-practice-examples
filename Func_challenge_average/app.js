// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total / arr.length;
}

function avg2(arr) {
  let total = 0;
  arr.forEach(num => {
    total += num;
  });
  return total / arr.length;
}
