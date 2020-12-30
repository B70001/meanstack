class person{

    setperson=(age,names,gender)=>{
        this.age=age;
this.names=names;
this.gender=gender;
    }
    printperson=()=>{
       
        console.log("name="+this.names)
        console.log("age="+this.age)
        console.log("gender="+this.gender)
    }
}

//object
var obj=new person();
obj.setperson(25,"ajay","male")
obj.printperson()
var obj1=new person();
obj1.setperson(26,"vjay","male")
obj1.printperson()
