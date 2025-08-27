// 1_object.js
/* 22_5-1 (optional) Explore what you can do with JavaScript Object */

const nayok = {
    name : 'Shakib Khan',
    id : 1726,
    address : 'Movie Cinema',
    isSinger : true,
    friends : [ 'Apu',' Rubel', 'Salman'],
    movies : [ {name :'no. 1', year : 2015},{name : 'King khan', year : 2018 } ],
    act : function (){
        console.log('Acting like Sakib Khan')
    },
    car : {
        Brand : 'Tesla',
        Price : 300000,
        made : 2025,
        manufacturer: {
           name : 'tesla',
           ceo : 'Elon mask',
           country : 'USA'
        }
    }
}

// console.log(student);
// console.log(student.friends);
// console.log(student.car);

console.log(nayok.act);
 nayok.act();


















