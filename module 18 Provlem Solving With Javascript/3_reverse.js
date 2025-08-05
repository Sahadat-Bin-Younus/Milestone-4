// 3_reverse.js
// 18_3: Reverse an Array: 3 Techniques Explained (for loop, unshift, reverse method)


const numbers = [1, 2, 3, 4, 5];

 const reversed = [];
 //1st for in loop
//   for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
//      reversed.push(numbers[i]);
//      reversed.unshift(numbers[i]);
//   }

//2nd for in loop
// for (let i = numbers.length-1; i >= 0; i--){
//     reversed.push(numbers[i]);
// }

//for of loop
// for(const num of numbers){
//     reversed.unshift(num);
// }

// muted array
console.log(numbers);
const result = numbers.reverse()
console.log(numbers);
console.log(result)
// console.log(reversed);























