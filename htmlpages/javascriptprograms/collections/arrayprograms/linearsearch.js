var arr=[1,6,7,8]//search a element from array
var element=77;
var flag=0;
for(let items of arr){
if(items==element){
flag+=1

break;
}

}
if(flag==0){
    console.log(" not found")
}
else{

console.log(" found")
}
