// num1=3;
// function cal() {
// num1=6;
// num2=5;
// num3=num2*num1;
// console.log(num3);
// }
// cal();

// function Add(){
//     console.log(answer)
//     var answer = 2
// };
// Add()

// function fn()
// {
//       return 4+5;
// }

// fn(3,7);

// console.log(typeof (new (class { class () {} })))

// let sum = 0;
// let arr = [10,15,20,30];  
// arr.forEach(function myFunction(element) {  sum = sum + element;  });  
// console.log(sum);

// function Person(firstName, lastName) {
//  this.firstName = firstName;
//  this.lastName = lastName;
// }
// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {

// return `${this.firstName} ${this.lastName}`;

// };
// console.log(member.getFullName());

// function Person(firstName, lastName) {
// this.firstName = firstName;
// this.lastName = lastName;
// }
// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');
// console.log(lydia);
// console.log(sarah);


// const bird = {
//  size: 'small',
// };

// const mouse = {
//  name: 'Mickey',
//  small: true,
// };

const shape = {
 radius: 10,
 diameter() {
 return this.radius * 2;
 },
 perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());