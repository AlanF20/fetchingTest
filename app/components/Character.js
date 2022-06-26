import getAPIData from "../helpers/getAPIData.js"

const Character = async () =>{
    const $article = document.createElement("article");
    const data = await getAPIData();
    $article.innerHTML = `
        <img src="${data.image}" alt="${data.name}">
        <h2>${data.name}</h2>
    `;
    return $article;
};

export default Character;