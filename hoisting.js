// we can access the variable and functions  even before their initialization.

var var1="stringvalue";
var var2= "anothervalue";

//var stringArray=["1","2","3","4","5"];
var stringArray=[1,2,3,4,5];


function strcatFunc(str1, str2, str3)
{
    console.log(str1+str2+str3);
}

strcatFunc(stringArray);
{
    let scopeString="scopedstring";
    console.log(var3);
}
console.log(scopeString);
var var3="thirdvalue";
