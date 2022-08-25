import React from 'react'

const CartItem = (props) => {
  return (
    <div class='Cart-Items'>
        <div class='image-box'>
            <a href={'/SingleProduct/'+props.id}>
                <img src={props.src} style={{ height:'120px' }} className='cart-img' alt={props.name}/>
            </a>
        </div>
        <div class='about'>
            <h2>{props.name}</h2>
            <h3 class='subtitle'>color: {props.color}</h3>
            <div class='counter'> 
                <div class='cartitem-btn'>+</div>
                <div class='count'>{props.quantity}</div>
                <div class='cartitem-btn'>-</div>
            </div>
        </div>
        <div>
            <div class='amount'>{props.price*props.quantity}$</div>
            <div class='save'>
                <u>Save for later</u>
            </div>
        <div class='remove'>
            <u>Remove</u></div>
        </div>
    </div>
  )
}

export default CartItem