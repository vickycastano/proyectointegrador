// NAVEGADOR (sin esto en index.js, hace que cuando tocas una categoria entre a una pagina en blanco 
//(solo el hedear y footer sin la informacion de los apis) y
// tengas que volver a tocar el boton de la categoria para que se muestre, por eso neceista esar en el js de index,
// asi te lleva directo a las categorias sin ningun problema)

let queryString = location.search;
let queryStringOBJ = new URLSearchParams(queryString);
let category = queryStringOBJ.get("categories");

fetch(`https://fakestoreapi.com/products/category/${category}`)
.then(function(response){
    return response .json();
})
.then(function(data){
    console.log(data);
    let informacioncategoria = data;
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

//ACESORIO
fetch('https://fakestoreapi.com/products/category/jewelery')
 .then(function(response){
   return response.json()
})
 .then(function(data){
  console.log(data)

let arrayacesorios = data 
let section = document.querySelector(".categoriaacesorios")
let acesorrios = []

for (let i = 0; i < arrayacesorios.length; i++) {
  acesorrios +=  ` 
  
  <div class = "cajashome">
      <img class="im" src="${arrayacesorios[i].image}" >
      <h1>${arrayacesorios[i].title}</h1>
      <p class= "description" >${arrayacesorios[i].description}</p>
      <h3>${arrayacesorios[i].price}</h3>
      <a class= "botoneshome" href="./producto.html?id=${arrayacesorios[i].id}">VER MAS</a>
    </div>
  
  `
  }
section.innerHTML = acesorrios

})
 .catch(function(error){
  console.log(error)
})

// ELECTRONICA 
fetch ("https://fakestoreapi.com/products/category/electronics")
 .then(function(response){
   return response.json();
})
 .then (function(data){
   console.log(data);

let electronics = data;
let sectionElec = document.querySelector(".categoriaelectronica");
let productsElec = []

for (let i = 0; i < electronics.length; i++) {
    productsElec += `
      
      <div  class = "cajashome">
        <img class="im" src="${electronics[i].image}"alt="foto de ${electronics[i].title}"></img>
        <h2>${electronics[i].title}</h2>
        <p class="descriphome">${electronics[i].description}</p>
        <h3 class="precio" >${electronics[i].price}</h3>
        <a  class="botoneshome" href="./producto.html?id=${electronics[i].id}">Ver mas</a>
      </div>
      `
    }
sectionElec.innerHTML=productsElec;

})
 .catch (function(error){
  console.log(error);
})

//ROPA DE MUJER 
