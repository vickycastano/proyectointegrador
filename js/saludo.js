//donde lo vicnulo(?)--> TODAS LAS PAGINAS (?)      class="saludo">

let recuperaruser = localStorage.getItem('user')
let data = JSON.parse(recuperaruser)
let saludo = document.querySelector('.saludo')
let ocultar = document.querySelector('.ocultar')

if (data) {
    objetoUsuario = data 
    saludo.innerText = "Bienvenido: " + recuperaruser 
    saludo.innerHTML =  ` 
     <a href="">LOGOUT</a>
    `  --> funciona pero hace desaparecer lo de arriba 
    ocultar.style.display = 'none'; // ver 

   
   
//ver lo de el logout  y lo de ocultar, xq no funciona? 


}



// estilo 
let estilo = document.querySelector('.saludo')
estilo.style.textAlign ='center'
estilo.style.color = '#4a362f'
estilo.style.marginBottom = '30px'



//VER como hacer para q solo parezca el user y no lo de {""}