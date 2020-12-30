class mathpg{
add=()=>{
    console.log("no arg method")
}
add=(num1)=>{
    console.log("single arg method")
}
add=(num1,num2)=>{
    console.log("two arg method")
}

}
var obj=new mathpg()
obj.add()