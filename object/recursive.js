//print first recursive character - 
pattern ="ABABBC"
obj={}

char=pattern.split(" ")

for(let char of character){
    if(char in obj){
        console.log('ist recursivd:char');
        break
       



    }
    else{
       obj[char]=1
    }

}
console.log(pattern);

