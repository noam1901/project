import React, { useEffect, useState } from "react";
import {Carousel , Form, Button, Card} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'
import {useParams} from 'react-router-dom'
import Gallery from "./Gallery";
import './SingleProduct.css'
import { getProductById, getImagesById } from "../api/dal.js";

function SingleProduct(){
  const [product, setProduct] = useState({})
  const [images, setImages] = useState({})
  const [loaded, setLoaded] = useState(false)
  const prodId = useParams()
  useEffect(()=>{
    async function getData(){
        setProduct(await getProductById(prodId.id))
        setLoaded(true)
    }
    getData()
},[])
    return (
      <>
     <div className='for-media'>
      <div className="single-card">
<Gallery id={prodId.id}>

</Gallery>
{loaded && <Card style={{ width: '100%', display: 'flex' }}>

  <Card.Body>
    <Card.Title>{product[0].productName}</Card.Title>
    <Card.Text>
    {product[0].Description}
    </Card.Text>
    <Card.Text>
      Price: {product[0].unitPrice}$
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
</Card>}
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