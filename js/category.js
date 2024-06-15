//querystring 
let queryString = location.search;
let queryStringOBJ = new URLSearchParams(queryString);
let category = queryStringOBJ.get("categories");


//fetch para que el api se muestre 
fetch(`https://fakestoreapi.com/products/category/${category}`)
.then(function(response){
    return response .json();
})
.then(function(data){
    console.log(data);
    let informacioncategoria = data;
    let cambiocategoria = document.querySelector('.categorias')
    let categoria = [];

    for (let i = 0; i < informacioncategoria.length; i++) {
        categoria += `
    <div  class = "cajashome">
        <img  class="im" src="${informacioncategoria[i].image}" >
        <h1>${informacioncategoria[i].title}</h1>
        <p>${informacioncategoria[i].description}</p>
        <h3 class="precio" >${informacioncategoria[i].price}</h3>
        <a  class="botoneshome" href="./producto.html?id=${informacioncategoria[i].id}">VER MAS</a>
  </div>
        `
        }

        cambiocategoria.innerHTML = categoria
    


//navegador para que vaya a las distintas querystrings 
let navegador = document.querySelector('.navegador')

navegador.innerHTML =  ` 
   <li><a href="./index.html">HOME</a></li>
  <li><a href="./category.html?categories=${informacioncategoria.category="electronics"}">ELECTRONICOS</a></li>
  <li><a href="./category.html?categories=${informacioncategoria.category="jewelery"}">ACCESSORIOS</a></li>
  <li><a href="./category.html?categories=${informacioncategoria.category="women's clothing"}">ROPA DE MUJER</a></li>`

   

})
.catch(function(e){
    console.log(e);
})