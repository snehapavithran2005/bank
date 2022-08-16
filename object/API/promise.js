var pro=new Promise((res,rej)=>{
    let watchTime=2
    if(watchTime>1){
        res('seminar is a success')
    }
    else{
        rej('seminar is fail')
    }
})
pro.then(msg=>{
    console.log(msg);
})
.catch(msg=>{
    console.log(msg);
})