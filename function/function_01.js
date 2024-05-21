function sumNumber (number1, number2){
if(typeof number1==Number )  {
    if(typeof number2== Number)
      console.log(number1+number2);  
}  

}
// let a = prompt("Enter a number")
// let b = prompt("Enter a number")

//sumNumber(a,b);



function user(userName){

    if(userName==undefined){
        console.log("Please Enter userName ");
        return
    }

    return `${userName} just loged in `

}

console.log(user("Anshu"));