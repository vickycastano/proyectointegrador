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
   <img src="${arrayacesorios[i].image}" class="im">
  <h1>${arrayacesorios[i].title}</h1>
  <p class="descriphome" >${arrayacesorios[i].description}</p>
  <h3 class="precio">${arrayacesorios[i].price}</h3>
  <a class="botoneshome" href="./producto.html?id=${arrayacesorios[i].id}">VER MAS</a>
  </div>
  ` 

section.innerHTML = acesorrios

//estilo acesorios 

section.style.display = 'flex'
section.style.flexDirection = 'row'
//section.style.flexWrap = 'wrap'
section.style.justifyContent = 'space-between'

//section.style.margin = '10px'

div = document.querySelectorAll('.categoriaacesorios div')
for (let i = 0; i < div.length; i++) {
div[i].style.margin = '10px'
div[i].style.width = '20%'
div[i].color = '#4A362F'
div[i].style.textAlign = 'center'
}



let image = document.querySelectorAll('.categoriaacesorios div img')
for (let i = 0; i < image.length; i++) {
  image[i].style.width = '270px'
  image[i].style.height = '200px'
  image[i].style.textAlign = 'center'
  image[i].style.marginTop = '20px'
  
}
}

})
.catch(function(error){
  console.log(error)
})

