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

// FORMULARIO 

let formulario = document.querySelector(".formulario");
let email = document.querySelector("#email");
let checkbox = document.querySelector(".tyc");

let errorEmail = document.querySelector(".errorEmail");
let errorCheckbox = document.querySelector(".errorCheckbox");
let mostrar = document.querySelector(".Mostrar");
let mostrar2 = document.querySelector(".Mostrar2");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if (email.value==="") {
        errorEmail.innerText="Por favor escriba su email";

    }else if (checkbox) {
        errorCheckbox.innerText="Por favor acepte el campo Quiero recuperar mi contraseña";
    }else {
        
        this.submit();
    }
    mostrar.innerText="Recibirás un email con las instrucciones para recuperar tu contraseña";
    mostrar2.innerHTML= `<a href="login.html">Ir al login</a> `;


})
