// ### REACT
//Q80:      When I click the Toggle button on user id 2, make active become true. If it was true, make it false.
//Api response
const [users80, setUsers80] = useState([

 {id:1,name:"Swarup",active:true},

 {id:2,name:"Rahul",active:false},

 {id:3,name:"Amit",active:true}

]);

//my code
const clickId80 = 2
setUsers80(users80.map((details80)=>{
    if(details80.id==clickId80){
        return{
            ...details80,
            active:!details80.active
        }
    }
    return details80
}))