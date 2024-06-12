//QueryString
let QueryString = location.search;
let queryStringOBJ = new URLSearchParams(QueryString);
let category = queryStringOBJ.get("categories");
console.log(category);

 
urlcategorias = `https://fakestoreapi.com/products/category/${category}`
fetch(urlcategorias)
.then(function(response){
    return response .json();
})
.then(function(data){
    console.log(data);
//    let informacioncategorias = data

//for (let i = 0; i < informacioncategorias.length; i++) {
//    arraycateogria +=  
//    `<div>
// <img src="${informacioncategorias[i].image}" >
//  <h1>${informacioncategorias[i].title}</h1>
//  <p>${informacioncategorias[i].description}</p>
//  <h3>${informacioncategorias[i].price}</h3>
//  <a  href="./producto.html?id=${informacioncategorias[i].id}">VER MAS</a>
//  </div>`
//}


//section.innerHTML = arraycateogria
    

//let navegador = document.querySelector('.navegador1')

//navegador.innerHTML =  `  
//<ul class="navegador">
//  <li><a href="./index.html">HOME</a> </li>
//  <li> <a href="./category.html?category=${informacioncategorias.category="electronics"}">ELECTRONICOS</a></li>
//  <li><a href="./category.html?category=${informacioncategorias.category="jewelery"}">ACCESSORIOS</li> 
//  <li> <a href="./category.html?category=${informacioncategorias.category="women's clothing"}">ROPA DE MUJER</a></li>
//</ul>
//` 



})
.catch(function(error){
console.log(error);
})