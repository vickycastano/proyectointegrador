//donde lo vicnulo(?)--> TODAS LAS PAGINAS (?)      class="saludo">

let recuperaruser = localStorage.getItem('user')
let data = JSON.parse(recuperaruser)
let saludo = document.querySelector('.saludo')

if (data) {
    objetoUsuario = data 
    saludo.innerText = "Bienvenido: " + recuperaruser 
   
//ver lo de el logout 
    console.log(objetoUsuario)

}

let estilo = document.querySelector('.saludo')

estilo.style.textAlign ='center'
estilo.style.color = '#4a362f'
estilo.style.marginBottom = '30px'



//VER como hacer para q solo parezca el user 