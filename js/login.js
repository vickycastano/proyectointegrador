
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
  }else if (inputcontrasena.value.length <6 )
    alert("La contraseña debe tener al menos 6 caracteres" )
  })



// NO FUNCIONA 
let irahome = document.querySelector('#boton')
irahome.addEventListener('submit', function(){
  window.location.herf = 'index.html'
})




// guardar en localStronge // VER SI ESTA BIEN 

let datoemail = location.search
let queryObj = new URLSearchParams(datoemail)
let email = queryObj.get("email")
console.log(email);

let datocontrasena = location.search 
let queryObj1 = new URLSearchParams(datocontrasena)
let contrasena = queryObj1.get('contrasena')
console.log(contrasena);




  
