
let inputemail = document.querySelector('#email')
let inputcontrasena = document.querySelector('#contrasena') 

let form = document.querySelector('.formulario')

form.addEventListener('submit', function(e){
e.preventDefault();
if (inputemail.value == '') { 
alert("Por favor complete el campo email")
}
if (inputcontrasena.value == '') {
    alert("Por favor complete el campo contraseña")
  }

 })




// ocultar el sing in y registro 
function ocultar(){
document.querySelector('#ocultar').style.display = 'none'
}


// guardar en localStronge

let datoemail = location.search
let queryObj = new URLSearchParams(datoemail)
let email = queryObj.get("email")
console.log(email);

let datocontrasena = location.search 
let queryObj1 = new URLSearchParams(datocontrasena)
let contrasena = queryObj.get('contrasena')
console.log(contrasena);

