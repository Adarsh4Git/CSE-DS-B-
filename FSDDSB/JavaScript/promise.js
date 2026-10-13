function f1(){
    return new promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("Hii");
    },4000)

    })   
}
function f2(){
    return new promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("ABES EC");
            resolve();
        },2000)
    })
}

// Function call
// f1().then        //When resolved
// f1().catch       // WHen not resolved

f1().then(f2)
    .catch((err)=>{
        console.log("Error", err)
    })