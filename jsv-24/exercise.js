/*
# Promise errors

Starting from the previous exercise, 
try to better handle all errors through the `Error` class and the `catch` method. 
Also add the `finally` method.
*/

const isLogged = true;

function userLogged(isLogged){
    return new Promise((resolve,reject)=>{
        let rand =Math.random();
        if(isLogged){
            resolve(rand);
        }
        else{
            reject(new Error("isLogged is false"))
        }
    });
}
function userName(randNumber){
    return new Promise((resolve,reject)=>{
        if(randNumber>0,5){
            resolve({name: "John", age: 24});
        }
        else{
            reject(new Error("User does not exist"));
        }
    });
}

userLogged(5)
    .then(userName)
    .then((val)=> console.log(val))
    .catch((err)=> console.error(err))
    .finally(()=> console.log("finally"))