
let inputemail = document.querySelector('#email')
let inputcontrasena = document.querySelector('#contrasena') 
let form = document.querySelector('.formulario')
let contrasenacorrecta = false 
let emailcorrecto = false 

form.addEventListener('submit', function(e){
if (inputemail.value == '') { 
alert("Por favor complete el campo email")
}else { 
  emailcorrecto = true 

}
if (inputcontrasena.value == '') {
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

let QS = location.search
let QS1 = new URLSearchParams(QS)

let searchQS = QS1.get('email')

let qs = location.search
let qs1 = new URLSearchParams(qs)
let email = qs1.get('email')

console.log(email)

let QSS = location.search
let QSS1 = new URLSearchParams(QSS)

let searchQS1 = QSS1.get('contrasena')

let qss = location.search 
let qss1 = new URLSearchParams(qss)
let contrasena = qss1.get('contrasena')

console.log(contrasena)
  
