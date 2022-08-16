

a1=[10,11,12,20,30]
a2=[11,20,21,30,31]
len=a1.length
len1=a2.length
for(i=0;i<len;i++){
  for(j=0;j<len1;j++){
     if(a1[i]==a2[j]){
       console.log(`${a1[i]},${a2[j]}`);
}
}
}
