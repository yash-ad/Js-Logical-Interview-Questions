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
    console.log(`Hello user : ${this.name},Welcome to the Ekart.`);
}

console.log(user.greetingTwo());//Hello user : Yash,Welcome to the Ekart. 