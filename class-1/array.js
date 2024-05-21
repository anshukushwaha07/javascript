//Array 

const myArr=[0,1,2,3,4,5,6]
const myHero=["vcvckuhfc","nbcgbh"];

const myArr2 = new Array(1,2,3,4)

console.log(myArr[0]);


// Array Methods

myArr.push(5);
myArr.push(4);//insert element in last 

myArr.pop(); //delete elemt in last 

myArr.unshift(6);// shift from left to right and insert element in starting 

myArr.shift(); // delete first elemet in array and shift right to left 


myArr.includes(8) // return ture false if element exixst in Array
myArr.indexOf(3) // return index of element if not found return -1


//const mynewArray= new myArr.join();
//join convert Array to string and combinr array

// console.log(myArr);
// console.log(mynewArray);
// console.log(typeof mynewArray);


//slice,splice

console.log("A",myArr);
const mynew1=  myArr.slice(1,3);
console.log(mynew1);

console.log("B",myArr)

const mynew2 =  myArr.splice(1,3);
console.log(mynew2);

console.log("C",myArr)

//in slice and splice main diffrence  slice does not manipulate array and splice is mainipulate array 


