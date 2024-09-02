import React from 'react'

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section about">
          <h2>JAMES CONSULTING</h2>
          <p>
          500 Terry Francine Street,

San Francisco, CA 94158

Mail: info@mysite.com

Tel: 123-456-7890
          </p>
        </div>
        <div class="footer-section links">
          <h2>MENU</h2>
          <ul>
            <li> <a href="#">About</a> </li>
            <li> <a href="#">Services</a> </li>
            <li> <a href="#">Services</a> </li>
            <li> <a href="#">Plans & Pricing</a> </li>
            <li> <a href="#">Tools & Tips</a> </li>
            <li> <a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section social">
          <h2>SOCIALS</h2>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>


            <p className='par2'>© 2035 by JAMES CONSULTING. <br />
            Powered and secured by Wix</p>
          </div>
        </div>
      </div>
      {/* <div class="footer-bottom">
        <p>&copy; 2024 MyBrand | Designed by Me</p>
      </div> */}
    </footer>
  )
}
