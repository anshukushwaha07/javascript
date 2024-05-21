
//obj litreals

const sys=Symbol("key-1")
  
const info={

    name:"Anshu",
    "full name":"Anshu kushwaha",
    [sys]:"mykey1",
    email:"anshu@gmail.com",
    location:"Delhi",
    age:17,
    isloggedin :false,
    lastLoggedIn :["monday","Tuesday","wed"]


}

console.log(info.email);
console.log(info["email"]);
console.log(info["full name"]);
console.log(info[sys]);

//change value in object 

info.email="anshue31@AbortController.in"
console.log(info["email"]);
//freez the object 

// Object.freeze(info);

// console.log(info);

info.greeting = function(){
    console.log("Hello user !");
}
info.greetingTwo = function(){
    console.log(`Hello user !${this.name}`);
}
console.log(info.greeting());
console.log(info.greetingTwo());