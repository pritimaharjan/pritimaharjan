import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { TiDirections } from "react-icons/ti";
import { TfiDirection } from "react-icons/tfi";
import './Question.css'
export const Question = () => {
  return (
    <div>
      <div className='container9'>
        <div className='quetion'>
          <h2>Questions</h2>
          <h1>WHEN & WHERE</h1>
        </div>
        <div className='weddingevents' style={{ display: 'flex', flexDirection: 'row' }}>
          <div className='weddingceremony'>
            <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/whenwhere/3.jpg' className='weddingimg'></img>
         <div className='content'>
            <h2 style={{fontFamily:"inherit"}}>WEDDING CEREMONY</h2>
         <div className='direction'>
           <CiLocationOn style={{color:'brown'}}  /><i>175 Broadway,Brooklyn,New York 11244,USA</i>
           </div>
           <div className='direction'>
           <CiClock2 style={{color:'#b68a4c'}}  /><i>12:00am-13:00pm</i>
           </div>
         </div>
          </div>
          <div className='weddingparty'>
            <img src="https://duruthemes.com/demo/html/olivia-enrico/demo1/images/whenwhere/1.jpg" className='partyimg' />
            <div className='content'>
            <h2>WEDDING PARTY</h2>
            <div className='direction'>
            <CiLocationOn style={{color:' #b68a4c'}}  /><i>Fortune Brooklyn restaurant,149 Broadway,Brooklyn,NY,USA</i>
            </div>
            <div className='direction'>
            <CiClock2  style={{color:' #b68a4c'}} /><i>14:00pm</i>
            </div>
            </div>
          </div>
          <div className='accomodations'>
            <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/whenwhere/2.jpg' className='accomodationimg'></img>
            <div className='content'>
            <h2>ACCOMODATIONS</h2>
            <div className='direction'>
            <TiDirections style={{color:' #b68a4c'}} />
           <i>Hotel and distance from wedding party resturant nsdjbfwiyfb:</i>
            </div>
           <div className='direction'>
           <TfiDirection style={{color:'#b68a4c '}}   />
            <i>The William vale (7 min)</i>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
