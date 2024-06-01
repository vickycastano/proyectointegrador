fetch('https://fakestoreapi.com/products')
.then(function(response){
return response.json();
})
.then(function(data){
console.log(data)


///
let vermas = document.querySelector('.botonvermas')
vermas.addEventListener('click', function(){
let vermas = document.querySelector('.botonvermas').innerHTML = URL
})


})
.catch(function(error){
    console.log(error)
})

