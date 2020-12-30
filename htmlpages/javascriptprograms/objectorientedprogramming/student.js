class Student{
setStudent=(rol,name,course)=>{
    this.rol=rol;
    this.name=name;
    this.course=course;

}
printStudent=()=>{
    console.log("rol="+this.rol)
    console.log("name="+this.name)
    console.log("course="+this.course)
}

}

//object
var obj=new Student
obj.setStudent(23,"ajay","mean")
obj.printStudent()
console.log(obj.name)
obj.name="APPU"
console.log(obj.name)

var obj2=new Student
obj.setStudent(26,"kajay","mean")
obj.printStudent()