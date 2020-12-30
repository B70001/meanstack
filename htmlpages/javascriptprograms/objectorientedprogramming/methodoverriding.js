class parent{
phone=()=>{
console.log("have nokia")
}
}
class student extends parent{
    phone=()=>{
        console.log("have iphone12")
    }


}
var stu=new student()
stu.phone()