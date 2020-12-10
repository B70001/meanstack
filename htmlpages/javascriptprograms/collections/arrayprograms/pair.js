var arr=[1,6,3,4,2,5] //6(4,2)
arr=arr.sort((num1,num2)=>num1-num2)
//[1,2,3,4,5,6]
var low=0
var upper=arr.length-1
var element=6
while(low<upper){

let total=arr[low]+arr[upper]
if(total>element){
    upper=upper-1;


}
else if(total<element){
    low=low+1
}
else{
    console.log(arr[low]+ "," +arr[upper])
low=low+1 //uppper=upper-1
    
}



}