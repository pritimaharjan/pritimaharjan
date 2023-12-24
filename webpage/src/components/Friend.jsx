
import React, { Component, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick//slick-theme.css'
import './Friend.css';

export const Friend = () => {
    //  const [filteredFriends,setFilteredFriends]=useState([])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };


    return (

        <div className='container5' style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 className='ourfriend'>Our best friend ever</h2>
            <h1 className='thanks'>THANKS FOR BEING THERE</h1>
            
                <div className="friendsection">
            <Slider {...settings}>
                <div className="friendcontent">

                    <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/friends/b1.jpg' className="photos" />
                    <h2>Eleanor Chris</h2>
                    <h3>Bridemaide</h3>
                    <p>enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                 </div>
                <div className="friendcontent">
                    <img src="https://duruthemes.com/demo/html/olivia-enrico/demo1/images/friends/w1.jpg" className="photos"/>
                    <h2>Stefano smiht</h2>
                    <h3>Groomsmen</h3>
                    <p>enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                </div>
                <div className="friendcontent">
                    <img src="https://duruthemes.com/demo/html/olivia-enrico/demo1/images/friends/b2.jpg" className="photos"/>
                    <h2>Vanessa Brown</h2>
                    <h3>Bridemaide</h3>
                    <p>enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                </div>
                <div className="friendcontent">
                    <img src="https://duruthemes.com/demo/html/olivia-enrico/demo1/images/friends/w2.jpg" className="photos"/>
                    <h2>Matthew Brown</h2>
                    <h3>Groomsmen</h3>
                    <p>enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                </div>
                <div className="friendcontent">
                    <img src="https://duruthemes.com/demo/html/olivia-enrico/demo1/images/friends/b3.jpg" className="photos"/>
                    <h2>Feridia Halle</h2>
                    <h3>Bridemaide</h3>
                    <p>enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                </div>
                <div className="friendcontent">
                    <img src="https://duruthemes.com/demo/html/olivia-enrico/demo1/images/friends/w3.jpg" className="photos"/>
                    <h2>Pablo Dante </h2>
                    <h3>Groomsmen</h3>
                    <p>enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                    </div>
            </Slider>
                </div>
          
        </div>
    )
}
