import React from "react";
import {Carousel , Form, Button, Card} from 'react-bootstrap'

function SingleProduct(){
    return (
      <>
     <div className='for-media'>
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
<Card style={{ width: '100%', display: 'flex' }}>

  <Card.Body>
    <Card.Title>Magevet</Card.Title>
    <Card.Text>
    Bacon ipsum dolor amet ham hock venison corned beef swine alcatra tail flank, sirloin short loin tenderloin pancetta burgdoggen. Swine sirloin chislic beef strip steak tri-tip meatball kielbasa spare ribs. Biltong swine tri-tip drumstick. Capicola biltong pancetta landjaeger kevin ribeye tongue, picanha chuck. Landjaeger spare ribs jowl pork belly flank. Alcatra drumstick kevin tongue. Pork loin cupim corned beef drumstick pork filet mignon tri-tip. Turkey kielbasa strip steak, ground round jerky pork loin frankfurter ball tip pork chop short ribs brisket ham meatball. Doner bresaola beef ham tail ball tip cupim alcatra. Tail picanha ground round sirloin strip steak. Shoulder chislic brisket jowl spare ribs turducken. Prosciutto ball tip frankfurter sausage sirloin ham kielbasa jerky shankle bacon. Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!
    </Card.Text>
    <Card.Text>
      Price: 200 NIS
    </Card.Text>
    <div className='inputs'>
      <Form.Group>
        <Form.Label>Quantity:</Form.Label>
        <Form.Control type="number" placeholder="Enter email" defaultValue={0} min="0" />
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
<div>
<Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>About</Card.Header>
        <Card.Body>
          <Card.Title>STARS</Card.Title>
          <Card.Text>
            REVEIES
          </Card.Text>
        </Card.Body>
      </Card>
</div>
</div> 

</>
    )
}

export default SingleProduct;