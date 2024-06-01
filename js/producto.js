fetch('https://fakestoreapi.com/products/1')
.then(function(response){
    return response.json();
    })
    .then(function(data){
        console.log(data)

    
    })
    .catch(function(error){
        console.log(error)
    })