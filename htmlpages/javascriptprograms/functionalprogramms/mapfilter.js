var arr=[1,373,312,7,8]

//map,filter,reduce,sort

//square
var data=arr.map(num=>num**2)
console.log(data)

//even
var data=arr.filter(num=>num%2==0)
console.log(data)

//max
var data=arr.reduce((num1,num2)=>(num1>num2?num1:num2))
console.log(data)

//mini
var data=arr.reduce((num1,num2)=>(num1<num2?num1:num2))
console.log(data)

//total
var data=arr.reduce((num1,num2)=>(num1+num2))
console.log(data)

//sort-not correct-first character
var data=arr.sort()
console.log(data)

var data=arr.sort((num1,num2)=>(num1-num2))
console.log(data)

var data=arr.sort((num1,num2)=>(num2-num1))
console.log(data)