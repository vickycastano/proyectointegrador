fetch('https://fakestoreapi.com/products')

.then(function(response){
    return response.json()
})
.then(function(data){
  console.log(data)

  let 



  
})
.catch(function(error){
    console.log(error)
})