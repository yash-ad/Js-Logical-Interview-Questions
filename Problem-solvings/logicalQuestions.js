//1.FizzBuzz Problem:

// Write a function that prints numbers from 1 to n, but for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". 
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
fizzBuzz() ; 


//2.Palindrome Check:
// Write a function to check if a given string is a palindrome (reads the same forwards and backwards). 
//For example, "racecar" is a palindrome.

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }

  isPalindrome("racecar"); //true


//3.Factorial Calculation:-

//Write a function to calculate the factorial of a given number
//The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. For example, the factorial of 5 (5!) is 5 * 4 * 3 * 2 * 1 = 120.

function calculateFactorial (n){
if (n === 0 || n === 1){
    return 1;
}
return n * calculateFactorial(n-1)
}

calculateFactorial(5) //120

//4.Reverse a String:-
// Write a function to reverse a given string. For example, if the input is "hello", the output should be "olleh".

function reverseString(str){
const reversed = str.split("").reverse().join("");
return reversed;
}

reverseString("hello");//Script snippet #5:1 'olleh'

//5.**Find the Largest Number**:
//Write a function to find the largest number in an array of numbers.


const arr = [1,2,3,4,5,8,10,20];
function findLargestNum(arr){
return Math.max(...arr) //spread operator for an existing values from an array.
};

findLargestNum(arr) //20


