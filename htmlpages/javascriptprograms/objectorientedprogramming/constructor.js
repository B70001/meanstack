class Student{
    constructor(rol,name,course){
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
    var obj=new Student(25,"ajay","male")
    
    obj.printStudent()