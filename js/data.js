let contenedor = document.getElementById("container");
let personajes = {};

const traer_datos = (id)=>{
    fetch("https://rickandmortyapi.com/api/character/"+id)
    .then((response) => response.json())
    .then((data) => {
        personajes = data;
        pintar_datos();

    })
    .catch((error) => console.log(error))
}

const pintar_datos = ()=>{
    contenedor.innerHTML = "";
    contenedor.insertAdjacentHTML('beforeend',`
    
    <div class="datos">
        <img class="personaje" src="${personajes.image}">
        <h1>${personajes.name}</h1>
        <div>
          <div class="descripcion"> Status: ${personajes.status}</div>
          <div class="descripcion"> Specie:  ${personajes.species}</div>
          <div class="descripcion"> Gender:  ${personajes.gender}</div>
          <div class="descripcion"> Type: ${personajes.type}</div>
        </div>
        
    </div>
    `)
    contenedor.insertAdjacentHTML('beforeend', `
      <center><button id="random">Generar Personaje</button></center>
    `)
    let rand_btn = document.getElementById("random")
    rand_btn.addEventListener("click", ()=>{
        traer_datos(aleatorio_entre(1,826));
    })
}

const aleatorio_entre = (min,max)=>{
    return Math.ceil(Math.random()*(max-min)+min);
}

traer_datos(1);