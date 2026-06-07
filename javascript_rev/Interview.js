//# function:

// function update(user){

//     user.name = "Rahul"; //mutation

// }
                                    //reference copied

// let person = {
//     name: "Swarup"
// };


// update(person);


// console.log(person.name);

function test(a){

    a = 20;

}
                                    //local variable copied
let x = 10;

test(x);

console.log(x);

function update(user){

    user = {
        name: "Rahul"   //changeing local reference only 
    };

}


let person = {
    name: "Swarup"
};


update(person);


console.log(person.name);



//#hositing

hello();   //hoisted the fucntion 

function hello(){

    console.log("Hi");  //js already knew what hello() is during defining 

}


// sayHi();  you cannnot access it before initilizatio

// let sayHi = function(){

//     console.log("Hi");    //function expression not declaration 

// };


let sayHi = function(){

    console.log("Hi");

};
sayHi()  //correct way you can access this sayHi( ) only after expressing it completely 

function add(a,b){

    return a+b;     //

}

// #callback
function greet(name){

    console.log("Hello " + name);

}
    //callback function 

function process(callback){      // A callback is a function passed as an argument to another function, so it can be executed later. It allows us to control execution flow and is commonly used in asynchronous JavaScript.

    callback("Swarup");

}


process(greet);

//#closure
function outer(){

    let count = 0;


    return function inner(){

        count++;

        console.log(count);

    }

}


let counter = outer();


counter();

counter();

counter();