import Header from "./components/Header.js"
import Character from "./components/Character.js";

document.body.insertAdjacentElement("afterbegin",Header())

document.querySelector("button").addEventListener("click",async () =>{
    const container = document.querySelector(".character").appendChild(await Character());
})
