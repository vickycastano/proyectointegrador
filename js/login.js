// NAVEGADOR (sin esto en login.js, hace que cuando tocas una categoria entre a una pagina en blanco 
//(solo el hedear y footer sin la informacion de los apis) y
// tengas que volver a tocar el boton de la categoria para que se muestre, por eso neceista esar en el js de login,
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

let email = document.querySelector('#email')
let inputcontrasena = document.querySelector('#contrasena') 
let form = document.querySelector('.formulario')

let user= {}

form.addEventListener('submit', function(e){
e.preventDefault()

if (email.value == '') { 
alert("Por favor complete el campo email")
}

if (inputcontrasena.value == '') {
    alert("Por favor complete el campo contraseña")
   
  }else if (inputcontrasena.value.length <6 ){
    alert("La contraseña debe tener al menos 6 caracteres" )

}else {

    //guardar la informacion del usuario en el local storage 
    user.email = email.value
    //user.inputcontrasena = inputcontrasena.value
    localStorage.setItem('user',JSON.stringify(email.value))

    // para que no se vaya de pagina si no esta correctamente completo el formulario 
    this.submit()
  }
  
})
  


