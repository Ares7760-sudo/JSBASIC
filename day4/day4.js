/*
Primitive datatype : Boolean(true or false), Number, BigInt, String, Symbol, and undefined
_ Boolean: các phép toán NOT, AND, and OR (the symbols !, && and || correspondingly)
_ Number: represents both real numbers (e.g. fractions) and integers.
allow for all typical arithmetic operations, like addition, subtraction, multiplication, and division.
*/

let isValidData = true;
console.log("Type of Valid data flag : ", typeof isValidData);

// Number:Numbers in JavaScript are usually presented in decimal form, which we are used to in everyday life. However, if a literal describing a number is preceded by an appropriate prefix
let a = 10; // default : decimal - base10: 0,1,2,3,4,5,6,7,8,9
let b = 0x10; // 0x: hexadecimal - base16: 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
let c = 0o10; // 0o: octal - base 8: 0,1,2,3,4,5,6,7
let d = 0b10; // 0b: binary - base 2: 0,1

console.log("a : ", a); //10
console.log("b : ", b); //
console.log("c : ", c);
console.log("d : ", d);

let x = 9e3; // e3=10x10x10 -> 9000
let y = 123e-5;

console.log("x : ", x);
console.log("y : ", y);

// Infinity, -Infinity, NaN (Not a Number)
// BigInt : ...n suffix
// As the BigInt is an integer type, the division result will always be rounded down to the nearest whole number.
let big = 123456789n;
let big2 = 1n;
console.log("Type of big : ", typeof big);
console.log("big/big2= ", big / big2);
// cannot use other types in arithmetic operations on BigInts
//let big3 = 1000n + 20; // error
//let big4 = 1000n / 0n; // error


