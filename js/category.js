fetch('https://fakestoreapi.com/products')
.then(function(response){
return response.json();
})
.then(function(data){
let arrayproductos1 = data;

    let section = document.querySelector('.Acesorios')
// cambio de las fotos de la ropa de mujer 
let productomujer1 = document.querySelector('#producto1').innerHTML = 
`<div>
<h1>${arrayproductos1[14].title}</h1>
<p>${arrayproductos1[14].description} </p>
<h3>${arrayproductos1[14].price} </h3>
<img src=${arrayproductos1[14].image} />
</div>`

let productomujer2 =document.querySelector('#producto2').innerHTML = 
`<div>
<h1>${arrayproductos1[15].title}</h1>
<p>${arrayproductos1[15].description} </p>
<h3>${arrayproductos1[15].price} </h3>
<img src=${arrayproductos1[15].image} />
</div>`

let prodictosmujer3=document.querySelector('#producto3').innerHTML = 
`<div>
<h1>${arrayproductos1[16].title}</h1>
<p>${arrayproductos1[16].description} </p>
<h3>${arrayproductos1[16].price} </h3>
<img src=${arrayproductos1[16].image} />
</div>`

let prodictosmujer4=document.querySelector('#producto4').innerHTML = 
`<div>
<h1>${arrayproductos1[17].title}</h1>
<p>${arrayproductos1[17].description} </p>
<h3>${arrayproductos1[17].price} </h3>
<img src=${arrayproductos1[17].image} />
</div>`

let prodictosmujer5=document.querySelector('#producto5').innerHTML = 
`<div>
<h1>${arrayproductos1[18].title}</h1>
<p>${arrayproductos1[18].description} </p>
<h3>${arrayproductos1[18].price} </h3>
<img src=${arrayproductos1[18].image} />
</div>`



//for (let i = 14; i < arrayproductos1.length; i++) {
//section.innerHTML += ` <section>
//<h1>${arrayproductos1[i].title} </h1>
//<p>${arrayproductos1[i].description} </p>
//<h3>${arrayproductos1[i].price} </h3>
//<img src=${arrayproductos1[i].image} />
//</section>`

//}

})
.catch(function(error){
    console.log(error)
})

