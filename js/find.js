expense=[10000,15000,20000,25000]
//find total expense
//find maximum expence
//find minimum ex
total=0
for (let item of expense){
    total+=item
}
console.log('total expense',total);
//find maximum expence
maxExp=0
for(let amount of expense){
    if (amount>maxExp){
        maxExp=amount
    
    }
}
console.log('maximum:',maxExp);

//find minimum ex
minExp=10000
for(let amount of expense){
    if (amount<minExp){
        minExp=amount
    
    }
}
console.log('minimum:',minExp);