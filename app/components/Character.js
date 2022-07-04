import getAPIData from "../helpers/getAPIData.js";
import Loader from "./Loader.js";

const Character = async () => {
  const $article = document.createElement("article");
  const data = await getAPIData();
  setTimeout(() => {
    $article.innerHTML = `
    <img src="${data.image}" alt="${data.name}">
    <h2>${data.name}</h2>
    `;
  }, 500);
  $article.innerHTML = `
        <img src="./app/assets/spinning-circles.svg">
    `;
  return $article;
};

export default Character;
