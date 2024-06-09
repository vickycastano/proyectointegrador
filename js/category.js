let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let categoria = urlParams.get('category');
console.log(categoria)

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
// for para que se muestre la informacion del api 

let categorias = data 
let cambiocategorias = document.querySelector('.categorias')
arraycategorias = []

for (let i = 0; i < categorias.length; i++) {
  arraycategorias +=  ` 
  <div>
   <img src="${arraycategorias[i].image}" >
  <h1>${arraycategorias[i].title}</h1>
  <p>${arraycategorias[i].description}</p>
  <h3>${arraycategorias[i].price}</h3>
  <a  href="./producto.html?id=${arraycategorias[i].id}">VER MAS</a>
  </div>  ` 
  
cambiocategorias.innerHTML = arraarraycategorias

//ASI NO VA, LA INFORMACION DEL API SOLO MUESTRA LA CATEGORIA, USAR LOS APIS INDIVUDUALES Y VER COMO VINCULARLOS 


}






//el querystring funciona bien, falta hacer que la informacion del api se muestre 

})
.catch(function(error){
  console.log(error)
})