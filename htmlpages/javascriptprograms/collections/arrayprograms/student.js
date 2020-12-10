var students=[
[1,"st1","mca",140],
[2,"st2","mca",145],
[3,"st3","bca",100],
[4,"st4","bca",100]

]

//print all students name
for(let student of students){
    console.log(student[1])
}

//find num of students doing mca
var cnt=0;
for(let student of students){
    if(student[2]=="mca"){
        cnt++;
    }
}
        console.log("number of students in mca = "+cnt)


 //find total mark in bca
 total=0
        for(let items of students){
if(items[2]=="bca"){
    total=total+items[3]
}
        }
        console.log(total)

        //find student have highest

        for(let items of students){

            
        }
    

