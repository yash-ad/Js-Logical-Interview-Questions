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


// //3.Factorial Calculation:-
// Write a function to calculate the factorial of a given number
// The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. For example, the factorial of 5 (5!) is 5 * 4 * 3 * 2 * 1 = 120.
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
// Write a function to find the largest number in an array of numbers.
const newArr = [1,2,3,4,5,8,10,20];
function findLargestNum(newArr){
return Math.max(...newArr) //spread operator for an existing values from an array.
};
console.log(findLargestNum(newArr)); //20


//6.Check for Prime Number:
// Write a function to check if a given number is prime or not.
function isPrimeNumber(num){
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
isPrimeNumber(4);//False no its not.


//7.**Remove Duplicates**:
// Write a function to remove duplicate elements from an array. For example, if the input is [1, 2, 3, 3, 4, 4, 5], the output should be [1, 2, 3, 4, 5].
const arr = [1,1,2,2,3,3,4,4,5,5];
function removeDuplicates(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}
console.log(removeDuplicates(arr));
//Here the function declaration named as a removeDuplicates which is the task is to filter out and remove the duplicates from an array
//So here the filter method in the method it takes a callback function that is called for each element in the array.
//And it checks if the index of the current value is  equals to the first occurrence of that value in the array.


//8.Count Occurrences:
// Write a function to count the number of occurrences of each character in a string. For example, if the input is "hello", the output should be { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }.
//The for...of loop, on the other hand, is used for iterating over iterables like arrays, strings or maps.
function countOccurrences(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}
console.log(countOccurrences("Yellow")); //{ Y: 1, e: 1, l: 2, o: 1, w: 1 };



//9.**Merge Two Arrays**:
  //  Write a function to merge two sorted arrays into a single sorted array.

const arr1 = [1,2,3];

const arr2 = [4,5,6];

function mergeArrays(arr1, arr2) {
  const newArray = [...arr1, ...arr2] //spread operator is used to spread the element of an array
  return newArray
}
console.log(mergeArrays(arr1,arr2)); //[ 1, 2, 3, 4, 5, 6 ].

//10.**Find Missing Number**:
//Write a function to find the missing number in an array of integers from 1 to n. For example, if the input is [3, 7, 1, 2, 8, 4, 5], the output should be 6, as 6 is the missing number.
const array = [3, 7, 1, 2, 8, 4, 5];

function findMissingNumber(array) {
  const n = array.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const currentSum = array.reduce((acc, num) => acc + num, 0);
  return totalSum - currentSum;
}
console.log(findMissingNumber(array));