// ======= EXAMPLE 1 ==========
// Printing each element in an array
const examScores = [ 98, 77, 84, 91, 57, 67 ];

// for(let i = 0; i< examScores.length; i++){
//   console.log(examScores[i])
// }

// ======= EXAMPLE 2 ==========
// Same idea, but with a more complex array
const myStudents = [
	{
		firstName : 'Zeus',
		grade     : 86
	},
	{
		firstName : 'Artemis',
		grade     : 97
	},
	{
		firstName : 'Hera',
		grade     : 72
	},
	{
		firstName : 'Apollo',
		grade     : 90
	}
];

// for(let i = 0; i < myStudents.length; i++){
//   let student = myStudents[i];
//   console.log(`${student.firstName} scored ${student.grade}`)
// }

let total = 0

for(let i = 0; i < myStudents.length; i++){
  let student = myStudents[i];  
  total += student.grade
}
let gradeAverage = total / myStudents.length
console.log(`Average score is: ${gradeAverage}`)