// Destructuring object
const student = {
    name: "kyle",
    age: 24,
    projects: {
        diceGame: "two  player dice game using javascript"
    }
}
const { name, age, projects: { diceGame } } = student;
//console.log(`${name}${projects}`);
console.log(name);
console.log(age);
console.log(diceGame);

//Destructuring Arrays

let [FirstName, middleName] = ['Dylan', ' coding god', 'Israel'];
FirstName = 'clements'

console.log(FirstName)

// object literal //?

function addressMaker(city, state) {
    const newAdress = { city, State };
    console.log(newAddress);

}
addressMaker('Austin', 'Texas');

// Q
function addressMaker(address) {

}
const newAddress =
{
    city: address.city,
    state: address.state,
    country: 'united States'
};

addressMaker({ city })
//
