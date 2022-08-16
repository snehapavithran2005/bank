a=[
    [10,50],
    [20,60],
    [1,5],
    [15,25],
    [3,8],
    [100,500],

]
//1. print all numbers > 10 // 50,20,60,15,25,100,500
//numArr=a.flat().filter(num=>num>10).forEach(num=>console.log(num))
//console.log()



//2. print square of all number - map
//numArr=a.flat().map(num=>num**2).forEach(num=>console.log(num))



//3. print total sum - reduce
//numArr=a.flat().reduce(n1,n2=>num+(num+1)).forEach(num=>console.log(num))
console.log('total:',a.flat().reduce((n1,n2)=>n1+n2));
//4. print highest number//
console.log('total:',a.flat().reduce((n1,n2)=>n1+n2));