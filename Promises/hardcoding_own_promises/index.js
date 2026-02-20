// Creating a promise

const myPromise=new Promise((resolve,reject)=>{
    let success= true

    if(success){
        resolve("Operation succesfull");
    }
    else{
        reject("Operation failed");
    }
});



// Consuming a promise

myPromise
    .then(result=>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error)
    })


//