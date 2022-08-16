//arrays=to hold multiple value in single varable
//create array

//variable name=[item1,item2....itemn]
 var frameworks =['express',100]
 console.log(frameworks);
 //access an item in array
 //arrayName[index]
 console.log(frameworks[1]);
 //find the total no of item inside the array
 console.log("total items are:" +frameworks.length);
 console.log("last items are:"+frameworks [+frameworks.length-1]);
 //insert an item in an existing array
 frameworks.push(200)
 console.log(frameworks);
 console.log('type of arrays in js:', typeof(frameworks));
 //normal for loop
 //for(i=0;i<frameworks.length;)
 //normal loop
// console.log('using loop')
 //for(i=0;i<frameworks.length;i++)
 //{
   // console.log(frameworks[i]);
 //}
 //console.log('using for');
 console.log('---------------')
 for( let index in frameworks){
    console.log(frameworks[index]);
 }

