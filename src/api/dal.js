export function getProducts(){
    return fetch('http://localhost:3100/api/products')
        .then(response => response.json())
        .then(products => products)
}