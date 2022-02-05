let closed=document.querySelector(".closed");
let opent =document.querySelector(".open");

document.querySelector(".emoji").onclick=function(){
    if(closed.classList.contains("active")){closed.classList.remove("active"),opent.classList.add("active")}
    else{opent.classList.remove("active"),closed.classList.add("active")}
}