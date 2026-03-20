import React from 'react'
import Carditem from './Carditem'
import './Cards.css'
function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out these epic Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <Carditem 
                    src="/images/img-9.jpg"
                    text="Step into the wild, where nature speaks and time slows down."
                    label='Adventure'
                    path='/services'
                    />
                    <Carditem 
                    src="/images/img-1.jpg"
                    text="Chase the horizon. Find yourself beyond it."
                    label='BEAUTY'
                    path='/services'
                    />
  
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Cards
