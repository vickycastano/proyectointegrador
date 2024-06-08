//donde lo vicnulo(?) -- class="saludo">

let recuperaruser = localStorage.getItem('user')
let data = JSON.parse(recuperaruser)
let saludo = document.querySelector('.saludo')

if (data == true) {
    objetoUsuario = data 
    saludo.innerHTML = `<h2> Bienvenido:${objetoUsuario.inputemail} ` 

    console.log(objetoUsuario)

}

//VER 