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