// ///1.What is memoization?
// //Memoization is a smart way programming optimization technique is used for make our functions faster by storing and reusing the past results. it helps to reduce time consuming calculations  and works very effeciently,it relies on the idea of cache.


// ///2.What is cache?
// //cache it is a plain object.caching is a technique helps to store the copy of a given resource in our browser and serves it back when it is requested or needed.



// //Lets take an example overhere:-
// //1 Normal technique:-
// let sum = 0;
// const calculations = (n)=>{
// for (let i = 0; i <= n; i++) {
// sum += i;
// }
// return sum;
// }

// // const result = calculations(5);
// // console.time()
// // console.log(result);
// // console.timeEnd();
// // 15
// // default: 18.769ms


// ///2.Optimization technique we are using memoization concept:-

// //It receives a callBack function as an argument.
// const memoize = (func)=>{
// //Lets create an object 'cache'.
// let cache = {} //An empty object.
// //Closure concept with using Rest parameter:-
// return function(...args){
// //Rest paramter always returns an array. 
// let n = args[0];
// if(n in cache){
//     return cache[n]
// }
// //why-else because at the first time it will not stored in to the cache , it will execute  by default.
// else{
// let result = func(n)
// cache[n] = result;
// return result;
// }
// }
// }

// const optimizeEfficiently = memoize(calculations);
// console.log(optimizeEfficiently(5));

// //Now here optimizeEfficiently function we are invoking and it accepts '5' as an argument.
// // console.log(optimizeEfficiently(5));



///////////////////////////////////////

// ///.For practice purpose only:-

// //1.Without optimization:-
let sum = 0;

const calc = (n)=>{
for (let i = 0; i <= n; i++) {
   sum += i;  
}
return sum;
};
// // const result = calc(5);
// // console.time()
// // console.log(result);
// // console.timeEnd()

// // 15
// // default: 43.862ms


// //2.With Optimization:-

// const memoize = (func)=>{
// let cache = {};
// //Closure concept
// return function(...args){
//     //Because Rest paramter it returns an array.
//     let n = args[0];
// if(n in cache){
//     console.log("cache");
//    return cache[n]
// }
// else{
//     //Here func(n) is 'calc(n)';
//     console.log("calculating first time");
//    let result = func(n);
//    cache[n] = result;
//    return result;
// }
// }
// }
// //Because it is returning a function so it is recommended to store in to the variable.
// const optimizedFunction = memoize(calc)


// console.time()
// console.log(optimizedFunction(10));
// console.timeEnd()
// // calcualting first time
// // 55
// // default: 15.57ms

// console.time()
// console.log(optimizedFunction(10));
// console.timeEnd()
// // cache
// // 55
// // default: 0.65ms




///.For practice purpose only:-
// //3.With Optimization:-


const memoize = (func)=>{
let cache = {}
return function(...args){
 let n = args[0]

 if(n in cache){
    console.log("Stored into the cache");
  return cache[n]
 }else{
    console.log("calculating first time");
   let result = func(n);
   cache[n] = result;
   return result;
 }
}
};
const optimizedFunction = memoize(calc);
console.time()
console.log(optimizedFunction(5));
console.timeEnd()
// calcualting first time
// 15
// default: 9.987ms
console.time()
console.log(optimizedFunction(5));
console.timeEnd()
// cache
// 15
// default: 1.046ms