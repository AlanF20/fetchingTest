const getData = async () =>{
    const MAX_CHARACTERS = 826;
    const randomCharacter = Math.ceil(Math.random()* MAX_CHARACTERS)
    try{
        const API = `https://rickandmortyapi.com/api/character/${randomCharacter}`;
        const response = await fetch(API);
        const data = response.json();
        return data;
    }catch(error){
        return console.log(error)
    }
};

export default getData;