//24-06-24:-

//functions and parameter in js:-
//1.
function letsCalculate(number1,number2){
    return number1 + number2
}

console.log(letsCalculate(4,4));


//2.User loggedIn or not:-
//Using condition


function signUpUser(userName){
    //When there is a scenario the userName is not mentioned
    //Simple handle the flow using conditional checking

    if(!userName){
console.log("Kindly check the userName!")
return;
    }
return `${userName} is logged in.`
}

// console.log(signUpUser("Yash"));
// console.log(signUpUser(""));
console.log(signUpUser("Siddhi"));



/////////////////////////////////////////////////////////////////////////////



//functions with objects and arrays:-


//1.Objects:-
const user = {
    userName:"Yash",
    userId:310398,
};


function userDetails(getValues){
console.log(`The Username is ${getValues.userName} & the Id is ${getValues.userId}`);
}


///.Directly using variable passing as an argument to a function.
// console.log(userDetails(user));

///.Directly using Object passing as an argument to a function.
userDetails({
    userName:"Siddhi",
    userId:220301
});

//2.Arrays:-

const newArray = [100,200,300,400,500];



function findValue(getValue){
return getValue[0]
}

///.Directly using variable passing as an argument to a function.
// console.log(findValue(newArray));

///.Directly using Array passing as an argument to a function.
console.log(findValue([
    100,300,500,700,900
]));



///Using Rest operator:-
function calculateCartItems(itemOne,itemTwo,...cartItems){
    return cartItems
}
console.log(calculateCartItems(100,200,300,500,600,800,900));//[ 300, 500, 600, 800, 900 ]


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Global and local scope in javascript 

// let a = 10;
// const b = 20;
var c = 300;

if(true){
    let a = 10;
const b = 20;
var c = 30;
console.log('Inner scope :',a);
console.log('Inner scope :',b);
console.log('Inner scope :',c);
}

// console.log(a); //a is not defined
// console.log(b);//b is not defined
console.log('Outer scope :',c);//30


//Scope level and mini hoisting:-
function one(){
const userName = "Yash Dandnaik"

function two(){
    const portfolio = "@vercel.in"
    console.log(`The username is ${userName} and Portfolio is on ${portfolio}`);
}

// console.log(portfolio); //Error caught
two();
}

one();




if(true){
const website = "Youtube"
if( website === "Youtube"){
    console.log("The website is secured");
}
}


/////////////////////////////////////////////////////////////////////////////////////////////////
//25-06-24:-
// THIS and arrow function in javascript | chai aur #javascript


//'this' keyword refers to the object that the function is a property of. and the value of 'this' keyword will always depends on the object that is invoking the function.


//Global object === Window object.

//The simple way to understand the 'this' keyword is whenever the function is invoked check the object before the 'dot.`,and the value of 'this' keyword will always be the object before the dot.
//If there is no object before the dot.the value of 'this' keyword will be the global object.




const userInfo = {
name:"Yash",
userId:310398,
welcomeMessage:function(){
console.log(`Welcome ${this.name} to the website.`);
console.log(this);
}
}
userInfo.welcomeMessage();
userInfo.name = "Siddhi";
userInfo.welcomeMessage()

console.log(`'this' keyword in the node environment which is in the global space ${this}`); 
// { empty parentheses Object Object}

//'this' keyword is in the Browser environment is access to the Window object.


// function toCheck(){
// console.log(this);
// }

// toCheck();

// function toCheck(){
//     let userName = "Yash"
//     console.log(this.userName); //Undefined
//     }
    
//     toCheck();


// const toCheck = ()=> {
//     let userName = "Yash"
//     console.log(this); //{}
//     }
    
//     toCheck();



//explicit return  
// const addNums = (num1,num2)=>{
// return num1 + num2;
// }

// console.log(addNums(9,6)); //15


// and implicit return
const addNums = (num1,num2) => num1 + num2
console.log(addNums(9,6));



//Auto return:-

const multiplyNums = (num1,num2) => (num1 * num2)
console.log(multiplyNums(2,2)); //4




///.IIFE (Immediately Invoked Function Expression):-
//It is a function that runs as soon as it is defined, it is wrapped into the parentheses '()' The first is for delcaration and the second is '()' parentheses is for  'Execution or invokation'.

(function sayMyName(){
    //Named IIFE
    let myName = "Yash"
    console.log(`Hello my name is ${myName}`);
})();//Hello my name is Yash

((name)=>{
    //Anonymous
console.log(name);
})("Animal"); //Animal


///.How does javascript execute code + call stack :-


//.Javascript execution context:-

//Whenever the Js code or programs run 'The Global execution context is created'.


//Javascript it is a single threaded language.


//There are Two execution contexts in javscript:-

//1.Global Execution Context:-
//2.Function Execution Context:-

//Every execution contexts has two phases which are memory phase and execution phase.

//1.The memory phase which is for allocating the memory for variables and functions and in that phase the value is undefined for vairables and for function is the functions definition.
//2.The execution phase which is for executing the variables and functions with their own values.


//Lets take an example below:-
let val1 = 10;
let val2 = 20;

function addNumbers(num1,num2){
let total = num1 + num2;
return total;
}

let resultOne = addNumbers(val1,val2);
let resultTwo = addNumbers(5,5);
console.log(resultOne);//30
console.log(resultTwo);//10


//Code explanation:-

//So how this code works in the Js engine:-
//First and foremost thing is The Global Execution context is created,
//There are two phases the first is memory phase and the second is Execution phase.

//1.Memory creation phase:-
//val1 = undefined;
//val2 = undefined;
//addNumbers = function definition()
// resultOne = undefined;
// resultTwo = undefined;

//2.Execution phase:-
//val1 = 10;
//val2 = 20;
//addNumbers = function definition()
// resultOne = 30;
// resultTwo = 10;


//Whenver the function executes a new function execution context is created and pushes it to the callstack and when the execution completes the function execution context is removed from the context.
//Same thing repeat memory phase and execution phase



///.Higher order array loops its also known as Higher order function.
//Higher order function is a function that takes or accept other functions as arguments or return function as their results:-



//1.ForEach loop:-
const myNewArray = [1,2,3,4,5,6,7];
myNewArray.forEach((nums)=>{
console.log(nums);
})



const codingLanguages = ['js','ruby','python','java'];

// codingLanguages.forEach((language)=>{
// console.log(`The coding languages are ${language}`);
// })

//The parameters or arguments accepts are item,index,arr.

codingLanguages.forEach((language)=>{
console.log(`The coding languages are ${language}`);
})


//How to loop over an Array of objects for extracting  the values:-


const dataBaseFiles = [{
mobilePhone:"Iphone 11",
mobilePrice:15000
},
{
mobilePhone:"Iphone 12",
mobilePrice:16000
},
{
mobilePhone:"Iphone 13",
mobilePrice:17000
},
{
mobilePhone:"Iphone 14",
mobilePrice:18000
}];

dataBaseFiles.forEach((item)=>{
console.log(item.mobilePhone);
console.log(item.mobilePrice);
})

