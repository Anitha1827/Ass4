//Tast 1
//1. Declare four variables without assigning values and print them in console
var test1;
var test2;
var test3;
var test4;
// console.log(test1);
//Ans:- Undefined

//2.How to get value of the variable myvar as output
var myvar = 1;
// console.log("myvar");
//Ans:-console.log(myvar);

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
//Ans:-
var firstName = "Anitha";
var lastName = "Kaladharan";
var maritalStatus = "Married";
var country = "India";
var age = "27";

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line
var Biodata = {
  firstName: "Hari",
  lastName: "Kaladharan",
  maritalStatus: "Married",
  country: "India",
  age: 27,
};
// console.log(Biodata);

// 5. Declare variables and assign string, boolean, undefined and null data types

var arr = ["Anitha", true, undefined, null];

// console.log(arr);

//6. Convert the string to integer

// parseInt()
// console.log(parseInt("10"));
// console.log(parseInt("10.5"));
// console.log(parseInt("10.8",2)); //if near by 10 means it will print 10 else print mentioned value
// // Number()
// console.log(Number("10"));
// console.log(Number("10.5")); //here print exact number no round of number
// console.log(Number("10.8",2));
// // Plus sign(+)
// console.log(+("10"));
// console.log(+("10.5")); // print exact Number
// console.log(+("10.8",2)); // here take 2nd number

// 7. Write 6 statement which provide truthy & falsey values.
//Truthy value
if (true)
  if ({})
    if ([])
      if (42)
        if ("0")
          if (new Date())
            if (-42)
              if (12n)
                if (3.14) if (-3.14) if (Infinity) if (-Infinity) true && "dog";
// returns "dog"

//Falsey value
false, 0, -0, 0n, "", null, undefined, NaN;

// Task 2 :- Simple Programs todo for Operators
// 1. Square of a number
// console.log(10 * 10);
// 2.Swapping 2 numbers
let x = 10;
let y = 20;
// console.log("x=", x, "y=", y);
var test;
test = x;
x = y;
y = test;
// console.log("After swapping");
// console.log("x=", x, "y=", y);

// 3.Addition of 3 numbers
// console.log(10 + 50 + (20 + 40) + (40 + 90));
var weak = 7;
var month = 12;
var day = 360;
// console.log(
//   "In one weak having " +
//     weak +
//     "days, In one year having " +
//     month +
//     "months And In one year " +
//     day +
//     "days are having"
// );

//4.Celsius to Fahrenheit conversion
var c = 30;
//Formula => ℉=(℃*1.8)+32 ; Or (0°C × 9/5) + 32 = 32°F
var F = 30 * 1.8 + 32;
// console.log(F);

// 5.Meter to miles
// To convert a meter measurement to a mile measurement, we multiply the length in meters by 0.00062137.
var Meter = 5 * 0.00062137;
// console.log(Meter);

// 6.Pounds to kg
// divide the mass value by 2.205
// Example 50Pounds
// console.log(50/2.205);

// 7.Calculate five test scores and print their average
var numbers = [10, 20, 40, 50, 90];
var average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
// console.log(average);

// 8.Power of any number x ^ y.
var X = 8;
var Y = 5;
var Power = Math.pow(X, Y);
// console.log(Power);

// 9.Calculate Simple Interest
// Formula =>A =  (p * t * r) / 100;
var p = 15;
var t = 12;
var r = 12;
var SI = (p * t * r) / 100;
// console.log(SI);

// 10.Calculate area of an equilateral triangle
const side1 = 5;
const side2 = 6;
const side3 = 7;
const perimeter = (side1 + side2 + side3) / 2;
const area = Math.sqrt(
  perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
);
// console. log(perimeter);

// 11.Area Of Isosceles Triangle
// Formula => Area_of_Isosceles_Triangle= (1 * b * h) / 2;
var b = 50;
var h = 20;
var Area_of_Isosceles_Triangle = (1 * b * h) / 2;
// console.log(Area_of_Isosceles_Triangle);

// 12.Volume Of Sphere
// Formula => V = ((4/3)*4.142*r^3);

var r = 6;
volume = (4 / 3) * Math.PI * Math.pow(r, 3);
// console.log(volume);

// 13.Volume Of Prism
// Formula => V=Bh
var B = 20;
var h = 20;
var volumeOfPrim = B * h;
// console.log(volumeOfPrim);

// 14.Find area of a triangle.
// triangle is ½ × Base × Height
var triangle = 0.5 * (B * h);
// console.log(triangle);

// 15.Give the Actual cost and Sold cost, Calculate Discount Of Product
// (discount ÷ list price) × 100.
var ActualCost = 500;
var SolidCost = 400;
var Discount = (ActualCost / SolidCost) * 100;
// console.log(Discount);

// 16.Display the asterisk pattern as shown below(No loop needed):
// console.log("****");
// console.log("****");
// console.log("****");
// console.log("****");
// console.log("****");

// 17.Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. Calculate the 
// total energy bill of that consumer if per unit rate is 10?
var PowerOfElectricalAppliance = 0.1 //100 W = 0.1 kW
var TimeUsed = 1;
var Energy =  PowerOfElectricalAppliance * TimeUsed; //Energy = power x time taken 
console.log(Energy)

// Task 3: Simple Programs todo for Condition , Looping and Arrays
// 1.Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

var test = 7;
var test2 = "#";

for (var i = 0; i <= test; i++) {
  // console.log(test2);
  for (var j = 0; j < i; j++) {
    // console.log(test2);
    test2 += "#";
    break;
  }
}

// 2. Iterate through the string array and print it contents

var arr = ["Anitha", "yamuna", "Banu", "Vishnu", "Vardhan"];

// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(element => {
//     console.log(element);
// });

// write a code to count the elements in the array . Don’t use length property

for (var i = 0; i <= arr.length; i++) {
  // console.log(arr[i]);
  //  arr.push(arr[i]+1);
  //  break;
  // if(arr[i]=="undefined") break;
}

arr.forEach((element) => {
  // console.log(element);
  arr.push(element + 1);
});
