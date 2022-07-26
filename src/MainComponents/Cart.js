import React from 'react'

const Cart = () => {
  return (
    <div className='cart'>
        <div class='Header'>
            <h3 className='Heading'>Shopping Cart</h3>
            <h5 className='Action'>Remove all</h5>
        </div>
        <div class='Cart-Items'>
            <div class='image-box'>
                <img src='https://wallpapersflix.com/wp-content/uploads/2021/06/Gaming-Background.jpg' style={{ height:'120px' }} />
            </div>
            <div class='about'>
                <h2 class='title'>Apple Juice</h2>
                <h3 class='subtitle'>250ml</h3>
            </div>
            <div class='counter'> 
                <div class='btn'>+</div>
                <div class='count'>2</div>
                <div class='btn'>-</div>
            </div>
            <div class='prices'>
                <div class='amount'>$2.99</div>
                <div class='save'>
                    <u>Save for later</u>
                </div>
            <div class='remove'>
                <u>Remove</u></div>
            </div>
        </div>
        <div class='checkout'>
 <div class='total'>
 <div>
 <div class='Subtotal'>Sub-Total</div>
 <div class='items'>2 items</div>
 </div>
 <div class='total-amount'>$6.18</div>
 </div>
 <button class='button'>Checkout</button>
 </div>
    </div>
  )
}

export default Cart