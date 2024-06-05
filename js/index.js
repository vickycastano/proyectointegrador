let categorias = document.querySelector(".category"); 
let productos = "";


fetch('https://fakestoreapi.com/products/category/electronics')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for (let i = 0; i<data.length; i++){
            let products = data[i];   
            productos = `
            <h3>${products.title}</h3>
            <img class="fotos" src="${products.image}">
            <p class="elemento1">${products.description}</p>
            <p>$${products.price}</p>
            <section class="botones">
            <a href="./cart.html?id=${products.id}">AGREGAR AL CARRITO</a>
            <a href="./producto.html?id=${products.id}">VER MAS</a>
            </section>
            ` 
            console.log(products.id);   
            categorias.innerHTML += productos;
        }
    })

    //REVISAR 