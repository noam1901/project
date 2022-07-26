import React from 'react'

const CartItem = (props) => {
  return (
    <div class='Cart-Items'>
        <div class='image-box'>
            <img src={props.src} style={{ height:'120px' }} />
        </div>
        <div class='about'>
            <h2 class='title'>{props.name}</h2>
            <h3 class='subtitle'>color: {props.color}</h3>
            <div class='counter'> 
                <div class='btn'>+</div>
                <div class='count'>{props.quantity}</div>
                <div class='btn'>-</div>
            </div>
        </div>
        <div class='prices'>
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