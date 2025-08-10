// 7_copy.js
//18_7: Copy array elements to another array


let price = 25;
let  competitor_Price = price;

price = 12;
competitor_Price = 15;


// console.log(price );
//  console.log(competitor_Price);

const products = [ 25, 25, 25];
 const competitor_Product_Price= [];
  //  const competitor_Product_Price = products;

  for( product of products){
    competitor_Product_Price.push(product);
  }

   competitor_Product_Price[0] = 15; //updated array elements
   products[1] = 55;
//  console.log(products);
//   console.log(competitor_Product_Price);


const numbers = [ 1, 2, 3, 4];
//  const new_numbers = Array.from(numbers)
// const new_numbers = [].concat(numbers);
const new_numbers = [...numbers]
numbers.push(99);
  new_numbers.push(8);
    console.log(numbers);
    console.log(new_numbers);


// shallow and deep copy
//deep copy is for array of array or array of object
































