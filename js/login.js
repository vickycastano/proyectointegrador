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
    localStorage.setItem('user',JSON.stringify(user))

    // para que no se vaya de pagina si no esta correctamente completo el formulario 
    this.submit()
  }
  
})
  


