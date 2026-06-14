
//Question 1 : Odd number
let number = 15;

if (number % 2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}



// Question 1: Even number
 number = 12;

if (number % 2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}


// Question 2: Positive,Negative,Zero
 let num=25
if (number>0) {
    console.log("Positive");
}else if (number<0) {
    console.log("Negative");
}else {
    console.log("Zero");
}


// Question 3 : Pass or fail
let marks=25
if (marks>= 40) {
    console.log("Pass");
} else {
    console .log("Fail");
}

//Question 4 : eligible to vote or not
let age=15
if (age>=18) {
    console.log("Eligible to vote");
} else {
    console.log("Not Eligible to vote");
}


//Question 5 :To check largest no.
let a=56;
let b=67;
if (a>b) {
    console.log("Largest number=" ,a);
} else if (b>a) {
    console.log("Largest number=" ,b);

} else {
    console.log("Both are equal");
}


// Question 5 : To check both are equal or not
let c=67;
let d=67;
if (c>d) {
    console.log("Largest number=" ,c);
} else if (d>c) {
    console.log("Largest number=" ,d);

} else {
    console.log("Both are equal");
}


//Question 6: To print salary and bonus
let salary= 500000;
let experience= 6;
let bonus;
if (experience>=5){
  bonus= salary*0.20;
} else if (experience>2){
    bonus= salary*0.10;
} else {
    bonus= salary*0.05;
}
console.log("Experience=" , experience ,"years");
console.log("bonus" ,bonus);
console.log("Total Salary =", salary + bonus);


//Question 7 :To multiply the two numbers
var num1 =20;
var num2 =5;
var result;
result = num1*num2
console.log(result)


//Question 7: Another Example
var number1 =20;
var number2 =5;
var result;
result = num1/num2
console.log(result)




// Question 8: Temperature Check

let temperature = 10;

if (temperature > 40) {
    console.log(" Very Hot");
} else if (temperature >= 30) {
    console.log("Hot");
} else if (temperature >= 20) {
    console.log("Pleasant");
} else {
    console.log("Cold");
}


