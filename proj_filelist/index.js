// #!/usr/bin/env node
const fs = require('fs');
const chalk = require('chalk');
const { argv } = require('process');
const path = require('path');

// Method #3 to return lstat with promise - fs has promise versions of functions
// const lstat = fs.promises.lstat // destructure below
const { lstat } = fs.promises;
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    // throw new Error(err)
    console.log(err);
  }

  // Solution# 3
  const statPromises = filenames.map(filename => {
    return lstat(path.join(targetDir, filename));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(chalk.green(filenames[index]));
    } else {
      console.log(chalk.blue(filenames[index]));
    }

    // console.log(filenames[index], stats.isFile());
  }
});

// Method#2 to wrap lstat with promise - use util library and util.promisify
// const util = require('util');
// const lstat = util.promisify(fs.lstat)

// Method#1 to wrap lstat with promis (manual approach) - replaced below with util.promisify
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if(err){
//         reject(err)
//       }

//       resolve(stats)
//     })
//   })
// }

// Solution #2 - uses promises and async/await, but does not use promise.all
// for (let filename of filenames) {
//   try {
//     const stats = await lstat(filename);

//     console.log(filename, stats.isFile());
//   } catch (err) {
//     console.log(err);
//   }
// }

// Solution #1, not the best solution

// const allStats = Array(filenames.length).fill(null);

//   for (let filename of filenames) {
//     const index = filenames.indexOf(filename);

//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         console.log(err);
//       }

//       allStats[index] = stats;

//       const ready = allStats.every(stats => {
//         return stats;
//       });

//       if (ready) {
//         allStats.forEach((stats, index) => {
//           console.log(filenames[index], stats.isFile());
//         });
//       }
//     });
//   }
