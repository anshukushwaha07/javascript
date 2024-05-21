const Marvel= ["Caption Amreica","Thor","IronMan"];
const Dc_Heros=["superMan","BatMan","Flash"];

// Marvel.push(Dc_Heros); //is will add new array inside array  to acces elememt in this [3][2];
// [
//   'Caption Amreica',
//   'Thor',
//   'IronMan',
//   [ 'superMan', 'BatMan', 'Flash' ]
// ]

// console.log(Marvel);

// const All_Heros = Marvel.concat(Dc_Heros);

// console.log(All_Heros);


const all_new_heros = [...Marvel , ...Dc_Heros];
console.log(all_new_heros);


//concat and spread both works same but using spread is good and easy 


const another_arrayt= [1,23,576,32,1,3,[34,6,4,5,3],8,4,[8,44,33,[8,35,32]],5];

const real_another_array= another_arrayt.flat(Infinity);

console.log(real_another_array);


console.log(Array.isArray("Anshu"));

console.log(Array.from("Anshu"));

const score1=100;

const score2=200;

const score3=300;

console.log(Array.of(score1,score2,score3));
