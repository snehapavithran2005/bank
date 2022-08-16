num1=80
num2=60
gcd=0
for(i=1;i<num2;i++){
    if((num1%i==0) && (num2%i==0)){
gcd=i
    }
    }
console.log(` gcd (${num1},${num2})=${gcd}`);