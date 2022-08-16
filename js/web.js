//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]

]
//print all product
products.map(p=>p[1]).forEach(p=>console.log(p
    //5. print costly product

//6. display out of stock product name
products.filter(p=>p[3]==0).foreach(p=>console.log('out of stock product:',p[1]));


//7. sort product based on available stock ascending
products.sort((p1,p2)=>p1[3]-p2[3])
console.log(products);


//8. Is there any product with available stock>80
 console.log('is there any product avalible:',
 products.some((p=>p[2]>20 && p[2]<30)));

//9. Is there any product available in the range between 20 to 30

//10. Print all product with price in the range between 10 to 50
console.timeLog