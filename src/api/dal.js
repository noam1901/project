export function getProducts(){
    return fetch('http://localhost:3100/api/products')
        .then(response => response.json())
        .then(products => products)
}

export function getProductById(id){
    return fetch('http://localhost:3100/api/products/'+id)
        .then(response => response.json())
        .then(product => product)
}
export function getImagesByProductId(prodId){
    return fetch('http://localhost:3100/api/imgs/product'+prodId)
        .then(response => response.json())
        .then(images => images)
}
