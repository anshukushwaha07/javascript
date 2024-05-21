const promiseOne = new Promise(function(resolve,reject){
    setTimeout (function(){
        console.log('Async task is compelete');
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log("Promises Consumed ");
})


 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('asyn task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('promised consumed 2')
})


const PromiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve({username:"Hello", email:"itzanshu00@gmail.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const PromiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =  true //false
        if(!error){ 
            resolve({username:"Ansh", password:"123"})
        }
        else{
            reject('ERROR Something went Worng ')
        }
    },1000)
})

PromiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected ")
})


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({username:"javascript", password:"123"})
        }
        else{
           reject('ERROR : JS went wrong ')
        }
    },1000)
});

async function promiseConsumedFive(){
   try {
    const  response = await promiseFive
    console.log(response)
   } catch (error) {
      console.log(error)
   }
}

promiseConsumedFive()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {

//         console.log('E :', error)
        
//     }
// }

// getAllUser()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((error)=>
//     console.log('E :',error)
// )


function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 10000);
    });
  }
  
  async function f1() {
    const x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  
  f1();