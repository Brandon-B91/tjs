import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <h4>Come by and see us! <br/> <FaLocationArrow /><a href="https://www.google.com/maps/place/1510+Deborah+Rd+SE,+Rio+Rancho,+NM+87124/@35.2358491,-106.6650248,15z/data=!3m1!4b1!4m5!3m4!1s0x872270e657085d49:0xa9449a209b0cb79d!8m2!3d35.2358319!4d-106.6562915">1510 Deborah Rd SE Rio Rancho, NM 87124</a> </h4>
      Give us a call <a href="tel:+1-505-892-5243">(505)-892-5243</a>
      <p>Check us out on social media!</p>
      <a
        href="https://www.facebook.com/tjsevergreen"
        target="_blank"
        rel="noreferrer"
        className="socialIcon"
      >
        <FaFacebook style={{ fontSize: '32px', margin: '2%' }}></FaFacebook>
      </a>
      <a
        href="https://www.facebook.com/tjsevergreen"
        target="_blank"
        rel="noreferrer"
        className="socialIcon"
      >
        <FaInstagram style={{ fontSize: '32px', margin: '2%' }}></FaInstagram>
      </a>
      <p className="tradeMark"> &copy;2020 All rights reserved.</p>
    </div>
  </Container>
)

export default Footer
