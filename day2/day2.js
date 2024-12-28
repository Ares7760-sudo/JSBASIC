"use strict";
/*
VARIABLE
_Namimg: cách đặt tên > có phân biệt chữ hoa/ thường
_Declaring: khai báo biến > var, let cho biến; const cho hằng
_Initializig: khởi tạo biến

_Declaration and Strict mode: "use strict"
_JavaScript language are untyped(~weakly typed) (-> linh hoạt, mềm dẻo, nhưng yêu cầu ltv phải có kiến thức tốt)
_Constant:  Using a const, besides preventing a value from being changed by mistake, allows the JavaScript engine to optimize the code, which may affect its performance.
*/

var height; // declare : khai báo nhưng chưa khởi tạo giá trị
console.log(height); // undefined
//console.log(weight); // Reference Error : chưa khai báo (định nghĩa) biến

/*
One of the basic differences in the use of var and let is that let prevents us from declaring another variable with the same name (an error is generated). 
Using var allows you to re-declare a variable, which can potentially lead to errors in the program execution.
_Cả 2 từ khóa var và let đều được dùng để khai báo biến trong javascript.
var thường xuất hiện trong các chương trình cũ. 
let ra đời sau, để giải quyết những vấn đề của var -> nên dùng let
vấn đề của var: var không báo lỗi khi user khai báo 2 biến trùng tên trong cùng scope
*/

var height = 2;
var height = 3;
console.log(height);

// let: báo lỗi syntax ngay từ lúc viết code : has already been declared
//let weight;
//let weight = 5;

/*
Trong quá trình phát triển của javascript : 2009 -> 2015, đã phát hiện và giải quyết nhiều vấn đề của chính mình
Often it was about clarifying the interpreters' behavior in potentially erroneous situations, such as in cases of variable initialization without any prior declaration. 
vấn đề 1: khởi tạo giá trị mà ko khai báo biến (thường thấy trong source code của các chương trình cũ)
---> giải quyết: "use strict" (thường đặt ở đầu file)
*/

//age = 25;
//console.log(age);

/*
Variables in the JavaScript language are untyped (or, to be more precise, they are weakly and dynamically typed). 
This means that JavaScript will not control what type of value we store in the variable.
*/

let greeting = "Hello Ares7760";
let school = "A tho";
let counter = 1;

console.log("greeting:", greeting);
greeting = 1;
console.log("greeting:", greeting);
school = school + counter;
console.log("name:", school);

/*
Const: type of container is simultaneously declared and initialized
việc khai báo và khởi tạo giá trị cho const phải dc tiến hành đồng thời
*/

//const pi;
//pi = 3.14; // error
//console.log(pi); 