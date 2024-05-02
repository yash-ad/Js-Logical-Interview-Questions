//1.Debouncing function:-
// A debouncing function delays invoking a function after a certain period of Time,since the last time the function was invoked.
// Its commonly used to improve performance in scenarios like handling user input or scroll events.

//The debounce function takes two parameters(func,delay) the first is the function to be debounced and the second is the time in miliseconds to wait before invoking the debounced function. 
// function debounce(func,delay){
// let timeoutId;
// //Inside the debounce function, it returns another function (a closure).
// return function(...args){
//    clearTimeout(timeoutId);
 
//    timeoutId = setTimeout(()=>{
// func.apply(this,args)
//    },delay)
// }
// }


//2.Event Bubbling vs. Event Capturing:
// Event bubbling and event capturing are two phases of event propagation in the DOM. 
//Event bubbling occurs when an event is first captured by the innermost element and then propagated up through its ancestors. Event capturing, on the other hand, occurs when the event is captured by the outermost element first and then propagated down to the target element.

//Event bubbling example:-
// document.querySelector('.inner').addEventListener('click', function() {
//     console.log('Inner element clicked');
//   });
//   document.querySelector('.outer').addEventListener('click', function() {
//     console.log('Outer element clicked');
//   });


  //3.Very Imp:-
  //Closure example:-
  //A closure is a function that has access to its own scope,the outer functions scope and the global scope.
  //It 'closes over' variables from its surrounding lexical context,even after the outer function has finished executing.

  //What is lexical context or environment?
  //The lexical context its also known as lexical environment or scope. it refers to the context or a location in which variables a functions are declared and referenced,and it has accessibility and visibility within a block of code.

  //Lexical scope means that the scope of a variable or function is determined by its location within the code, regardless of how or where it is invoked.

  //So whenver the function calls the new function execution context is created and along with its own lexical environemnt,which are consists of varibales and functions and as well as refernce to the outer lexical environemnt/scope(closures).


  //What is scope in programming language?
// The term "scope" in programming refers to the context in which variables and functions are defined and can be accessed. 


// Global Scope: Variables and functions declared outside of any function or block have global scope.
// They can be accessed from anywhere in the program.

// Function Scope: Variables declared inside a function are scoped to that function and are not accessible from outside the function. 
//This is often referred to as local scope.

// Block Scope: Starting from ES6 (ECMAScript 2015), JavaScript introduced block-level scoping with the let and const keywords. Variables declared with let and const are scoped to the nearest enclosing block (denoted by curly braces {}). This includes if statements, loops, and any other block-level constructs.

//Lexical scope means that the scope of a variable or function is determined by its location within the code, regardless of how or where it is invoked.

//.Lets take an example of closure:-

// Global scope
let globalVar = 'I am global';

function outerFunction() {
  // Function scope
  let outerVar = 'I am outer';

  function innerFunction() {
    // Lexical scope: innerFunction has access to outerVar and globalVar
    let innerVar = 'I am inner';
    console.log(innerVar);  // Output: I am inner
    console.log(outerVar);  // Output: I am outer
    console.log(globalVar); // Output: I am global
  }

console.log(  innerFunction());;
//   console.log(innerVar); // Error: innerVar is not defined
}

console.log(outerFunction());;
// console.log(outerVar); // Error: outerVar is not defined


//Example 2:-


function outer(){
let count = 0;

return function(){
    count ++;
    console.log(count);
};

}
// console.log(outer()); //[Function (anonymous)]

const increment = outer();
console.log(increment());//1
console.log(increment());//2
console.log(increment());//3








//4.Callback vs. Promise vs. Async/Await:
// Explain the differences between callbacks, promises, and async/await in JavaScript,
// including when and why you might choose one over the other.

//1.Lets discuss about what are callBacks?
//callBacks are function that are passed as arguments to other functions ,to be executed later 
//and they are commonly used in asynchronous programming.
//Example below:-
fetchdata((error,data)=>{
if(error){
  console.log("Please handle error",error)
}else{
  console.log("Handle the data :",data);
}
});



//2.Lets move ahead to the What are Promises?
//Promises represent the eventual completion (or failure) of an asynchronous operation and it allows chaining multiple asynchronous operations together.
//.then(): This method is used to handle the successful fulfillment of a Promise. It takes a callback function as an argument, which will be executed when the Promise resolves successfully. This callback receives the resolved value of the Promise as its argument.

fetchData()
.then((data)=>{
console.log("Handle the data using Promises .then method:",data);
})
.catch((error)=>{
console.error(error);
})

//example handling with an API:-
fetch('https://api.example.com/data')
.then((response)=> response.json()) // Handle successful response
.then((data)=> console.log(data))// Handle data //resolve
.catch((error)=> console.log(error))// Handle errors //reject

//3.Async/await is a modern javascript feature for handling asynchronous operations in a more synchronous-looking way, making asynchronous code easier to read and write.
// try: This block is used to wrap code that may potentially throw an error. If an error occurs within the try block, control is passed to the catch block.
// catch: This block is used to catch and handle errors that occur within the corresponding try block. If an error occurs in the try block, control is passed to the catch block, and the error object is available for further handling.
async function fetchData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

//example handling with an API:-

async function fetchData(){
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json(); //Handle data
    console.log(data);
  } catch (error) {
    console.error(error) //Handle errors
  }
}