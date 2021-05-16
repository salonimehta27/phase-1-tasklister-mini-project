document.addEventListener("DOMContentLoaded", () => {

const forms= document.getElementById("create-task-form");
forms.addEventListener("submit",(e)=>{
  e.preventDefault();
  addAndDelete(); 
  isDate();
    
})
const getList=document.getElementById("tasks");
const input=document.getElementById("new-task-description");

function addAndDelete()
{
  //add
  const newLi=document.createElement("li");
    getList.appendChild(newLi);
    const date=document.getElementById("date");
    newLi.innerHTML=input.value +" "+ date.value;
//delete
  const del=document.createElement("button");
    newLi.appendChild(del);
    const addX=document.createTextNode("DONE");
    del.appendChild(addX);
    del.addEventListener("click",(e)=>{
    e.target.parentElement.remove();
  })
}
// add date function to due date
function isDate() {   
  const dateEntered = document.getElementById("date").value; 
   const regEx = /^\d{2}\/\d{2}\/\d{4}$/; 
   // compares the date entered with the said format
   if(!regEx.test(dateEntered)){
   alert("Please enter the date format mm/dd/yyyy");
   }
}
})