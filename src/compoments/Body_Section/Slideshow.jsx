import React from 'react'
import { Carousel } from 'antd';
import Card from './Card';
const Slideshow = () => {
    return (
        <div>
    <Carousel 
    autoplay
    >
    <div>
    <Card/>
    </div>
    <div>
    <Card/>
    </div>
    <div>
    <Card/>
    </div>
    <div>
    <Card/>
    </div>
    
    <div>
    <Card/>
    </div>
    <div>
    <Card/>
    </div>
    <div>
    <Card/>
    </div>
    <div>
    <Card/>
    </div>
    </Carousel>
    </div>
    )
}

export default Slideshow
