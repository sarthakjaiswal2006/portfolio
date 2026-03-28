let index = 0; 
let idx2=0; 
const roles = ["FULL STACK DEVELOPER", "DSA ENTHUSIAST", "UI & UX"];
const roleElement = document.getElementById("role"); 
setInterval(()=>{ 
    let selectedElement=roles[idx2];
    roleElement.textContent+=selectedElement[index];
    index++;
    if (index==selectedElement.length+1){
        index=0;
        idx2+=1;  
        roleElement.innerText=""
    } 
    if (idx2===3){
        idx2=0;
    }
},150) 
document.getElementById("change-mode").addEventListener("click",function(e){
    e.target.classList.toggle("dark")
    if (e.target.classList.contains("dark")){
        document.body.style.backgroundColor="black" 
        document.body.style.color="white"
        let anchors=document.getElementsByClassName("anchors");
        for(let i=0;i<anchors.length;i++){
            anchors[i].style.color="white"
        } 
        document.getElementById("name").style.color="white";
        document.getElementById("nav-bar").style.backgroundColor="black";
        document.getElementById("change-mode").innerText="Light";
    } else {
        document.body.style.backgroundColor="white" 
        document.body.style.color="black"
        let anchors=document.getElementsByClassName("anchors");
        for(let i=0;i<anchors.length;i++){
            anchors[i].style.color="black"
        } 
        document.getElementById("name").style.color="black" 
        document.getElementById("nav-bar").style.backgroundColor="white" 
        document.getElementById("change-mode").innerText="Dark";
    }
})