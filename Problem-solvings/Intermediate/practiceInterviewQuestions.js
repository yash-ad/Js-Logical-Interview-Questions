//What is a scope in javscript:-
//The scope chain is a concept in javascript engine where the js engine checks if the variable is not present in the current scope, it tries to findout or check the variable in the outerscope and even the variable is not exist in the outerscope and then it checks to the global scope even if its not found , it will throw a reference error.
 

//GlobalScope
//OuterScope
//CurrentScope

//Lets take an example for it:-
//Scope chain:-
function outerFunction() {
    let outerVariable = "I'm  outside";
    function innerFunction()
    {
        console.log(outerVariable);
        
}
    innerFunction();
    
}

outerFunction();

//What is a closure in javascript:-
//Closure is a feature in javascript its an ability of a function where to remember the variables and functions that are declared in its outerscope even after the function has executed , whenever the function is created the closures are created.


//closure is a feature in javascript its an ability of a function where tp remeber the variables and functions that are declared in its outerscope even after the function has executed , whenver the function is created the closures are created.


//Lets take an exmaple:-


function createCounter() {
    
    let count = 0;


    return function () {
        count++;
        console.log(count);
        
    };
}

let result = createCounter();
result(); //1
result();//2
result();//3
result();//4

//Now in this program , the closures happen how
//The closures are a feature in javascript , its an ability of a function where to remember the variable and functions that are declared in its outer-scope ,even after the function has executed and whenever the function is created the closures are created.

//So here the scope chain and closures it both works together,closures us the scope chain to access those variables and they uses ability of a function to remember these variables even after the scope in which they are declared has closed.

//Scope chain is refers to the lexical environment and the closures refers to that lexical scope.


//What is 'return' keyword in js?
//'return' keyword in javascript is used to stop the execution of a function and return a value to the function caller.and the 'return' statement it can be only used in the function.
 
//What is meant by lexical?
//Lexical is meant by hierarchy.
 

//What is meant by lexical environment or lexical scope?
//Lexical environment is a data structure that stores  the variables and functions in the current scope and all of the outer-scope.
//And it also know as lexical scope or lexical closure.


//Mention some advantages of javascript:-
//1.Javascript is executed client-side as well as server-side also.reactjs is one of the frontend library and Nodejs is popular javascript backend framework.
//2.Javascript is a simple language to learn.
//3.Web pages now have more functionality because of javascript.


//What are callbacks or callback function in javascript:-
//A callback is a functions that are used as an arguments to another function are called callback functions.
//And it also be executed when another function gets executed.
 
//Lets take an example:-

function helloWorld() {
    console.log("Hello World!");
    
}



function greetings(fn) {
    fn();
}


//Here the callback function is 'helloWorld' function.
//That are used as an arguments to another function.
//It also be executed when another function gets executed.
greetings(helloWorld);


