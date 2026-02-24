// async await returns a new Promise

//async awaitified of fs.ReadFile with multiple files


const fs=require('fs')

function fsReadFilePromisified(filepath,encoding){
    return new Promise(function(resolve,reject){

        fs.readFile(filepath,encoding,function(err,data){
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

async function main() {

    
    let file1Contents1=await fsReadFilePromisified("a.txt","utf-8")   //using await for resolving 
    let file1Contents2=await fsReadFilePromisified("b.txt","utf-8")
    let file1Contents3=await fsReadFilePromisified("c.txt","utf-8")
    
    console.log(file1Contents1)
    console.log(file1Contents2)
    console.log(file1Contents3)


    
}

main();
// async await is just a syntactical sugar inside its the same.then and .catch