function sayMyName() {
    const name = "swarup";
    
    // 1. Simple console.log
    console.log(name);
    
    // 2. With label/message
    console.log("My name is:", name);
    
    // 3. Using template literals
    console.log(`Hello, I am ${name}`);
    
    // 4. Using string method (toUpperCase)
    console.log("Name in uppercase:", name.toUpperCase());
    
    // 5. Using string concatenation
    console.log("Welcome " + name + "!");
    
    // 6. Using console.log with multiple parameters
    console.log("Developer name:", name, "Status: Active");
}

// Call the function
sayMyName();

function addTwoNum(num1, num2) {   //paramemter is num1 , num2 . they are placeholders and created by coder while defining a function
    //let result = num1 + num2
    //return result   //have to return the value of the sum to the "result"
    //not a single print statement will print after return statement  or 
    return num1+num2  //we can write like this

}
const result = addTwoNum(3, 4)//if nothing is given inside the parameter => output = NaN
// that bracket bind is parameter and the values inside it are arguments that 3,4 inisde [] is the argument
console.log("Result is: ", result)

// Parameter:
// Variable while creating function

// Argument:
// Actual value while calling function

function loginUserMessage(user){
    if (user == undefined){ 
        console.log("Please enter the user name")
        return
    }
    return `${user} just logged in`
}

//loginUserMessage("Swarup")  //but it wont show any output but it will get executed
//you have to store the return value in a varibale or givenit a print statement 
console.log(loginUserMessage("Swarup"))  //it will give you output Swarup just logged in
//console.log(loginUserMessage())  //undefined output