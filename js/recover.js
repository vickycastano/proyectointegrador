let formulario = document.querySelector(".formulario");
let email = document.querySelector("#email");
let checkbox = document.querySelector(".tyc");

let errorEmail = document.querySelector(".errorEmail");
let errorCheckbox = document.querySelector(".errorCheckbox");
let mostrarstrar = document.querySelector(".Mostrar");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if (email.value==="") {
        errorEmail.innerText="Por favor escriba su email";

    }else if (checkbox.checked==="") {
        errorCheckbox.innerText="Por favor acepte el campo Quiero recuperar mi contraseña"
    }else {
        formulario.submit();
        mostrar.innerText="Recibirás un email con las instrucciones para recuperar tu contraseña"
        mostrar.innerHTML= `<a href="register.html"></a> `
        
    }






})
