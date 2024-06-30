//Object Oriented in Javascript:-


//Constructor function:-
function User(userName,userId,userInfo){
    this.userName = userName;
    this.userId = userId;
    this.userInfo = userInfo;
}

//using 'new' keyword it creates a new instance an empty object:-
const userOne = new User("Yash",310398,true);//User { userName: 'Yash', userId: 310398, userInfo: true }
const userTwo = new User("Sam",22456,false);//User { userName: 'Sam', userId: 22456, userInfo: false }

console.log(userOne);
console.log(userTwo);