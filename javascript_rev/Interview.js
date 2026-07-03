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

//my code
const search = "a";
const result4 = newusers.filter((user)=>{
    return user.name.toLowerCase().includes(search.toLowerCase())
})

console.log(result4)


//Q5:    Return only products that belong to the Electronics category.
//Api response
const products2 = [

 {id:1, name:"Laptop", category:"Electronics"},

 {id:2, name:"Shirt", category:"Fashion"},

 {id:3, name:"Phone", category:"Electronics"}

];

//my code
const result5 = products2.filter((product2)=>{
    return product2.category==="Electronics"
})
console.log(result5)


//Q6:     Return employees who work in IT department and have salary greater than 50000.
//Api response
const employees = [

 {id:1, name:"Swarup", department:"IT", salary:70000},

 {id:2, name:"Rahul", department:"HR", salary:80000},

 {id:3, name:"Amit", department:"IT", salary:40000},

 {id:4, name:"John", department:"IT", salary:90000}

];

//my code
const result6=employees.filter((employee)=>{
    return employee.department==="IT" && employee.salary>50000
})
console.log(result6)


//Q7:      Return students who have JavaScript as one of their skills.
//Api response
const students = [

 {id:1, name:"Swarup", skills:["JavaScript","React"]},

 {id:2, name:"Rahul", skills:["Python","Django"]},

 {id:3, name:"Amit", skills:["JavaScript","Node"]}

];

//my code
const result7 = students.filter((student)=>{
    return student.skills.includes("JavaScript")
})
console.log(result7)


//Q8:      Return only orders whose amount is between 1000 and 5000.
//Api response
const orders = [

 {id:1, amount:800},

 {id:2, amount:2500},

 {id:3, amount:7000},

 {id:4, amount:4000}

];

//mycode
const result8 = orders.filter((order)=>{
    return order.amount>=1000 && order.amount<=5000
})
console.log(result8)


//Q9:       Return users whose email contains gmail
//Api response
const users_3 = [

 {id:1, email:"swarup@gmail.com"},

 {id:2, email:"rahul@yahoo.com"},

 {id:3, email:"amit@gmail.com"}

];

//my code 
const searchMail='gmail'
const result9=users_3.filter((user)=>{
    return user.email.toLowerCase().includes(searchMail.toLocaleLowerCase())
})
console.log(result9)


//Q10:      "User clicked delete button. Remove the user with id 2.
//Api response
const users_10 = [

 {id:1, name:"Swarup"},

 {id:2, name:"Rahul"},

 {id:3, name:"Amit"}

];


const deleteId = 2;

//my code 
const result10 = users_10.filter((user10)=>{
    return user10.id !== deleteId
})
console.log(result10)


//Q11:      Return all movies that have rating above 8 and belong to the action genre.
//Api response
const movies = [

 {id:1, title:"Movie A", genre:"Action", rating:9},

 {id:2, title:"Movie B", genre:"Comedy", rating:9},

 {id:3, title:"Movie C", genre:"Action", rating:7},

 {id:4, title:"Movie D", genre:"Action", rating:8.5}

];

//my code
const result11=movies.filter((movie)=>{
    return movie.rating>8 && movie.genre==='Action'
})
console.log(result11)


//Q12:      Return employees who have React in their skills.
//Api response
const employees_12 = [

 {id:1, name:"Swarup", skills:["React","Node"]},

 {id:2, name:"Rahul", skills:["Java","Spring"]},

 {id:3, name:"Amit", skills:["React","Python"]}

];

//my code
const result12 = employees_12.filter((employee12)=>{
    return employee12.skills.includes("React")
})
console.log(result12)


//Q13:      From API response, remove all products that are out of stock.
//Api response
const products13 = [

 {id:1, name:"Laptop", stock:5},

 {id:2, name:"Mouse", stock:0},

 {id:3, name:"Phone", stock:10},

 {id:4, name:"Cable", stock:0}

];

//my code 
const result13 = products13.filter((product13)=>{
    return product13.stock !== 0
})
console.log(result13)


//Q14:      Return only transactions that are successful and amount is above 10000.
//Api response
const transactions = [

 {id:1, status:"success", amount:15000},

 {id:2, status:"failed", amount:20000},

 {id:3, status:"success", amount:5000},

 {id:4, status:"success", amount:30000}

];

//my code
const result14 = transactions.filter((transaction)=>{
    return transaction.status!=='failed' && transaction.amount>10000
})
console.log(result14)


//Q15:      Return users who live in Bhubaneswar.
//Api response
const users15 = [

 {
  id:1,
  name:"Swarup",
  address:{
      city:"Bhubaneswar"
  }
 },

 {
  id:2,
  name:"Rahul",
  address:{
      city:"Delhi"
  }
 },

 {
  id:3,
  name:"Amit",
  address:{
      city:"Bhubaneswar"
  }
 }

];

//my code
const result15 = users15.filter((user15)=>{
    return user15.address.city==='Bhubaneswar'
})
console.log(result15)


//Q16:      Return users who have a phone number.
//Api response 
const users16 = [

 {id:1, name:"Swarup", phone:"99999"},

 {id:2, name:"Rahul"},

 {id:3, name:"Amit", phone:"88888"}

];

//my code
const result16  = users16.filter((user16)=>{
    return user16.phone
})
console.log(result16)


//Q17:      Return products where category is Electronics and product name contains the search text.
//Api Response
const products17 = [

 {id:1, name:"Gaming Laptop", category:"Electronics"},

 {id:2, name:"Office Chair", category:"Furniture"},

 {id:3, name:"Laptop Charger", category:"Electronics"}

];


const search17 = "laptop";

//my code
const result17 = products17.filter((product17)=>{
    return product17.category==="Electronics"&&product17.name.toLowerCase().includes(search17.toLowerCase())
})
console.log(result17)


//Q18:     Remove duplicate users based on id.
//Api response 
 const users18 = [

 {id:1,name:"A"},

 {id:2,name:"B"},

 {id:1,name:"A"}

];

//my code
const result18 = users18.filter((user18,index18,array18)=>{
    return index18==array18.findIndex((individualItem)=>{
        return user18.id===individualItem.id
    })
})
console.log(result18)


//Q19:      Return only users whose role is admin and account is active.
//Api response
const users19 = [

 {id:1,name:"Swarup",role:"admin",active:true},

 {id:2,name:"Rahul",role:"user",active:true},

 {id:3,name:"Amit",role:"admin",active:false},

 {id:4,name:"John",role:"admin",active:true}

];

//my code
const result19 = users19.filter((user19)=>{
    return user19.role==='admin'&&user19.active
})
console.log(result19)


//Q20:     Return users from India who have JavaScript skill.
//Api response
const users20 = [

 {
  id:1,
  name:"Swarup",
  country:"India",
  skills:["JavaScript","React"]
 },

 {
  id:2,
  name:"Rahul",
  country:"India",
  skills:["Python"]
 },

 {
  id:3,
  name:"John",
  country:"USA",
  skills:["JavaScript"]
 }

];

//my code
const result20 = users20.filter((user20)=>{
    return user20.country==="India" && user20.skills.includes("JavaScript")
})
console.log(result20)


//Q21:      Return only tasks created after 2025.
//Api response
const tasks21 = [

 {id:1, title:"Task A", year:2024},

 {id:2, title:"Task B", year:2025},

 {id:3, title:"Task C", year:2026}

];

//my code
const result21  =   tasks21.filter((task21)=>{
    return task21.year>2025
})
console.log(result21)


//Q22:      Remove users whose profile is not created yet.
//Api response
const users22 = [

 {id:1, name:"Swarup", profile:{age:24}},

 {id:2, name:"Rahul", profile:null},

 {id:3, name:"Amit", profile:{age:30}}

];

//my code
const result22 = users22.filter((user22)=>{
    return user22.profile
})
console.log(result22)


//Q23:      Return only unread notifications.
//Api response
const notifications = [

 {id:1, message:"Hello", read:false},

 {id:2, message:"Update", read:true},

 {id:3, message:"Offer", read:false}

];

//my code
const result23 = notifications.filter((notification)=>{
    return !notification.read
})
console.log(result23)


//Q24:      Return products that are eligible for discount. Product is eligible if price is above 5000 OR it is a premium product.
//Api response
const products24 = [

 {id:1, name:"Laptop", price:60000, premium:false},

 {id:2, name:"Mouse", price:500, premium:false},

 {id:3, name:"Watch", price:3000, premium:true}

];

//my code
const result24 = products24.filter((product24)=>{
    return product24.price>5000 || product24.premium
})
console.log(result24)


//Q25:      Return users who have at least one order above 10000.
//Api response
const users25 = [

 {
  id:1,
  name:"Swarup",
  orders:[
    {amount:5000},
    {amount:20000}
  ]
 },

 {
  id:2,
  name:"Rahul",
  orders:[
    {amount:3000}
  ]
 }

];

//my code
const result25=users25.filter((user25)=>{
    return user25.orders.some((order)=>{
        return order.amount>10000
    })
})
console.log(result25)


//Q26:      Return users where every score is above 50.
//Api response
const users26 = [

 {
  id:1,
  name:"A",
  scores:[70,80,90]
 },

 {
  id:2,
  name:"B",
  scores:[90,40,100]
 }

];

//my code
const result26 = users26.filter((user26)=>{
    return user26.scores.every((score)=>{
        return score>50
    })
})
console.log(result26)


//Q27       Return courses that contain a student named Swarup.
//Api response
const courses27 = [

 {
  id:1,
  name:"React",
  students:[
    {name:"Swarup"},
    {name:"Rahul"}
  ]
 },

 {
  id:2,
  name:"Python",
  students:[
    {name:"Amit"}
  ]
 }

];

//my code
const searchName = "Swarup"
const result27 = courses27.filter((course27)=>{
    return course27.students.some((student)=>{
        return student.name===searchName
    })
})
console.log(JSON.stringify(result27))


//Q28       "Return teams where all members are active."
//Api response
const teams = [

 {
  id:1,
  name:"Frontend",
  members:[
    {name:"A", active:true},
    {name:"B", active:true}
  ]
 },

 {
  id:2,
  name:"Backend",
  members:[
    {name:"C", active:true},
    {name:"D", active:false}
  ]
 }

];

//my code
const result28 = teams.filter((team)=>{
    return team.members.every((member)=>{
        return member.active
    })
})
console.log(JSON.stringify(result28))


//Q29:      Return products that match selected category and are available in stock.
//Api response
const products29 = [

 {id:1,name:"Laptop",category:"Electronics",stock:10},

 {id:2,name:"Shirt",category:"Fashion",stock:20},

 {id:3,name:"Phone",category:"Electronics",stock:0}

];


const selectedCategory = "Electronics";

//my code
const result29 = products29.filter((product29)=>{
    return product29.category.toLowerCase().includes(selectedCategory.toLowerCase()) && product29.stock!==0
})
console.log(result29)


//Q30:      Return employees who are active, belong to IT department, and have at least one completed project.
//Api context
const employees30 = [

 {
  id:1,
  name:"Swarup",
  active:true,
  department:"IT",
  projects:[
    {name:"App", completed:true},
    {name:"Web", completed:false}
  ]
 },

 {
  id:2,
  name:"Rahul",
  active:true,
  department:"HR",
  projects:[
    {name:"HR Tool", completed:true}
  ]
 },

 {
  id:3,
  name:"Amit",
  active:true,
  department:"IT",
  projects:[
    {name:"API", completed:false}
  ]
 }

];

//my code
const result30 = employees30.filter((employee30)=>{
    return employee30.active && employee30.department==='IT' && employee30.projects.some((project)=>{
        return project.completed
    })
})
console.log(JSON.stringify(result30))


// #MAP GRIND

//Q1:       "Return only the names of all users.
//Api response
const users31 = [

 {id:1,name:"Swarup"},

 {id:2,name:"Rahul"},

 {id:3,name:"Amit"}

];


//my code
const result31 = users31.map((user31)=>{
    return user31.name
})
console.log(result31)


//Q2:     Return an array containing only product prices.
const products32 = [

 {id:1,name:"Laptop",price:60000},

 {id:2,name:"Mouse",price:500},

 {id:3,name:"Keyboard",price:2000}

];

//my code
const result32=products32.map((product32)=>{
    return product32.price
})
console.log(result32)


//Q3:       "Add 10% tax to every product price."
//Api response
const products33 = [

 {id:1,name:"Laptop",price:60000},

 {id:2,name:"Mouse",price:500}

];

//my code
const result33=products33.map((product33)=>{
    return  {
        ...product33,
        price: product33.price+(product33.price*(10/100))
    }
})
console.log(result33)


//Q4:       Convert all users to active users.
//Api response
const users34 = [

 {id:1,name:"Swarup",active:false},

 {id:2,name:"Rahul",active:false}

];

//my code
const result34=users34.map((user34)=>{
    return {
        ...user34,
        active: true                                                                                                                                       
    }
})
console.log(result34)


//Q5:       Increase every employee salary by 5000.
//Api response
const employees35 = [

 {id:1,name:"Swarup",salary:50000},

 {id:2,name:"Rahul",salary:60000}

];

//my code
const result35 = employees35.map((employee35)=>{
    return {
        ...employee35,
        salary :employee35.salary+5000
    }

    })
console.log(result35)


//Q6:       Add a new property role:'user' to every account.
//Api response
const accounts36 = [

 {id:1,name:"Swarup"},

 {id:2,name:"Rahul"}

];

//my code
const result36=accounts36.map((account36)=>{
    return{
        ...account36,
       // user :""
       role:"user"
    }
})
console.log(result36)


//Q7:      Change only the user with id 2 to active:true.
//Api response
const users37 = [

 {id:1,name:"Swarup",active:false},

 {id:2,name:"Rahul",active:false},

 {id:3,name:"Amit",active:false}

];

//my code
const result37=users37.map((user37)=>{
    if (user37.id===2){
        return {
            ...user37,
            active:true
        }
    }
    //
    return user37
})
console.log(result37)


//Q8:       Change only product id 3 price to 1000.
//Api response
const products38 = [

 {id:1,name:"Laptop",price:60000},

 {id:2,name:"Mouse",price:500},

 {id:3,name:"Cable",price:200}

];

//my code
const result38 = products38.map((product38)=>{
    if(product38.id===3){
        return {
            ...product38,
            price:1000
        }
    }
    return product38
})
console.log(result38)


//Q9:       Increase quantity by 1 only for cart item with id 2.
//Api response
const cart39 = [

 {id:1,name:"Laptop",quantity:1},

 {id:2,name:"Mouse",quantity:3},

 {id:3,name:"Keyboard",quantity:2}

];

//my code
const result39 = cart39.map((eachItem)=>{
    if(eachItem.id===2){
        return {
            ...eachItem,
            quantity:eachItem.quantity+1
        }
    }
    return eachItem
})
console.log(result39)


//Q10:      Convert every user's name to uppercase.
//Api responses
const users40 = [

 {id:1,name:"Swarup"},

 {id:2,name:"Rahul"},

 {id:3,name:"Amit"}

];

//my code
const result40 = users40.map((user40)=>{
    return {
        ...user40,
        name:user40.name.toUpperCase()
    }
})
console.log(result40)


//Q11:      Every employee receives a ₹2,000 bonus. Add a new property bonus with value 2000 to each employee
//Api response
const employees41 = [

 {id:1,name:"Swarup",salary:50000},

 {id:2,name:"Rahul",salary:60000},

 {id:3,name:"Amit",salary:70000}

];

//my code
const result41 = employees41.map((employee41)=>{
    return {
        ...employee41,
        bonus:2000
    }
})
console.log(result41)


//Q12 : Append "(Verified)" to the name of every verified user. Leave other users unchanged."

//Api response
const users42 = [

{id:1,name:"Swarup",verified:true},

{id:2,name:"Rahul",verified:false},

{id:3,name:"Amit",verified:true}

];

//My code
const result42 = users42.map((user42)=>{
if(user42.verified){
return {
...user42,
name:`${user42.name}(verified)`
}
}
return user42
})
console.log(result42)


//Q13:      Create a new array where every product has a new property discountedPrice, which is 20% less than the original price. Do not modify the original price.

//Api response
const products43 = [

 {id:1,name:"Laptop",price:50000},

 {id:2,name:"Mouse",price:1000},

 {id:3,name:"Keyboard",price:3000}

];

//my code
const result43 = products43.map((details43)=>{
    return{
        ...details43,
        discountedPrice:details43.price-(details43.price*(20/100))
    }
})
console.log(result43)


//Q44:      Increase every user's age by 1.
//Api response
const users44 = [

 {
  id:1,
  name:"Swarup",
  profile:{
    age:24
  }
 },

 {
  id:2,
  name:"Rahul",
  profile:{
    age:30
  }
 }

];

//my code
const result44 = users44.map((details44)=>{
    return{
        ...details44,
        // profile:details44.profile.map((detail44)=>{
        //     return{
        //         ...detail44,
        //         age:detail44.age+1
        //     }
        //     return detail44
        // })
        profile:{
            ...details44.profile,
            age:details44.profile.age+1
        }
    
    }
})
console.log(JSON.stringify(result44))


//Q45:      Increase every project's budget by ₹1000.
//Api response
const employees45 = [

 {
  id:1,
  name:"Swarup",
  projects:[
    {name:"App", budget:5000},
    {name:"Website", budget:8000}
  ]
 },

 {
  id:2,
  name:"Rahul",
  projects:[
    {name:"CRM", budget:6000}
  ]
 }

];

//my code
const result45 = employees45.map((employee45)=>{
    return  {
        ...employee45,
        projects:employee45.projects.map((details45)=>{
            return {
                ...details45,
                budget:details45.budget+1000

            }
        })
    }
})
console.log(JSON.stringify((result45)))


//Q46:      The user edited one project. Increase the budget of only the project named Website by ₹2000.
//Api response
const employees46 = [

 {
  id:1,
  name:"Swarup",
  projects:[
    {name:"App", budget:5000},
    {name:"Website", budget:8000}
  ]
 },

 {
  id:2,
  name:"Rahul",
  projects:[
    {name:"CRM", budget:6000}
  ]
 }

];

//my code
const result46 = employees46.map((outerDetails46)=>{
    
    return {
        ...outerDetails46,
        projects:outerDetails46.projects.map((innerDetail46)=>{
           if(innerDetail46.name==="Website"){ 
                 return {
                     ...innerDetail46,
                     budget:innerDetail46.budget+2000
                    }
            }
            return innerDetail46
        })
    }
})
console.log(JSON.stringify((result46)))


//Q47:      Calculate the total price of all products.
//Api response
const products47 = [

 {id:1,price:1000},

 {id:2,price:2000},

 {id:3,price:3000}

];

//my code
const result47 = products47.reduce((acc47,curr47)=>{
    return acc47+curr47.price
},0)
console.log(result47)


//Q48:      Calculate the total salary of all employees.
//Api response
const employees48 = [

 {id:1,salary:50000},

 {id:2,salary:60000},

 {id:3,salary:70000}

];

//my code
const result48 = employees48.reduce((acc48,curr48)=>{
    return  acc48+curr48.salary
},0)
console.log(result48)


//Q49:       "Find the total quantity of all cart items."
//Api response
const cart49 = [

 {id:1,quantity:2},

 {id:2,quantity:5},

 {id:3,quantity:1}

];

//my code
const result49 = cart49.reduce((acc49,curr49)=>{
    return acc49+curr49.quantity
},0)
console.log(result49)


//Q50:      "Count how many users are verified."
//Api response
const users50 = [

 {id:1,verified:true},

 {id:2,verified:false},

 {id:3,verified:true},

 {id:4,verified:true}

];

//my code
let count;
const result50 = users50.reduce((acc50,curr50)=>{
    if(curr50.verified===true){

        return acc50+1

    }
    return acc50
},0)
console.log(result50)


//Q51:          "Return an array containing only the names of verified users."
//Api response
const users51 = [

 {id:1,name:"Swarup",verified:true},

 {id:2,name:"Rahul",verified:false},

 {id:3,name:"Amit",verified:true}

];

//my code 
const result51 = users51.reduce((acc51,curr51)=>{
    if(curr51.verified){
        acc51.push(curr51.name)
    }
    return acc51
},[])
console.log(result51)

//other solution

// const users51 = [

//  {id:1,name:"Swarup",verified:true},

//  {id:2,name:"Rahul",verified:false},

//  {id:3,name:"Amit",verified:true}

// ];

// //mycode
// const result51 = users51.filter((userDetails51)=>{
//         return userDetails51.verified
// }).map((userDetails51)=>{
//         return userDetails51.name
// })
// console.log(result51)


//Q52:          Group employees by department.
//Api response
const employees52 = [

 {id:1,name:"Swarup",department:"IT"},

 {id:2,name:"Rahul",department:"HR"},

 {id:3,name:"Amit",department:"IT"},

 {id:4,name:"John",department:"Finance"}

];

//my code
const result52 = employees52.reduce((acc52, curr52)=>{
    if(!acc52[curr52.department]){
        acc52[curr52.department]=[]
    }
    acc52[curr52.department].push(curr52)
    return acc52
},{})
console.log(result52)


//Q53:          Find the employee with the highest salary.
//Api response
const employees53 = [

 {id:1,name:"Swarup",salary:50000},

 {id:2,name:"Rahul",salary:90000},

 {id:3,name:"Amit",salary:70000}

];

//my code
const result53 = employees53.reduce((acc53,curr53)=>{
    if(curr53.salary>acc53.salary){
        return curr53
    }
    return acc53
})
console.log(result53)


//practice:          find the greatest number betn 1 to 9
const arr_num=[]
for(let num = 0 ; num <= 9 ; num++){
    arr_num.push(num)
}
console.log(arr_num)
const greater=arr_num.reduce((acc_num,curr_num)=>{
    if(curr_num>acc_num){
        return curr_num
    }
    return acc_num
})
console.log(greater)


//Q54:         Count how many times each fruit appears.
const fruits54 = [

 "apple",

 "banana",

 "apple",

 "orange",

 "banana",

 "apple"

];

//my code
const result54 = fruits54.reduce((acc54,curr54)=>{
    acc54[curr54]=(acc54[curr54]||0)+1      //if(!acc54[curr54]){ acc54[curr54]=0 } acc54[curr54]++
    return acc54
},{})
console.log(result54)


//Q55:          Collect all skills from all users into one single array
//Api response
const users55 = [

 {
   id:1,
   skills:["JavaScript","React"]
 },

 {
   id:2,
   skills:["Node","MongoDB"]
 },

 {
   id:3,
   skills:["Python"]
 }

];

//my code 
const result55 = users55.reduce((acc55, curr55)=>{
    //return [...acc55,...curr55.skills]    
    acc55.push(...curr55.skills)
    return acc55
},[])
console.log(result55)


//Q56           Calculate the total amount of all orders across all users.
//Api response
const users56 = [

 {
   id:1,
   orders:[
     {amount:1000},
     {amount:2000}
   ]
 },

 {
   id:2,
   orders:[
     {amount:500},
     {amount:1500}
   ]
 }

];

//my code
// const result56 = users56.map((details56)=>{
//     return details56.orders.reduce((acc56,curr56)=>{
//         return {
            
//         }
//     },0)
// })
// console.log(result56)

//rectify:
const result56 = users56.reduce((acc56,curr56)=>{
    const orderTotal = curr56.orders.reduce((orderAcc56,orderCurr56)=>{
        return orderAcc56+orderCurr56.amount
    },0)
    return acc56+orderTotal
},0)
console.log(result56)


//Q57:          Find the average salary of all employees.
//Api response
const employees57 = [

 {id:1,name:"Swarup",salary:50000},

 {id:2,name:"Rahul",salary:60000},

 {id:3,name:"Amit",salary:70000}

];

//my code
const result57 = employees57.reduce((acc57,curr57)=>{
    return acc57+curr57.salary
},0)
const avg = result57/employees57.length
console.log(avg)


//Q58:          Calculate the total bill.
//Api response
const cart58 = [

 {id:1,name:"Laptop",price:50000,quantity:1},

 {id:2,name:"Mouse",price:1000,quantity:2},

 {id:3,name:"Keyboard",price:2000,quantity:3}

];

//my code
const result58 = cart58.reduce((acc58,curr58)=>{
    return acc58+(curr58.price*curr58.quantity)
},0)
console.log(result58)


//Q59:         Find the first inactive user
//Api response
 const users59 = [

 {id:1,name:"Swarup",active:true},

 {id:2,name:"Rahul",active:false},

 {id:3,name:"Amit",active:false}

];

//my code
const result59 = users59.find((user59)=>{
    return !user59.active
},{})
console.log(result59)

// One matching object:	    find() 
// All matching objects:    filter() 
// Transform every object:	    map() 
// One final value:	    reduce() 
// Check if at least one matches:	some() 
// Check if all match:	every() 


//Q60:          Display the names of only the active employees.
//api response
const employees60 = [

 {
   id:1,
   name:"Swarup",
   active:true,
   salary:60000
 },

 {
   id:2,
   name:"Rahul",
   active:false,
   salary:80000
 },

 {
   id:3,
   name:"Amit",
   active:true,
   salary:70000
 }

];
//my code
const result60=employees60.filter((employee60)=>{
    return employee60.active==true
}).map((employee60)=>{
    return employee60.name
})
console.log(result60)