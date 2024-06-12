// traer id de producto seleccionado
let qString = location.search; // esto lo trae como cadna de texto, es '?clave=valor" por ejemplo ?id=3
//cambio eso a un objeto literal para accesar el valor
let qStringObj = new URLSearchParams(qString);
let numId = qStringObj.get("id"); 

let url = 'https://fakestoreapi.com/products/${numId}'

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
    carritoBut
    
})
.catch(function(error){
    console.log(error);
})