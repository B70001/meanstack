//add
function add(num1,num2){
    let res=num1+num2;
    console.log(res)
}
add(6,4)
add(8,10)
add(3,12)


//sub
function sub(num1,num2){
    let res=num1-num2;
    console.log(res)
}
sub(10,4)
sub(5,3)


//mul
function mul(num1,num2){
    let res=num1*num2;
    console.log(res)
}
mul(10,4)
mul(5,3)


//div
function div(num1,num2){
    let res=num1/num2;
    console.log(res)
}
div(10,5)
div(5,3)

//modulo
function modulo(num1,num2){
    let res=num1%num2;
    console.log(res)
}
modulo(10,5)
modulo(12,10)


//power
function power(num1,num2){
    let res=num1**num2;
    console.log(res)
}
power(2,3)
power(1,3)

//factorial
function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
    fact=fact*i;
    }
   console.log(fact) 
    
}
factorial(10)