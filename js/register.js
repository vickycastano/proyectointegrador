let formulario = document.querySelector(".formulario");
let email = document.querySelector(".email")
let contrasena = document.querySelector(".contrasena")
let contrasena2 = document.querySelector(".contrasena2")
let errorEmail = document.querySelector(".errorEmail")
let errorPass = document.querySelector(".errorPass")
let errorPass2 = document.querySelector(".errorPass2")


formulario.addEventListener("submit", function (event){
    event.preventDefault();

    if (email.value==="") {
        errorEmail.innerText="Por favor complete el campo";
        
    }else if(contrasena.value==="") {
        errorPass.innerText="Por favor complete el campo";

    }else if(contrasena.value.length < 6) {
        errorPass.innerText="Debe ingresar al menos 6 caracteres";

    }else if(contrasena2.value !== contrasena.value) {
        errorPass2.innerText="Las contraseñas no coinciden";
    }else {
        formulario.submit();
        window.location.href = "login.html";
    }

});


