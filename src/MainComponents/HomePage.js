import React, { useState, useEffect } from "react";
import { getProductTopRating } from "../api/dal";
import ProductCard from "../ToolsComponents/ProductCard";
import "./HomePage.css"

function HomePage(){
    const [products, setProducts] = useState([])
    useEffect(()=>{
        async function getData(){
            setProducts(await getProductTopRating())
        }
        
        getData()
    },[])
    return (
    <div>
    <div>
        <h1>Welcome to my site</h1>
        <p className="homepage-desc">You can actually find nothing here but you can explore, enjoy!</p>
    </div>
     <div className="homepage-title">
         <h2>Top Ratings</h2>
     </div>
     <div className="products">
        {products.map(product => <ProductCard key={product.productid} name={product.productname} description={product.description} price={product.unitprice} discount={product.discount} inStock={product.unitinStock} img={product.imgurl} id={product.productid} rating={product.rating}></ProductCard>)}
     </div>
     <br></br>
     <div className="homepage-title">
         <h2>Best Ratings</h2>
     </div>
     <div className="products">
        {products.map(product => <ProductCard key={product.id} name={product.name} description={product.description} price={product.price} discount={product.discount} inStock={product.inStock} img={product.img} id={product.id}></ProductCard>)}
     </div>
     </div>
    )
}

export default HomePage