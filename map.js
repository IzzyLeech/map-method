  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1,2,3,4,5];

let result = [];
for (let num of nums) {
  result.push(num * 2);
}

console.log(result);

// Using map()
const multByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo)
console.log(mapResults)

// Simplified w/ map()

const simlified = nums.map(function (num) {return num * 2})
console.log(simlified)
// Simplfied w/ map() + arrow function

const simplyMap = nums.map(n => n * 2);
console.log(simplyMap)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithId = students.map(student => [student.name, student.id])
console.log(studentsWithId)