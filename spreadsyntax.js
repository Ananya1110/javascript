

console.log("hello from javascript");
console.log(this);

var stringfyArray =[1,2,3,4,5,6,7,8];

function strcatfunction(num1,num2,num3){
    console.log(num1+num2+num3);
}
strcatfunction(...stringfyArray);
let numberstore=[...numberstore,newNumber]
console.log(numberstore);

//run on browser console
let names=["Dave","john","philip"];
let newNames=["dane", "jack"];
names.push(newNames);
console.log(names);

let names=["Dave","john","philip"];
let newNames=["dane", "jack"];
names.push(newNames);
console.log(names);

let names=["Dave","john","philip"];
let newNames=["dane", "jack"];

names

newNames


newNames.forEach((name)=>{
    names.push(name);
});

names

//run on browser example 2
function sumFunc(...numbers){
    console.log(numbers)

}

sumFunc(...numbers){
    total=0;
    numbers.forEach(number=>{
        total=total+number;
    })
    console.log(total);
}
//undefined
sumFunc(1,2,7,5)
//15