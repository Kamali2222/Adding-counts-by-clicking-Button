const h1=document.createElement("h1");
document.body.appendChild(h1);
const btn=document.createElement("button");
btn.innerHTML="add";
document.body.appendChild(btn);
const data=document.getElementById("header");
const addBtn=document.querySelector("button");
let i = 0;
const res = btn.addEventListener("click",()=>{
  data.innerHTML=i++;
})

