var a=[10,11,12,13,2,3,5]
//check no.2 is present inthe array or not
var a1=[4,5,6]
//output=[11,10,9]
searchitem=2
fount=false
for(let item of a)
{
    if(searchitem==item)
    {
       found=true
       break;
    }
   
    }

console.log(found?'number found':'not fount');
        
var input=[3,4,5]
sum=0
output=[]
    for(let item of input)
    {
        sum+=item

        
    }
    for(let item of input)
    {
        output.push(sum-item)
    }
    console.log(output);