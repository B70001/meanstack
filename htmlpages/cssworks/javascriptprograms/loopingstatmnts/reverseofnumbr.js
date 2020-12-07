var num=123;
var data="";
while(num!=0){
var digit=num%10;//3
data=data+String(digit)
num=Math.floor(num/10)//12.3=12
}
console.log(data)




