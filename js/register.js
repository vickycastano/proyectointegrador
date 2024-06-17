// NAVEGADOR (sin esto en register.js, hace que cuando tocas una categoria entre a una pagina en blanco 
//(solo el hedear y footer sin la informacion de los apis) y
// tengas que volver a tocar el boton de la categoria para que se muestre, por eso neceista esar en el js de regisro,
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


let formulario = document.querySelector(".formulario");
let email = document.querySelector(".email")
let contrasena = document.querySelector(".contrasena")
let contrasena2 = document.querySelector(".contrasena2")
let errorEmail = document.querySelector(".errorEmail")
let errorPass = document.querySelector(".errorPass")
let errorPass2 = document.querySelector(".errorPass2")


formulario.addEventListener("submit", function (event){
    event.preventDefault();

    if (email.value==="") {
        errorEmail.innerText="Por favor complete el campo";
        
    }else if(contrasena.value==="") {
        errorPass.innerText="Por favor complete el campo";

    }else if(contrasena.value.length < 6) {
        errorPass.innerText="Debe ingresar al menos 6 caracteres";

    }else if(contrasena2.value !== contrasena.value) {
        errorPass2.innerText="Las contraseñas no coinciden";
    }else {
        formulario.submit();
        window.location.href = "login.html";
    }

});


