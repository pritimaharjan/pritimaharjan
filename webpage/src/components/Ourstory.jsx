import React from 'react'
import './Ourstory.css'
export const Ourstory = () => {
  return (
    <div className='container4' style={{ display: 'flex', flexDirection: 'row' }}>
      <div className='border' style={{display:'flex'}}>
        <div className='frame'></div>
        <img src='https://duruthemes.com/demo/html/olivia-enrico/demo1/images/story.jpg' className='img3' />
      </div>
      <div className='blog' style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 className='ourlove'>Our love</h1>
        <b className='story'>OUR STORY</b>
        <div className='para' style={{ display: 'flex', flexDirection: 'column' }}>
          <p>
            Curabit aliquet orci elit genes tristique lorem commodo vitae. Tuliaum tincidunt nete sede gravida aliquam, neque libero hendrerit magna, sit amet mollis lacus ithe maurise. Dunya erat volutpat edat themo the druanye semper.<br />
          </p>
          <p>
            Luality fringilla duiman at elit vinibus viverra nec a lacus themo the druanye sene sollicitudin mi suscipit non sagie the fermen.
          </p>


          <p>
            Phasellus viverra tristique justo duis vitae diam neque nivamus ac est augue artine aringilla dui at elit finibus viverra nec a lacus. Nedana themo eros odio semper soe suscipit non. Curabit aliquet orci elit genes tristique.</p>
          <p>
            Dec 5th, 2023, We Said Yes!
          </p>

          <p>
            Luality fringilla duiman at elit finibus viverra nec a lacus themo the druanye sene sollicitudin mi suscipit non sagie the fermen
          </p>

        </div>

      </div>
    </div>
  )
}
