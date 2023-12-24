import React, { useEffect, useState } from 'react'
import './Gallery.css'
import gallerydata from './data/gallerydata'
export const Gallery = () => {
  const gallery=gallerydata 
  const [type,setType]=useState('all')
  const [filteredGallery,setFilteredGallery]=useState([])
  useEffect(()=>{
    const data=gallery.filter(item=>item.type===type)
    setFilteredGallery(data)
  },[type])
  return (

        <div className='title' style={{display:'flex',flexDirection:'column'}}>
            <h2 className='gallery'>Gallery</h2>
            <h1 className='memory'>OUR MEMORY
            </h1>
            <div className='buttons'>
            <button onClick={()=>setType('all')  } className='all' >All</button>
            <button onClick={()=>setType('ceremony') } className='ceremony1' >ceremony</button>
            <button onClick={()=>setType('party') } className='party1' >party</button>
            </div>
           <div className='compound' >

        {filteredGallery.map((g,index)=>{
           return<div> <img src={g?.image} className='images'  />
            <h1  className='title1'>{g?.title}</h1>

          </div>
          
        })}
        </div>
    </div>

  )
}
