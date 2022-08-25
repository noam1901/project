import React, { useEffect, useState } from 'react'
import ProductCard from '../SeconderyComponents/ProductCard'
import { getProductsWith1Img } from '../api/dal.js'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        async function getData(){
            setProducts(await getProductsWith1Img())
        }
        getData()
    },[])
    const categories = [{id:1,name:'category1'}, {id:2,name:'category2'}, {id:3,name:'category3'}, {id:4,name:'category4'}]
  return (
    <>
    <h1>Products Page</h1>
    <div className='products-page'>
        <h1></h1>
        <div className='sort-nav'>
            sort by:
            <div>
                 <h5>categories:</h5>{categories.map((cat)=> <div key={cat.id}><input type='checkbox' value={cat.name}></input>{cat.name}</div>)}
                 
            </div><br></br>
            
            <div><h5>price:</h5>
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
            {products.map(product => <ProductCard key={product.productid} name={product.productname} description={product.Description.slice(0,10)+'...'} price={product.unitprice} discount={product.discount} inStock={product.unitInStock} img={product.imgurl} id={product.productid} rating={product.rating}></ProductCard>)}
        </div>
     
    </div>
    </>
  )
}

export default Products