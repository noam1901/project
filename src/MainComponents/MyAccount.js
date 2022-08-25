import React from 'react'
import {useParams} from 'react-router-dom'
import MyDetails from '../SeconderyComponents/MyDetails.js'
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
            {<MyDetails id={id}></MyDetails>/** nested route should select the position*/}
        </div>
    </div>
  )
}

export default MyAccount