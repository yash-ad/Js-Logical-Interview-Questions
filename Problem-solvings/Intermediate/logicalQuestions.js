//1.Fibonacci Series:
// Write a function to generate the Fibonacci series up to a certain number of terms.

function fibonacciSeries(number){
let fib = [0,1]
for(let i = 2; i < number; i++){
fib.push(fib[i-1] + fib[i-2]);
}
return fib
}
console.log(fibonacciSeries(6));//[ 0, 1, 1, 2, 3, 5 ]
console.log(fibonacciSeries(5)); //[ 0, 1, 1, 2, 3 ]
console.log(fibonacciSeries(4));//[ 0, 1, 1, 2 ]
console.log(fibonacciSeries(3));//[ 0, 1, 1 ]

//2.Factorial Calculation:
// Write a function to calculate the factorial of a given number.
//This line is declared a with a function named called calculateFactorial that takes one parameter 'num' as a local varibale
function calculateFactorial(num){
if(num === 0 || num === 1){
    return 1;
}
return num * calculateFactorial(num - 1)
};
console.log(calculateFactorial(5));//120


//3.Reverse a String:
// Write a function to reverse a given string.
function reverseString(string){
return string.split('').reverse().join('');
}
console.log(reverseString("Hello"));//olleH



//4.Write a function that find the longest word in a sentence:-
const findLongestWord = (sentence)=>{

    let words = sentence.split('');
    let longestWord = '';

    for (let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord("ABCDEFGCIJKLMNOPQRSTUVWXYZ"));


//5.Write a function that removes duplicates from an array:-

const array = [1,2,3,4,5,6,7,8,8,7,6,5,4,3,2,1];

function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
console.log(removeDuplicates(array));


//6.Write a function that checks if a given string is a palindrome:-
const isPalindromeString = (string)=>{
let reversed = string.split('').reverse().join('');

return string === reversed; //It checks for boolean results and it returns with the answer.whether its true or false.
};

console.log(isPalindromeString("racecar")); //true.
console.log(isPalindromeString("Yash")); //false.
console.log(isPalindromeString("madam")); //true.
console.log(isPalindromeString("wow")); //true.



//7.How to empty an array in javascript:-
let arr = [1,2,3,4,5];

arr.length = 0;

console.log(arr);//[]


//8.Given an array containing numbers from 1 to N,with one number missing find the missing number:-

let providedArray = [1,2,3,5];
let N = 5;

// Here is the calculation basically 
// Sum = N * (N+1) divided by Two
// Lets assume the providedArray is [1,2,3,5]
// And N is 5
// 5 * (5 + 1) =  5 * 6 = 30 and Divided by Two = 15.
// Calculated the expected sum.
// Calculated the actual sum:-
// Actual Sum = 1 + 2 + 3 + 5 = 11.
// So how to find the missing number:-

// Missing number = expected sum - Actual sum = 15 - 11 = 4 is a missing number.


function findMissingNumber(providedArray,N){
 // Calculate the expected sum of numbers from 1 to N
 let expectedSum = (N * (N+1)) / 2;
// Calculate the actual sum of numbers in the array
  let actualSum = providedArray.reduce((a,b)=> a + b,0)
// The missing number is the difference between expected sum and actual sum
return expectedSum - actualSum;
}
console.log(findMissingNumber(providedArray,N)); // 4
