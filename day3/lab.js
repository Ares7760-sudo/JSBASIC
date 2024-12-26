
/* // LAB1: 
// 1) Declare six variables
// the price of a single rose (8) and the number of roses you have (70)
// the price of a single lily (10) and the number of lilies you have (50)
// the price of a single tulip (2) and the number of tulips you have (120)

let rose_unit_price;
let lily_unit_price;
let tulip_unit_price;
let rose_number;
let lily_number;
let tulip_number;

//2)Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place their total price.
let rose_total_price;
let lily_total_price;
let tulip_total_price;

//3)Insert the corresponding values into the variables using the variables declared in the previous step.
rose_unit_price = 8;
lily_unit_price = 10;
tulip_unit_price = 2;
rose_number = 70;
lily_number = 50;
tulip_number = 120;

rose_total_price = rose_unit_price * rose_number;
lily_total_price = lily_unit_price * lily_number;
tulip_total_price = tulip_unit_price * tulip_number;

//4)Finally, declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). 
let total_price = rose_total_price + lily_total_price + tulip_total_price;

//5)Display all inventory information in the console
function displayInfo() {
    console.log("Rose – unit price: ", rose_unit_price, " , quantity: ", rose_number, " , value: ", rose_total_price);
    console.log("Lily – unit price: ", lily_unit_price, " , quantity: ", lily_number, " , value: ", lily_total_price);
    console.log("Tulip – unit price: ", tulip_unit_price, " , quantity: ", tulip_number,  " , value: ", tulip_total_price);
    console.log("Total: ", total_price);
}

displayInfo(); */


// LAB2:Modify the code from the LAB1
// Assume that the prices of flowers will be constant (they will not change). 
// Now decrease the number of roses by 20 and lilies by 30.

const rose_unit_price = 8;
const lily_unit_price = 10;
const tulip_unit_price = 2;
let rose_number = 70;
let lily_number = 50;
let tulip_number = 120;

rose_number = rose_number - 20;
lily_number = lily_number - 30;

let rose_total_price = rose_unit_price * rose_number;
let lily_total_price = lily_unit_price * lily_number;
let tulip_total_price = tulip_unit_price * tulip_number;
let total_price = rose_total_price + lily_total_price + tulip_total_price;

function displayInfo() {
    console.log("Rose – unit price: ", rose_unit_price, " , quantity: ", rose_number, " , value: ", rose_total_price);
    console.log("Lily – unit price: ", lily_unit_price, " , quantity: ", lily_number, " , value: ", lily_total_price);
    console.log("Tulip – unit price: ", tulip_unit_price, " , quantity: ", tulip_number,  " , value: ", tulip_total_price);
    console.log("Total: ", total_price);
}

displayInfo(); 

// LAB3:create a list of contacts(3 elements). 
// Declare and initialize the variables where you will store all the information (nine variables in total). 
// Display in the console information about the first and last contact in the form: name/phone/email.
// dùng array và object

let user1 = {
    name : "Ares7760",
    phone : "0908 000 0001",
    email : "ares7760@gmail.co.vn"
}

let user2 = {
    name : "bunbo",
    phone : "0908 000 0002",
    email : "bunbo@gmail.co.vn"
}

let user3 = {
    name : "bunmam",
    phone : "0908 000 0003",
    email : "bunmam@gmail.co.vn"
}


