var arr=[1,2,3,4,5,6]

var  sum=0;
for(let items of arr){
sum=sum+items
}
console.log(sum)




let tot=arr.reduce=(num1,num2)=>num1+num2
console.log(tot)



var items=arr.splice(2,2)
console.log(arr)
