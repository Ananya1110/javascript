//callbacks, promises and async/await
function sendBackTheSumToPrint(number1, number2, callback){
    let sum =number1+number2;
    callback(sum);
}

function logTheSum(sum){
    console.log(`sum is ${sum}`)
}
sendBackTheSumToPrint(10,20, logTheSum);

//another example for callbacks
//  program that shows the delay in execution

function greet(name, sayName) {
    console.log('Hello world');
    callback(name);
}
function sayName(name) {
    console.log('Hello' + ' ' + name);
}
// calling the function
setTimeout(greet, 2000, "john", sayName);