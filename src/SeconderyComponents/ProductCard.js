import React from "react";
import './ProductCard.css'
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import {FaStar} from 'react-icons/fa'
import { BiHeartCircle } from "react-icons/bi";

function ProductCard(props){
    return (
      <div className='cardDiv col-sm-6 col-md-4 col-lg-3'>
      <Card className='h-100'>
        <Card.Img className='cardProductImage' variant="top" src={"imgs/"+props.img+'.jpg'} />
        <Card.Body className='productCardFooter'>
        <Card.Title className='cartListPrice'>15$</Card.Title>
          <Card.Title className='cardListTitle'>{props.name}</Card.Title>
          <ButtonGroup className='productButtons' aria-label="Basic example">
            <Button className='cardButtons' variant="secondary">Add To Cart</Button>
            <Button className='cardButtons' variant="secondary">Buy Now</Button>
          </ButtonGroup>
          <BiHeartCircle className='heartIcon' size={50} />
        </Card.Body>
      </Card>
    </div>
    //     <Card>
    //       <Card.Body>
    //     <a href={'/SingleProduct/'+props.id} className='card-title'>
    //     <Card.Img variant="top" src={"imgs/"+props.img+'.jpg'} />
      
    //     <Card.Title>{props.name}</Card.Title></a>
    //     <Card.Text>
    //       {props.description}<br></br>${props.price}<br></br>{!(props.discount === null)? 'DISCOUNT: '+props.discount + '%': <></>}
    //     </Card.Text>
    //     <div className="card-btns">        
    //     {props.inStock === 0?<button disabled>Out Of stock</button>:<><button>Buy Now</button></> }
    //     <button>Add to wishlist</button>
    //     <div>{props.rating}<FaStar className="star"></FaStar></div>
    //   </div>
    //   </Card.Body>
    // </Card>
    
    )
}
//   inStock={product.inStock} img={product.img}
export default ProductCard