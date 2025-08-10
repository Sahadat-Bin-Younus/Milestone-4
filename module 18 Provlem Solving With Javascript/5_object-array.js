// 5_object-array.js
// 18_5: Array of Objects and Access Object inside an Array


const number = [ 1, 2, 435,5,76 ,3,6,];
// array object
 const players = [{ }, { }, { }]; 
  const employees = [
    { name :'Ashiq', designation :'Content Writer', salary : 25000},
    { name : 'Atiq', designation : 'Ui-Ux developer', salary : 35000},
    { name : 'Abul kalam', designation : 'Businessman', salary : 45000},
    { name : 'Asifa', designation : 'Web Developer', salary : 29000},
  ]
  //re-assigning array object property value with array index
  employees[0].name = 'Ashraf'; 
  
// console.log(employees);
// console.log(employees[0]); //array object index
// console.log(employees[1].salary);  //array object index property

for (const employee of employees){
  // console.log(employee);
  // console.log(employee.salary);
  //  console.log(employee.name, employee.designation,  employee.salary,);
}

//for of loop , storing value in another variable with concatenation and accessing array object property.
for (const emp of employees){
 const person = emp;
  const personInfo = person.name + ':' + person.salary;
   console.log(personInfo)
}



















