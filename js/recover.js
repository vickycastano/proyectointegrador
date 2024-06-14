let formulario = document.querySelector(".formulario");
let email = document.querySelector("#email");
let checkbox = document.querySelector(".tyc");

let errorEmail = document.querySelector(".errorEmail");
let errorCheckbox = document.querySelector(".errorCheckbox");
let mostrar = document.querySelector(".Mostrar");
let mostrar2 = document.querySelector(".Mostrar2");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    if (email.value==="") {
        errorEmail.innerText="Por favor escriba su email";

    }else if (checkbox) {
        errorCheckbox.innerText="Por favor acepte el campo Quiero recuperar mi contraseña";
    }else {
        
        this.submit();
    }
    mostrar.innerText="Recibirás un email con las instrucciones para recuperar tu contraseña";
    mostrar2.innerHTML= `<a href="login.html">Ir al login</a> `;


})
