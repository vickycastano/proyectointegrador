let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let categoria = urlParams.get('category');

fetch('https://fakestoreapi.com/products/categories')

.then(function(response){
  return response.json()
})
.then(function(data){
  console.log(data)

let navegador = document.querySelector('.navegador1')

navegador.innerHTML =  `  
<ul class="navegador">
  <li><a href="./index.html">HOME</a> </li>
  <li> <a href="./category.html?category=${data[0]}">ELECTRONICOS</a></li>
  <li><a href="./category.html?category=${data[1]}">ACCESSORIOS</li> 
  <li> <a href="./category.html?category=${data[3]}">ROPA DE MUJER</a></li>
</ul>
` 

//NO FUNCIONA 
if (data[3]) {
  let categorias = data 
let cambiocategorias = document.querySelector('.categorias')
arraycategorias = []


fetch('https://fakestoreapi.com/products/category/jewelery')
.then(function(response){
  return response.json()
})
.then(function(data){
  console.log(data)

for (let i = 0; i < categorias.length; i++) {
  arraycategorias +=  ` 
  <div>
   <img src="${categorias[i].image}" >
  <h1>${categorias[i].title}</h1>
  <p>${categorias[i].description}</p>
  <h3>${categorias[i].price}</h3>
  <a  href="./producto.html?id=${categorias[i].id}">VER MAS</a>
  </div>  ` 

}
})
.catch(function(error){
  console.log(error)
})

cambiocategorias.innerHTML = arraycategorias

}


})
.catch(function(error){
  console.log(error)
})


