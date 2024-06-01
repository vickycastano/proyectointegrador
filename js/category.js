fetch('https://fakestoreapi.com/products')
.then(function(response){
return response.json();
})
.then(function(data){

let arrayproductos1 = data;
let section = document.querySelector('.conteiner')

for (let i = 14; i < arrayproductos1.length; i++) {
section.innerHTML += ` <section>
<h1>${arrayproductos1[i].title} </h1>
<p>${arrayproductos1[i].description} </p>
<h3>${arrayproductos1[i].price} </h3>
<img src=${arrayproductos1[i].image} />
</section>`

}

})
.catch(function(error){
    console.log(error)
})

