function test1(cabl){
    setTimeout(()=>{
        console.log("test1")
        cabl();
    },4000);
}
function test2(cabl){
    setTimeout(()=>{
        console.log("test2")
        cabl();
    },2000);
}
function test3(cabl){
    setTimeout(()=>{
        console.log("task3")
        cabl();
    },200);
}
function test4(cabl){
    setTimeout(()=>{
        console.log("task4")
        cabl();
    },100)
}

test1(()=>{
    test2(()=>{
        test3(()=>{
            test4();
        });
    });
});

