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


// //Q1:   From the API response, return only users who are verified.
// //Api response
// const users = [

//  {id:1, name:"Swarup", verified:true},

//  {id:2, name:"Rahul", verified:false},

//  {id:3, name:"Amit", verified:true}

// ];
// //my code
// const result1 = users.filter((item)=>{
//     return item.verified===true
// })
// console.log(result1)


// //Q2:   Return only products whose price is greater than 1000.
// //Api response
// const products = [

//  {id:1, name:"Phone", price:20000},

//  {id:2, name:"Cover", price:500},

//  {id:3, name:"Keyboard", price:1500}

// ];
// //my code
// const result2 = products.filter((product)=>{

//     return product.price>1000
// })

// console.log(result2)


// //Q3:   Remove all completed tasks and return only pending tasks.
// //Api response
// const tasks = [

//  {id:1, title:"Learn JS", status:"pending"},

//  {id:2, title:"Sleep", status:"completed"},

//  {id:3, title:"React Practice", status:"pending"}

// ];
// //my code
// const result3 = tasks.filter((task)=>{
//     return task.status==='pending'
// })
// console.log(result3)


// //Q4:   Search feature: return users whose name contains the searched text
// //Api response
// const newusers = [

//  {id:1, name:"Swarup"},

//  {id:2, name:"Rahul"},

//  {id:3, name:"Amit"}

// ];

// //my code
// const search = "a";
// const result4 = newusers.filter((user)=>{
//     return user.name.toLowerCase().includes(search.toLowerCase())
// })

// console.log(result4)


// //Q5:    Return only products that belong to the Electronics category.
// //Api response
// const products2 = [

//  {id:1, name:"Laptop", category:"Electronics"},

//  {id:2, name:"Shirt", category:"Fashion"},

//  {id:3, name:"Phone", category:"Electronics"}

// ];

// //my code
// const result5 = products2.filter((product2)=>{
//     return product2.category==="Electronics"
// })
// console.log(result5)


// //Q6:     Return employees who work in IT department and have salary greater than 50000.
// //Api response
// const employees = [

//  {id:1, name:"Swarup", department:"IT", salary:70000},

//  {id:2, name:"Rahul", department:"HR", salary:80000},

//  {id:3, name:"Amit", department:"IT", salary:40000},

//  {id:4, name:"John", department:"IT", salary:90000}

// ];

// //my code
// const result6=employees.filter((employee)=>{
//     return employee.department==="IT" && employee.salary>50000
// })
// console.log(result6)


// //Q7:      Return students who have JavaScript as one of their skills.
// //Api response
// const students = [

//  {id:1, name:"Swarup", skills:["JavaScript","React"]},

//  {id:2, name:"Rahul", skills:["Python","Django"]},

//  {id:3, name:"Amit", skills:["JavaScript","Node"]}

// ];

// //my code
// const result7 = students.filter((student)=>{
//     return student.skills.includes("JavaScript")
// })
// console.log(result7)


// //Q8:      Return only orders whose amount is between 1000 and 5000.
// //Api response
// const orders = [

//  {id:1, amount:800},

//  {id:2, amount:2500},

//  {id:3, amount:7000},

//  {id:4, amount:4000}

// ];

// //mycode
// const result8 = orders.filter((order)=>{
//     return order.amount>=1000 && order.amount<=5000
// })
// console.log(result8)


// //Q9:       Return users whose email contains gmail
// //Api response
// const users_3 = [

//  {id:1, email:"swarup@gmail.com"},

//  {id:2, email:"rahul@yahoo.com"},

//  {id:3, email:"amit@gmail.com"}

// ];

// //my code 
// const searchMail='gmail'
// const result9=users_3.filter((user)=>{
//     return user.email.toLowerCase().includes(searchMail.toLocaleLowerCase())
// })
// console.log(result9)


// //Q10:      "User clicked delete button. Remove the user with id 2.
// //Api response
// const users_10 = [

//  {id:1, name:"Swarup"},

//  {id:2, name:"Rahul"},

//  {id:3, name:"Amit"}

// ];


// const deleteId = 2;

// //my code 
// const result10 = users_10.filter((user10)=>{
//     return user10.id !== deleteId
// })
// console.log(result10)


// //Q11:      Return all movies that have rating above 8 and belong to the action genre.
// //Api response
// const movies = [

//  {id:1, title:"Movie A", genre:"Action", rating:9},

//  {id:2, title:"Movie B", genre:"Comedy", rating:9},

//  {id:3, title:"Movie C", genre:"Action", rating:7},

//  {id:4, title:"Movie D", genre:"Action", rating:8.5}

// ];

// //my code
// const result11=movies.filter((movie)=>{
//     return movie.rating>8 && movie.genre==='Action'
// })
// console.log(result11)


// //Q12:      Return employees who have React in their skills.
// //Api response
// const employees_12 = [

//  {id:1, name:"Swarup", skills:["React","Node"]},

//  {id:2, name:"Rahul", skills:["Java","Spring"]},

//  {id:3, name:"Amit", skills:["React","Python"]}

// ];

// //my code
// const result12 = employees_12.filter((employee12)=>{
//     return employee12.skills.includes("React")
// })
// console.log(result12)


// //Q13:      From API response, remove all products that are out of stock.
// //Api response
// const products13 = [

//  {id:1, name:"Laptop", stock:5},

//  {id:2, name:"Mouse", stock:0},

//  {id:3, name:"Phone", stock:10},

//  {id:4, name:"Cable", stock:0}

// ];

// //my code 
// const result13 = products13.filter((product13)=>{
//     return product13.stock !== 0
// })
// console.log(result13)


// //Q14:      Return only transactions that are successful and amount is above 10000.
// //Api response
// const transactions = [

//  {id:1, status:"success", amount:15000},

//  {id:2, status:"failed", amount:20000},

//  {id:3, status:"success", amount:5000},

//  {id:4, status:"success", amount:30000}

// ];

// //my code
// const result14 = transactions.filter((transaction)=>{
//     return transaction.status!=='failed' && transaction.amount>10000
// })
// console.log(result14)


// //Q15:      Return users who live in Bhubaneswar.
// //Api response
// const users15 = [

//  {
//   id:1,
//   name:"Swarup",
//   address:{
//       city:"Bhubaneswar"
//   }
//  },

//  {
//   id:2,
//   name:"Rahul",
//   address:{
//       city:"Delhi"
//   }
//  },

//  {
//   id:3,
//   name:"Amit",
//   address:{
//       city:"Bhubaneswar"
//   }
//  }

// ];

// //my code
// const result15 = users15.filter((user15)=>{
//     return user15.address.city==='Bhubaneswar'
// })
// console.log(result15)


// //Q16:      Return users who have a phone number.
// //Api response 
// const users16 = [

//  {id:1, name:"Swarup", phone:"99999"},

//  {id:2, name:"Rahul"},

//  {id:3, name:"Amit", phone:"88888"}

// ];

// //my code
// const result16  = users16.filter((user16)=>{
//     return user16.phone
// })
// console.log(result16)


// //Q17:      Return products where category is Electronics and product name contains the search text.
// //Api Response
// const products17 = [

//  {id:1, name:"Gaming Laptop", category:"Electronics"},

//  {id:2, name:"Office Chair", category:"Furniture"},

//  {id:3, name:"Laptop Charger", category:"Electronics"}

// ];


// const search17 = "laptop";

// //my code
// const result17 = products17.filter((product17)=>{
//     return product17.category==="Electronics"&&product17.name.toLowerCase().includes(search17.toLowerCase())
// })
// console.log(result17)


// //Q18:     Remove duplicate users based on id.
// //Api response 
//  const users18 = [

//  {id:1,name:"A"},

//  {id:2,name:"B"},

//  {id:1,name:"A"}

// ];

// //my code
// const result18 = users18.filter((user18,index18,array18)=>{
//     return index18==array18.findIndex((individualItem)=>{
//         return user18.id===individualItem.id
//     })
// })
// console.log(result18)


// //Q19:      Return only users whose role is admin and account is active.
// //Api response
// const users19 = [

//  {id:1,name:"Swarup",role:"admin",active:true},

//  {id:2,name:"Rahul",role:"user",active:true},

//  {id:3,name:"Amit",role:"admin",active:false},

//  {id:4,name:"John",role:"admin",active:true}

// ];

// //my code
// const result19 = users19.filter((user19)=>{
//     return user19.role==='admin'&&user19.active
// })
// console.log(result19)


// //Q20:     Return users from India who have JavaScript skill.
// //Api response
// const users20 = [

//  {
//   id:1,
//   name:"Swarup",
//   country:"India",
//   skills:["JavaScript","React"]
//  },

//  {
//   id:2,
//   name:"Rahul",
//   country:"India",
//   skills:["Python"]
//  },

//  {
//   id:3,
//   name:"John",
//   country:"USA",
//   skills:["JavaScript"]
//  }

// ];

// //my code
// const result20 = users20.filter((user20)=>{
//     return user20.country==="India" && user20.skills.includes("JavaScript")
// })
// console.log(result20)


// //Q21:      Return only tasks created after 2025.
// //Api response
// const tasks21 = [

//  {id:1, title:"Task A", year:2024},

//  {id:2, title:"Task B", year:2025},

//  {id:3, title:"Task C", year:2026}

// ];

// //my code
// const result21  =   tasks21.filter((task21)=>{
//     return task21.year>2025
// })
// console.log(result21)


// //Q22:      Remove users whose profile is not created yet.
// //Api response
// const users22 = [

//  {id:1, name:"Swarup", profile:{age:24}},

//  {id:2, name:"Rahul", profile:null},

//  {id:3, name:"Amit", profile:{age:30}}

// ];

// //my code
// const result22 = users22.filter((user22)=>{
//     return user22.profile
// })
// console.log(result22)


// //Q23:      Return only unread notifications.
// //Api response
// const notifications = [

//  {id:1, message:"Hello", read:false},

//  {id:2, message:"Update", read:true},

//  {id:3, message:"Offer", read:false}

// ];

// //my code
// const result23 = notifications.filter((notification)=>{
//     return !notification.read
// })
// console.log(result23)


// //Q24:      Return products that are eligible for discount. Product is eligible if price is above 5000 OR it is a premium product.
// //Api response
// const products24 = [

//  {id:1, name:"Laptop", price:60000, premium:false},

//  {id:2, name:"Mouse", price:500, premium:false},

//  {id:3, name:"Watch", price:3000, premium:true}

// ];

// //my code
// const result24 = products24.filter((product24)=>{
//     return product24.price>5000 || product24.premium
// })
// console.log(result24)


// //Q25:      Return users who have at least one order above 10000.
// //Api response
// const users25 = [

//  {
//   id:1,
//   name:"Swarup",
//   orders:[
//     {amount:5000},
//     {amount:20000}
//   ]
//  },

//  {
//   id:2,
//   name:"Rahul",
//   orders:[
//     {amount:3000}
//   ]
//  }

// ];

// //my code
// const result25=users25.filter((user25)=>{
//     return user25.orders.some((order)=>{
//         return order.amount>10000
//     })
// })
// console.log(result25)


// //Q26:      Return users where every score is above 50.
// //Api response
// const users26 = [

//  {
//   id:1,
//   name:"A",
//   scores:[70,80,90]
//  },

//  {
//   id:2,
//   name:"B",
//   scores:[90,40,100]
//  }

// ];

// //my code
// const result26 = users26.filter((user26)=>{
//     return user26.scores.every((score)=>{
//         return score>50
//     })
// })
// console.log(result26)


// //Q27       Return courses that contain a student named Swarup.
// //Api response
// const courses27 = [

//  {
//   id:1,
//   name:"React",
//   students:[
//     {name:"Swarup"},
//     {name:"Rahul"}
//   ]
//  },

//  {
//   id:2,
//   name:"Python",
//   students:[
//     {name:"Amit"}
//   ]
//  }

// ];

// //my code
// const searchName = "Swarup"
// const result27 = courses27.filter((course27)=>{
//     return course27.students.some((student)=>{
//         return student.name===searchName
//     })
// })
// console.log(JSON.stringify(result27))


// //Q28       "Return teams where all members are active."
// //Api response
// const teams = [

//  {
//   id:1,
//   name:"Frontend",
//   members:[
//     {name:"A", active:true},
//     {name:"B", active:true}
//   ]
//  },

//  {
//   id:2,
//   name:"Backend",
//   members:[
//     {name:"C", active:true},
//     {name:"D", active:false}
//   ]
//  }

// ];

// //my code
// const result28 = teams.filter((team)=>{
//     return team.members.every((member)=>{
//         return member.active
//     })
// })
// console.log(JSON.stringify(result28))


// //Q29:      Return products that match selected category and are available in stock.
// //Api response
// const products29 = [

//  {id:1,name:"Laptop",category:"Electronics",stock:10},

//  {id:2,name:"Shirt",category:"Fashion",stock:20},

//  {id:3,name:"Phone",category:"Electronics",stock:0}

// ];


// const selectedCategory = "Electronics";

// //my code
// const result29 = products29.filter((product29)=>{
//     return product29.category.toLowerCase().includes(selectedCategory.toLowerCase()) && product29.stock!==0
// })
// console.log(result29)


// //Q30:      Return employees who are active, belong to IT department, and have at least one completed project.
// //Api context
// const employees30 = [

//  {
//   id:1,
//   name:"Swarup",
//   active:true,
//   department:"IT",
//   projects:[
//     {name:"App", completed:true},
//     {name:"Web", completed:false}
//   ]
//  },

//  {
//   id:2,
//   name:"Rahul",
//   active:true,
//   department:"HR",
//   projects:[
//     {name:"HR Tool", completed:true}
//   ]
//  },

//  {
//   id:3,
//   name:"Amit",
//   active:true,
//   department:"IT",
//   projects:[
//     {name:"API", completed:false}
//   ]
//  }

// ];

// //my code
// const result30 = employees30.filter((employee30)=>{
//     return employee30.active && employee30.department==='IT' && employee30.projects.some((project)=>{
//         return project.completed
//     })
// })
// console.log(JSON.stringify(result30))


// // #MAP GRIND

// //Q1:       "Return only the names of all users.
// //Api response
// const users31 = [

//  {id:1,name:"Swarup"},

//  {id:2,name:"Rahul"},

//  {id:3,name:"Amit"}

// ];


// //my code
// const result31 = users31.map((user31)=>{
//     return user31.name
// })
// console.log(result31)


// //Q2:     Return an array containing only product prices.
// const products32 = [

//  {id:1,name:"Laptop",price:60000},

//  {id:2,name:"Mouse",price:500},

//  {id:3,name:"Keyboard",price:2000}

// ];

// //my code
// const result32=products32.map((product32)=>{
//     return product32.price
// })
// console.log(result32)


// //Q3:       "Add 10% tax to every product price."
// //Api response
// const products33 = [

//  {id:1,name:"Laptop",price:60000},

//  {id:2,name:"Mouse",price:500}

// ];

// //my code
// const result33=products33.map((product33)=>{
//     return  {
//         ...product33,
//         price: product33.price+(product33.price*(10/100))
//     }
// })
// console.log(result33)


// //Q4:       Convert all users to active users.
// //Api response
// const users34 = [

//  {id:1,name:"Swarup",active:false},

//  {id:2,name:"Rahul",active:false}

// ];

// //my code
// const result34=users34.map((user34)=>{
//     return {
//         ...user34,
//         active: true                                                                                                                                       
//     }
// })
// console.log(result34)


// //Q5:       Increase every employee salary by 5000.
// //Api response
// const employees35 = [

//  {id:1,name:"Swarup",salary:50000},

//  {id:2,name:"Rahul",salary:60000}

// ];

// //my code
// const result35 = employees35.map((employee35)=>{
//     return {
//         ...employee35,
//         salary :employee35.salary+5000
//     }

//     })
// console.log(result35)


// //Q6:       Add a new property role:'user' to every account.
// //Api response
// const accounts36 = [

//  {id:1,name:"Swarup"},

//  {id:2,name:"Rahul"}

// ];

// //my code
// const result36=accounts36.map((account36)=>{
//     return{
//         ...account36,
//        // user :""
//        role:"user"
//     }
// })
// console.log(result36)


// //Q7:      Change only the user with id 2 to active:true.
// //Api response
// const users37 = [

//  {id:1,name:"Swarup",active:false},

//  {id:2,name:"Rahul",active:false},

//  {id:3,name:"Amit",active:false}

// ];

// //my code
// const result37=users37.map((user37)=>{
//     if (user37.id===2){
//         return {
//             ...user37,
//             active:true
//         }
//     }
//     //
//     return user37
// })
// console.log(result37)


// //Q8:       Change only product id 3 price to 1000.
// //Api response
// const products38 = [

//  {id:1,name:"Laptop",price:60000},

//  {id:2,name:"Mouse",price:500},

//  {id:3,name:"Cable",price:200}

// ];

// //my code
// const result38 = products38.map((product38)=>{
//     if(product38.id===3){
//         return {
//             ...product38,
//             price:1000
//         }
//     }
//     return product38
// })
// console.log(result38)


// //Q9:       Increase quantity by 1 only for cart item with id 2.
// //Api response
// const cart39 = [

//  {id:1,name:"Laptop",quantity:1},

//  {id:2,name:"Mouse",quantity:3},

//  {id:3,name:"Keyboard",quantity:2}

// ];

// //my code
// const result39 = cart39.map((eachItem)=>{
//     if(eachItem.id===2){
//         return {
//             ...eachItem,
//             quantity:eachItem.quantity+1
//         }
//     }
//     return eachItem
// })
// console.log(result39)


// //Q10:      Convert every user's name to uppercase.
// //Api responses
// const users40 = [

//  {id:1,name:"Swarup"},

//  {id:2,name:"Rahul"},

//  {id:3,name:"Amit"}

// ];

// //my code
// const result40 = users40.map((user40)=>{
//     return {
//         ...user40,
//         name:user40.name.toUpperCase()
//     }
// })
// console.log(result40)


// //Q11:      Every employee receives a ₹2,000 bonus. Add a new property bonus with value 2000 to each employee
// //Api response
// const employees41 = [

//  {id:1,name:"Swarup",salary:50000},

//  {id:2,name:"Rahul",salary:60000},

//  {id:3,name:"Amit",salary:70000}

// ];

// //my code
// const result41 = employees41.map((employee41)=>{
//     return {
//         ...employee41,
//         bonus:2000
//     }
// })
// console.log(result41)


// //Q12 : Append "(Verified)" to the name of every verified user. Leave other users unchanged."

// //Api response
// const users42 = [

// {id:1,name:"Swarup",verified:true},

// {id:2,name:"Rahul",verified:false},

// {id:3,name:"Amit",verified:true}

// ];

// //My code
// const result42 = users42.map((user42)=>{
// if(user42.verified){
// return {
// ...user42,
// name:`${user42.name}(verified)`
// }
// }
// return user42
// })
// console.log(result42)


// //Q13:      Create a new array where every product has a new property discountedPrice, which is 20% less than the original price. Do not modify the original price.

// //Api response
// const products43 = [

//  {id:1,name:"Laptop",price:50000},

//  {id:2,name:"Mouse",price:1000},

//  {id:3,name:"Keyboard",price:3000}

// ];

// //my code
// const result43 = products43.map((details43)=>{
//     return{
//         ...details43,
//         discountedPrice:details43.price-(details43.price*(20/100))
//     }
// })
// console.log(result43)


// //Q44:      Increase every user's age by 1.
// //Api response
// const users44 = [

//  {
//   id:1,
//   name:"Swarup",
//   profile:{
//     age:24
//   }
//  },

//  {
//   id:2,
//   name:"Rahul",
//   profile:{
//     age:30
//   }
//  }

// ];

// //my code
// const result44 = users44.map((details44)=>{
//     return{
//         ...details44,
//         // profile:details44.profile.map((detail44)=>{
//         //     return{
//         //         ...detail44,
//         //         age:detail44.age+1
//         //     }
//         //     return detail44
//         // })
//         profile:{
//             ...details44.profile,
//             age:details44.profile.age+1
//         }
    
//     }
// })
// console.log(JSON.stringify(result44))


// //Q45:      Increase every project's budget by ₹1000.
// //Api response
// const employees45 = [

//  {
//   id:1,
//   name:"Swarup",
//   projects:[
//     {name:"App", budget:5000},
//     {name:"Website", budget:8000}
//   ]
//  },

//  {
//   id:2,
//   name:"Rahul",
//   projects:[
//     {name:"CRM", budget:6000}
//   ]
//  }

// ];

// //my code
// const result45 = employees45.map((employee45)=>{
//     return  {
//         ...employee45,
//         projects:employee45.projects.map((details45)=>{
//             return {
//                 ...details45,
//                 budget:details45.budget+1000

//             }
//         })
//     }
// })
// console.log(JSON.stringify((result45)))


// //Q46:      The user edited one project. Increase the budget of only the project named Website by ₹2000.
// //Api response
// const employees46 = [

//  {
//   id:1,
//   name:"Swarup",
//   projects:[
//     {name:"App", budget:5000},
//     {name:"Website", budget:8000}
//   ]
//  },

//  {
//   id:2,
//   name:"Rahul",
//   projects:[
//     {name:"CRM", budget:6000}
//   ]
//  }

// ];

// //my code
// const result46 = employees46.map((outerDetails46)=>{
    
//     return {
//         ...outerDetails46,
//         projects:outerDetails46.projects.map((innerDetail46)=>{
//            if(innerDetail46.name==="Website"){ 
//                  return {
//                      ...innerDetail46,
//                      budget:innerDetail46.budget+2000
//                     }
//             }
//             return innerDetail46
//         })
//     }
// })
// console.log(JSON.stringify((result46)))


// //Q47:      Calculate the total price of all products.
// //Api response
// const products47 = [

//  {id:1,price:1000},

//  {id:2,price:2000},

//  {id:3,price:3000}

// ];

// //my code
// const result47 = products47.reduce((acc47,curr47)=>{
//     return acc47+curr47.price
// },0)
// console.log(result47)


// //Q48:      Calculate the total salary of all employees.
// //Api response
// const employees48 = [

//  {id:1,salary:50000},

//  {id:2,salary:60000},

//  {id:3,salary:70000}

// ];

// //my code
// const result48 = employees48.reduce((acc48,curr48)=>{
//     return  acc48+curr48.salary
// },0)
// console.log(result48)


// //Q49:       "Find the total quantity of all cart items."
// //Api response
// const cart49 = [

//  {id:1,quantity:2},

//  {id:2,quantity:5},

//  {id:3,quantity:1}

// ];

// //my code
// const result49 = cart49.reduce((acc49,curr49)=>{
//     return acc49+curr49.quantity
// },0)
// console.log(result49)


// //Q50:      "Count how many users are verified."
// //Api response
// const users50 = [

//  {id:1,verified:true},

//  {id:2,verified:false},

//  {id:3,verified:true},

//  {id:4,verified:true}

// ];

// //my code
// let count;
// const result50 = users50.reduce((acc50,curr50)=>{
//     if(curr50.verified===true){

//         return acc50+1

//     }
//     return acc50
// },0)
// console.log(result50)


// //Q51:          "Return an array containing only the names of verified users."
// //Api response
// const users51 = [

//  {id:1,name:"Swarup",verified:true},

//  {id:2,name:"Rahul",verified:false},

//  {id:3,name:"Amit",verified:true}

// ];

// //my code 
// const result51 = users51.reduce((acc51,curr51)=>{
//     if(curr51.verified){
//         acc51.push(curr51.name)
//     }
//     return acc51
// },[])
// console.log(result51)

// //other solution

// // const users51 = [

// //  {id:1,name:"Swarup",verified:true},

// //  {id:2,name:"Rahul",verified:false},

// //  {id:3,name:"Amit",verified:true}

// // ];

// // //mycode
// // const result51 = users51.filter((userDetails51)=>{
// //         return userDetails51.verified
// // }).map((userDetails51)=>{
// //         return userDetails51.name
// // })
// // console.log(result51)


// //Q52:          Group employees by department.
// //Api response
// const employees52 = [

//  {id:1,name:"Swarup",department:"IT"},

//  {id:2,name:"Rahul",department:"HR"},

//  {id:3,name:"Amit",department:"IT"},

//  {id:4,name:"John",department:"Finance"}

// ];

// //my code
// const result52 = employees52.reduce((acc52, curr52)=>{
//     if(!acc52[curr52.department]){
//         acc52[curr52.department]=[]
//     }
//     acc52[curr52.department].push(curr52)
//     return acc52
// },{})
// console.log(result52)


// //Q53:          Find the employee with the highest salary.
// //Api response
// const employees53 = [

//  {id:1,name:"Swarup",salary:50000},

//  {id:2,name:"Rahul",salary:90000},

//  {id:3,name:"Amit",salary:70000}

// ];

// //my code
// const result53 = employees53.reduce((acc53,curr53)=>{
//     if(curr53.salary>acc53.salary){
//         return curr53
//     }
//     return acc53
// })
// console.log(result53)


// //Q54:         Count how many times each fruit appears.
// const fruits54 = [

//  "apple",

//  "banana",

//  "apple",

//  "orange",

//  "banana",

//  "apple"

// ];

// //my code
// const result54 = fruits54.reduce((acc54,curr54)=>{
//     acc54[curr54]=(acc54[curr54]||0)+1      //if(!acc54[curr54]){ acc54[curr54]=0 } acc54[curr54]++
//     return acc54
// },{})
// console.log(result54)


// //Q55:          Collect all skills from all users into one single array
// //Api response
// const users55 = [

//  {
//    id:1,
//    skills:["JavaScript","React"]
//  },

//  {
//    id:2,
//    skills:["Node","MongoDB"]
//  },

//  {
//    id:3,
//    skills:["Python"]
//  }

// ];

// //my code 
// const result55 = users55.reduce((acc55, curr55)=>{
//     //return [...acc55,...curr55.skills]    
//     acc55.push(...curr55.skills)
//     return acc55
// },[])
// console.log(result55)


// //Q56           Calculate the total amount of all orders across all users.
// //Api response
// const users56 = [

//  {
//    id:1,
//    orders:[
//      {amount:1000},
//      {amount:2000}
//    ]
//  },

//  {
//    id:2,
//    orders:[
//      {amount:500},
//      {amount:1500}
//    ]
//  }

// ];

// //my code
// // const result56 = users56.map((details56)=>{
// //     return details56.orders.reduce((acc56,curr56)=>{
// //         return {
            
// //         }
// //     },0)
// // })
// // console.log(result56)

// //rectify:
// const result56 = users56.reduce((acc56,curr56)=>{
//     const orderTotal = curr56.orders.reduce((orderAcc56,orderCurr56)=>{
//         return orderAcc56+orderCurr56.amount
//     },0)
//     return acc56+orderTotal
// },0)
// console.log(result56)


// //Q57:          Find the average salary of all employees.
// //Api response
// const employees57 = [

//  {id:1,name:"Swarup",salary:50000},

//  {id:2,name:"Rahul",salary:60000},

//  {id:3,name:"Amit",salary:70000}

// ];

// //my code
// const result57 = employees57.reduce((acc57,curr57)=>{
//     return acc57+curr57.salary
// },0)
// const avg = result57/employees57.length
// console.log(avg)


// //Q58:          Calculate the total bill.
// //Api response
// const cart58 = [

//  {id:1,name:"Laptop",price:50000,quantity:1},

//  {id:2,name:"Mouse",price:1000,quantity:2},

//  {id:3,name:"Keyboard",price:2000,quantity:3}

// ];

// //my code
// const result58 = cart58.reduce((acc58,curr58)=>{
//     return acc58+(curr58.price*curr58.quantity)
// },0)
// console.log(result58)


// //Q59:         Find the first inactive user
// //Api response
//  const users59 = [

//  {id:1,name:"Swarup",active:true},

//  {id:2,name:"Rahul",active:false},

//  {id:3,name:"Amit",active:false}

// ];

// //my code
// const result59 = users59.find((user59)=>{
//     return !user59.active
// },{})
// console.log(result59)

// // One matching object:	    find() 
// // All matching objects:    filter() 
// // Transform every object:	    map() 
// // One final value:	    reduce() 
// // Check if at least one matches:	some() 
// // Check if all match:	every() 


// //Q60:          Display the names of only the active employees.
// //api response
// const employees60 = [

//  {
//    id:1,
//    name:"Swarup",
//    active:true,
//    salary:60000
//  },

//  {
//    id:2,
//    name:"Rahul",
//    active:false,
//    salary:80000
//  },

//  {
//    id:3,
//    name:"Amit",
//    active:true,
//    salary:70000
//  }

// ];
// //my code
// const result60=employees60.filter((employee60)=>{
//     return employee60.active==true
// }).map((employee60)=>{
//     return employee60.name
// })
// console.log(result60)


// //Q61:          Find the first product whose price is greater than ₹10,000.
// //Api response
// const products61 = [

//  {id:1,name:"Laptop",price:60000},

//  {id:2,name:"Mouse",price:500},

//  {id:3,name:"Keyboard",price:2000},

//  {id:4,name:"Monitor",price:15000}

// ];

// //my code
// const result61 = products61.find((details61)=>{
//     return details61.price>10000
// })
// console.log(result61)


// //Q62:          Before showing the dashboard, check whether at least one user is active.
// //Api response
// const users62 = [

//  {id:1,name:"Swarup",active:true},

//  {id:2,name:"Rahul",active:false},

//  {id:3,name:"Amit",active:true}

// ];

// //my code
// const result62 = users62.some((details62)=>{
//     return details62.active
// })
// console.log(result62)


// //Q63:          Before allowing access, verify that every employee is verified.
// //Api response
// const employees63 = [

//  {id:1,name:"Swarup",verified:true},

//  {id:2,name:"Rahul",verified:true},

//  {id:3,name:"Amit",verified:false}

// ];

// //my code 
// const result63 = employees63.every((details63)=>{
//     return details63.verified
// })
// console.log(result63)


// //Q64:          On the dashboard, display the names of all active IT employees.
// //Api response
// const employees64 = [

//  {id:1,name:"Swarup",department:"IT",salary:60000,active:true},

//  {id:2,name:"Rahul",department:"HR",salary:50000,active:false},

//  {id:3,name:"Amit",department:"IT",salary:70000,active:true},

//  {id:4,name:"John",department:"Finance",salary:80000,active:true}

// ];

// //my code
// const result64 = employees64.filter((details64)=>{
//     return details64.active && details64.department==="IT"
// }).map((details64)=>{
//     return details64.name
// })
// console.log(result64)


// //Q65:      Display the total amount the customer has to pay.
// //Api response
// const cart65 = [

//  {id:1,name:"Laptop",price:50000,quantity:1},

//  {id:2,name:"Mouse",price:1000,quantity:2},

//  {id:3,name:"Keyboard",price:2000,quantity:3}

// ];

// //my code
// const result65 = cart65.reduce((acc65,curr65)=>{
//     return acc65+(curr65.price*curr65.quantity)
// },0)
// console.log(result65)


// //Q66:      Deactivate the user whose id is 3.
// //Api response
// const users66 = [

//  {id:1,name:"Swarup",active:true},

//  {id:2,name:"Rahul",active:false},

//  {id:3,name:"Amit",active:true}

// ];

// //my code
// const result66 = users66.map((details66)=>{
//     if(details66.id===3){
//         return {...details66,active:false}
//     }
//     return details66
// })
// console.log(result66)


// //Q67:         Before login, check whether every account is verified.
// //Api response
// const users67 = [

//  {email:"a@gmail.com",verified:true},

//  {email:"b@gmail.com",verified:false},

//  {email:"c@gmail.com",verified:true}

// ];

// //my code
// const result67 = users67.every((details67)=>{
//     return details67.verified
// })
// console.log(result67)


// //Q68:      Find the first product that is out of stock.
// //Api response
// const products68 = [

//  {id:1,name:"Laptop",stock:5},

//  {id:2,name:"Mouse",stock:0},

//  {id:3,name:"Keyboard",stock:10}

// ];

// //my code
// const result68 = products68.find((details68)=>{
//     return details68.stock===0
// })
// console.log(result68)


// //Q69:      find the greatest number betn 1 to 9
// const arr_num=[]
// for(let num = 0 ; num <= 9 ; num++){
//     arr_num.push(num)
// }
// console.log(arr_num)
// const greater=arr_num.reduce((acc_num,curr_num)=>{
//     if(curr_num>acc_num){
//         return curr_num
//     }
//     return acc_num
// })
// console.log(greater)    


// //Q70:       The + button is not working. When the user clicks + on a product, increase only that product's quantity by 1.
// //Api response
// const cart70 = [

//  {id:1,name:"Laptop",price:50000,quantity:1},

//  {id:2,name:"Mouse",price:1000,quantity:2},

//  {id:3,name:"Keyboard",price:2000,quantity:3}

// ];

// //my code
// const result70 = cart70.map((clickId70)=>{
//     if(clickId70.id===2){
//         return {
//             ...clickId70,
//             quantity:clickId70.quantity+1
//         }
//     }
//     return clickId70
// })
// console.log(result70)


// //Q71           The Remove button should delete the clicked product.
// //Api response
// const cart71 = [

//  {id:1,name:"Laptop",price:50000,quantity:1},

//  {id:2,name:"Mouse",price:1000,quantity:3},

//  {id:3,name:"Keyboard",price:2000,quantity:3}

// ];

// //my code
// //const deleteId71=2
// const result71 = cart71.filter((clickedCart71)=>{
//     // if(!clickedCart71.id===2){
//     //     return clickedCart71     //incorrect
//     // }
//     // return clickedCart71
//     return clickedCart71.id!==2  
// })
// console.log(result71)


// //Q72           As the user types lap, show matching products.
// //Api response
// const cart72 = [

//  {id:1,name:"Laptop",price:50000,quantity:1},

//  {id:2,name:"Mouse",price:1000,quantity:2},

//  {id:3,name:"Keyboard",price:2000,quantity:3}

// ];

// //my code
// const find72 = 'lap'
// const result72 = cart72.filter((details72)=>{
//     return details72.name.toLowerCase().includes(find72.toLowerCase())
// })
// console.log(result72)


// //Q73:          Show the total quantity of items currently in the cart.
// //Api response
// const cart73 = [

//  {id:1,name:"Laptop",price:50000,quantity:1},

//  {id:2,name:"Mouse",price:1000,quantity:2},

//  {id:3,name:"Keyboard",price:2000,quantity:3}

// ];

// //my code
// const result73 = cart73.reduce((acc73,curr73)=>{
//     return acc73+curr73.quantity
// },0)
// console.log(result73)

// //Q74           "Don't allow checkout if any product has quantity 0
// //Api response
// const cart74 = [

//  {id:1,name:"Laptop",price:50000,quantity:1},

//  {id:2,name:"Mouse",price:1000,quantity:0},

//  {id:3,name:"Keyboard",price:2000,quantity:3}

// ];

// //my code
// const result74 = cart74.some((details74)=>{
//     return !details74.quantity
//     //console.log("Can not check out")
// })
// console.log(result74)
// if(result74){
//     console.log("Do not check out")
// }else{
//     console.log("check out")
// }


// //Q75:         Show only the names of users who are currently online.
// //Api response 
// const users75 = [

//  {id:1,name:"Swarup",online:true,lastSeen:"2 min ago"},

//  {id:2,name:"Rahul",online:false,lastSeen:"1 hour ago"},

//  {id:3,name:"Amit",online:true,lastSeen:"Just now"}

// ];

// //my code
// const result75 = users75.filter((details75)=>{
//     return details75.online
// }).map((details75)=>{
//     return details75.name
// })
// console.log(result75)


// //Q76:          Show the number of unread notifications.
// //Api response 
// const notifications76 = [

//  {id:1,read:false},

//  {id:2,read:true},

//  {id:3,read:false},

//  {id:4,read:false}

// ];

// //my code
// const result76 = notifications76.reduce((acc76,curr76)=>{
//     return acc76+(!curr76.read)
// },0)
// console.log(result76)


// //Q77:          Return the matching employee object.
// //Api response 
// const employees77 = [

//  {id:1,name:"Swarup",department:"IT"},

//  {id:2,name:"Rahul",department:"HR"},

//  {id:3,name:"Amit",department:"IT"}

// ];

// const search77 = "rah";

// //my code
// const result77 = employees77.filter((details77)=>{
//     return details77.name.toLowerCase().includes(search77.toLowerCase())
// })
// console.log(result77)


// //Q78:          Check whether at least one admin exists.
// //Api response 
// const users78 = [

//  {id:1,role:"admin"},

//  {id:2,role:"user"},

//  {id:3,role:"user"}

// ];

// //my code
// const result78 = users78.some((details78)=>{
//     return details78.role.includes("admin")
// })
// console.log(result78)


// //Q79:          Verify that every product is in stock.
// //Api response 
// const products79 = [

//  {id:1,stock:5},

//  {id:2,stock:8},

//  {id:3,stock:2}

// ];

// //my code 
// const result79 = products79.every((details79)=>{
//     return details79.stock
// })
// console.log(result79)


// //Q80       Display employee salaries in ascending order.
// //Api response
// const salaries80 = [

// 50000,

// 20000,

// 70000,

// 40000,

// 10000

// ];

// //my code
// const result80 = salaries80.sort((a,b)=>{
//     return a-b
// })
// console.log(result80)


// //Q81       Sort the employee names alphabetically.
// //Api response
// const names81 = [

// "Swarup",

// "Amit",

// "Rahul",

// "John"

// ];

// //my code
// const result81 = names81.sort()
// console.log(result81)

// const numbers82 = [1, 10, 2, 5];

// const sorted=numbers82.sort();

// console.log(sorted);


// //Q82:      Sort employees by salary in ascending order.
// //Api response
// const employees82 = [

//  {id:1, name:"Swarup", salary:70000},

//  {id:2, name:"Rahul", salary:50000},

//  {id:3, name:"Amit", salary:90000},

//  {id:4, name:"John", salary:60000}

// ];

// //my code
// const result82 = employees82.sort((a,b)=>{
//     return a.salary-b.salary
// })
// console.log(result82)


// //Q83:      Sort employees by salary in descending order.
// //Api response
// const employees83 = [

//  {id:1, name:"Swarup", salary:70000},

//  {id:2, name:"Rahul", salary:50000},

//  {id:3, name:"Amit", salary:90000},

//  {id:4, name:"John", salary:60000}

// ];

// //my code
// const result83 = employees83.sort((a,b)=>{
//     return b.salary-a.salary
// })
// console.log(result83)


// //Q84:      Sort the employees alphabetically by their name
// //Api response
// const employees84 = [

//  {id:1, name:"Swarup", salary:70000},

//  {id:2, name:"Rahul", salary:50000},

//  {id:3, name:"Amit", salary:90000},

//  {id:4, name:"John", salary:60000}

// ];

// //my code
// const result84 = employees84.sort((a,b)=>{
//     return a.name.localeCompare(b.name)
// })
// console.log(result84)


// //Q85:      Sort employees by salary in ascending order. If two employees have the same salary, then sort them alphabetically by name.
// //Api response
// const employees85 = [

//  {id:1,name:"Swarup",salary:50000},

//  {id:2,name:"Rahul",salary:70000},

//  {id:3,name:"Amit",salary:50000},

//  {id:4,name:"John",salary:70000}

// ];

// //my code
// const result85 = employees85.sort((a,b)=>{
//     if(a.salary===b.salary){
//     return a.name.localeCompare(b.name)
// }
//     return a.salary-b.salary
// })

// console.log(result85)


// //Q86:      Sort products by category alphabetically. If the category is the same, sort by price in descending order.
// //Api response
// const products86 = [

//  {id:1,name:"Laptop",category:"Electronics",price:60000},

//  {id:2,name:"Phone",category:"Electronics",price:50000},

//  {id:3,name:"Shirt",category:"Fashion",price:2000},

//  {id:4,name:"Jeans",category:"Fashion",price:3000}

// ];

// const result86 = products86.sort((a,b)=>{
//     if(a.category===b.category){
//         return b.price - a.price
//     }
//     return a.category.localeCompare(b.category)
// })
// console.log(result86)


// //Q87:      Sort students by marks in descending order.If marks are equal, sort by age in ascending order.If both marks and age are equal, sort alphabetically by name.
// //Api response
// const students87 = [

//  {id:1,name:"Swarup",marks:90,age:24},

//  {id:2,name:"Rahul",marks:90,age:22},

//  {id:3,name:"Amit",marks:95,age:23},

//  {id:4,name:"John",marks:90,age:22}

// ];

// const result87 = students87.sort((a,b)=>{
//     if(a.age===b.age && a.marks===b.marks){
//         return a.name.localeCompare(b.name)
//     }
//     else if(a.marks===b.marks){
//         return a.age-b.age
//     }
//     return b.marks - a.marks
// })
// console.log(result87)


// //Q88:      
// const numbers88 = [5, 3, 8, 1];

// const result88 = numbers88.sort((a, b) => a - b);

// console.log(result88);
// console.log(numbers88);


// //Q89:      Group all employees department-wise.
// //Api response
// const employees89 = [

//  {id:1,name:"Swarup",department:"IT"},

//  {id:2,name:"Rahul",department:"HR"},

//  {id:3,name:"Amit",department:"IT"},

//  {id:4,name:"John",department:"Finance"},

//  {id:5,name:"Rohit",department:"HR"}

// ];

// //my code
// const result89 = employees89.reduce((acc89,curr89)=>{
//     if(!acc89[curr89.department]){
//         acc89[curr89.department]=[]
//     }
//     acc89[curr89.department].push(curr89)
//     return acc89
// },{})
// console.log(JSON.stringify(result89))


// //Q90:      Count how many employees are in each department.
// //Api response
// const employees90 = [

//  {id:1,name:"Swarup",department:"IT"},

//  {id:2,name:"Rahul",department:"HR"},

//  {id:3,name:"Amit",department:"IT"},

//  {id:4,name:"John",department:"Finance"},

//  {id:5,name:"Rohit",department:"HR"},

//  {id:6,name:"Alex",department:"IT"}

// ];

// //my code
// const result90 = employees90.reduce((acc90,curr90)=>{
//     if(!acc90[curr90.department]){
//         acc90[curr90.department]=0
//     }
//     acc90[curr90.department]++
//     return acc90
// },{})
// console.log(result90)


// // //Q91:      
// // console.log(x);

// // var x = 10;  //undefined


// // //Q92:
// // console.log(a);
// // console.log(b);

// // var a = 5;   //undefined
// // let b = 10;  //refrence error


// // //Q93:
// // let x93 = 10;

// // {
// //     console.log(x93);   //reference error

// //     let x93 = 20;
// // }


// // //Q94:
// // let a94 = 5;

// // function test() {

// //     console.log(a94);  //reference error

// //     let a94 = 10;

// // }

// // test();


// // //Q95:
// // var a = 1;

// // function test() {

// //     console.log(a);

// //     var a = 2;

// //     console.log(a);

// // }

// // test();

// // console.log(a);


// // //Q96:
// // let name = "Swarup";

// // function greet() {
// //     console.log(name);
// // }

// // greet();  //Swarup


// //Q97:
// let a = 1;

// function outer97() {

//     let b = 2;

//     function inner97() {

//         let c = 3;

//         console.log(a);

//         console.log(b);

//         console.log(c);

//     }

//     inner97();

// }

// outer97();  // 1 2 3


// //Q98:
// function outer98() {

//     let x = 10;

//     function inner98() {
//         console.log(x);
//     }

//     return inner98;

// }

// const fn98 = outer98();

// fn98();


// //Q99:
// function outer99() {

//     let count99 = 0;

//     function inner99() {
//         count99++;
//         console.log(count99);
//     }

//     return inner99;

// }

// const counter99 = outer99();

// counter99(); //1
// counter99(); //2
// counter99(); //3


// //Q100:
// function outer100() {

//     let count100 = 5;

//     function inner100() {
//         count100++;
//         console.log(count100);
//     }

//     return inner100;
// }

// const fn100 = outer100();

// fn100();    //6
// fn100();    //7
// fn100();    //8


// //Q101:
// function outer_101() {

//     let x_101 = 10;

//     return function () {
//         console.log(x_101);
//     };

// }

// const fn101 = outer_101();
// const fn101_1 = outer_101();

// fn101();    //10
// fn101_1();     //10


// //Q102:
// function outer102() {

//     let count102 = 0;

//     return function () {
//         count102++;
//         console.log(count102);
//     };

// }

// const fn102 = outer102();
// const fn102_1 = outer102();

// fn102();    //1
// fn102();    //2

// fn102_1();  //1

// fn102_1();  //2


// //Q103:
// function createBankAccount() {

//     let balance = 1000;

//     return {

//         deposit(amount) {
//             balance += amount;
//             console.log(balance);
//         },

//         withdraw(amount) {
//             balance -= amount;
//             console.log(balance);
//         }

//     };

// }

// const account = createBankAccount();

// account.deposit(500);

// account.withdraw(200);

// account.withdraw(300);


// //Q104:
// console.log(this);  //{}


// //Q105:
// const person105 = {
//     name: "Swarup",

//     greet_105() {
//         console.log(this.name);
//     }
// };

// person105.greet_105();      //swarup


// //Q106:
// const person106 = {
//     name: "Swarup",

//     greet106() {
//         console.log(this.name);
//     }
// };

// const fn106 = person106.greet106;

// fn106();    //undefined


// //Q107:
// const person107 = {
//     name: "Swarup",

//     greet107() {
//         console.log(this.name);
//     }
// };

// const anotherPerson107 = {
//     name: "Rahul",
//     greet107: person107.greet107
// };

// anotherPerson107.greet107();    //Rahul


// //Q108
// const person108 = {
//     name: "Swarup",

//     greet108() {
//         return function () {
//             console.log(this.name);
//         };
//     }
// };

// const fn108 = person108.greet108();

// fn108();    //undefined


// //Q109:
// const person109 = {
//     name: "Swarup",

//     greet109: () => {
//         console.log(this.name);
//     }
// };

// person109.greet109();  //undefined


// //Q110:
// const person110 = {
//     name: "Swarup",

//     greet110() {

//         const inner110 = () => {
//             console.log(this.name);
//         };

//         inner110();
//     }
// };

// person110.greet110();   //swarup


// //Q111:
// const person111 = {
//     name: "Swarup",

//     greet111() {

//         return () => {
//             console.log(this.name);
//         };
//     }
// };

// const fn111 = person111.greet111();

// fn111();    //swarup


// //Q112:
// console.log(add112);

// function add112() {
//     return 10;
// }


// //Q113:
// console.log(x113);

// var x113 = 10;


// // //Q114:
// // console.log(a114);   //reference error

// // let a114 = 10;


// //Q115:
// console.log(a115);  //undefined

// var a115 = 10;

// console.log(a115);  //10

// a115 = 20;  

// console.log(a115);  //20


// //Q116:
// var a116 = 10;

// function test() {

//     console.log(a116);

//     var a116 = 20;

//     console.log(a116);

// }

// test();

// console.log(a116);


// //Q117:
// var a117 = 100;

// function one117() {

//     var a117 = 10;

//     function two117() {
//         console.log(a117);
//     }

//     two117();
// }

// one117();


// //Q118:
// var a118 = 100;

// function one118() {

//     var a118 = 10;

//     function two118() {

//         var a118 = 20;

//         console.log(a118);  //20

//     }

//     two118();   //20

//     console.log(a118);  //10

// }

// one118();   //10

// console.log(a118);  //100


// //Q119:
// var a119 = 100;

// function one119() {

//     console.log(a119);  //undefined

//     var a119 = 10;  //avaScript stops searching as soon as it finds a variable with the requested name, regardless of its value.

//     console.log(a119);

// }

// one119();


// //Q120: 
// function outer120() {

//     let count120 = 0;

//     function inner120 () {

//         count120 ++;

//         console.log(count120);

//     }

//     return inner120 ;

// }

// const fn120  = outer120 ();

// fn120 ();   //1

// fn120 ();   //2

// fn120 ();   //3


// //Q121:
// function outer121() {

//     let count121 = 0;

//     return function () {
//         count121++;
//         console.log(count121);
//     };
// }

// const a121 = outer121();
// const b121 = outer121();

// a121();     //1
// a121();     //2
// b121();     //1
// a121();     //3
// b121();     //2


// //Q122:
// function makeAdder122(x122) {
//     return function(y122) {
//         return x122 + y122;
//     };
// }

// const add5 = makeAdder122(5);
// const add10 = makeAdder122(10);


// //const add5 = makeAdder122(5);

// const another122 = add5;

// console.log(another122(7));
// console.log(add5(3));
// console.log(add10(3));


// //Q123:
// function outer123() {
//     let x123 = 5;

//     return function () {
//         console.log(x123);
//     };
// }

// const a123 = outer123();
// const b123 = a123;

// b123();


// //Q124:
// function outer124() {
//     let count124 = 0;

//     return function () {
//         count124++;
//         console.log(count124);
//     };
// }

// const a124 = outer124();
// const b124 = a124;

// a124();
// b124();
// a124();


// //Q125:
// function counter125() {

//     let count125 = 0;

//     return {
//         increment125() {
//             count125++;
//             console.log(count125);
//         },

//         decrement125() {
//             count125--;
//             console.log(count125);
//         },

//         getCount125() {
//             console.log(count125);
//         }
//     };
// }

// const c125 = counter125();

// c125.increment125();
// c125.increment125();
// c125.decrement125();
// c125.getCount125();


// //Q126:
// function counter126() {

//     let count126 = 0;

//     return {
//         increment126() {
//             count126++;
//             console.log(count126);
//         },

//         decrement126() {
//             count126--;
//             console.log(count126);
//         },

//         getCount126() {
//             console.log(count126);
//         }
//     };
// }

// const c126_1 = counter126();
// const c126_2 = counter126();

// c126_1.increment126();  //1
// c126_1.increment126();  //2

// c126_2.increment126();  //1

// c126_1.getCount126();   //2
// c126_2.getCount126();   //1


// //Q127
// const person127 = {
//     name: "Swarup",

//     greet() {
//         console.log(this.name);
//     }
// };

// person127.greet();  //swarup


// //Q128
// const person128_1 = {
//     name: "Alice",

//     greet() {
//         console.log(this.name);
//     }
// };

// const person128_2 = {
//     name: "Bob",

//     greet: person128_1.greet
// };

// person128_1.greet();    //alice
// person128_2.greet();    //bob


// //Q129
// const person129 = {
//     name: "Swarup",

//     greet() {
//         console.log(this.name);
//     }
// };

// const sayHello129 = person129.greet;

// sayHello129();  //undefined because no object is binding to ```this```


// //Q130:
// const person130 = {
//     name: "Alice",

//     greet() {
//         console.log(this.name);
//     }
// };

// const admin130 = {
//     name: "Bob"
// };

// admin130.greet = person130.greet;

// admin130.greet();   //bob


// //Q131:
// const person131 = {
//     name: "Alice",

//     greet() {
//         console.log(this.name);
//     }
// };

// const greet = person131.greet;

// const admin131 = {
//     name: "Bob",
//     greet
// };

// admin131.greet();   //bob


// // //Q132:
// // const person132 = {
// //     name: "Alice",

// //     greet() {
// //         console.log(this.name);
// //     }
// // };

// // setTimeout132(person132.greet, 1000);  type error


// // //Q133:
// // const person133 = {
// //     name: "Alice",

// //     greet() {
// //         console.log(this.name);
// //     }
// // };

// // setTimeout(() => person133.greet(), 1000);


// // //Q134:
// // const person134 = {
// //     name: "Alice",

// //     greet134() {
// //         console.log(this.name);
// //     }
// // };

// // const admin134 = {
// //     name: "Bob"
// // };

// // const greet134 = person134.greet134.bind(admin134);

// // greet134();  //bob


// //Q135:
// const person135 = {
//     name: "Alice",

//     greet135(city, country) {
//         console.log(this.name, city, country);
//     }
// };

// const admin135 = {
//     name: "Bob"
// };

// person135.greet135.call(admin135, "Delhi", "India");

// person135.greet135.apply(admin135, ["Delhi", "India"]);

// const fn135 = person135.greet135.bind(admin135, "Delhi");

// fn135("India");


// //Q136:
// const person136 = {
//     name: "Alice",

//     greet136: () => {
//         console.log(this.name);
//     }
// };

// person136.greet136();   //undefined


// //Q137:
// const person137 = {
//     name: "Alice",

//     greet137() {

//         const inner137 = () => {
//             console.log(this.name);
//         };

//         inner137();
//     }
// };

// person137.greet137();   //alice


// //Q138:
// const person138 = {
//     name: "Alice",

//     greet138() {

//         function inner138() {
//             console.log(this.name);
//         }

//         inner138();
//     }
// };

// person138.greet138();   //undefined


// //Q139:
// greet139();

// function greet139() {
//     console.log("Hello");
// }


// // //Q140:
// // greet140();

// // var greet140 = function () {
// //     console.log("Hello");
// // };   TypeError: greet140 is a function


// //Q141:
// console.log(greet141); 

// var greet141 = function () {
//     console.log("Hello141");
// };


// //Q142:
// console.log(add142);

// function add142(a, b) {
//     return a + b;
// }


// //Q143:
// sayHi143();

// function sayHi143() {
//     console.log("Hi143");
// }

// var sayHi143 = 10;


// //Q144:
// console.log(add144);

// var add144 = function () {
//     return 10;
// };

// console.log(add144);


// //Q145:
// hello145();

// var hello145 = function () {
//     console.log("Hello145");
// };

// function hello145() {
//     console.log("World145");
// }


// //Q146:
// console.log(greet146);

// function greet146() {
//     return "Hello146";
// }


// // //Q147:
// // foo147();

// // var foo147 = () => {
// //     console.log("Arrow147");
// // };


// //Q148:
// var x148 = function test148() {
//     console.log("Inside148");
// };

// console.log(typeof x148);
// console.log(typeof test148);


// //Q149:
// function outer149() {
//     return "A";
// }

// var outer149 = function () {
//     return "B";
// };

// console.log(outer149());


// //Q150:
// console.log(a150);

// var a150 = function () {
//     return 1;
// };

// function a150() {
//     return 2;
// }

// console.log(a150());

// var a150 = 100;

// console.log(a150);


// //Q151:
// function test151(a = 151) {
//     console.log(a);
// }

// test151();


// //Q152:
// function test152(a = 100) {
//     console.log(a);
// }

// test152(50);


// //Q153:
// function test153(a = 100) {
//     console.log(a);
// }

// test153(undefined);


// //Q154;
// function test154(a = 100) {
//     console.log(a);
// }

// test154(null);


// //Q155:
// function test155(a = 100) {
//     console.log(a);
// }

// test155(0);


// //Q156:
// function test156(a = 100) {
//     console.log(a);
// }

// test156(false);


// //Q157:
// function add157(a = 5, b = 10) {
//     console.log(a + b);
// }

// add157(2);


// //Q158:
// function add158(a = 5, b = 10) {
//     console.log(a + b);
// }

// add158(undefined, 20);


// //Q159:
// function add159(a = 5, b = a) {
//     console.log(a, b);
// }

// add159(10);


// // //Q160:
// // function add160(a = b, b = 10) {
// //     console.log(a, b);
// // }

// // add160();


// //Q161:
// function demo161(...nums) {
//     console.log(nums);
// }

// demo161(1,2,3);


// //Q162
// function demo162(a, ...nums) {
//     console.log(a);
//     console.log(nums);
// }

// demo162(10,20,30,40);


// //Q163:
// function demo163(a,b,...nums){
//     console.log(a,b);
//     console.log(nums);
// }

// demo163(1);


// //Q164:
// function demo164(...nums){
//     console.log(nums.length);
// }

// demo164();


// //Q165:
// function demo165(...nums){
//     console.log(Array.isArray(nums));
// }

// demo165(1,2,3);


// //Q166:
// function demo166(a = 10, ...rest) {
//     console.log(a);
//     console.log(rest);
// }

// demo166(undefined,20,30,40);


// //Q167:
// console.log(add167(2));

// function add167(a = 5) {
//     return a;
// }

// var add167 = function(a = 10) {
//     return a * 2;
// };


// //Q168:
// function demo168(a = 1, b = a, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// demo168(undefined, undefined, 10, 20);


// //Q169:
// function outer169(x = 5) {
//     return function(y = x) {
//         console.log(x + y);
//     };
// }

// const fn169 = outer169(10);
// fn169();


// //Q170:
// var a170 = 100;

// function test170(a170 = 10, ...rest170) {

//     console.log(a170);

//     function a170() {
//         return 5;
//     }

//     console.log(typeof a170);

//     rest170.push(50);

//     console.log(rest170);
// }

// test170(undefined, 20, 30);


//Q171: Write a function delay(ms) that returns a Promise which resolves after ms milliseconds.

//Q172: Create a Promise that resolves with "Login Successful" after 2 seconds.

//Q173: Write a Promise that rejects with "Invalid Credentials" after 1 second.

//Q174: Write a function isEven(num) that returns a Promise.

// Resolve if the number is even.
// Reject if the number is odd.

//Q175: Fetch User -> Fetch Orders->Fetch Payment->Print "Completed".



// -----------------------------------------new----------------------------------------------------
// Track A — JavaScript
// Module	Topics and practical skills
// JS-01	Variables, data types, operators, type coercion, equality
// JS-02	Functions, parameters, return values, callbacks, arrow functions
// JS-03	Scope, execution context, hoisting, TDZ, closures
// JS-04	Arrays, objects, references, cloning, map, filter, reduce
// JS-05	this, prototypes, classes, inheritance, modules
// JS-06	Promises, async/await, event loop, microtasks and macrotasks
// JS-07	Fetch API, HTTP errors, retries, cancellation, race conditions
// JS-08	Exceptions, debugging, clean code, immutability, performance
// JS-09	Practical coding tasks and mixed interview challenges

// Track B — Database and SQL
// Module	Topics and practical skills
// DB-01	Database fundamentals, relational models, tables and schemas
// DB-02	SQL basics: SELECT, WHERE, sorting and filtering
// DB-03	Joins, subqueries, CTEs and set operations
// DB-04	Aggregation: GROUP BY, HAVING, aggregate functions
// DB-05	Keys, constraints, normalization and schema design
// DB-06	Indexes, query plans and performance fundamentals
// DB-07	Transactions, ACID, concurrency and data consistency
// DB-08	Practical database design and scenario-based SQL challenges
// We'll use PostgreSQL-style SQL for practice unless your project or workplace uses a different database.

// Track C — React
// Module	Topics and practical skills
// RE-01	React fundamentals, JSX, components and props
// RE-02	State, event handling, controlled forms and state updates
// RE-03	Rendering, reconciliation, keys and component lifecycle concepts
// RE-04	useState, useEffect, dependency arrays and cleanup
// RE-05	API integration, loading states, errors and request cancellation
// RE-06	Routing, nested routes and navigation
// RE-07	Context API, prop drilling and state-management decisions
// RE-08	Custom hooks, reusable components and component architecture
// RE-09	Performance, unnecessary renders, memoization and debugging
// RE-10	Production-style scenarios and a complete application challenge


// JS-01 VARIABLE

// Q1 - Reassignment 
// Declare a variable named score with the value 50. Reassign it to 75 and print it.

var age1 = 50
age1 = 75;
console.log(age1)

// Q2 - Constant binding
// Create a const variable named appName with the value "AdOptima" and print it. Do not reassign it.

const appName = "AdOptima"
console.log(appName)

// Q3 - Object mutation
// Create a const user object with name "Swarup" and age 24. Change age to 25 and print the object.

const user1 = {
    name: 'Swarup',
    age: 24
}
user1.age = 25
console.log(user1.age)

// Q4 - Block scope
// Create a block using braces. Declare a let variable inside it, print the variable inside the block, and do not access it outside.
{
    let dist = "dkl"
    console.log(dist)
}

// Q5 - Fix the bug
// This code throws an error when the total is updated. Rewrite it correctly without changing the intended behavior.
let total = 100;
total = total + 50;
console.log(total);

// Q6 — Industrial scenario
// A checkout function calculates a subtotal and later adds a delivery fee. Choose declarations that allow the subtotal to be updated, while keeping the delivery fee unchanged. Write the code and print the final total.Q6 — Industrial scenario

function checkOut(){
    let obj1 = 32
    let obj2 = 69
    let obj3 = 89
    const deliveryfee = 50
    let total1 = obj1 + obj2 + obj3 + deliveryfee
    console.log(total1)
}
checkOut() 

//Short answers

// Q1. You declare an object using const. Why can you change one of its properties but not assign a completely new object to the same variable?

// Ans: I can change the property of one of its because const is block scoped so when I am changing a property it is changing but still within the scope but assigning a totally new object to the same variable means u r reassigning a complete different object 


// Q2. In a React component, why might changing a property on an existing state object be problematic compared with creating a new object?
//Ans: No idea

// Q3. You have a value that will never be reassigned. Would you choose let or const, and why?
//ans: const because let allows reassign and to avoid code bursts i will const because no reassign is going to happen 

//DRILL

//Drill 1 — Object mutation

// Create a const object named product with name: "Laptop" and price: 50000. Change its price to 55000 and print the complete object.

//ans: 
const product= {
    name: 'laptop',
    price: 50000
}
product.price=55000
console.log(product)

// Drill 2 — Immutable update

// Given the following React state declaration, write only the setter call that changes age to 25 without mutating the existing object.
// const [user, setUser] = useState({
//     name: "Swarup",
//     age: 24
// });

// //ans: 
// const [user, setUser] = useState({
//     name: "Swarup",
//     age: 24
// });
// setUser({
//     ...user,
//     age: 25
// });


// Drill 3 — Choose the declaration
// Write a short function that initializes subtotal to 100, adds a delivery fee of 40 to it, and prints the final total. Use const and let appropriately.

//ans:
function cart(){
    let subtotal1 = 100
    const deliveryFee1= 40
    let total2 = subtotal1+deliveryFee1
    console.log(total2)
}
cart();


// JS-O1 DATATYPES AND TYPE CHECKING 
// STRING, NUMBER, BOOLEAN, UNDEFINED, NULL, BIGINT, SYMBOL, OBJECT

// Q1 — Declare different types
// Declare five variables: a string containing your name, a number containing your age, a boolean indicating whether you are learning JavaScript, an undefined variable, and a null variable. Use let or const appropriately.

//ans:
const name2 = 'Swarup';
const age2 = 24;
const javaScript2 = true;
let unknown2;
const zero2 = null;



// Q2 — Check data types
// Declare a string, a number, and a boolean. Use console.log() and typeof to display the type of each value.

//ans:
const name3 = 'Swarup';
const age3 = 24;
const javaScript3 = true;
let unknown3;
const zero3 = null;

console.log(typeof (name3))
console.log(typeof age3)
console.log(typeof javaScript3)
console.log(typeof unknown3)
console.log(typeof zero3)



// Q3 — Correct the data types
// Create variables for a product price of 499, a product name of 'Keyboard', and whether the product is available (true). Choose the correct data type for each.

//ans:
const product2={
    name4: 'keyboard',
    price4: '499',
    available4: true
}
if(product2.available4){

    console.log("Ready to checkout")

}
else{
    console.log("Unavailable")
}


// Q4 — Undefined versus null
// Create one variable whose value is undefined and another whose value is null. Use console.log() and typeof to inspect both.

//ans:
let notDefine;
const zero4 = null;
console.log(typeof (notDefine))
console.log(typeof (zero4))


// Q5 — Industrial scenario
// A product's discount is currently unknown. Declare a variable to represent that the discount has not yet been provided. Then show how you would represent a known discount of 0. Choose values that distinguish 'not provided' from 'no discount'.

let discount;
//discount=0
if(typeof discount){
    console.log(typeof discount)
    //console.log("Undefined")
}

// Q1 — String
// Create a variable called userName containing your name. Then print its type using typeof.

//ans:
const userName = 'Swarup'
console.log(typeof userName)

// Q2 — Number
// Create a variable called salary containing 50000. Print its value and its type.

//ans:
const salary = 50000;
console.log(salary);
console.log(typeof salary);

// Q3 — Boolean
// Create a variable called isLoggedIn containing true. Print its type.

//ans:
const isLoggedIn = true;
console.log(typeof isLoggedIn)

// Q4 — Undefined
// Create a variable called phoneNumber without assigning any value. Print its type using typeof.

//ans:
let phoneNumber;
console.log(typeof phoneNumber)

// Q5 — Null
// Create a variable called profilePicture and intentionally assign it null. Print:
// 1. Its value
// 2. Its type using typeof

//ans:
const profilePicture = null;
console.log(typeof profilePicture)
console.log(profilePicture)

// Q6 — Important distinction
// Create these two variables:
// age = 24
// ageText = "24"
// Use typeof on both so that you can clearly verify that one is a number and the other is a string.

//ans:
const age = 24
const ageText = "24"
console.log(typeof age)
console.log(typeof ageText)

// Q7 — Industrial-style scenario
// A user has not provided a discount yet. Create:
// discount
// without assigning a value.
// Another user has explicitly received no discount, so create:
// discountAmount

// with the value 0.
// Print the type of both variables.
// No if, no operators, no arrays, no functions, no React. Just declaration → value → typeof.

//ans:
let discount1;
let discountAmount = 0 ;

console.log(typeof discount1)
console.log(typeof discountAmount)

// Q1 — Arithmetic
// A product costs ₹799 and the customer buys 4.
// Create:
// price
// quantity
// total
// Calculate the total using an arithmetic operator and print it.

//ans:
const product5 = 799;
let quantity5 = 4;
const total5 = 799*4

console.log(total5)


// Q2 — Remainder
// Create:
// totalItems = 17
// Find how many items are left over after putting them into groups of 5.
// Use %.

//ans:
  const totalItem = 17
  const group = 5
  const itemsLeft = totalItem%group
  console.log(itemsLeft)



// Q3 — Compound assignment
// Start with:
// let wallet = 5000;

// Then:
// - Add ₹1500
// - Subtract ₹700
// - Add ₹300
// Use compound assignment operators (+=, -=), not:
// wallet = wallet + 1500;
// Finally print the wallet balance.

//ans:
let wallet = 5000
wallet += 1500
wallet -=700
wallet += 300

console.log(wallet)

// Q4 — Increment/decrement
// Create:
// let loginAttempts = 0;
// Simulate:
// - One failed login attempt
// - Another failed login attempt
// - One attempt being removed/reset
// Use ++ and --.

//ans:
let loginAttempts = 0;
++ loginAttempts;
loginAttempts++;
--loginAttempts;

console.log(loginAttempts)

// Q5 — Comparisons
// Create:
// const age = 24;

// Write code that checks whether:
// - age is greater than 18
// - age is less than 30
// - age is exactly 24
// Print each result.
// Use comparison operators.

//ans:
const age6 = 24;

console.log(age6 > 18);
console.log(age6 < 30);
console.log(age6 === 24);

// Q6 — Small industrial scenario
// An e-commerce application has:
// const productPrice = 1200;
// const quantity = 3;
// const deliveryFee = 80;
// Calculate:
// subtotal
// finalTotal
// The calculation should be:
// product price × quantity → subtotal
// then:
// subtotal + delivery fee → final total
// Use variables rather than putting the entire calculation directly inside console.log().

//ans:
const productPrice6 = 1200;
const quantity6 = 3;
const deliveryFee6 = 80;
const subtotal6 = productPrice6*quantity6
const finalTotal6 = subtotal6 + deliveryFee6

console.log(finalTotal6)


// Q7 — Manager-style coding question
// You have:
// let stock = 10;

// Five products are sold.
// Write the code to reduce the stock appropriately using an assignment operator.
// Then one new product is added to inventory.
// Increase the stock using an appropriate operator.

//ans:
let stock7 = 10;
stock7-=5;
stock7+=1;
console.log(stock7)


// JS-01 → Equality & Type Coercion
// Q1. Compare 25 and "25" using both == and ===.

// ans:
const numTest = 25
const stringTest = '25'

console.log(numTest == stringTest)
console.log(numTest === stringTest)

// Q2. Compare 100 and "100" using != and !==.

// ans:
const numTest1 = 100
const stringTest1 = '100'

console.log(numTest1 !== stringTest1)
console.log(numTest1 != stringTest1)

// Q3. You have:
// const userInput = "500";
// Convert it explicitly into a number and store it in price.

// ans:
const userInput = '500'
const userNumber = Number(userInput)

console.log(userNumber)

// Q4. You have:
// const age = 24;
// Convert it explicitly into a string and store it in ageText.

//ans: 
const age7 = 24;
const ageText7 = String(age7)

console.log(ageText7)

// Q5. Industrial scenario
// An API gives you:
// const productPrice = "499";
// const quantity = 2;
// Convert productPrice into a number and calculate the total price.

//ans:
const productPrice7 = '499'
const quantity7 = 2
const totalPrice7 = (Number(productPrice7))*quantity7

console.log(totalPrice7)


// JS-01 → Mixed Practical Coding
// Q1 — Shopping Cart
// const price = 1499;
// const quantity = 3;
// Calculate the total cost and store it in total.

//ans:
const price8 = 1499
const quantity8 = 3
const totalProduct8=price8*quantity8

console.log(totalProduct8)

// Q2 — Discount
// const price = 5000;
// const discount = 500;
// Calculate the final price after discount.
// Store it in finalPrice.

//ans:
const price9 = 5000;
const discount9 = 500;
const finalPrice9 = price9 - discount9

console.log(finalPrice9)

// Q3 — API Data
// An API sends:
// const priceFromAPI = "2499";
// const quantity = 2;
// Calculate the actual total price.
// The API value is a string, so handle it correctly.

//ans:
const priceFromAPI10 = "2499";
const quantity10 = 2;
const totalPrice10 = priceFromAPI10 * quantity10 

console.log(totalPrice10)

// Q4 — Wallet
// A user has:
// let wallet = 10000;
// They:
// 1. Spend ₹2500
// 2. Receive ₹1500
// 3. Spend ₹800
// Update wallet accordingly and print the final balance.

//ans:
let wallet11 = 10000;
wallet11-=2500;
wallet11+=1500;
wallet11-=800

console.log(wallet11)
// Q5 — Inventory
// let stock = 25;
// A store sells 7 products and receives a shipment of 15 products.
// Update the stock and print the final amount.

//ans: 
let stock11 = 25;
stock11-=7
stock11+=15

console.log(stock11)

// Q6 — User Input
// You receive:
// const userAge = "24";
// Convert it into the appropriate type and determine whether it represents age 24. 
// Use strict equality after conversion.

//ans:
const userAge11 = '24';
const userAge12 = Number(userAge11)

console.log(userAge12)
console.log(userAge11 === userAge12)

// Q7 — Boss Round
// A payment system receives:
// const amountFromAPI = "1500";
// const walletBalance = 2000;

// Implement code that:
// 1. Converts the API amount into the correct type.
// 2. Checks whether the wallet balance is sufficient.
// 3. If you're writing only the logic for now, don't use if yet — simply produce the boolean result of the comparison.

//ans:
const amountFromAPI = '1500'
const walletBalance = 2000

const convertedAmountFromAPI = Number(amountFromAPI)
console.log(typeof convertedAmountFromAPI)
console.log(walletBalance>=convertedAmountFromAPI) 


// JS-02: Functions, Parameters, Arguments, and return behavior

// boss round 
// Q1
// Create a function called:
// greetUser

// It should accept a name parameter and print:
// Hello Swarup

// when called with "Swarup".

//ans:
function greetUser(name){
    console.log("hello "+name)
}
greetUser('Swarup')

// Q2
// Create:
// calculateSquare

// It accepts a number and returns its square.
// Call it with 8 and store the returned value in a variable called result.
// Then print result.

//ans:
function calculateSquare(arm){
    return arm*arm
}

const square1Area = calculateSquare(8)
console.log(square1Area)
// Q3
// Create:
// calculateTotal

// It should accept:
// price
// quantity

// and return the total.
// Call it with:
// 799
// 4

// and print the returned value.

//ans:
function calculateTotalNew(priceNew, quantityNew){
    const totalNew = priceNew*quantityNew
    return totalNew
}
const finalCalculateTotalNew=calculateTotalNew(799,4)
console.log(finalCalculateTotalNew)

// Q4
// Create:
// calculateDiscountedPrice

// Parameters:
// price
// discount

// Return:
// price - discount

// Call it with:
// 5000
// 500

// and print the result.

//ans:
function calculateDiscountedPrice(priceNew1,discountNew1){
    return priceNew1 - discountNew1
}
const finalCalculateDiscountedPrice = calculateDiscountedPrice(5000,500)
console.log(finalCalculateDiscountedPrice)

// Q5 — Practical
// Create:
// calculateFinalPrice

// It should accept:
// price
// quantity
// deliveryFee

// Calculate:
// price × quantity + deliveryFee

// and return the final amount.
// Call it with:
// 1200
// 3
// 80

// Store the returned value in:
// finalPrice

// and print it.

//ans:
function newCalculateFinalPrice(newPrice, newQuantity, newDeliveryFee ){
    const newTotal = newPrice*newQuantity+newDeliveryFee;
    return newTotal;
}
const FinalNewTotal = newCalculateFinalPrice(1200, 3, 80)
console.log(FinalNewTotal)

// Once JavaScript executes return, the function stops executing.
// A function without return is undefined 
// Parameters are matched by position
// JavaScript allows you to call a function without supplying every argument.

// Q1 — Return
// Create:
// calculateDouble(number)

// It should return double the number.
// Call it with 25 and store the result in result.

//ans: 
function calculateDouble(number){
    return number*2
}
const newCalculateDouble = calculateDouble(25)
console.log(newCalculateDouble)

// Q2 — No return
// Create:
// showPrice(price)

// It should print:
// Price: 500

// Call it with 500.
// Then assign the result of calling the function to a variable called result.
// Print result.
// The goal is to observe the difference between printing and returning.

//ans:
function showPrice(price){
    return price
}
const resultNew = showPrice(500)
console.log(resultNew)

// Q3 — Multiple parameters
// Create:
// calculateBill(price, quantity, tax)

// Return:
// price × quantity + tax

// Call it with:
// price = 1000
// quantity = 3
// tax = 150

//ans:
function newCalculateBill(newPrice01,newQuantity01,newTax01){
    return newPrice01*newQuantity01+newTax01
}
const finalResult = newCalculateBill(1000, 3, 150)
console.log(finalResult)

// Q4 — Default parameter
// Create:
// calculateShippingCost(distance, rate = 10)

// Return:
// distance × rate

// Test it twice:
// calculateShippingCost(20)
// calculateShippingCost(20, 15)

//ans: 
function calculateShippingCost(distance, rate = 10){
    return distance*rate
}
const newCalculateShippingCost=calculateShippingCost(20)
const anotherNewCalculateShippingCost=calculateShippingCost(20, 15)

console.log(newCalculateShippingCost)
console.log(anotherNewCalculateShippingCost)


// Q5 — Practical scenario
// Create:
// calculateCartTotal(price, quantity = 1)

// Return the total.
// Test:
// calculateCartTotal(999)
// calculateCartTotal(999, 3)

// The first call should assume one item because no quantity was supplied.

//ans:
function calculateCartTotal(newPrice02, newQuantity = 1){
    const newAnotherTotal = newPrice02*newQuantity
    return newAnotherTotal
}

const newAnotherTotal01 = calculateCartTotal(999)
const newAnotherTotal02 = calculateCartTotal(999, 3)

console.log(newAnotherTotal01)
console.log(newAnotherTotal02)


//EXPRESSION
// Q1 — Greeting
// Create a function expression:
// greetUser(name)

// It should print:
// Hello, Swarup

// when called with "Swarup".

//ans: 
const greetUser03 = function(newName03){
    return newName03
};
console.log('Hello '+greetUser03('Swarup'))
// Q2 — Square
// Create:
// calculateSquare(number)

// It should return the square.
// Example:
// calculateSquare(7)

// should return 49.

//ans:
const calculateSquare03 = function(number03){
    return number03*number03
}
console.log(calculateSquare03(7))

// Q3 — Cart total
// Create:
// calculateTotal(price, quantity)

// Return:
// price × quantity

// Test it with:
// price = 250
// quantity = 4

//ans:
const calculateTotal03 = function(newPrice03, newQuantity03){
    return newPrice03*newQuantity03
}
console.log(calculateTotal03(250,4))
// Q4 — Final price
// Create:
// calculateFinalPrice(price, quantity, deliveryFee)

// Return:
// price × quantity + deliveryFee

// Test:
// price = 500
// quantity = 3
// deliveryFee = 50

//ans:
const calculateFinalPrice04 = function(newprice04, newquantity04, newdeliveryFee05){
    return newprice04* newquantity04+ newdeliveryFee05
};
console.log(calculateFinalPrice04(500,3,50))

// Q5 — Industrial-style
// Create:
// calculateSalary(basicSalary, bonus)

// Return the employee's total salary:
// basicSalary + bonus

// Test:
// basicSalary = 30000
// bonus = 5000

//ans:
const calculateSalary05 = function(basicSalary05, bonus05){
    return basicSalary05+ bonus05
};
console.log(calculateSalary05(30000,5000))

// arrow function
// Q1
// function greetUser(name) {
//     return "Hello " + name;
// }

//ans:
const greetUser07 = (name08)=>{
    return 'hello '+name08
}
console.log(greetUser07('Swarup'))

// Q2
// function calculateSquare(number) {
//     return number * number;
// }

//ans:
const calculateTotal07 = (price07, quantity07) => {
    return price07 * quantity07;
}
console.log(calculateTotal07(30,4))
// Q3
// function calculateTotal(price, quantity) {
//     return price * quantity;
// }

//ans:
const calculateTotal08 = (price08, quantity08)=> {
    return price08 * quantity08;
}
console.log(calculateTotal08(560, 4))

// Q4
// function calculateFinalPrice(price, quantity, deliveryFee) {
//     return price * quantity + deliveryFee;
// }
//ans:
const calculateFinalPrice09 = (price09, quantity09, deliveryFee09)=> {
    return price09 * quantity09 + deliveryFee09;
}
console.log(calculateFinalPrice09(5000,5,50))

// Q5 — Industrial-style
// Create an arrow function:
// calculateNetSalary(grossSalary, tax)

// It should return:
// grossSalary - tax

//ans:
const calculateNetSalary10 = (grossSalary, tax)=>{
    const originalSalary =  grossSalary- tax
    return originalSalary
}
console.log(calculateNetSalary10(50000, 5000))

// callback
// Q1
// Create:
// greetUser(name)

// which prints "Hello " + name.
// Then create:
// processUser(name, callback)

// which calls the callback with the name.
// Call it using greetUser as the callback.

//ans:
function greetUser09(name09){
    console.log('hello ',name09)
}
function processUser09(name09,callback01){
    callback01(name09)
}
processUser09('Swarup',greetUser09)

// Q2
// Create:
// calculateTotal(price, quantity, callback)

// Calculate the total and pass it to the callback.
// Create another function:
// displayTotal(total)

// which prints:
// Total: 2000

// when the calculation is 500 × 4.

//ans:
function calculateTotal10(price10, quantity10, callback10){
    const afterCalculate10 = price10* quantity10
    callback10(afterCalculate10)
}
function showTotal10(afterCalculate10){
    console.log('Total: ',afterCalculate10)
}
calculateTotal10(500, 4, showTotal10)

// Q3
// Create:
// calculateDiscount(price, discount, callback)

// Calculate:
// price - discount

// and pass the result to the callback.
// Use another function to print the final price.

//ans:
function calculateDiscount11(price11, discount11, callback11){
    const newCalculation11 = price11 - discount11
    callback11(newCalculation11)
}
function finalPrice11(amount){
    console.log('Final price of the Product: ',amount)
}
calculateDiscount11(6000, 400, finalPrice11)

// Q4 — Callback with arrow function
// Create:
// calculateTotal(price, quantity, callback)

// Use an arrow function for calculateTotal.
// Then call it with:
// 500, 3

// and pass an arrow function as the callback that prints:
// Total: 1500

//ans:
const calculateTotal12 = (price12, quantity12, callback12)=>{
    const finalCalculation12 = price12 * quantity12
    callback12(finalCalculation12)
}
const finalResult12 = amount12=>{
    console.log('Total: ',amount12)
}
calculateTotal12(500, 3, finalResult12)
// Q5 — Discount
// Create:
// calculateDiscountedPrice(price, discount, callback)

// Use an arrow function.
// Calculate:
// price - discount

// Then pass the result to a callback that prints:
// Final Price: ...

//ans:
const calculateDiscountedPrice13 = (price13, discount13, callback13)=>{
    const finalCalculateDiscountedPrice13 = price13- discount13
    callback13(finalCalculateDiscountedPrice13)
}
const finalPrice13 = amount13 =>{
    console.log("final price: ",amount13)
}
calculateDiscountedPrice13(5000, 450, finalPrice13)

// Q6 — Salary
// Create:
// calculateSalary(basicSalary, bonus, callback)

// Calculate the salary and pass it to a callback.
// Use:
// basicSalary = 30000
// bonus = 5000

//ans:
const calculateSalary14 = (basicSalary14, bonus14, callback14)=>{
    const finalTotal14 = basicSalary14 + bonus14
    callback14(finalTotal14)
}
const totalSalary14 = amount14=>{
    console.log("Total salary: ",amount14)
}
calculateSalary14(30000, 5000, totalSalary14)

// Q7 — Industrial scenario
// Create:
// processOrder(price, quantity, deliveryFee, callback)

// Calculate:
// price × quantity + deliveryFee

// Then pass the final amount to the callback.
// The callback should print:
// Order processed. Final amount: ...

// Use arrow functions throughout.

const processOrder15 = (price15, quantity15, deliveryFee15, callback15)=>{
    const calculate15 = price15 * quantity15 + deliveryFee15
    callback15(calculate15)
};
const finalTotal15 = amount15=>{
    console.log("Total Price: ", amount15)
}
processOrder15(50000, 30, 450, finalTotal15)

// JS-03.1 — Scope.
// Because JavaScript looks for the variable in the current scope, and if it doesn't find it, it searches the surrounding outer scope.
// A variable declared inside a function belongs to that function's scope:

// Q1
// Write code where:
// globalName = "Swarup"
// is declared globally.
// Create a function greetUser() that prints it.

//ans :
const globalName = 'Swarup'
const greetuser15 = name15=>{
    console.log(name15)
}
greetuser15(globalName)
// Q2
// Create:
// function calculateSalary() {
//     const salary = 50000;
// }
// Then try to print salary outside the function.
// Tell me what happens and why.

//ans:
// function calculateSalary15() {
//     const salary15 = 50000;

// }
// console.log(salary15)

// Q3
// Create:
// const company = "TechCorp";

// function employee() {
//     const name = "Swarup";

//     function introduce() {
//         console.log(company);
//         console.log(name);
//     }

//     introduce();
// }

// Before running it, explain the scope chain for introduce().

//ans:
const company = "TechCorp";

function employee() {
    const name = "Swarup";

    function introduce() {
        console.log(company);
        console.log(name);
    }

    introduce();
}
employee()

// Q4 — Coding
// Create:
// globalTax = 10

// Then create:
// calculatePrice(price)

// Inside the function, calculate:
// price + globalTax

// Do not pass globalTax as a parameter. The point is to demonstrate that the function can access a variable from its outer/global scope.

//ans:
const globalTax16 = 10 
const calculatePrice16 = (price16,callback16)=>{
    const totalPrice16 = price16+globalTax16;
    callback16(totalPrice16);
}
const finalPrice16 = amount16=>{
    console.log('Total price:',amount16)
}
calculatePrice16(300, finalPrice16)

// When JavaScript needs a variable, it searches the current scope and then progressively searches outward through the scope chain.

//lexical scope block scope

// Q1
// What will each console.log() access?
// const name = "Global";

// if (true) {
//     const name = "Block";
//     console.log(name);
// }

// console.log(name);

// Explain why.

//ans:
//     block scoped console.log(name); will access 'block', 
// global scoped console.log(name); will access 'global'



// Q2
// Write code with:
// global variable → company
// function → employee
// inner function → introduce

// Make introduce() successfully access both company and an employee variable.

//ans:
const newVar = 'company';
const employee01=() =>{
    const newChar = 'Swarup'
    const introduction=()=>{
        console.log("Organisation:",newVar)
        console.log("employee name:",newChar)
    }
    introduction();
}
employee01();

// Q3
// Create two functions:
// function first() {
//     const message = "Hello";
// }

// function second() {
//     console.log(message);
// }

// Explain why second() cannot access message.

//ans:
// second() cannot access message because it is outside of the first() function 

// Q4 — Coding
// Create:
// const tax = 10;

// function calculatePrice(price) {
//     const discount = 50;

//     // create an inner function here
// }

// Make the inner function print all three values:
// price
// discount
// tax

// Don't use parameters for discount or tax.

//ans:
const tax04 = 10;
function calculatePrice18(price18){
    const discount18 = 50;
    function finalValue18(){
        console.log('price: ',price18)
        console.log('discount: ',discount18)
        console.log('tax: ',tax04)
    }
    finalValue18();
}
calculatePrice18(300);


// JS-03.2 — Execution Context
// const company = "TechCorp";

// function employee(name) {
//     const role = "Developer";
//     const message = name + " is a " + role;

//     console.log(message);
// }

// employee("Swarup");
// Q1. What execution context exists before employee() is called?

//ans:
//global


// Q2. When employee("Swarup") runs, what new execution context is created?
//ans:
//function execution context

// Q3. What values do these have inside that function context?
// name: 'swarup'
// role: "Developer"
// message: undefined is a developer 


// Q4. Is company stored inside the employee function's local variables? If not, how can the function access it?

//ans:
// not stored but it can accesss it because of comapny exists in global context and global scope, variables inside  employee function went for global scope to access it since it has nothing inside the local scope to access

// Q5. What happens conceptually when employee() finishes?
//ans 
// starts with global execution context when created . then function execution context when employee() was called then it simply executed the code 


function first() {
    console.log("First");
}

function second() {
    first();
    console.log("Second");
}

function third() {
    second();
    console.log("Third");
}

third();

console.log("Global");
// Q1: Write the Call Stack after third() is called.
//ans: third () will search execution context in second (), then second () will search execution context in first() so first will print then second then third then global context will execute 

// Q2: Write the stack when first() is executing.
//ans: 

// Q3: Write the stack after first() finishes.
//ans:

// Q4: Write the stack after second() finishes.
//ans:

// Q5: Write the final output.
//ans: first -> second -> third -> global

const tax = 10;

function calculate(price) {
    const discount = 50;
    const finalPrice = price - discount + tax;

    console.log(finalPrice);
}

calculate(500);
// 1. During the Global Creation Phase, what declarations does JavaScript prepare?
//ans: tax and calculate

// 2. During the Global Execution Phase, what happens first?
//ans: const tax = 10;

// 3. When calculate(500) is called, what new execution context is created?
//ans: after value assigned to tax , calculate(500) is called then calculate()will be created 
// 4. In that function context, what is the value of price?
//ans: 500
// 5. What happens during the function's execution phase?
//ans: tax = 10;, then call calculate() then function execution context then creation then execution phase then discount = 50 ,price = 500,  final price = 460

console.log(age19);

var age19 = 24;

console.log(age19);

// 1. What happens during Creation Phase?
//ans: during creation phase age = undefined

// 2. What does the first console.log(age) print?
//aNS :  UNDEFINED
// 3. What happens when age = 24 executes?
//ans : console.log(age) new global context created 
// 4. What does the second console.log(age) print?
//ans : 24

// console.log(a);
// var a = 10;

// console.log(b);
// let b = 20;

// console.log(c);
// const c = 30;
// 1.What happens with a?

//ans: undefined

// 2.What happens with b?
//ans: reference error
// 3.What happens with c?
//ans: reference error

// 4.Why is var different from let and const?
// ans : initialize with undefined where as let and const in TDZ

//closure
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    return increment;
}

const counter = createCounter();

counter();
counter();
counter();

//closure
function createScore() {
    let score = 0;

    return function increaseScore(points) {
        score += points;
        console.log(score);
    };
}
const finalScore = createScore();
finalScore(10);
finalScore(20);
finalScore(5);

//closure
function createScoreNew() {
    let scoreNew = 0;

    return function increaseScoreNew(points) {
        scoreNew += points;
        console.log(scoreNew);
    };
}

const player1 = createScoreNew();
const player2 = createScoreNew();

player1(10);
player1(20);

player2(50);  //independent private state 
player1(5);   //separate lexical environment

//closuer boss round
function createUser20(){
    let username20 = '';
    let loginCount20 = 0;
    return{
        logIn20(name20){
        username20 = name20
        loginCount20++;
        console.log(username20,"Logged in.")
        
    },

    getLoginCount20(){
        return loginCount20
    }
}
}
const user20 = createUser20()

user20.logIn20('Swarup')
user20.logIn20('Sam')

console.log(user20.getLoginCount20())

//arrays
// An array is an ordered collection of values. Each value has a numeric index, starting from 0.
// The number of elements is available through .length:
// push() adds to the end:
// pop() removes the last element:
// pop() also returns the removed value:

//prices = [100, 250, 500]

// 1. Change 250 to 300.
//ans:

const pricesArray = [100, 250, 500];
pricesArray[1] = 300;
console.log(pricesArray)

// 2. Add 750 using push().

//ans:
pricesArray.push(750)
console.log(pricesArray)


// 3. Remove the last element using pop().

//ans:
//pricesArray.pop()

// 4. Store the removed value in a variable.

//ans:
const poppedValue = pricesArray.pop()

// 5. Print the final array.
//ans: 
console.log(pricesArray)

// 6. Print the removed value.
//ans:
console.log(poppedValue)

// 7. Print the length of the final array.
//ans:
console.log(pricesArray.length)

// shift() removes the first element.
// unshift() adds an element to the beginning.

const queueOld = ["Swarup", "Sam", "Alex"];
// 1. Add "John" to the end.

//ans:
queueOld.push('John')
console.log(queueOld)

// 2. Remove the first person and store the removed value.

//ans:
const queueNew = queueOld.shift()

// 3. Add "Rahul" to the beginning.

//ans:
queueOld.unshift('Rahul')

// 4. Remove the last person and store the removed value.

//ans:
const queueNew1= queueOld.pop()

// 5. Print the final queue.

//ans:
console.log(queueOld)
// 6. Print both removed values.

//ans:
console.log(queueNew)
console.log(queueNew1)

// for loop
const salariesArray = [25000, 35000, 45000, 55000];


// 1. Print every salary.
//ans:
for(let i = 0; i<=salariesArray.length; i++ ){
    console.log(salariesArray[i])
}
// 2. Print every salary after adding 5000.
for(let i =0; i<salariesArray.length;i++){
			console.log(salariesArray[i]+5000)}
// 3. Calculate the total salary.
let total21 = 0;

for (let i = 0; i < salariesArray.length; i++) {
    total21 = total21 + salariesArray[i];
}

console.log(total21);

const marks = [45, 72, 88, 31, 95, 64];
// Print every mark.
// Count how many marks are >= 50.
// Calculate the total of all marks.
// Calculate the average.

const marks22 = [45, 72, 88, 31, 95, 64];

for (let i = 0; i < marks22.length; i++) {
    console.log(marks22[i]);
}

let passCount22 = 0;

for (let i = 0; i < marks22.length; i++) {
    if (marks22[i] >= 50) {
        passCount22++;
    }
}

let total22 = 0;

for (let i = 0; i < marks22.length; i++) {
    total22 = total22 + marks22[i];
}

console.log("Passed:", passCount22);
console.log("Total:", total22);
console.log("Average:", total22 / marks22.length);

//Array References
const employees22 = ["Swarup", "Sam", "Alex"];

const backupEmployees22 = employees22;

backupEmployees22.push("Rahul");
backupEmployees22[0] = "John";

console.log(employees22)
console.log(backupEmployees22)

// JS-04.3: spread operator

const original23 = [10, 20, 30];

const copy23 = [...original23];

copy23.push(40);
copy23[0] = 100;

// 1. What is original?
//ans: 

console.log(original23)

// 2. What is copy?
//ans:

console.log(copy23)

// 3. Why didn't modifying copy modify original?

//ans: because here copy is a shallow copy of original here and modifying copy wont change anything

// Objects
// Objects store data as key-value pairs.
// Dot notation is generally preferred when you know the property name.
const employee25 = {
    name: "Swarup",
    age: 24,
    department: "Engineering"
};

// 1. Print the employee's name.
//ans:
console.log(employee25.name) //accessing a property

// Change age to 25.
//ans:
employee25.age = 25
console.log(employee25.age)  //changing a property

// Change department to "AI Engineering".
//ans:
employee25.department = 'AI Engineering'
console.log(employee25.department)

// Add salary: 60000.
//ans:
employee25.salary = 6000

// Add location: "Bhubaneswar".
//ans:
employee25.location = 'Bhubaneswar'
console.log(employee25.location)

// Delete location.
//ans:
delete employee25.location

// Print the final object.
console.log(employee25)

// Object References
const user26 = {
    name: "Swarup",
    age: 24
};

const user27 = user26;

user27.age = 25;

console.log(user26.age);

//user26 and user27 contains the reference of the same object 

const user28 = {
    name: "Swarup",
    age: 24,
    role: "Developer"
};
// Change user29.age to 25
//ans:
const user29 = {...user28}
user29.age = 25

// Change user29.role to "AI Engineer"
//ns:
user29.role = 'AI Engineer'

// Print both objects
//ans:
console.log(user28)
console.log(user29)

//shallowcopy trap
const user30 = {
    name: "Swarup",
    address: {
        city: "Bhubaneswar"
    }
};

const user31 = {...user30}
user31.name = 'Sam'
user31.address.city = 'hyderabad'
console.log(user31)
console.log(user30)  //both object refers to the same nested address object 

//Object spread creates a shallow copy. It creates a new outer object, but nested objects are still referenced rather than recursively copied.


//Object Traversal & Destructuring

const employee32 = {
    name32: "Swarup",
    age32: 24,
    department32: "AI Engineering",
    salary32: 60000
};

// Destructure name and salary.
//ans :
const { name32, salary32 }= employee32

// Destructure department, but store it in a variable called team.
//ans:
const { department32:team32 } = employee32

// Print all three variables.
//ans:
console.log(name32)
console.log(salary32)
console.log(team32)

//map
const products33 = [
    { name: "Laptop", price: 70000 },
    { name: "Mouse", price: 1500 },
    { name: "Keyboard", price: 3000 }
];

const result33 = products33.map((product33)=>{
    return product33.name
})
console.log(result33)

//map2
const employees34 = [
    { name: "Swarup", salary: 50000 },
    { name: "Sam", salary: 60000 },
    { name: "Alex", salary: 70000 }
];
// Use map() to create a new array containing the salaries after a 10% raise.

const salary34 = employees34.map((employee34)=>{
    return employee34.salary+(employee34.salary*(10/100))
})
console.log(salary34)

//map3
const employees35 = [
    { name: "Swarup", salary: 50000 },
    { name: "Sam", salary: 60000 },
    { name: "Alex", salary: 70000 }
];

//Create a new array of employee objects where every employee gets a 10% salary increase.

const newEmployee35 = employees35.map(employee35=>({
    name: employee35.name,
    salary: employee35.salary+employee35.salary*(10/100)
}))
console.log(newEmployee35)

//filter
//filter() keeps elements that satisfy a condition and removes the rest.
const products36 = [
    { name: "Laptop", price: 70000 },
    { name: "Mouse", price: 1500 },
    { name: "Keyboard", price: 3000 },
    { name: "Monitor", price: 25000 }
];
// Use filter() to create a new array containing only products whose price is greater than ₹5,000.
const filteredProduct36 = products36.filter((product36)=>{
     return product36.price>5000
})
console.log(filteredProduct36)

//filter1
const employees37 = [
    { name: "Swarup", salary: 50000, experience: 2 },
    { name: "Sam", salary: 80000, experience: 5 },
    { name: "Alex", salary: 60000, experience: 3 },
    { name: "John", salary: 45000, experience: 1 }
];

// Create a new array containing employees who have:
// salary >= 60000
// AND
// experience >= 3

const filteredEmployee37 = employees37.filter((employee37)=>{
    return employee37.salary>=60000 && employee37.experience>=3
})
console.log(filteredEmployee37)

//reduce
// reduce() → combine elements into one final result
// const result = array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);

const expenses38 = [1200, 500, 2500, 800, 1500];
// Use reduce() to calculate the total expenses.

const totalExpenses38 = expenses38.reduce((totalExpense38, expense38)=>{
    return totalExpense38+expense38
},0)
console.log(totalExpenses38)

//reduce 2
const employees39 = [
    { name: "Swarup", salary: 50000 },
    { name: "Sam", salary: 60000 },
    { name: "Alex", salary: 70000 }
];
// Calculate the total salary expense using reduce()

const totalExpenses39 = employees39.reduce((total39, expense39)=>{
    return total39+expense39.salary
},0)
console.log(totalExpenses39)

//combine
const employees40 = [
    { name: "Swarup", salary: 50000 },
    { name: "Sam", salary: 80000 },
    { name: "Alex", salary: 60000 },
    { name: "John", salary: 45000 }
];
//The company wants the total salary expense only for employees earning ₹60,000 or more.
const totalSalaryExpenses40 = employees40.filter((employee40)=>{
    return employee40.salary>=60000
}).reduce((total40, expense40)=>{
    return total40+expense40.salary
},0)
console.log(totalSalaryExpenses40)

//boss round
const products41 = [
    { name: "Laptop", price: 70000, stock: 5 },
    { name: "Mouse", price: 1500, stock: 0 },
    { name: "Keyboard", price: 3000, stock: 10 },
    { name: "Monitor", price: 25000, stock: 3 }
];
//Create a new array containing only products that are currently in stock.
const stockedProducts41 = products41.filter((product41)=>{
    return product41.stock!=0
})
console.log(stockedProducts41)

//challenge - 2 : Using the same products array, create a new array containing:
// Product name + price

const newArray41 = stockedProducts41.map((stocked41)=>{
    return `${stocked41.name} - ${stocked41.price}`
})
console.log(newArray41)

//challenge-3 : Calculate the total inventory value.
const finalInventory41 = products41.reduce((total41,product41)=>{
    return total41+product41.price*product41.stock
},0)

console.log(finalInventory41)


//challenge 4: What is the total inventory value of products that have at least 3 units in stock?

const totalInventory41 = products41.filter((product41)=>{

    return product41.stock>=3

}).reduce((total41,product41)=>{
    return total41+product41.price*product41.stock
},0)

console.log(totalInventory41)

// JS-05.1 — this
// this refers to the object that is the receiver of the method call.

//this
const employee42 = {
    name: "Swarup",
    department: "AI Engineering",

    showDetails() {
        // use this
        console.log(this.name)
        console.log(this.department)
    }
};
employee42.showDetails();

//this 2
const employee43 = {
    name: "Alex",
    department: "Backend Engineering",

    showDetails() {
        // use this
        console.log(this.name)
        console.log(this.department)
    }
};
employee43.showDetails();

//this 3
const employee44 = {
    name: "Swarup",

    showName() {
        const printName = () => {
            console.log(this.name);
        };

        printName();
    }
};

employee44.showName();

// employee44.showName() → because it is called as a method, this inside showName is employee44.

// printName is an arrow function.

// Arrow functions do not create their own this.

// Therefore printName captures the this from its surrounding showName function.

// this 4
// Create an object called user with:
// - name: "Alex"
// - a regular method showName()
// - inside showName(), create an arrow function printName
// - printName should print the user's name using this
// - call showName()

const user45 ={
    name: 'Alex',

    showName(){
        const printName=()=>{
            console.log(this.name)
        }
        printName();
    }
};
user45.showName();

// this 5
// Create an object `employee`:

// name: "Swarup"
// department: "AI Engineering"

// Create a method `showDetails()`.

// Inside it:
// - create an arrow function called `display`
// - `display` should print both `this.name` and `this.department`
// - call `display()`

// Then call `employee.showDetails()`.

const employee46 ={
    name: 'Swarup',
    department: "AI Engineering",

    showDetails(){
        const display=()=>{

            console.log(this.name)
            console.log(this.department)

        }
        display();
    }
};
employee46.showDetails();

// Arrow function → doesn't create its own this; inherits it.
// Regular function → has its own this; the call-site determines it.

// const employee47 = {
//     name: "Swarup",

//     showName() {
//         function printName() {
//             console.log(this.name);
//         }

//         printName();
//     }
// };

// employee47.showName();

// regular , arrow this
const user48 = {
    name: "Swarup",
     
    showName(){
    function regularFunction() {
        console.log(this.name);
    }
    regularFunction();

    const arrowFunction =() => {
        console.log(this.name);
    }
    arrowFunction();
}
};
user48.showName()

//this 6

// Create two objects: userA and userB.
// Both should have a name.
// Create one regular function called showName that prints this.name.
// Call showName in such a way that it prints userA's name.
// Then call the same function in such a way that it prints userB's name.

const userA49 ={
    name: 'Tina'

}
const userB49 = {
    name: 'Inna'
}

function showName49() {
    console.log(this.name)
}
userA49.showName49 = showName49;
userB49.showName49 = showName49;

userA49.showName49()
userB49.showName49() 


//extracting a method
const user50 = {
    name: "Swarup",

    showName() {
        console.log(this.name);
    }
};

const fn50 = user50.showName;

fn50();

// call()
//“Run this function with this object as this.”
const userA51 = {
    name: "Rina"
};

const userB51 = {
    name: "Enna"
};

function showName() {
    console.log(this.name);
}
showName.call(userA51);
showName.call(userB51);

//call()
// employeeA:
// name = "Swarup"
// department = "AI Engineering"

// employeeB:
// name = "Alex"
// department = "Backend Engineering"

// Create ONE function:
// showDetails()

// It should print:
// this.name
// this.department

// Use call() to execute the same function once for employeeA
// and once for employeeB.

const employeeA52 = {
    name: 'Swarup52',
    department: 'AI Engineering'
}

const employeeB52 = {
    name: 'Alex52',
    department: 'Backend Engineering'
}

function showDetails52(){
    console.log(this.name)
    console.log(this.department)
}

showDetails52.call(employeeA52)
showDetails52.call(employeeB52)

// call() with arguments
const employeeA53 = {

    name: 'Swarup53',
    department: 'AI Engineering53'

}

function introduction53(role, experience){

    console.log(this.name);
    console.log(this.department);
    console.log(role);
    console.log(experience);

}

introduction53.call(employeeA53,"ML engineering ", 2);


// apply()
// It immediately invokes a function and explicitly sets this.
// functionName.apply(thisObject, [argument1, argument2, ...]);

// employee:
// name = "Swarup"
// department = "AI Engineering"

// function showDetails(role, experience, location)

// call with 

// "Software Engineer"
// 2
// "Bhubaneswar"

// ans :
const employee54 = {
    name : 'Swarup54',
    department : 'AI Engineering54'
}
function showDetails54(role, experience, location){

    console.log(this.name)
    console.log(this.department)
    console.log(role)
    console.log(experience)
    console.log(location)

}

showDetails54.apply(employee54,["software developer",2,'bhubaneswar'])


// bind()
// bind()  → sets this → returns a new function

// employee:
// name = "Swarup"
// department = "AI Engineering"

// Create a regular function showDetails()
// that prints this.name and this.department.

// Use bind() to create a new function called
// boundShowDetails.

// Then execute boundShowDetails().

// ans: 
