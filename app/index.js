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

infoModal.addEventListener("click", ()=>{
    modal.style.display = "flex";
    modal.showModal();
})
closeModal.addEventListener("click",()=>{
    modal.close();
    modal.style.display = "none";
})

darkMode.addEventListener("click", ()=>{
    modal2.style.display = "flex";
    modal2.showModal();
})
closeModal2.addEventListener("click", ()=>{
    modal2.close();
    modal2.style.display = "none";
})