class Animal{
    constructor(name,legcount,speaks){
        this.name=name;
        this.legcount=legcount;
        this.speaks=speaks;
    }
    static myType(){
        ("Animal");
    }
    speak(){
        console.log("Hi there"+this.speaks);
    }
}

let dog=new Animal("dog",4,"bhow bhaow");
let cat=new Animal("cat",4,"meow meow");
cat.speak();
//console.log(dog);