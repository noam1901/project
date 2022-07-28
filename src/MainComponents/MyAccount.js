import React from 'react'
import {useParams} from 'react-router-dom'

const MyAccount = () => {
    const {id} = useParams()
  return (
    <div className='my-account'>
        
    <div className='side-bar'>
        
        <div>
            <h1>Hello User</h1>
            <div>
                <h5> My details</h5>
            </div>
            <div>
                <h5> My orders</h5>
            </div>
            <div>
                <h5> My Wishlist</h5>
            </div>
        </div> 
    </div>
        <div>
            {/* forms and function needed to change and show */}
        </div>
    </div>
  )
}

export default MyAccount