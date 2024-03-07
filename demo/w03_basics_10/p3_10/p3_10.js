import { sdata, students } from './data_10.js';

console.log('sdata', sdata);
console.log('students', students);

sdata.sort();
console.log('sdata after sorting alphabetically', sdata);

sdata.sort(function (a, b) {
  return b - a;
});
console.log('sdata after sorting descending', sdata);
console.log(`The highest score: ${sdata[0]}`);
console.log(`The lowest score: ${sdata[sdata.length - 1]}`);

const students2 = students.map((student) => {
  return { ...student, role: 'student' };
});

console.log('students unsorted', students2);
students2.sort(function (a, b) {
  return b.score - a.score;
});
