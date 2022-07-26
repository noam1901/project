import React from "react";
import {Carousel , Form, Button, Card} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'

function SingleProduct(){
  const product = {
    id: 5,
    name: 'Magevet',
    imgs: ["https://www.alexandertowels.com/wp-content/uploads/2017/10/white_superhyderL2.jpg","https://www.alexandertowels.com/wp-content/uploads/2017/10/white_superhyderL.jpg","https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/NDB52_Z_P_7297479000034_1.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-gxINEXhf8PlIWJT0028b9kHAjEP2Q92OQ&usqp=CAU"],
    description: 'very very very VERY good magevet!!!',
    price: 39.99,
    inStock: 9,
    discount: 0,
    rating: 3.6
  }
    return (
      <>
     <div className='for-media'>
      <div className="single-card">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.alexandertowels.com/wp-content/uploads/2017/10/white_superhyderL2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.alexandertowels.com/wp-content/uploads/2017/10/white_superhyderL.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/NDB52_Z_P_7297479000034_1.png"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-gxINEXhf8PlIWJT0028b9kHAjEP2Q92OQ&usqp=CAU"
      alt="Fourth slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Card style={{ width: '100%', display: 'flex', background: 'gray' }}>

  <Card.Body>
    <Card.Title>Magevet</Card.Title>
    <Card.Text>
        fdsfs
    </Card.Text>
    <Card.Text>
      Price: 200 NIS
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
<Card border="primary" style={{ width: '18rem', background: 'gray' }}>
        <Card.Header>רייטינג</Card.Header>
        <Card.Body>
          <Card.Title><p className="star"><FaStar></FaStar> STARS</p></Card.Title>
          <Card.Text>
            כוכבים
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary" style={{ width: '18rem', background: 'gray' }}>
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