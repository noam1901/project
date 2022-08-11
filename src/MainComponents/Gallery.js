import React, { useState, useEffect } from 'react'
import './Gallery.css'
import { getImagesByProductId } from '../api/dal.js'

const Gallery = (props) => {
    const [imgs, setImgs] = useState({})
    const [currentImg, setCurrentImg] = useState('')
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        async function getData(){
            let images = await getImagesByProductId(props.id)
            setImgs(images)
            setCurrentImg(images[0])
            setLoaded(true)
        }
        getData()
    },[])
    console.log(__dirname);
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
        <div className='gallery-img-holder'>
            {loaded && <img src={'/imgs/'+currentImg.imgURL+'.jpg'} className='gallery-item'></img>}
        </div>
        <h1 className='gallery-arrow' onClick={arrow}>⇨</h1>
    </div>
  )
}

export default Gallery