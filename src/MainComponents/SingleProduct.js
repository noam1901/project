import React from "react";
import {Carousel , Form, Button, Card} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'
import {useParams} from 'react-router-dom'
import Gallery from "./Gallery";
import './SingleProduct.css'

function SingleProduct(){
  const product = {
    id: 5,
    name: 'Magevet',
    imgs: ["https://www.alexandertowels.com/wp-content/uploads/2017/10/white_superhyderL2.jpg","https://www.alexandertowels.com/wp-content/uploads/2017/10/white_superhyderL.jpg","https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/NDB52_Z_P_7297479000034_1.png"],
    description: 'very very very VERY good magevet!!!',
    price: 39.99,
    inStock: 9,
    discount: 0,
    rating: 3.6
  }
  // product need to get by ID from DB
  const {id} = useParams()
  console.log(id);
    return (
      <>
     <div className='for-media'>
      <div className="single-card">
<Gallery>

</Gallery>
<Card style={{ width: '100%', display: 'flex' }}>

  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
    {product.description}
    </Card.Text>
    <Card.Text>
      Price: {product.price}$
    </Card.Text>
    <div className='inputs'>
      <Form.Group>
        <Form.Label>Quantity:</Form.Label>
        <Form.Control type="number" placeholder="Enter Quantity" defaultValue={0} min="0" />
      </Form.Group>
    <Form.Group className="mb-3">
    <Form.Label>color:</Form.Label>
    <Form.Select>
      <option>Choose color...</option>
      <option>White</option>
      <option>Black</option>
      <option>Casspi</option>
    </Form.Select>
  </Form.Group>
    </div>
    <div className='btns'>
      <Button variant="success" className='btnItem'>Buy Now</Button>
      <Button variant="warning" className='btnItem'>Add To Cart</Button>
      <Button variant="light" className='btnItem'>Add To Wishlist</Button>
    </div>
    
  </Card.Body>
</Card>
</div>
<div className="info-card">
<Card border="primary" style={{ width: '18rem'}}>
        <Card.Header>רייטינג</Card.Header>
        <Card.Body>
          <Card.Title><p className="star"><FaStar></FaStar></p> {product.rating}</Card.Title>
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '18rem'}}>
        <Card.Header>ביקורות</Card.Header>
        <Card.Body>
          <Card.Title>ביקורת</Card.Title>
          <Card.Text>
            תוכן ביקורת
          </Card.Text>
        </Card.Body>
      </Card>
</div>
</div> 

</>
    )
}

export default SingleProduct;