"use strict";
/*
1) Variable scope
2) Function
3) Variable shadowing (bóng)
avaScript allows for variable shadowing. What does that mean? It means that we can declare a global variable and a local variable of the same name.
4) Hoisting: sự cẩu, nâng tải, treo lên
Hoisting only concerns the declaration, not initialization.
Remember ALWAYS to declare variables before using them.
Remember not to use the same names for different variables, even if you declare them in different ranges.
And, of course, give the variables names that will be related to what you want to store in them – the code should be readable not only to the interpreter, but also to people.
*/

//[1)Variable scope]
// Đối với các biến dc định nghĩa bởi từ khóa let và const:
// _Nếu biến dc khai báo bên ngoài code block thì scope là global
// _Nếu biến dc khai báo bên trong code block thì scope của biến đó chỉ nằm trong code block đó (và các code block con lồng bên trong) mà thôi

let height = 161;

{
    let weight = 54;
    {
        let info = "tall";
        console.log("height:", height); // 161
        console.log("weight:", weight); // 54
        console.log("info:", info); // tall
    }
        console.log("height1:", height); // 161
        console.log("weight1:", weight); // 54
        //console.log("info1:", info); // Reference error
    
}

console.log("height:", height); //161
//console.log("weight:", weight); // Reference error

// Đối với các chương trình cũ, dùng từ khóa var: không có khái niệm scope của biến
// biến sau khi dc định nghĩa thì ở đâu cũng truy xuất dc (xem như global scope) => NG
var name = "bunbo";
{
    var age = 18;
    console.log("name:", name); // bunbo
    console.log("age:", age);  // 18
}
console.log("name1:", name); // bunbo
console.log("age1:", age);  // 18


//[2)Khai báo hàm] function ten_ham () {}
function printHello() {
    console.log("Hello ");
    console.log("World");
}

// call fucntion:
printHello();

// Đối với các biến dc định nghĩa bởi từ khóa var: 
// _ Nếu biến dc khai báo bên trong 1 function thì scope của biến chỉ nằm trong function đó mà thôi
var globalGreeting = "Xin chao";

function printGreeting() {
    var localGreeting = "Chao buoi sang ";
    console.log("---Lời chào---");
    console.log("globalGreeting", globalGreeting);
    console.log("localGreeting", localGreeting);
}

printGreeting();
console.log("globalGreeting", globalGreeting); // Xin chao
//console.log("localGreeting", localGreeting); // Reference Error

//[3)variable shadowing]
/*let counter = 100;
console.log("counter :", counter); //100
{
    counter = 200;
    console.log("counter1 :", counter); //200
}
console.log("counter2 :", counter); //200
*/

/*
let counter = 100;
console.log("counter :", counter); //100
{
    let counter = 200;
    console.log("counter1 :", counter); //200
}
console.log("counter2 :", counter); //100
*/

// tương tự đối với var, nhưng chỉ khi dùng trong function
var counter = 100;
console.log("counter :", counter); //100

function testCounter() {
    var counter = 200;
    console.log("counter1 :", counter); //200
}
testCounter();
console.log("counter2 :", counter); //100

//[4)Hoisting]
// Việc khai báo biến có thể dc trình thông dịch tự động đưa lên đầu scope
// vì vậy, thỉnh thoảng có những câu lệnh truy xuất đến những biến chưa dc khai báo nhưng vẫn ko bị lỗi dừng ch trình (fatah error)
var moon = "Mặt trăng";
console.log("Moon: ", moon);
console.log("Sun: ", sun);

var sun = "Mặt trời";
console.log("Sun1: ", sun);