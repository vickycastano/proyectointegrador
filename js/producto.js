// NAVEGADOR para que sea interactivo 
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

// PRODUCTO 

// traer id de producto seleccionado
let qString = location.search; // esto lo trae como cadna de texto, es '?clave=valor" por ejemplo ?id=3
//cambio eso a un objeto literal para accesar el valor
let qStringObj = new URLSearchParams(qString);
let numId = qStringObj.get("id"); 

let url = `https://fakestoreapi.com/products/${numId}`

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let nombre = document.querySelector(".nombreProducto");
    let descrip = document.querySelector(".descripcion");
    let imagen = document.querySelector(".im");
    let categoria = document.querySelector(".descriphome");
    let precio = document.querySelector(".precio");
    let carritoBut = document.querySelector(".boton");

    nombre.innerText+=data.title;
    descrip.innerText+=data.description;
    imagen.src=data.image;
    categoria.innerText+=data.category;
    precio.innerText+=data.price;
    localStorage.setItem("id",numId); //estoy guardando el numero que es string en un objeto entonces no hace falta  hacer lo de json.stingify y numId = a data.Id
    
})
.catch(function(error){
    console.log(error);
})