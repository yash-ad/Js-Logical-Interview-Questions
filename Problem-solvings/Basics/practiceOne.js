const accountId = 31031998;
let accountEmail = "yashdandnaik@gmail.com";
var accountPassword = "12345"
accountCity = "Pune";

// console.log(accountId,accountEmail,accountPassword,accountCity);


// accountId = 1111111; //Assignment to constant variable , and it cannot be redeclared.
accountEmail = "yd@gmail.com"
accountPassword = "6789"
accountCity = "Obd";
console.log(accountId,accountEmail,accountPassword,accountCity);



let authenticateUser;

console.log(authenticateUser); //The variable's value has not defined yet.


// console.log(Date.now().getTime());


let newDate = new Date();


console.log(newDate.toLocaleString());//14/6/2024, 6:22:07 pm


let newArray = [0,1,2,3,4,5];
console.log(newArray);
console.log(newArray.slice(1,3));
console.log(newArray);
console.log(newArray.splice(1,3));
console.log(newArray);



//How to merge an array:-

const arrayOne = [1,2,3];


const arrayTwo = [4,5,6];


const newArr = [...arrayOne,...arrayTwo];

console.log(newArr);//[ 1, 2, 3, 4, 5, 6 ]



//Object literals example:-


const user = {
    name:"Yash",
    "full name":"Yash Dandnaik",
    age:26,
    city:"Pune",
    userId:123456
}

//With Dot notation
console.log(user.name);//Yash

//With square bracket notation:-
console.log(user["full name"]);//Yash Dandnaik


//Function in an object:-

user.greeting = function(){
    console.log("Hello User");
}

console.log(user.greeting()); //Hello User

user.greetingTwo = function(){
    console.log(`Hello user : ${this.name}, Welcome to the Ekart.`);
}

console.log(user.greetingTwo());//Hello user : Yash,Welcome to the Ekart. 


////////////////////////////////////////////////////////////////////////////////////////////////
//21-06-24:-

//Practice set questions:-

//Arrays practice questions:-

const arrOne = [1,2,3,4,5,6];

const arrTwo = [7,8,9,10,11,12];

//There are two types to merge an array 
//1.concat:-
const mergeTheArray = arrOne.concat(arrTwo);

console.log(`MergedArray:${mergeTheArray}`); //MergedArray:1,2,3,4,5,6,7,8,9,10,11,12

//2.Spread-Operator:-

const mergeArrayWithSpread = [...arrOne,...arrTwo];

console.log(`MergedArray with using spread:${mergeArrayWithSpread}`);//MergedArray with using spread:1,2,3,4,5,6,7,8,9,10,11,12



// const isItAnArray = Array.isArray("Yash");
// console.log(isItAnArray); //false

// const isItAnArray = Array.from("Yash");
// console.log(isItAnArray);//[ 'Y', 'a', 's', 'h' ]

// const isItAnArray = Array.of("Yash");
// console.log(isItAnArray);//[ 'Yash' ]

// const isItAnArray = Array.from({name:"Yash"});
// console.log(isItAnArray);//[]




///.Objects part two:-

//Object destructure:-
const person = {
    name:"Yash",
    age:"26",
    city:"Pune"
};

//Its an older way to access keys as variables from an object.
console.log(person.name);
console.log(person.age);
console.log(person.city);


//Newer way to access keys as variables from an object.
const {name,age,city} = person

console.log(person);//{ name: 'Yash', age: '26', city: 'Pune' }
