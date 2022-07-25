import React, { useState } from "react";
import ProductCard from "../ToolsComponents/ProductCard";

function HomePage(){
    const [products, setProducts] = useState([{
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
    }])
    return (
    <>
    <div>
        <h1>Welcome to my site</h1>
        <p className="homepage-desc">You can actually find nothing here but you can explore, enjoy!</p>
    </div>
     <div className="homepage-title">
         <h2>Best Sellers</h2>
     </div>
     <div className="products">
        {products.map(product => <ProductCard key={product.id} name={product.name} description={product.description} price={product.price} discount={product.discount} inStock={product.inStock} img={product.img}></ProductCard>)}
     </div>
     </>
    )
}

export default HomePage