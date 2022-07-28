import React from 'react'
import CartItem from '../ToolsComponents/CartItem'

const Cart = () => {
    const orderDetails = [{
        src: 'https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg',
        name: 'background',
        color: 'blue',
        quantity: 3,
        price: 2.99,
        id: 2
    },{
        src: 'https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg',
        name: 'background2',
        color: 'red',
        quantity: 2,
        price: 6.99,
        id: 4
    }]
  return (
    <div className='cart'>
        <div class='Header'>
            <h3 className='Heading'>Shopping Cart</h3>
            <h5 className='Action'>Remove all</h5>
        </div>
        {orderDetails.map(order => <CartItem key={order.id} name={order.name} color={order.color} src={order.src} quantity={order.quantity} price={order.price} id={order.id}></CartItem>)}
        <div class='checkout'>
            <div class='total'>
                <div>
                    <div class='Subtotal'>Sub-Total</div>
                    <div class='items'>2 items</div>
                </div>
                <div class='total-amount'>$68.18</div>
            </div>
            <button class='button'>Checkout</button>
        </div>
    </div>
  )
}

export default Cart