import React, { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
    const imgs = ['https://play-lh.googleusercontent.com/rn5bGFg6rH_SDdwSBQyA3nfO_hBO6aKHbiS9VpTdrWBIpIHDDF4bOa3xRX2IN-yo0xU','https://play-lh.googleusercontent.com/Bp7N9kWIvEuNwayd-Eza4wTN4jIRgVWNuRz2ppRShY86bz62_-7HgLhxpbREGEjr9hg','https://play-lh.googleusercontent.com/BiF6cWVdRdWOY6V9l5VJckMM-nfgXCmxWdG72MHxYlNlu46RDG-Pk76Wc_Cu8faxnWg' ]
    const [currentImg, setCurrentImg] = useState(imgs[0])
    // imgs must come as props
    function arrow(direction){
        let currentIndex = imgs.indexOf(currentImg)
        if(direction === 'left'){
            currentIndex === 0? currentIndex = imgs.length-1: currentIndex = currentIndex-1;
        }else {
            currentIndex === imgs.length-1? currentIndex = 0: currentIndex = currentIndex+1;
        }
        setCurrentImg(imgs[currentIndex])
    }
  return (
    <div className='product-imgs'>
        <h1 className='gallery-arrow' onClick={()=>arrow('left')}>⇦</h1>
        <div>
            <img src={currentImg} className='gallery-item'></img>
        </div>
        <h1 className='gallery-arrow' onClick={arrow}>⇨</h1>
    </div>
  )
}

export default Gallery