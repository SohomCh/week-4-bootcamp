
 function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));

    

 }

 function callback(){
    console.log("Hi")
 }

 setTimeoutPromisified(3000).then(callback)



