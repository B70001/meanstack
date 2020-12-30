function display(val){

var txtbox=document.querySelector("#displaybox");
txtbox.value+=val;
}
function solve(){
    let data=document.querySelector("#displaybox");
    let res=eval(data.value)
    data.value=res

}
function clearbox(){
    document.querySelector("#displaybox").value="";

}