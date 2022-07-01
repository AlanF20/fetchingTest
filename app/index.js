import Header from "./components/Header.js"
import Character from "./components/Character.js";

document.body.insertAdjacentElement("afterbegin",Header())

document.querySelector("button").addEventListener("click",async () =>{
    const container = document.querySelector(".character").appendChild(await Character());
})


const infoModal = document.querySelector(".infoModal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");

const darkMode = document.querySelector(".darkMode");
const modal2 = document.querySelector(".modal2");
const closeModal2 = document.querySelector(".modal__close2");

const sun = document.querySelector(".bx-sun");

infoModal.addEventListener("click", ()=>{
    modal.style.display = "flex";
    modal.showModal();
})
closeModal.addEventListener("click",()=>{
    modal.close();
    modal.style.display = "none";
})

darkMode.addEventListener("click", ()=>{
    document.body.style.background = "#18191a";
    document.body.style.color = "#fff";
    const anchors = document.querySelectorAll("a");
    anchors.forEach(a => a.style.color = "#fff");
    darkMode.style.display = "none";
    sun.style.display = "inline-block";
})

closeModal2.addEventListener("click", ()=>{
    modal2.close();
    modal2.style.display = "none";
})

 
sun.addEventListener("click", () =>{
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
    const anchors = document.querySelectorAll("a");
    anchors.forEach(a => a.style.color = "#000");
    darkMode.style.display = "inline-block";
    sun.style.display = "none";
})