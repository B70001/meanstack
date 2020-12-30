/*var head=document.getElementsByTagName("h1")
for(hd of head){
    hd.style.color="green";
}

var idd=document.getElementById("one")
idd.style.color="red";

var iddd=document.getElementById("two")
iddd.style.color="blue";

var list=document.getElementsByClassName("lis")
for(hd of list){
    hd.style.color="pink";
}
var ne=document.getElementById("dm")
ne.innerHTML="<em>Document Object Methods</em>"*/

var data=document.querySelectorAll("li")
data.forEach(li=>li.style.color="green")
    
var dm=document.querySelectorAll(".lis")
dm.forEach(list=>list.style.color="blue")

var hd=document.querySelector("#one")
hd.style.color="red";
