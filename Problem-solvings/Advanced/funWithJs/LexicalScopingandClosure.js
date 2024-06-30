//Examples:-

//1:-
//Lexical scoping:-
// function OuterFn(){
// let browserName = "GoogleChrome"

// function innerFnOne(){
//     console.log('innerFnOne :',browserName);
// }
// function innerFnTwo(){
//     console.log('innerFnTwo :',browserName);
// }
// innerFnOne()
// innerFnTwo()
// }
// OuterFn();


//2:-
//Closure:-
function OuterFn(){
    let browserName = "GoogleChrome"
    
    function innerFnOne(){
        console.log('innerFnOne :',browserName);
    }

    return innerFnOne;

 
    }
    const innerFunctionOne = OuterFn();
  innerFunctionOne()

