class Employee{
    constructor(id,name,designation,salary){
        this.id=id;
        this.name=name;
        this.designation=designation;
        this.salary=salary;
    }
    printEmployee=()=>{

        console.log("id="+this.id);
        console.log("name="+this.name);
        console.log("designation="+this.designation);
        console.log("salary="+this.salary);
    }

}

var obj=new Employee(1,"ajay","hr",25000)

var obj1=new Employee(2,"sajay","developer",28000)

var obj2=new Employee(3,"hajay","hr",20000)

var arr=[]
arr.push(obj)
arr.push(obj1)
arr.push(obj2)
console.log(arr)

//print all employee name only
arr.forEach(emp=>console.log(emp.name))

// print all employee name in uppercase
arr.forEach(emp=>console.log(emp.name.toUpperCase()))

//print employee whose salary above 23000
arr.filter(emp=>emp.salary>23000).forEach(emp=>console.log(emp.name))

//find highest salary
var data=arr.map(emp=>emp.salary).reduce((no1,no2)=>(no1>no2?no1:no2))
console.log(data)


