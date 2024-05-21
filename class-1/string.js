const name="Ashu";
const value=76;


//console.log("name is"+name+"value of "+value);  this is old method 

console.log(`Name is ${name} and my repo count is ${value}`);

const GameName= new String("Anshu");


console.log(GameName[0]);

console.log(GameName.length)
console.log(GameName.toUpperCase());
console.log(GameName.charAt(4));
console.log(GameName.indexOf('u'))

const newString = GameName.substring(0,3);

console.log(newString);



const newStringOne = "ANh su ";

const anotherString=newStringOne.slice(1,4);
console.log(anotherString);

const newStringtwo = "   ANhsu   ";

console.log(newStringtwo.trim())

const url="https://Anshukushwaha%20learnjavaScript"

console.log(url.replace("%20",'-'));

console.log(url.includes("hello"));

console.log(newStringOne.split('-'))