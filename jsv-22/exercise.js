/*
# Promise

Write a `promise`. 
If the variable called `number` is greater than 10, then it returns a resolve, otherwise it returns a reject.
Then manage the promise with `then` and `catch` in case of any reject.
*/
const number = 15;

let promise = new Promise((resolve,reject)=>{
    if(number>10){
        resolve(number);
    }
    else{
        reject("Number under 10");
    }
});

promise
    .then((num)=> console.log(num))
    .catch((err)=> console.error(err))