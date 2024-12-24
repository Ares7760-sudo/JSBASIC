/* Day 1: var declare, datatype  
When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

Check datatype : typeof(a)
*/

var fullName = "Nguyen Anh Tho";
let a = 2;
let isSuccess = true;
var b;
var isNull = null; // Nothing

// symbol ???

// function type
var myFunction = function() {
    console.log("Hello everybody")
}

// object type
let myObject = {
    name: 'Anh Tho',
    age: 35,
    myfunction: myFunction
}


// array
let MyArr = ['Javascript', 'Python', 'C#', 'Java']

alert(fullName);
console.log(`I love "myself" and 'my pet'`)
console.log(typeof(isSuccess));
console.log(typeof(b));
console.log(typeof(isNull));

console.log("My object", myObject)
console.log("Programing language : ", MyArr)