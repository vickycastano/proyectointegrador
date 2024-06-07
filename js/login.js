
let inputemail = document.querySelector('#email')
let inputcontrasena = document.querySelector('#contrasena') 
let form = document.querySelector('.formulario')

//VER

form.addEventListener('submit', function(e){
e.preventDefault()


if (inputemail.value == '') { 
alert("Por favor complete el campo email")
}

if (inputcontrasena.value == '') {
    alert("Por favor complete el campo contraseña")
   
  }else if (inputcontrasena.value.length <6 ){
    alert("La contraseña debe tener al menos 6 caracteres" )


  }else {
    
this.submit()
  }
})
  


// guardar en localStronge // 


