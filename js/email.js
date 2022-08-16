//pgm to email validation 
//check a word start with 'a'
var validate=(str)=>
{
    if(str.endsWith("@gmail.com"))
    {
        return 'true'
    }
    else{
        return 'false'
    }
}
    console.log(validate('sneha@gmail.com'));

    function check(word)
   {
    word[0]=='a' ||word[0]=='A'?'starts with a':'not'
       
       }
       console.log(check('anu'));
    