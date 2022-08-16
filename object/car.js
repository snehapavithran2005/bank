//create a object for car whose properties are { name,model,manufacture,price}


var car ={
    cname:'swift',
    cmodele:'hashback',
    manufacture:'maruthi',
    price: 1234500
}
console.log(car);

//display manufacture of the car
console.log('manufacture:',car['manufacture']);
console.log(car);


//check whether model is present or not

car.ispresent=true
car.model='hashback'
console.log(car);

//add property varient
car.varient=['manuval']
console.log(car);

//add more values to the key varient
car['varient'].push('automatic')
//add property color
car.colour='black'
console.log(car);