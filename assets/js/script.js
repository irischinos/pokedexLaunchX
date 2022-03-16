/* forma en que se haec una consulta o petición a una API */
const fetchPokemon = () => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;


  // fetch es la respuesta y utiliza promesas con el método then
  fetch(url).then((res) => {
  /* programación asíncrona || promesas */
    if(res.status != "200") {
      console.log(res);
      pokeImage("assets/img/pokesad.gif");
    }
    else {
      return res.json();
    }
    return res.json();
  }).then((data) => {
    console.log(data);
    let pokeImg = data.sprites.front_default;

    console.log(pokeImg);

    pokeImage(pokeImg);
  })
}

// fetchPokemon();
/* const pokeInfoName = element.innerHTML;
pokeInfoName.innerHTML = data.name; */


const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url; 
}


// Reset pokemon y hacer otra búsqueda
const resetPokemon = () => {
  document.getElementById("pokeName").value = "";
  pokeImage("assets/img/pokebola.png");
}


/* function crearPokemon(pokemon) {
  const img = document.createElement('img');
  img.src = pokemon.sprites.front_default;

  const h3 = document.createElement('h3');
  h3.textContent = pokemon.name;

  const div = document.createElement('div');
  div.appendChild(img);
  div.appendChild(h3);

  pokemonContainer.appendChild(div);
} */



/* const pokeInfName = (url) => {
  document.getElementById("pokeInfoName").value = "";
  document.getElementById('data').innerHTML = body;
} */


// cambia la pokebola del inicio por la imagen de vulpix
// pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png");

// mando a llamar la función desde html con onclick al presionar button
/* const imprimir = () => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value;
  console.log(`Hola ${pokeInput}`);
} */


/*
<---------- USO DE FETCH -------------->

let url = 'https://.....';
fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error))

  const mostrarData = (data) => {
    console.log(data)
    let body = ``
    for(let i = 0; i < data.length; i++) {
      body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><tr>`
    }
    document.getElementById('data').innerHTML = body

  }
*/
