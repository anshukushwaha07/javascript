//const tinderUser =new Object() //decleration of object  this is singleton object 

const tinderUser={}  // this is also decleration of object  Non singleton obejct 

tinderUser.id=123
tinderUser.name="Sham"
tinderUser.loggedIn = false


//console.log(tinderUser);

const regularUser ={
    email:"hello@gmail.com",

    fullName:{
        userName:{
        firstName:"Anshu",
        lastName:"Kushwaha",
    }
}
}

//console.log(regularUser.fullName.userName);

const obj1={1:"a" , 2:"b"}
const obj2={3:"a" , 5 :"b"}
const obj4={6:"a", 7:"b"}

//const obj3={obj1,obj2} // here is the object of object is created as array if arrays 

//const obj3=Object.assign({},obj1,obj2,obj4) // combine in one object

const obj3 ={...obj1,...obj2,...obj4}  //spread operator 

//console.log(obj3);

const user =[
    {
        id:1,
        email:"hello@gmail.com"
    },
    {
        id:2,
        email:"hello@gmail.com"
    },
    {
        id:3,
        email:"hello@gmail.com"
    },
    {
        id:4,
        email:"hello@gmail.com"
    }
]

user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));  //result it will come in arrays forms 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // first : keys , second : values 

console.log(tinderUser.hasOwnProperty('loggedIn')) //return ture and false  for is use to check has there is property is exit or Not