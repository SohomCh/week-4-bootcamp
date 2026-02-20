// Creating a promise

const myPromise=new Promise((resolve,reject)=>{
    let success= true

    if(success){
        resolve("Operation successful");
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


//default state of a promise is pending.



// create a promisified version of fs.readFile
// create a promisified version of setTimeout
//create a promisified version of fs.writeFile

const fs = require("fs")

function fsReadFilePromise(fileName,encoding){

    return new Promise(function(resolve,reject){

        // suppose to do waht needs to be done 
        //promsie class responsiblity to is to run this function

        fs.readFile(fileName,encoding,function(err,data){
            if(err){

                //if there is a error catch function needs to do its work

                reject(err) // thereforen call reject

            }
            else{


                //otherwise .then function should do the taskresolve(

                resolve(data)




            }
        })

    }); // for promsified we need to return a promise

}


//supposed to look like this

fsReadFilePromise("a.txt","utf-8")
    .then(function (data){
        console.log(data)
    })
    .catch(function(e){
        console.log("Error occured")
    })







// now promisfied version of setTimeout

function setTimeoutPromisified(delay){
    return new Promise(function(resolve,reject){

        //promise to be resolved after delay

        setTimeout(function(){
            resolve()
        },delay)


    })
}



setTimeout(function(){
    console.log("hi")
})


setTimeoutPromisified(1000)
    .then(function(){
        console.log("resolved after 1 second")
    })

    //callback is never passed in promisfied
    




//promsified version of fswritefile


function fsWriteFilePromisifed(filename,content,encoding){

    return new Promise(function(resolve,reject){
        fs.writeFile(filename,content,encoding,function(err){
            if(err){
                reject(err)
            }
            else{
                resolve("File written")
            }
        })
    })

}


fsWriteFilePromisifed("a.txt","Sohom this side","utf-8")
    .then(function(content){
        console.log(content)

    })
    .catch(function(e){
        console.log("error ",e)
    })