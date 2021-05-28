//class
class car{
    name;
    model;
    enginePower;
    constructor(name, model, enginePower)
    {
        console.log("inside the constructor");
        console.log(this);
        this.name=name;
        this.model=model;
        this.enginePower=enginePower;
    }
    age()
    {
        console.log("inside age function");
        let date=new Date();
        return date.getFullYear() - this.model;
    }
}

//creating object for the above class

let myFord = new car("FordMustang", 1995, "2500cc");
console.log(myFord.age());
