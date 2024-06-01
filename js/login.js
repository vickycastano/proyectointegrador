
let inputemail = document.querySelector('#email')
let inputcontrasena = document.querySelector('#contrasena')
let imputcontrasenalength = document.querySelector('#contrasena') 

let form = document.querySelector('.formulario')

form.addEventListener('submit', function(e){
  e.preventDefault();
console.log(inputemail.value) //muestra el mail que se ingreso en la consola 
if (inputemail.value == '') { 
alert("Por favor complete el campo email")
}
if (inputcontrasena.value == '') {
    alert("Por favor complete el campo contraseña")
  }
})

// ocultar el sing in y registro 
function ocultar (){
document.querySelector('#ocultar').style.display = 'none'
}