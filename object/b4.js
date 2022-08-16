weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
out={}
for ( let record of weatherData)//to get the data on the weatherdata
{
let dis = record['district']//hold all district name
let curTemp = record['weather']
if(dis in out){
    oldTemp=out[dis]
    if(curTemp>oldTemp){
        out[dis]=curTemp
    }
}
}
if(dis in out){
}
else{
    out[dis]=curTemp
}

console.log(out);

//sort temp in desending order
//to convert object to array -object.entries
 console.log(object.entries(out).sort((r1,r2)=>r2[1]-r1[1]));








//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}