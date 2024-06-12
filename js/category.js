let queryString = location.search;
let urlParams = new URLSearchParams(queryString);
let categoria = urlParams.get('category');


urlcategory = `https://fakestoreapi.com/products/categories/${categoria}`

fetch(urlcategory)
.then(function(response){
return response.json()
})
.then(function(data){
console.log(data)

// terminar de rellenar 


})
.catch(function(error){
console.log(error)
})

