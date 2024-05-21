//Date

let myDate =new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);

//let myCreatedDate= new Date(2023,0,23)
let myCreatedDate= new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let myCreatedDateone= new Date("2023-01-13")
console.log(myCreatedDateone.toLocaleString());

let myTimeStamp =Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let NewDate = new Date();
console.log(NewDate);
console.log(NewDate.getMonth());
console.log(NewDate.getDay());


//`${newDate.getDay()} and the time`

NewDate.toLocaleString('default',{
    weekday:"long",
    //timeZone:"GMT"
})