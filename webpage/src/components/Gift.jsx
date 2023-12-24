import React from 'react'
import './Gift.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick//slick-theme.css'
export const Gift = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1500
      };
    return (
        <>
        <div className='main'>    
            <div className='giftregistry'>
            <i style={{ fontFamily: 'cursive' ,color:' burlywood', fontSize:'1.2rem' }}>Gift</i>
                <i style={{fontFamily:'serif',fontSize:'1.4rem'}}>GIFT REGISTRY</i>  
            </div>
                
            <div className='slider'> 
                <Slider {...settings}>
                    <div className='logo1'>
                    <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/gift/1.jpg'className='registry'></img>
                    </div>
                    <div className='logo2'>
                    <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/gift/2.jpg'className='registry'></img>
                    </div>
                    <div className='logo3'>
                    <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/gift/3.jpg'className='registry'></img>
                    </div>
                    <div className='logo4'>
                    <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/gift/4.jpg'className='registry'></img>
                    </div>
                    <div className='logo5'>
                    <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/gift/5.jpg'className='registry'></img>
                    </div>
                    <div className='logo6'>
                    <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/gift/6.jpg'className='registry'></img>
                    </div>
                </Slider>
               </div>
               </div>
               <div className='end'>
                <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/logo.png' className='leaf'></img>
                <h2 style={{fontFamily:"cursive"}}>Olivia & Enrico</h2>
                <p>December 15, 2023 – New York, Brooklyn</p>
               </div>
        </>
            
            )
}
