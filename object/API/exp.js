exp="12+3*4-5"
try{
    console.log('try');
    result=eval(exp)
    //console.log(eval(exp));
}
catch{
    console.log('catch');
    exp="12+3*4-5"
    result=eval(exp)
    //console.log(eval(exp));
}
finally{
    console.log('finally');
    console.log(result);

}

//console.log(eval(exp));
console.log('task completed');
