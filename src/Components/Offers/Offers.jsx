import React from 'react'
import './Offers.css'
import exlusive_image from '../Assets/exclusive_image.png'
export default function Offers() {
  return (
    <div className="section">
        
        <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>

        <div className="offers-right">
            <img src={exlusive_image} alt="" />

        </div>
    </div>

    </div>
  )
}
