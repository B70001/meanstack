var cl=document.querySelector("#clk");
cl.addEventListener("click",()=>{
    cl.textContent=("clicked");
    cl.style.color="red";
}
)
var ov=document.querySelector("#over")
ov.addEventListener("mouseover",()=>{
    ov.textContent=("mouse currently over me")
    onvrdisplaypointerunrestricted.style.color="red";
}
)
ov.addEventListener("mouseout",()=>{
    ov.textContent=("mouse not over me")
    onvrdisplaypointerunrestricted.style.color="red";
}
)
var db=document.querySelector("#double")
db.addEventListener("dblclick",()=>{
    db.textContent=("double clicked")
    db.style.color="blue";
}
)
