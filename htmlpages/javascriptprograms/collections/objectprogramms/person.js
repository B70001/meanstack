var arr=[2,3,4,5,10]
//find square of each number in array
for(let num of  arr){
var square=(num)=>(num**2)
console.log(square(num))
}

//find cube of each number in array
for(let items of  arr){
    console.log(items**3)
    }

//find double of each number in array
for(let num of  arr){
        console.log(num+num)
         }
// even numbers from the array
for(let items of  arr){
if(items%2==0){
    console.log("even=" +items)
}

}


var arr=[2,3,4,5,10]
//find square of each number in array
var data=arr.map(num=>num**2)
console.log(data)

//cube
var data=arr.map(num=>num**3)
console.log(data)

//double
var data=arr.map(num=>num+num)
console.log(data)

//even
var data=arr.filter(num=>num%2==0)
console.log(data)



var names=["alan","abhi","aju","biji","bhanu"]
//  capital(all)
var data=names.map(name=>name.toUpperCase())
console.log(data)

//(a)
var data=names.filter(name=>name.charAt(0)=="a")
console.log(data)
