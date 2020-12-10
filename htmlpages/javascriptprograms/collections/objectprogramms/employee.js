var employee={

    id:100,
    name:"don",
    exp:2,
    salary:15000
}
//print employee name only
console.log(employee["name"])
console.log(employee.name)


//iterate employee
for(let items in employee){
    console.log(items+","+employee[items])
}

//check gender key is there
console.log("gender" in employee)

//add new key value pair
employee["gender"]="male"
console.log(employee)

//update salary with 500
employee["salary"]+=500
console.log(employee)

