import React, { useEffect, useState } from 'react'
import './Countdown.css'
export const Countdown = () => {
    const [days, setDays] = useState('')
    const [hours, setHours] = useState('')
    const [mins, setMins] = useState('')
    const [secs, setSecs] = useState('')

    const deadline = "December,31,2023"
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor(time / (1000 * 60 * 60) % 24))
        setMins(Math.floor(time / (1000 * 60) % 60))
        setSecs(Math.floor((time / 1000) % 60))
    }
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000)
        return () => clearInterval(interval)
    }, []
    )
    return (
        <div className='container3' style={{ display: 'flex',flexDirection:'column'}}>
     
            <div className='family' style={{display:'flex', fontSize:'40px'}}>We will become a family in</div>
            <div className='row' style={{ display: 'flex', flexDirection: 'row', padding:'20px'}}>

                <div className='col1'>
                    <h1>{days < 10 ? "0" + days : days}</h1>
                    <span>Days</span>
                </div>
                <div className='col2'>
                    <h1>{hours < 10 ? "0" + hours : hours}</h1>
                    <span>Hours</span>
                </div>
                <div className='col3'>
                    <h1>{mins < 10 ? "0" + mins : mins}</h1>
                    <span>mins</span>
                </div>
                <div className='col4'>
                    <h1>{secs < 10 ? "0" + secs : secs}</h1>
                    <span>second</span>
                </div>
            </div>

        </div>
    )
}
