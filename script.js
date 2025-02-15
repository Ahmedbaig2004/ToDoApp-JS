const inputbox=document.getElementById("input-box");
const listcontaner=document.getElementById("list-container")

const addtask =()=>{
    if(inputbox.value===''){
        alert("You must write something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontaner.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML='\u00d7'
        li.appendChild(span);
    }
    inputbox.value=''
    saveData()

}

listcontaner.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        listcontaner.addEventListener("click",(e)=>{
            
    if(e.target.tagName==="li"){
        e.target.classList.toggle("checked")
        saveData()

    }
    else if(e.target.tagName==="Span"){
        e.target.parentElement.remove()
        saveData()

    }
},false)
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }
},false)

const saveData =()=>{
    localStorage.setItem("data",listcontaner.innerHTML);
}

function showtask()
{
    listcontaner.innerHTML=localStorage.getItem("data");
}
showtask();