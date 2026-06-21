// // //# function:

// // // function update(user){

// // //     user.name = "Rahul"; //mutation

// // // }
// //                                     //reference copied

// // // let person = {
// // //     name: "Swarup"
// // // };


// // // update(person);


// // // console.log(person.name);

// // function test(a){

// //     a = 20;

// // }
// //                                     //local variable copied
// // let x = 10;

// // test(x);

// // console.log(x);

// // function update(user){

// //     user = {
// //         name: "Rahul"   //changeing local reference only 
// //     };

// // }


// // let person = {
// //     name: "Swarup"
// // };


// // update(person);


// // console.log(person.name);



// // //#hositing

// // hello();   //hoisted the fucntion 

// // function hello(){

// //     console.log("Hi");  //js already knew what hello() is during defining 

// // }


// // // sayHi();  you cannnot access it before initilizatio

// // // let sayHi = function(){

// // //     console.log("Hi");    //function expression not declaration 

// // // };


// // let sayHi = function(){

// //     console.log("Hi");

// // };
// // sayHi()  //correct way you can access this sayHi( ) only after expressing it completely 

// // function add(a,b){

// //     return a+b;     //

// // }

// // // #callback
// // function greet(name){

// //     console.log("Hello " + name);

// // }
// //     //callback function 

// // function process(callback){      // A callback is a function passed as an argument to another function, so it can be executed later. It allows us to control execution flow and is commonly used in asynchronous JavaScript.

// //     callback("Swarup");

// // }


// // process(greet);

// // //#closure
// // function outer(){

// //     let count = 0;


// //     return function inner(){

// //         count++;

// //         console.log(count);

// //     }

// // }


// // let counter = outer();


// // counter();

// // counter();

// // counter();


// //# api response
// const employees = [

//  {id:1, name:"Swarup", active:true},

//  {id:2, name:"Rahul", active:false},

//  {id:3, name:"Amit", active:true}

// ];

// const result = employees 
// .filter((employee)=>employee.active===true)
// .map((employee)=>employee.name)

// console.log(result)

// //Q2
// const users = [

//  {id:1,name:"A"},

//  {id:2,name:"B"},

//  {id:1,name:"A"}

// ];

// const uniqueUsers = users.filter((user,index,array)=>{
//     return index === array.findIndex((item)=>item.id===user.id)
// })

// console.log(uniqueUsers)

// //Q3
// const cart = [

//  {product:"Laptop", price:50000},

//  {product:"Mouse", price:1000},

//  {product:"Keyboard", price:2000}

// ];


// const total = cart.reduce((sum,item)=>{   //reduce (accumulator,current value)

//     return sum + item.price;

// },0);


// console.log(total);

// # filter drill

//Q1:   From the API response, return only users who are verified.

//Api response
const users = [

 {id:1, name:"Swarup", verified:true},

 {id:2, name:"Rahul", verified:false},

 {id:3, name:"Amit", verified:true}

];
//my code
const result1 = users.filter((item)=>{
    return item.verified===true
})
console.log(result1)

//Q2:   Return only products whose price is greater than 1000.
//Api response
const products = [

 {id:1, name:"Phone", price:20000},

 {id:2, name:"Cover", price:500},

 {id:3, name:"Keyboard", price:1500}

];
//my code
const result2 = products.filter((product)=>{

    return product.price>1000
})

console.log(result2)

//Q3:   Remove all completed tasks and return only pending tasks.
//Api response
const tasks = [

 {id:1, title:"Learn JS", status:"pending"},

 {id:2, title:"Sleep", status:"completed"},

 {id:3, title:"React Practice", status:"pending"}

];
//my code
const result3 = tasks.filter((task)=>{
    return task.status==='pending'
})
console.log(result3)

//Q4:   Search feature: return users whose name contains the searched text
//Api response
const newusers = [

 {id:1, name:"Swarup"},

 {id:2, name:"Rahul"},

 {id:3, name:"Amit"}

];


const search = "a";
const result4 = newusers.filter((user)=>{
    return user.name.toLowerCase().includes(search.toLowerCase())
})

console.log(result4)