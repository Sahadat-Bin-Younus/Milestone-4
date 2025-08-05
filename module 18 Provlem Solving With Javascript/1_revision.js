// 1_revision.js
// 18_1: Recap: Variable, Array, Object, Data Types, Loops & Conditionals

/* 
 1. const --> value not going to change
 2. let --> value might change
 3. var --> should not use unless exceptional cases

*/

//Primitive or basic data type
const price = 500; //number
//  console.log(price)
 const name = "Kirkir ali khan"; //string
   const isPoor = false; //boolean

//NON Primitive
 const friends = ["elon", "Marks", "Bill", "Jeff"]; //array ... index
 /*learned--includes,push, pop,add new item, remove item, access items through index position,slice, splice     */

     const student = { class: 12, name: "sahadat", age: 23, address: "noakhali" }; //object ...come with key value...like pair.


//also learned conditions, loops

 if(price > 1000){
    console.log("Too expensive. not for me");
}
 else if(price > 500){
    console.log("Maybe i can buy this") //if can run without this condition
 }
  else{
    console.log("Within my Budget") //if can run without this condition
 }



//loops
 let pushUp = 0;
  while(pushUp < 10){
    console.log("Do push up", pushUp );
     //pushUp = pushUp + 1;
      //pushUp += 1;
       //pushUp++
        pushUp++
  }


//for loop
 for (let i = 0; i < 10; i++){
    console.log(i);
 }








