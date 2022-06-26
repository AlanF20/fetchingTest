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

export default getData;