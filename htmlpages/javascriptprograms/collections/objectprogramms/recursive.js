var letters="BAACABC"

var obj={}
for(let char of letters){

    //console.log(char)

    if(char in obj){
        console.log("first recursive character="+char)
        break;


    }
    else
    obj[char]=1
}