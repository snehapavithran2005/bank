




//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]

]

//2. List of product under rs:40
products.filter(p=>p[2]<40).forEach

//3. Is there any product can be purchase by rs:5


//4. Print details of oreo
console.log('details of oreo');
oreo=products.find(p=>p[1]='oreo')
console.log(oreo);

//5. print costly product

//6. display out of stock product name

//7. sort product based on available stock

//8. Is there any product with available stock>80

//9. Is there any product available in the range between 20 to 30

//10. Print all product with price in the range between 10 to 50