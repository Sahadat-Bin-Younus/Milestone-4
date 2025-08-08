/* //var--can re declare and re assign
//let--cannot re declare
//const --can not re declare and re assign


// let = re decalre and assign;
// const age = 20;
// age = 20; // !assignment to constant variable

//array--number
// const num1 = 10;
// const num2 = 20;
// const num3 = 30;
// const num4 = 40;
// const num5 = 50;
  // const numbers = [10, 20, 30, 40, 50, 60];
    //  console.log(numbers);
     //   console.log(numbers[1]);

// array -- string
//  const fruits = ['Apple', 'Banana', 'Orange'];
//   console.log(fruits[2]);
//    fruits[2] = 'Grapes';
//     console.log(fruits[2]);
  
// array length
// const sent ='I am From Bangladesh';
//  console.log(fruits.length);

//   const fruits = ['Apple', 'Banana', 'Orange'];  
// const newFruits = fruits;
//  newFruits.push('papaya');

// const newFruits.push('papaya');
//  console.log(newFruits);
//   console.log(fruits);



 //copy array using for loop
//  const fruits = ['Apple', 'Banana', 'Orange'];
//   for (let index = 0; index <fruits.length; index++){

//   }


//for loop 
//copy array values using for loop
// const fruits = ['Apple', 'Banana', 'Orange'];
//  const newArr = [];
//   for(const el of fruits){
//     newArr.push(el);
//   }
// newArr.push("gems");
//  console.log(fruits, newArr);

//for of loop
// const persons = ['rohim', 'korim', 'kobir' ];
//   const newArr = [];
//   for(const el of persons){
//     if (el === 'korim') continue;
//      newArr.push('Mr.' + el)  
//   }
//   console.log(persons, newArr)



// some important array method
// const fruits = ['Apple', 'Banana', 'Orange'];
//  console.log(fruits);
//   fruits.pop()
//  console.log(fruits);
// // push for adding element in array last and pop for removing last element
// //shift for delete first element and unshift for add element in first

//  console.log(fruits);
//   fruits.unshift('papaya');
//    console.log(fruits);




//  let students = ['rohim', 'korim', 'kobir' ]
//   let {i = 0;
//    console.log(students[i]);
   
// }

//reverse an array
//  let students = ['rohim', 'korim', 'kobir' ];
//   students.reverse();
//    console.log(students);
 */



//************************************* */
// let students = ['rohim', 'korim', 'kobir' ];
// let reverseArr = [];
//  for(let i = 0; i< students.length - 1; i >= 0; i-- ) {
//     reverseArr.push(students[i])
//  }
//  console.log(reverseArr);
//************************************* */

//array sorting
// const number = [ 40, 10, 200, 50];
//  console.log(number);
//   number.sort()
//    console.log(number);



//Array index value and 
//mutation and mutate the array
//push , pop, shift, unshift, sort, reverse, 

//non mutation--don't mutate the array 
//concat, slice,includes,-------------- map , filter , find, for each






// const obj = [ ];

// const persons = [
//     {
//         name : 'rohim',
//         age : 20,
//         isStudent : true,

//     },
//         {
//         name : 'karim',
//         age : 30,
//         isStudent : false,

//     },
//         {
//         name : 'fohim',
//         age : 201,
//         isStudent : true,

//     },
// ]

// //  console.log(persons[0]);
// //  console.log(persons[0].name);


//  for( const person of persons){
// //     console.log('name:' + person.name, 'age:' + person.age, 'student status:' + person.isStudent, )
// // 
//   console.log(`name: ${person.name }, age: ${person.age },  student status:  ${person.age},  `)

//  }
 
// const persons1 = {
//         name : 'rohim',
//         age : 20,
//         isStudent : true,

//     };

//     //for in loop
//     for(const key in persons1){
//         console.log(key + ' - ' + person[key]) //array notation
//         // console.log(persons1[key]) //dot notation
//     }


//********************************************************
//function
// function name() { } ; 
// console.log( );

// function greeting() {
//     // console.log( 'Good Evening');
//  } ;  
//  greeting() 


//types of function
/* 
 --normal or traditional function 
 --Arrow function() 
 --Anonymous function
 --IIFE/immediately invovled function expression


*/



///normal function
// function add(value){
//     console.log('Result', value);

// }add(10) ///single parameter]

// function add1(value1, value2){
//     console.log('Result', value1 + value2); }
// add1(10, 20) //double parameter


// function greet(name){
//     console.log('Welcome:' ,name)
// }
// greet('Ismail')



// function add1(value1, value2){
//     const result = value1 + value2;
//     console.log('Result', value1 + value2);
//     return result
//  }
// // add1(10, 20)
//  const addvalue = add1( 20,  40) * 3
//   console.log(addvalue);

//  const arr = [ 10, 20, 40, 50];
//  function add(values){
//     let result = 0
//      for (const val of value ){
//         result += val;
//      }

//      return result
//  }
//  console.log(add(arr) + 350);


// function findNumber(arr, num){
//      let result
//     for (const el of arr){
//         if (el === num){
//          console.log('found')
//          break
//         }
//         else{
//             result = 'Not Found'
//         }
//     }
//     return result
// }

// const result = findNumber(arr, 30)
//  console.log(`Your Query number 30 is ${result}`)




//different types of parameters
//default parameter
// function greetings(name = 'Guest'){
//     console.log('hello,' + name)
// }

// greetings()


// function add(a = 0, b = 0){
//     console.log(a + b)
// }
// add(30, 30)


// //rest/spread parameter
// function sumAll(...numbers){
//  let sum = 0;
//   for(const num of numbers){
//     sum += num
//   }
//   console.log(sum)
// }
// sumAll(10, 20, 30)
// sumAll(10, 20)
// sumAll(10, 20, 60)



//sort
const numbers = [40, 10, 200, 50]
 numbers.sort(function (a, b){
    return a - b
 })
 console.log(numbers)





















