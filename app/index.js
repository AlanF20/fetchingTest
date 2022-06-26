import getAPIData from "./helpers/getAPIData.js"
import Header from "./components/Header.js";

const d = document;
d.addEventListener("DOMContentLoaded", Header);

document.querySelector("button").addEventListener("click", async () =>{
    const article = document.createElement("article");
    const name = document.createElement("h2");
    const image = document.createElement("img");
    const character = await getAPIData();
    name.innerHTML = character.name;
    image.src = character.image;
    article.appendChild(image);
    article.appendChild(name);
    const container = document.querySelector(".character").appendChild(article)
    return container;
})
