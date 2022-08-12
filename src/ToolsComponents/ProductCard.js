import React from "react";
import './ProductCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaStar} from 'react-icons/fa'

function ProductCard(props){
    return (
        <Card>
          <Card.Body>
        <a href={'/SingleProduct/'+props.id}>
        <Card.Img variant="top" src={"imgs/"+props.img+'.jpg'} />
      
        <Card.Title>{props.name}</Card.Title></a>
        <Card.Text>
          {props.description}<br></br>{props.price+'$'}<br></br>{!(props.discount === 0)? 'DISCOUNT: '+props.discount + '%': <></>}
        </Card.Text>
        <div className="card-btns">        
        {props.inStock === 0?<button variant="danger" disabled>Out Of stock</button>:<><button variant="success">Buy Now</button></> }
        <button>Add to wishlist</button>
        <div>4<FaStar className="star"></FaStar></div>
      </div>
      </Card.Body>
    </Card>
    
    )
}
//   inStock={product.inStock} img={product.img}
export default ProductCard