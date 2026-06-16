
// //Question 1:
// let num =12345;
// let reverse =0;
// while (num>0) {
//     let digit  = num %10;
//     reverse = reverse*10 + digit;
//     num = Math.floor(num / 10);
    
// }
// console.log(reverse);

// //Question 2:
// let number =12345;
// let sum =0;
// while (number>0) {
//     let digit = number % 10;   // last digit nikalo
//     sum = sum + digit;      // sum me add karo
//     number = Math.floor(number / 10);
    
// }
// console.log("Sum of Digits =", sum);



// let no

//Question 3:
// let num = 12345;
// let count = 0;
// while (num>0) {
//     count++;
//     num = Math.floor(num / 10);
// }
// console.log("count=" ,count)


//Question 4:
// let num = 121;
// let original = num;
// let reverse = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log(original === reverse);

//Question 11:
// let n =5;
// for( let i=1; i<=n; i++) {
//     let pattern = "";

//     for( let j=1; j<=n; j++) {
//          pattern += "*";
// }
// console.log(pattern); 
// }

// question 12:
// let n =5;
// for( let i=1; i<=n; i++) {
//          let pattern = "";

//    for( let j=1; j<=i; j++) {
//           pattern += "*";
//  }
//  console.log(pattern); 
//  }
//Question 21:
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let pattern = "";

//     for (let j = 1; j <= i; j++) {
//         pattern += String.fromCharCode(64 + j) + " ";
//     }

//     console.log(pattern);
// }
// Question 22:
// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let pattern = "";

//     for (let j = n; j >= n - i + 1; j--) {
//         pattern += j + " ";
//     }

//     console.log(pattern);
// }