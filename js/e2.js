//print pairs whose sum is 6
a1=[2,3,4,5]
len=a1.length
for(i=0;i<len;i++){
for(j=i+1;j<len;j++){
if(a1[i]+a1[j]==6){
console.log(`${a1[i]},${a1[j]}`);
}
}
}
