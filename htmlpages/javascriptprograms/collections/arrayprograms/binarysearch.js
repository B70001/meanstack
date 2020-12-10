var arr=[10,4,8,5,3,2]
arr.sort((num1,num2)=>num1-num2)
console.log(arr)
var element=5
var low=0;
var up=arr.length-1;
var flag=0
while(low<=up){
var mid=Math.floor((up+low)/2)
if(element>arr[mid]){
low=mid+1
}
else if(element<arr[mid]){
up=mid-1

}
else if(element==arr[mid]){
flag+=1;
break;
}
}
if(flag==0){
    console.log("not found")
}
else{
    console.log("found")
}




