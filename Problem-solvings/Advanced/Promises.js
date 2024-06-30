//What is a promise:-

//The Promise represents an object  eventual completion or failure of an asynchronous operations.
//There are four states in Promise:-
//1.Pending state: This is an intitial state , neither is fulfilled nor rejected.
//2.Fulfilled state: That means the operation was completed sucessfully.
//3.Rejected state: That means the operations was rejected.
//4.Settled state : that means either its fulfilled or rejected.



//Lets create a promise with 'new' keyword:-
//In the new Promise() , It takes a callback function as a parameter.
//There are two keywords or variables we could say 'Resolve' and 'Reject'.



//Example one:-
//Promise creation and consumption:-
const promiseOne = new Promise(function(Resolve,Reject){
setTimeout(()=>{
console.log("Promise one example here");//Promise one example here
Resolve()
},1000)
})
.then(()=>{
console.log("And promise is consumed");//And promise is consumed
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Example Two:-
//Without storing into the variable:-
new Promise((Resolve,Reject)=>{

    setTimeout(()=>{
console.log('Promise two example here');
Resolve()
    },1000)
})
.then(()=>{
    console.log('And Async 2 task promise is consumed and resolved sucesfully');
})



/////////////////////////////////////////////////////////////////////////////////////

//Example three:-
//With an example of user:-
const user = new Promise((Resolve,Reject)=>{
    setTimeout(()=>{
Resolve({userName:"Yash",passWord:"1234"})
    },1000)
})
user.then((userData)=>{
console.log(userData);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////

//Example Four:-

const promiseFour = new Promise((Resolve,Reject)=>{
setTimeout(()=>{
let error = false;
// let error = true;
if(!error){
    Resolve({userName:"Javascript",userId:"123456"});
}
else{
    Reject('Error:Something Went Wrong');
}
},1000)
});
promiseFour
.then((userData)=>{
console.log(userData);
return userData.userName
})
.then((userName)=>{
console.log(userName);
})
.catch((Error)=>{
    console.error("Error:",Error)
})
.finally(()=> console.log("The promise is either resolve or rejected."))


//Example five :-

const promiseFive = new Promise((Resolve,Reject)=>{
    setTimeout(()=>{
    let error = false;
    // let error = true;
    if(!error){
        Resolve({userName:"Javascript",userId:"123456"});
    }
    else{
        Reject('Error:Something Went Wrong');
    }
    },1000)
    });


    // With async and await keyword:-
    async function consumePromiseFive(){
try {
    const response = await promiseFive;
    console.log(response);
} catch (error) {
    console.log(error);
}
    }
    consumePromiseFive();

////////////////////////////////////////////////////////////////////////////////////////////////

//Example six:-
//With using 'fetch' keyword:-

async function getUserInfo(){
    //Lets wrap into the try catch:-
try {
    const response = await fetch('https://randomuser.me/api/');
//  console.log(response);
const data = await response.json()
console.log(data); 
} catch (error) {
  console.error(error)  
}
}
getUserInfo()

/////////////////////////////////////////////////////////////////////////////////////////////////

//Exmaple 6
//With '.then() and .catch()':-
fetch('https://randomuser.me/api/')
.then((response)=>{
return response.json();
// console.log(data);
})
.then((userData)=>{
console.log(userData);
})
.catch((error)=>{
console.log('Error handling',error);
})