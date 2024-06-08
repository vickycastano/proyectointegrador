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
  <div>
   <img src="${arrayacesorios[i].image}" >
  <h1>${arrayacesorios[i].title}</h1>
  <p>${arrayacesorios[i].description}</p>
  <h3>${arrayacesorios[i].price}</h3>
  <a  href="./producto.html?id=${arrayacesorios[i].id}">VER MAS</a>
  </div>
  ` 

section.innerHTML = acesorrios

//estilo acesorios 

section.style.display = 'flex'
section.style.flexDirection = 'row'
section.style.flexWrap = 'nowrap'
section.style.justifyContent = 'space-between'


div = document.querySelectorAll('.categoriaacesorios div')
for (let i = 0; i < div.length; i++) {
div[i].style.margin = '10px'
div[i].style.width = '20%'
div[i].style.paddingLeft = '10px'
div[i].style.paddingBottom = '10px'
div[i].style.paddingRight = '13px'
div[i].style.paddingTop = '7px'
div[i].style.border = '2px solid #4a362f'
div[i].style.marginTop = '10px'
div[i].style.backgroundColor = '#978f84'
div[i].style.borderRadius = '10px'
div[i].style.textAlign = "center"

}

let image = document.querySelectorAll('.categoriaacesorios div img')
for (let i = 0; i < image.length; i++) {
  image[i].style.width = '270px'
  image[i].style.height = '200px'
  image[i].style.textAlign = 'center'
  image[i].style.marginTop = '20px'
}
}

let precio = document.querySelectorAll('.categoriaacesorios div h3')
for (let i = 0; i < precio.length; i++) {
  precio[i].style.marginBottom = '20px'
  precio[i].style.marginTop = '15px'
  
}

let descripcion = document.querySelectorAll('.categoriaacesorios div p')
for (let i = 0; i < descripcion.length; i++) {
 descripcion[i].style.marginTop = '20px'
  
}

})
.catch(function(error){
  console.log(error)
})

// electronica
fetch('https://fakestoreapi.com/products/category/electronics')
  .then (function(response){
    return response.json();
  })
  .then (function (data){
    console.log(data); 
    let arrayelectronics = data;
    let section = document.querySelector(`.categoriaelectronica`);
    let electronica = [];
    
    for (let i = 0; i <arrayelectronics.length ; i++) {
      electronica+=` <div>
      <img src="${arrayelectronics[i].image}" class="im">
     <h1>${arrayelectronics[i].title}</h1>
     <p>${arrayelectronics[i].description}</p>
     <h3>${arrayelectronics[i].price}</h3>
     <a  href="./producto.html?id=${arrayelectronics[i].id}">VER MAS</a>
     </div>`
      
    }

    section.innerHTML= electronica



  })
  .catch(function (error){
    console.log(error);
  }

  )












