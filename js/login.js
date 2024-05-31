//Validar que el campo email no esté vacío
let email = document.querySelector("#email")
  email.addEventListener ('submit', function(){
       if (email === ' ') {
          alert("Por favor complete el campo email" )
          .preventDefault()
        }
})

// contrasena tenga mas de 6 caracters 
let contrasena = document.querySelector("#contrasena")
  contrasena.addEventListener('submit', function(){
    if (contrasena < 6) {
       alert("La contraseña debe tener al menos 6 caracteres" )
       .preventDefault()
    }
})

// submitear el formulario 
let boton = document.querySelector("#boton")
   boton.addEventListener('submit', function(){

   })