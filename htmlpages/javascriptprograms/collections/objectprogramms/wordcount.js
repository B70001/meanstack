var text="hello hai hello hai hello hai"

var words=text.split(" ")
console.log(words)
var newobj={}
for(let items of words){
    if(items in newobj){
        newobj[items]+=1
        
    }
    else{
        newobj[items]=1
    }



}
console.log(newobj)


