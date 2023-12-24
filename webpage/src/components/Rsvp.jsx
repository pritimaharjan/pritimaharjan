import React from 'react'
import './Rsvp.css'
import { Gift } from './Gift'

export const Rsvp = () => {
  return (
 <div>
   <div className='body'>
<div className='box'>
    <div className='rsvp'>
        <h2 style={{fontFamily:" 'Dancing Script', cursive", color:'#bd945a'}}>Will you attend?</h2>
        <h1 style={{fontFamily:'serif' ,fontWeight:'inherit'}}> R.S.V.P</h1>
    </div>
    <input type='text' placeholder='Name' className='name'></input>
    <input type="email"  placeholder='Email' className='email'/>
    <input type="text"  placeholder='Guest' className='guest'/>
    <input type="text" placeholder='Message' className='message'/>
    <div className='button'>
    <button className='send'>SEND</button>
    </div>
</div>
    </div>
 
 </div>
  )
}
