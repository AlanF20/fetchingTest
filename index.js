let contador = 1;

const getData = async () =>{
    try{
        const API = `https://rickandmortyapi.com/api/character/${contador}`;
        const response = await fetch(API);
        const data = response.json();
        contador++;
        return data;
    }catch(error){
        return console.log(error)
    }
};

document.querySelector("button").addEventListener("click", async () =>{
    const article = document.createElement("article");
    const name = document.createElement("h2");
    const image = document.createElement("img");
    const character = await getData();
    name.innerHTML = character.name;
    image.src = character.image;
    article.appendChild(image);
    article.appendChild(name);
    const container = document.querySelector(".character").appendChild(article)
})