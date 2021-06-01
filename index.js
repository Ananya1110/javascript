console.log("hello world");
// let and const
// scope of variables 
var personName="ananya"
console.log(personName)
// var creates directly with global scope

// fuctions and arrow function
function sum(num1,num2)
{
    return num1+num2;
}
sum(30,50)
let result =sum(30,50);
console.log(result);
sum=(num1,num2)=>{
    return num1+num2;

}
console.log(result);
// destructuring objects
const player =
{
    name: " Lebron James" ,
    club:  'la Lakers',
    address:
    {
        city: ' los Angeles'
        
    }
};
// same console.log(player.address.city);
 const { name, club , address:{city}} = player;

 //console.log(`${name} plays for ${club}`);
 console.log(`${name}lives in ${city}`);
//object structuring allows you to grab these keys without having access to all the time the object name

