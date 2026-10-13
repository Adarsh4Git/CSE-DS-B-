function sum(a,b){
    return a+b;
}

function sumWithMessage(clbk, msg){
    const result=clbk(20,30);
    const finalResult = "Hii "+msg + "Your score is = " + result;
    console.log(finalResult);
}

sumWithMessage(sum, "Mr. Victor ");