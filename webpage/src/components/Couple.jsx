import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { TfiInstagram } from "react-icons/tfi";
import './Couple.css';
export const Couple = () => {
    return (
        <div className='container' style={{ display: "flex", flexDirection:'row' }}>
            <div className='container1' style={{ display: "flex", flexDirection:'column'}}>
                <div className='brideimg' style={{display:'flex'}}>
                <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/bride.jpg' className='img1' ></img>
                <p className='olivia'> 
                    <b>Olivia Martin</b>
                    <br />
                    <h className='bride'>The Bride</h><br />
                    Olivia fringilla dui at elit finibus viverra thenec a lacus seda themo the miss druane semper non the fermen.
                </p>
                </div>
                <div className='icons1' style={{display:'flex'}} >
                <CiFacebook className='facebook ' />
                 <SlSocialTwitter className='twitter'/>
                 <TfiInstagram  className='instagram'/>
                </div>
            </div>

            <div className='container2' style={{ display: "flex",flexDirection:'column' }} >
           <div className='groomimg' style={{display:'flex', flexDirection:'row'}}>

                <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/groom.jpg' className='img2' style={{ display: 'flex' }}></img>
                <p className='enrico'>
                    <b>Enrico Danilo</b><br />
                    <h className='groom' >The Groom</h><br />
                    Enrico fringilla dui at elit finibus viverra thenec a lacux seda themo the miss drane semper non the fermen</p>
           </div>
                    <div className='icons1' style={{display:'flex'}}>
                    <CiFacebook className='facebook ' />
                 <SlSocialTwitter className='twitter'/>
                 <TfiInstagram  className='instagram'/>
                    </div>
            </div>
        </div>


    )
}
