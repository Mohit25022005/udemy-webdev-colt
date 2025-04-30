const from = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");

const list =document.querySelector('#cats');
from.addEventListener("submit",function(e){
    
    e.preventDefault();  //it says dont go to new request just stop 
    const catName=input.value;
    const newLI = document.createElement("LI");
    newLI.innerText=catName;

    list.append(newLI);
    input.value="";
});