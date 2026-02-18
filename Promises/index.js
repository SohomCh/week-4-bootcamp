
 function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));

    

 }

 function callback(){
    console.log("Hi")
 }

 setTimeoutPromisified(3000).then(callback)

//Tasks

 //Promisified fsreadfile



 function fsReadFiledPromsified(filePath,encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,encoding,(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data);
            }
        })
    })
 }


