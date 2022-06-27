import Header from "./components/Header.js"
import Character from "./components/Character.js";

document.body.insertAdjacentElement("afterbegin",Header())

document.querySelector("button").addEventListener("click",async () =>{
    const container = document.querySelector(".character").appendChild(await Character());
})


const infoModal = document.querySelector(".infoModal");
const modal = document.querySelector("dialog");
const closeModal = document.querySelector(".modal__close");

infoModal.addEventListener("click", ()=>{
    modal.style.display = "flex";
    modal.showModal();
})
closeModal.addEventListener("click",()=>{
    modal.close();
    modal.style.display = "none";
})