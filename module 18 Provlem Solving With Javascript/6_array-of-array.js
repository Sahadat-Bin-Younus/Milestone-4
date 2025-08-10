// 6_array-of-array.js
// 18_6: [Optional] traverse in a 2D array


const numbers = [ 1, 2, 4, 5, 6];
//array of array or 2d array
 const tournament_runs = [ [], [], [], [] ]; 

const exam_Marks = [
    [98, 34, 45, 49, 67, 88],
    [ 47, 56, 77, 78, 65, 76],
    [ 45, 53, 74, 70, 62, 73],
    [ 85, 93, 94, 60, 42, 43],
];
// console.log(numbers[0]);
// console.log(exam_Marks[0]);

const first_class_marks = exam_Marks[0];
//  console.log(first_class_marks[0]);
 //2nd way to get same result
//   console.log(exam_Marks[0][0]);
 exam_Marks[0][1] = 66 //re-assigning array index property value
 exam_Marks[1].pop() //vanishing the exam_marks value 1 index of index 1
 exam_Marks[1].push(44)
//  console.log(exam_Marks);

for( const marks of exam_Marks){
    console.log(marks)
}





















