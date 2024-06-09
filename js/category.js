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
})
.catch(function(error){
  console.log(error)
})
