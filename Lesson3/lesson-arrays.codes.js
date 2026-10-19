'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

const originalNames = Array.from(studentNames);


console.log('\nPART A: ORIGINAL RECORDS');

for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}


console.log('\nPART B: ADD NEW STUDENTS');

studentNames.push('Faith');
studentScores.push(88);

studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log(`Number of Students: ${studentNames.length}`);


console.log('\nPART C: REMOVE AND REPLACE RECORDS');

studentNames.shift();
studentScores.shift();

studentNames.pop();
studentScores.pop();

const danielIndex = studentNames.indexOf('Daniel');
if (danielIndex !== -1) {
  studentNames.splice(danielIndex, 1);
  studentScores.splice(danielIndex, 1);
}

studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log('Names:', studentNames);
console.log('Scores:', studentScores);


console.log('\nPART D: CLASS STATISTICS');

const totalScore = studentScores.reduce((sum, score) => sum + score, 0);
const averageScore = (totalScore / studentScores.length).toFixed(2);
const highestScore = Math.max(...studentScores);
const lowestScore = Math.min(...studentScores);

console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);


console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingThreshold = 75;

const passingScores = studentScores.filter(score => score >= passingThreshold);
const statuses = studentScores.map(score => score >= passingThreshold ? 'Passed' : 'Failed');
const atLeastOneFailed = studentScores.some(score => score < passingThreshold);
const allStudentsPassed = studentScores.every(score => score >= passingThreshold);

console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log(`At Least One Failed: ${atLeastOneFailed}`);
console.log(`All Students Passed: ${allStudentsPassed}`);


console.log('\nPART F: SORT AND SEARCH');

const sortedScores = Array.from(studentScores);
sortedScores.sort((a, b) => b - a);

const contains91 = studentScores.includes(91);
const indexOf91 = studentScores.indexOf(91);

console.log('Scores from Highest to Lowest:', sortedScores);
console.log(`Contains 91: ${contains91}`);
console.log(`Index of 91: ${indexOf91}`);


console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {
  let rowSum = 0;
  for (let j = 0; j < activityScores[i].length; j++) {
    rowSum += activityScores[i][j];
  }
  const rowAvg = (rowSum / activityScores[i].length).toFixed(2);
  console.log(`${originalNames[i]}'s activity average: ${rowAvg}`);
  activityAverages.push(Number(rowAvg));
}

console.log('Activity Averages:', activityAverages);


console.log('\nPART H: TEXT SUMMARY');

console.log(`Students: ${studentNames.join(' | ')}`);