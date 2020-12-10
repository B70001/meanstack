


var arr=[22,7,3,0,5]


for(let i=0;i<arr.length;i++){
for(let j=i+1;j<arr.length;j++){
   if (arr[i]>arr[j]){
   var temp=arr[i];
   arr[i]=arr[j];
   arr[j]=temp;

   }
}
}


console.log(arr)











arr.sort((no1,no2)=>no2-no1)
console.log(arr)


