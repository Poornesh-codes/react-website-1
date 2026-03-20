import React from 'react'
import { Button } from './button'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer(){
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the ADVENTURE!
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name='email' placeholder='Your Email' className="footer-input" />
                    <Button buttonStyle='btn--outline'>subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>ABOUT US</h2>
                    <Link to='/sign-up'>signup</Link>
                    <Link to="/">home</Link>
                    <Link to="/">contact us</Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
