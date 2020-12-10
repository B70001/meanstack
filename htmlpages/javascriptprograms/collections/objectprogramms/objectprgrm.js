var students={
    rol:100,
    name:"abc",
    course:"mca",
    total:140

}
//abc

console.log(students.name)
console.log(students["name"])
//all(key and values)
for(let items in students)
console.log(items+"," +students[items] )

//checking for a specific key //true,false
console.log("total" in students)

//adding a new key value pair
students["gender"]="male"
console.log(students)

//update

students["total"]+=10
console.log(students)

