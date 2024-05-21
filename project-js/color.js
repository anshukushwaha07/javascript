const randomColor=function(){
    const hexcode='0123456789ABCDF'
    let color='#'
    for( let i=0;i<6;i++){
       color+=hexcode[Math.floor(Math.random()*16)]
    }
    return color;
}
let setIntervalid;
const startChangeColor=function(){
  if(!setIntervalid){
    setIntervalid =setInterval(changeBgColor,1000);
  }
    
    function changeBgColor(){
     document.body.style.backgroundColor= randomColor();
    }
}
const stopChangeColor=function(){
   clearInterval(setIntervalid);
   setIntervalid=null;
}



document.querySelector("#start").addEventListener
('click',startChangeColor)

document.querySelector("#stop").addEventListener
('click',stopChangeColor)