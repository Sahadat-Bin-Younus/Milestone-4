// 8_recap-and-task.js
// 18_8: Module Summary & Practice Task Explanation

/**
 * 
 * 
 * 
 * 
 */


 const books =[ 'physics', 'javascript', 'css', 'math'];
  for(let i = 0; i < books.length; i++){
    // console.log(books[i]);
  }

  for (const book of books) {
    console.log(book);
  }

  const reverse_book = books.reverse();
   const sorted_books = books.sort();
   console.log(reverse_book );
   console.log(sorted_books);

 const gadgets = [
      { name: 'desktop', price: 95000, color:'Black', brand: "Lenovo" },
      { name: 'smart-watch', price: 12000, color: 'White', brand: 'samsung'},
      { name: 'mobile-phone', price: 24000, color: 'Aqua', brand: 'Vivo'}
 ]

 //2d array
 const matrix = [
    [2, 44, 65],
    [24, 54, 85],
    [278, 744, 35],

 ]

/* 
const books = ['physics', 'javascript', 'css', 'math'];

const reverse_book = [...books].reverse(); // independent reversed copy
const sorted_books = [...books].sort();    // independent sorted copy

console.log('Reversed:', reverse_book); // ['math', 'css', 'javascript', 'physics']
console.log('Sorted:', sorted_books);   // ['css', 'javascript', 'math', 'physics']
console.log('Original:', books);        // ['physics', 'javascript', 'css', 'math']




const books = ['physics', 'javascript', 'css', 'math'];



const books = ['physics', 'javascript', 'css', 'math'];


//for loop
for (let i = 0; i < books.length; i++) {
  if (books[i] === 'css') {
    continue; // Skip this iteration
  }
  console.log(books[i]);
}



//for of loop
for (const book of books) {
  if (book === 'css') {
    continue; // Skip this iteration
  }
  console.log(book);
}

*********************************************
// Skip index 2 (which is 'css')
for (const [i, book] of books.entries()) {
  if (i === 2) continue; // Skip index 2 (which is 'css')
  console.log(book);
}

*/














