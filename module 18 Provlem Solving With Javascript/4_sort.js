// 4_sort.js
// 18_4: Sort Array in Ascending & Descending Order (Manual & sort() method)

const numbers = [2, 5, 3, 1, 4,7,9, 8];
//  console.log(numbers);

 numbers.sort();
//   console.log(numbers);

const friends= ['sakib', 'nokib', 'akib', 'rakib', 'bakib', 'sofiq', 'rofiq', 'fuckib'];
 friends.sort();
//   console.log(friends);


const ages = [1,3,4,5,143,25,5,4,2,];
//  console.log(ages);
// ages.sort();
//  console.log(ages);

//array ascending
const sortedAges = ages.sort(function (a, b){
     return a - b
})
console.log(sortedAges);

//array descending
const sortedAgesDescending = ages.sort(function (a, b){
 return b - a
});
 console.log(sortedAgesDescending);

 






















