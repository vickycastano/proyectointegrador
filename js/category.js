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



//electronica api --> como hacer para q se muestre solo en la secion de electronica y no el resto 

url = 'https://fakestoreapi.com/products/category/electronics'

fetch(url)
.then(function(response){
return response.json()

})
.then(function(data){
console.log(data)
let informacionelectronica = data 
let electronica = document.querySelector('.categorias')
arrayelectronica = []

for (let i = 0; i < informacionelectronica.length; i++) {
   arrayelectronica+=  ` 
  <div>
   <img src="${informacionelectronica[i].image}" >
  <h1>${informacionelectronica[i].title}</h1>
  <p>${informacionelectronica[i].description}</p>
  <h3>${informacionelectronica[i].price}</h3>
  <a  href="./producto.html?id=${informacionelectronica[i].id}">VER MAS</a>
  </div>
  ` 
}

electronica.innerHTML = arrayelectronica 


})
.catch(function(error){
console.log(error)

})




})
.catch(function(error){
  console.log(error)
})
