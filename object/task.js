text="hello hai hello hai"
//output:{hello:2,hai:2}
wordcount={}
    words =text.split(" ")
    //console.log(words)
    for(let word of words){
        if(word in wordcount){
            wordcount[word]+=1
    


        }
        else{
            wordcount[word]=1
        }

    }
console.log(wordcount);


///split-to convert a string