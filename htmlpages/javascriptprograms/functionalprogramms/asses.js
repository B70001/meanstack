var employees=[
    {id:100,name:"ajay",salary:25000,year_join:1980,year_resign:1990},
    {id:101,name:"vjay",salary:22000,year_join:1982,year_resign:1989},
    {id:102,name:"tom",salary:30000,year_join:1980,year_resign:1991},
    {id:103,name:"tinu",salary:18000,year_join:1975,year_resign:1992},
    {id:104,name:"jain",salary:25000,year_join:1978,year_resign:1985}
    ]

    //print all employees name only
    
    //external iteration
for(let items of employees){
    console.log(items.name)
}
     //internal iteration
employees.forEach(items=>console.log(items.name))

//print all employee whose salary >24000
var data=employees.filter(items=>items.salary>24000).map(items=>items.name)
console.log(data)
//or
employees.filter(items=>items.salary>24000).forEach(items=>console.log(items.name))


// print  employees whose experience >10 years
employees.filter(emp=>(emp.year_resign-emp.year_join)>=10).forEach(emp=>console.log(emp.name))

//find highest salaried employee

var data=employees.map(emp=>emp.salary).reduce((num1,num2)=>(num1>num2?num1:num2))
employees.filter(emp=>emp.salary==data).forEach(items=>console.log(items.name))






    