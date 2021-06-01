// A closure is the combination of a function bundled together(enclosed) with references to its surrounding state(the lexical environment) In other words, a closure gives you access to an outer function'

function outerfunction() {
    var outerVariable = 100;
    function InnerFunction() {
        console.log(outerVariable);
    }
    return InnerFunction();
}
// var InnerFunc = outerfunction();
// InnerFunc();

function makerAdder(valueToAdd) {
    var basevalue = 10;

    function add(parameter) {
        return basevalue + valueToAdd + parameter;
    }
    return add();

}
var add5 = makerAdder(5);
console.log(add5(10));



