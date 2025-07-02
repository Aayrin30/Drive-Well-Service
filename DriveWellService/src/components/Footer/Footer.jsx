import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
   <>
   <footer className='footer'>
        <div className="footer-container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">AbootUs</a></li>
                <li><a href="/reviews">Reviews</a></li>
                <li><a href="/appointments">Appointments</a></li>
                <li><a href="/about">Overview</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="/services">Painting</a></li>
                <li><a href="/services">Denting</a></li>
                <li><a href="/services">Mechanics</a></li>
                <li><a href="/services">Washing</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Hours</h4>
              <ul className='fonts'>
                <li>Monday:     9:00am-9:00pm</li>
                <li>Tuesday:    9:00am-9:00pm</li>
                <li>Wednesday:  9:00am-9:00pm</li>
                <li>Thrusday:   9:00am-9:00pm</li>
                <li>Friday:     9:00am-9:00pm</li>
                <li>Saturday:   9:00am-9:00pm</li>
                <li>Sunday:     CLOSED</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className='social-links'>
                <a href="/facebook"><i className='fas fa-facebook-f'></i></a>
                <a href="/twitter"><i className='fas fa-twitter'></i></a>
                <a href="/instagram"><i className='fas fa-instagram'></i></a>
                <a href="/whatsapp"><i className='fas= fa-whatsapp'></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

   </>
  )
}
