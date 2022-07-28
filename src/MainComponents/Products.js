import React from 'react'
import ProductCard from '../ToolsComponents/ProductCard'

const Products = () => {
    const products = [{
        id: 1,
        name: 'magevet',
        description: 'very good magevet',
        price: 199.99,
        discount: 0,
        inStock: 0,
        img: 'https://i.scdn.co/image/ab67616d0000b2736a51ada54c6090b7138b35ca'
    },
    {
        id: 2,
        name: 'talit',
        description: 'very good talit',
        price: 19.99,
        discount: 12,
        inStock: 8,
        img: 'https://cdn11.bigcommerce.com/s-5qq2dzpnw5/images/stencil/1280x1280/products/1676/43591/3831aab0-aa46-454e-bd03-4f85bc66c6bc__00408.1654095290.jpg?c=2'
    },{
        id: 3,
        name: 'KIPA',
        description: 'very good KIPA',
        price: 39.99,
        discount: 0,
        inStock: 9,
        img: 'https://m.media-amazon.com/images/I/81NQEAaAjpL._AC_UL1500_.jpg'
    },{
        id: 4,
        name: 'KIPA',
        description: 'very good KIPA',
        price: 39.99,
        discount: 0,
        inStock: 9,
        img: 'https://m.media-amazon.com/images/I/81NQEAaAjpL._AC_UL1500_.jpg'
    },{
        id: 5,
        name: 'KIPA',
        description: 'very bad KIPA',
        price: 39.99,
        discount: 0,
        inStock: 9,
        img: 'https://m.media-amazon.com/images/I/81NQEAaAjpL._AC_UL1500_.jpg'
    }]
    const categories = [{id:1,name:'category1'}, {id:2,name:'category2'}, {id:3,name:'category3'}, {id:4,name:'category4'}]
  return (
    <>
    <h1>Products Page</h1>
    <div className='products-page'>
        <h1></h1>
        <div className='sort-nav'>
            sort by:
            <div>
                 categories:{categories.map((cat)=> <div key={cat.id}><input type='checkbox' value={cat.name}></input>{cat.name}</div>)}
                 
            </div><br></br>
            price:
            <div>
                <div>
                min: <input type="number" defaultValue='10' style={{width: '4rem'}}></input>
                </div>
                <div>
                     max: <input type="number" defaultValue='1000' style={{width: '4rem'}}></input>
                </div><br></br>
            </div>
            <button>SORT</button>
        </div>
        <div className="products">
            {products.map(product => <ProductCard key={product.id} name={product.name} description={product.description} price={product.price} discount={product.discount} inStock={product.inStock} img={product.img} id={product.id}></ProductCard>)}
        </div>
     
    </div>
    </>
  )
}

export default Products