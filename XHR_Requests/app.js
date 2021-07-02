const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function () {
  console.log('First Request Worked!!');
  // console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  const filmURL = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener('load', function () {
    console.log('Second Request Worked!!');
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });
  filmReq.addEventListener('error', function (e) {
    console.log('ERROR!!', e);
  });
  filmReq.open('GET', filmURL);
  filmReq.send();
  // console.log(data);
  // for (let planet of data.results) {
  //   console.log(`Planet Name: ${planet.name}`);
  // }
});

firstReq.addEventListener('error', () => {
  console.log('Error!!!');
});

firstReq.open('GET', 'https://swapi.dev/api/planets');
firstReq.send();
console.log('Request Sent!');

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('IT WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// });
// firstReq.addEventListener('error', () => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');
