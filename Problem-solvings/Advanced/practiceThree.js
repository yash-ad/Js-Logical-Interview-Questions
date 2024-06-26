//26-06-24:-

const array = [1,2,3,4,5,6];
// array.forEach((element)=>{
// console.log(element);
// })

const storage = array.forEach((element)=>{
    console.log(element);
    })
    console.log(storage); //undefined


    //foreach doesnot return a value.



    //So here Map Filter and Reduce comes into the picture:-
///.Map Filter and Reduce:-



//1.Filter method():-
//In javascript the filter function or method is another higher order function which returns a new array without modifying the original array,
//The specification of filter method is it is based on the condition , if the test pass that means its 'True' then it is executed otherwise its omitted.
//It takes a callback function as an argument and it is applied to each element of the array.


const myNums = [1,2,3,4,5,6,7,8,9,10];


//Implicit return in one line code
// const result = myNums.filter((num)=> num > 5);
// console.log(result);//[ 6, 7, 8, 9, 10 ]


//Implicit return with 'auto-return' keyword
// const result = myNums.filter((num)=> (num < 7) );
//  console.log(result);//[ 1, 2, 3, 4, 5, 6 ]


//Explicit return with 'return' keyword
const result = myNums.filter((num)=> {
   return  num < 7 }
);
 console.log(result);//[ 1, 2, 3, 4, 5, 6 ]


 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];



  ///.usersRequirement
//Find the Books that publish above 1900 year:-
//  const userBooks =  books.filter((book)=> book.publish >= 1900)
//  console.log(userBooks);
// [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   {
//     title: 'Book Two',
//     genre: 'Non-Fiction',
//     publish: 1992,
//     edition: 2008
//   },
//   {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Four',
//     genre: 'Non-Fiction',
//     publish: 1989,
//     edition: 2010
//   },
//   {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   },
//   {
//     title: 'Book Eight',
//     genre: 'Science',
//     publish: 2011,
//     edition: 2016
//   },
//   {
//     title: 'Book Nine',
//     genre: 'Non-Fiction',
//     publish: 1981,
//     edition: 1989
//   }
// ]


  ///.usersRequirement
//Find the Books that publish above 1900 year with genre science:-
const userBooks =  books.filter((book)=> book.publish >= 1900 && book.genre === 'Science')
console.log(userBooks);


//2.Map function or method():-

//In javascript the map function or method is another higher order function which takes callback function as an argument and it returns a new array without modifying the original array.
//It can be applied and iterates over each element of an array and it creates a new array and it can be chainable.


// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(`Original Array ${myNumbers}`);
// //Lets add '* 10 ' using map method():-
// const newNums = myNumbers.map((num)=>  num * 10);
// console.log(`Modified Array ${newNums}`);
// // Original Array 1,2,3,4,5,6,7,8,9,10
// // Modified Array 10,20,30,40,50,60,70,80,90,100


//Chainable:-
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(`Original Array ${myNumbers}`);
const newNums = myNumbers
.map((num)=>  num * 10)// Modified Array 10,20,30,40,50,60,70,80,90,100
.map((num)=> num + 2 )
// console.log(`Modified Array ${newNums}`);//Modified Array 12,22,32,42,52,62,72,82,92,102
.filter((num)=> num >= 40)
console.log(newNums);
// [
//     42, 52,  62, 72,
//     82, 92, 102
//   ]


//3.Reduce function or method():-
//In javascript the Reduce function or method() it is a  higher oder function that takes callback function which is known as reducer function and initial value as an argument.
// It iterates each element of an array and it returns a single output or value.
//In the reduce function or method there is know as Accumulator it continously updated with the logic defined and current value which is current value or an element from an array and the intital value is which we have given.
//Accumulator is known as empty variables and the intialvalue is updated into the accumulator.


const myNumbs = [1,2,3];


const resultOne = myNumbs.reduce((acc,curr)=>{
console.log(`acc: ${acc} and curr: ${curr}`);
return acc + curr;
},0)

console.log(resultOne); //6

const resultTwo = myNumbs.reduce((acc,curr)=> acc + curr ,0)
console.log(resultTwo);//6




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const totalAmount = shoppingCart.reduce((acc,item)=> acc + item.price , 0)
console.log(`Total Amount for cart is Rs:${totalAmount}`)//22996
//Lets use chaining overhere:-

//User wants to find out or  filter out 3000 and above  course:-
let userCourses = shoppingCart
.filter((item)=> item.price >= 2999)
// console.log(userCourses);
// [
//     { itemName: 'js course', price: 2999 },
//     { itemName: 'mobile dev course', price: 5999 },
//     { itemName: 'data science course', price: 12999 }
//   ]

//Now user wants to calculate the course and added to the cart:-
.reduce((acc,item) =>  acc + item.price, 0)
console.log(userCourses); //21997