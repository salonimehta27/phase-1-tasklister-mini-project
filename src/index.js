document.addEventListener("DOMContentLoaded", () => {

const forms= document.getElementById("create-task-form");
forms.addEventListener("submit",(e)=>{
  e.preventDefault();
  addAndDelete();   
})
const getList=document.getElementById("tasks");
const input=document.getElementById("new-task-description");

function addAndDelete()
{
  //add
  const newLi=document.createElement("li");
    getList.appendChild(newLi);
    newLi.innerHTML=input.value;
//delete
  const del=document.createElement("button");
    newLi.appendChild(del);
    const addX=document.createTextNode("DONE");
    del.appendChild(addX);
    del.addEventListener("click",(e)=>{
    e.target.parentElement.remove();
  })
}
























})