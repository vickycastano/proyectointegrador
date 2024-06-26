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

let formulario = document.querySelector("form");
let email = document.querySelector("#email");
let checkbox = document.querySelector("#recuperarr");

let errorEmail = document.querySelector(".errorEmail");
let errorCheckbox = document.querySelector(".errorCheckbox");
let mostrar = document.querySelector(".mostrar");
let mostrar2 = document.querySelector(".mostrar2");

formulario.addEventListener("submit", function(event){
    event.preventDefault();


    document.querySelector(".errorEmail").innerText="";
    document.querySelector(".errorCheckbox").innerText="";

    if (email.value==="") {
        errorEmail.innerText="Por favor escriba su email";

    }else if (!checkbox.checked) { // aca me refiro a si no esta chequiada la cajita
        errorCheckbox.innerText="Por favor acepte el campo Quiero recuperar mi contraseña";
    }else {
        mostrar.innerText="Recibirás un email con las instrucciones para recuperar tu contraseña";
        mostrar2.innerHTML= `<a href="login.html">Ir al login</a> `;
    }



})
