
let inputemail = document.querySelector('#email')
let inputcontrasena = document.querySelector('#contrasena') 
let form = document.querySelector('.formulario')
let contrasenacorrecta = false 
let emailcorrecto = false 

//VER

form.addEventListener('submit', function(e){
if (inputemail.value == '') { 
alert("Por favor complete el campo email")
}else { 
  emailcorrecto = true 
}if (inputcontrasena.value == '') {
    alert("Por favor complete el campo contraseña")
   
  }else if (inputcontrasena.value.length <6 ){
    alert("La contraseña debe tener al menos 6 caracteres" )

  }else {
    contrasenacorrecta = true 

  }if (!contrasenacorrecta || !emailcorrecto ) {
    e.preventDefault()
  }
})
  


// guardar en localStronge // 


