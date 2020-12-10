var employees=[
[1,"abc","mca",1420],
[2,"hello","mca",25000],
[3,"haii","mca",1000],
]
for(let items of employees){
console.log(items[1])
}

//details of whose salary is above 20000
for(let items of employees){
    if(items[3]>20000)
console.log(items)
}


//find total employee salary
total=0
for(let items of employees){
    total=total+items[3]
}
    console.log(total)





