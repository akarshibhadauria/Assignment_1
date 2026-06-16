// function getStatistics(numbers) {
//     let largest = numbers[0];
//     let smallest = numbers[0];
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i];
//         }

//         if (numbers[i] < smallest) {
//             smallest = numbers[i];
//         }

//         sum += numbers[i];
//     }

//     let average = sum / numbers.length;

//     console.log("Largest Number:", largest);
//     console.log("Smallest Number:", smallest);
//     console.log("Sum:", sum);
//     console.log("Average:", average);
// }

// // Test Input
// getStatistics([12, 45, 67, 23, 89, 10]);


// function separateEvenOdd(numbers) {
//     let evenNumbers = [];
//     let oddNumbers = [];

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         } else {
//             oddNumbers.push(numbers[i]);
//         }
//     }

//     console.log("Even Numbers:", evenNumbers);
//     console.log("Odd Numbers:", oddNumbers);
//     console.log("Even Count:", evenNumbers.length);
//     console.log("Odd Count:", oddNumbers.length);
// }

// // Test Input
// separateEvenOdd([5, 8, 12, 15, 20, 33]);



// function findDuplicates(arr) {
//     let duplicates = [];
//     let countObj = {};

//     for (let i = 0; i < arr.length; i++) {
//         countObj[arr[i]] = (countObj[arr[i]] || 0) + 1;
//     }

//     for (let key in countObj) {
//         if (countObj[key] > 1) {
//             duplicates.push(Number(key));
//         }
//     }

//     console.log("Duplicate Values:", duplicates);

//     console.log("Occurrence Count:");
//     for (let key in countObj) {
//         if (countObj[key] > 1) {
//             console.log(key + " => " + countObj[key] + " times");
//         }
//     }
// }

// // Test Input
// findDuplicates([10, 20, 30, 20, 40, 10, 50]);



// function stringOperations(str) {
//     let upperCase = str.toUpperCase();
//     let lowerCase = str.toLowerCase();

//     let vowels = 0;
//     let consonants = 0;

//     let vowelLetters = "aeiou";

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i].toLowerCase();

//         if (ch >= 'a' && ch <= 'z') {
//             if (vowelLetters.includes(ch)) {
//                 vowels++;
//             } else {
//                 consonants++;
//             }
//         }
//     }

//     console.log("Uppercase:", upperCase);
//     console.log("Lowercase:", lowerCase);
//     console.log("Vowels:", vowels);
//     console.log("Consonants:", consonants);
// }

// // Test Input
// stringOperations("JavaScript");



 function countWords(sentence) {
    let words = sentence.toLowerCase().split(" ");
    let wordCount = {};

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    for (let word in wordCount) {
        console.log(word + " : " + wordCount[word]);
    }
}

// Test Input
countWords("apple banana apple orange banana apple");