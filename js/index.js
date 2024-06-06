//acesorios 
fetch('https://fakestoreapi.com/products/category/jewelery')
.then(function(response){
  return response.json()
})
.then(function(data){
  console.log(data)
let arrayacesorios = data 
let section = document.querySelector(".categoriaacesorios")
let acesorrios = []

for (let i = 0; i < arrayacesorios.length; i++) {
  acesorrios +=  `
  <div class="cajashome">
  <h1>${arrayacesorios[i].title}</h1>
  <img src="${arrayacesorios[i].image}" class="im">
  <p class="descriphome" >${arrayacesorios[i].description}</p>
  <h3 class="precio">${arrayacesorios[i].price}</h3>
  <a class="botoneshome" href="./producto.html?id=${arrayacesorios[i].id}">VER MAS</a>
  </div>
  ` 
  
section.innerHTML = acesorrios

}

})
.catch(function(error){
  console.log(error)
})