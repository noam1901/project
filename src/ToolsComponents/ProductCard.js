import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props){
    return (
        <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}<br></br>{props.price}<br></br>{!(props.discount === 0)? 'DISCOUNT: '+props.discount + '%': <></>}
        </Card.Text>
        <div className="card-btns">        
        {props.inStock === 0?<Button variant="danger" disabled>Out Of stock</Button>:<><Button variant="success">Buy Now</Button></> }
        <Button>Add to wishlist</Button>
      </div>
      </Card.Body>
    </Card>
    )
}
//   inStock={product.inStock} img={product.img}
export default ProductCard