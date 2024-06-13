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
    <div>
      <img src="${arrayacesorios[i].image}" >
      <h1>${arrayacesorios[i].title}</h1>
      <p>${arrayacesorios[i].description}</p>
      <h3>${arrayacesorios[i].price}</h3>
      <a href="./producto.html?id=${arrayacesorios[i].id}">VER MAS</a>
    </div>
  `
  }
section.innerHTML = acesorrios

//estilo acesorios 

section.style.display = 'flex'
section.style.flexDirection = 'row'
section.style.flexWrap = 'nowrap'
section.style.justifyContent = 'space-between'


div = document.querySelectorAll('.categoriaacesorios div')
for (let i = 0; i < div.length; i++) {
div[i].style.margin = '10px'
div[i].style.width = '20%'
div[i].style.paddingLeft = '10px'
div[i].style.paddingBottom = '10px'
div[i].style.paddingRight = '13px'
div[i].style.paddingTop = '7px'
div[i].style.border = '2px solid #4a362f'
div[i].style.marginTop = '10px'
div[i].style.backgroundColor = '#978f84'
div[i].style.borderRadius = '10px'
div[i].style.textAlign = "center"

}

let image = document.querySelectorAll('.categoriaacesorios div img')
 for (let i = 0; i < image.length; i++) {
  image[i].style.width = '270px'
  image[i].style.height = '200px'
  image[i].style.textAlign = 'center'
  image[i].style.marginTop = '20px'
}


let precio = document.querySelectorAll('.categoriaacesorios div h3')
for (let i = 0; i < precio.length; i++) {
  precio[i].style.marginBottom = '20px'
  precio[i].style.marginTop = '15px'
  
}

let descripcion = document.querySelectorAll('.categoriaacesorios div p')
for (let i = 0; i < descripcion.length; i++) {
 descripcion[i].style.marginTop = '20px'
  
}


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
      <article>
        <img src="${electronics[i].image}"alt="foto de ${electronics[i].title}"></img>
        <h2>${electronics[i].title}</h2>
        <p>${electronics[i].description}</p>
        <h3>${electronics[i].price}</h3>
        <a href="./producto.html?id=${electronics[i].id}">Ver mas</a>
      </article>
      `
    }
sectionElec.innerHTML=productsElec;

})
 .catch (function(error){
  console.log(error);
})

//ROPA DE MUJER 