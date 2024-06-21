//  class="saludo" y class="logout"

//recuperar la informacion que el usuario agrego en el formulario 
let recuperaruser = localStorage.getItem('user')
let data = JSON.parse(recuperaruser)


let saludo = document.querySelector('.saludo')
let salida = document.querySelector('.logout')
// no use querySelectorAll porque me marcaba error al leer el display 
let desaparecer = document.querySelector('.ocultar')
let desaparecer1 = document.querySelector('.ocultar1')



if (data) {
    saludo.innerText = "Bienvenido: " + recuperaruser + ''
}

if (data) {
    
    salida.innerHTML =  ` 
     <a  class = "logout" href=" ">LOGOUT</a>
    ` 
}

if (data) {
    desaparecer.style.display = 'none'  
    desaparecer1.style.display = 'none'  
}


// estilo saludo 
let estilo = document.querySelector('.saludo')
estilo.style.textAlign ='center'
estilo.style.color = '#4a362f'
estilo.style.marginBottom = '5px'

//estilo logout 
let estilo1 = document.querySelector('.logout')
estilo1.style.textAlign ='center'
estilo1.style.color = '#4a362f'
estilo1.style.marginBottom = '30px'


