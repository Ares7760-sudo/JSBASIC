// complex datatypes: object, array
// _object {key:value,...}: cho phép lưu nhiều loại giá trị ở 1 nơi
// Array []

let testObj = {
    nr: 600,
    str: "text"
}

console.log("type of testObj : ", typeof testObj);
console.log("property nr of testObj : ", testObj.nr);
console.log("property str of testObj : ", testObj.str);

let user1 = {
    name : "bunbo",
    age : 12,
    email : "bunbo@gmail.com"
}

let user2 = {
    name : "bunmam",
    age : 12,
    email : "bunmam@gmail.com"
}

console.log("user 1 > email: ", user1.email);
delete user1.email;
console.log("user 1 > email: ", user1.email);
console.log("user 1 > phone: ", user1.phone); // ko báo lỗi, mà chỉ để undefined

// Array: index start from 0
let days = ["Thứ 2", "Thứ 3",  "Thứ 4",  "Thứ 5",  "Thứ 6"];
console.log("day 1 : ", days[0]);

days[0] = "CN";
console.log("day 1 : ", days[0]);

let emptyArray = [];
console.log("emptyArray: ", emptyArray[0]); //undefined

// Kiểu array trong javascript có nhiều vấn đề vì ko có tính chặt chẽ
// vấn đề 1: dc tự do thêm nhiều loại dữ liệu khác nhau
// vấn đề 2: dc tự do thêm element ở bất kỳ index nào mà ko cần check length của mảng -> có thể dẫn đến undefined khi truy xuất vào index chưa dc gán giá trị

// instanceof
console.log("days là array ? ", days instanceof Array)
console.log("user1 là array ? ", user1 instanceof Array)

// Length, IndexOf
console.log("mảng days có", days.length, "phần tử");

// push method: thêm phần tử vào cuối mảng
// unshift method: thêm phần tử vào đầu mảng
// pop method: xóa phần tử cuối ra khỏi mảng
// shift: xóa phần tử đầu ra khỏi mảng
// Reverse: đảo ngược thứ tự các phần tử trong mảng
// Slice method allows you to create a new array from selected elements of the original array. 
// concat method
