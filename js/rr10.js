var a=40
var b=30
var c=90
if(a>b && a>c)
{
    console.log(`largest is ${a}`);
    if(b>c)
    {
    console.log(`second largest is ${b}`);
    console.log(`sorted  order: ${c},${a},${b}`);
}
    else{
    console.log(`second largest is ${c}`);
    console.log(`sorted  order: ${b},${c},${a}`);
}
}
else if(b>c && b>a)
{
    console.log(`largest is ${b}`);
    if(c>a)
    {
    console.log(`second largest is ${c}`);
    console.log(`sorted  order: ${c},${a},${b}`);
}
    else{
        console.log(`second largest is ${a}`);
        
    }

}
else if(c>a && c>b)
{
    console.log(`largest is ${c}`);
    if(a>b)
    {
    console.log(`second largest is ${a}`);
    
}
else{
    console.log(`second largest is ${b}`);
    
}
}