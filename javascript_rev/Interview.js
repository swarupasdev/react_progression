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
