//print vowel
var str="hello hai"
vowels=['a','e','i','o','u','A','E','I','O','U']
strArray=Array.from(str)
console.log(strArray);
for(let char of strArray){
    if(vowels.includes(char)){
        console.log(char)
    }
}



//method 
Array.from(str).filter(char=>vowels.includes(char)).forEach(vowel=>console.log(vowel))
