// console.log("Hello world")
// console.log(a);

// var a=1;
// a=3;
// console.log(a);

// let firstname="Anshu";
// let age=20;
// let isMarried =false;

// console.log("This person name is " + firstname +" and their age is "+ age);

//Array 

// const age=[30,12,3,23,12,43,65];

// for(let i=0;i<age.length;i++){

//     if(age[i]%2==0){
//     console.log("age is that even "+age[i]);
//     }

// }

// const persons=["sumit ","divyank","abhishek","priya","amarjeet"]
// const gender=["male","male","male","female","male"]

// for(let i=0;i<persons.length;i++){

//     if(gender[i]=="male"){
//         console.log(persons[i]);
//     }
// }


// Array of objects 

// const Alluser=[
//     {
//     first:"anshu",
//     gender:"male"  },
// {
//     first:"priya",
//     gender:"female"},
// {
//     first:"sankalp",
//     gender:"male"
// },
// {
//     first:"anshika",
//     gender:"female"

// }

// ]

// for(let i=0;i<Alluser.length;i++){
//     if (Alluser[i]["gender"]=="male") {
//         console.log(Alluser[i]["first"])
//     }
// }

// function 

// function sum(a,b){
//     return a+b;
// }

// const value =sum(1,2);

// console.log(value);

// callback  function

// function calculate(a,b,arthimatic){
//     const result=arthimatic(a,b)
//     return result;
// }

// function sum(a,b){
//     return a+b;
// }

// const value=calculate(1,2,sum);
// console.log(value);

//Set TimeOut

function PausePrint(){
    console.log("Hello javascript ")
}

setTimeout(PausePrint,4*1000)