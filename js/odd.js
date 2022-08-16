//pgm to given no. is odd or even 
var even=(num1)=>
{
     if(num1%2==0){
        return "even"
     }
     else{
        return "odd"
     }
     
}
console.log("odd or even");
console.log(`number is ${even(12)}`);