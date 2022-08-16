//sorting
var a=[10,11,2,12,13,3,5]
console.log('before sorting',a);
a.sort((n1,n2)=>n1-n2)
console.log('after sort',a);
low=0
up=a.length-1
mid=math.floor((low+up)/2)