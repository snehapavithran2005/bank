a=[10,10,20,20,20,30,30,40,40,40,50,50,50,60,60,70]
//op{10,:2:20:3:30:2:40:3:50:3:60:2:70:1}


out={}
a.map(num=>num in out? out[num]+=1:out[num]=1)
 for (let num of a)
{
    if (num in out){
         out[num]+=1
     }
     else
{
     out[num]=1

 }
}
console.log(out);


//metod2

out={}
a.map(num=>num in out? out[num]+=1:out[num]=1)











    
