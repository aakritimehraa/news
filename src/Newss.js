import React from 'react'
import './Newss.css'
function Newss({title, image , description}) {
    return (
        <div className='newss'>
        <div>
            <p className='titlee'>{title}</p>
            <img src={image} alt='' />
            <p className='dd'>{description}</p></div>
        </div>
    )
}

export default Newss
