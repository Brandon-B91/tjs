import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <h4><FaLocationArrow /> 1510 Deborah Rd SE Rio Rancho, NM 87124 </h4>
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
      <p> &copy;2020 All rights reserved.</p>
    </div>
  </Container>
)

export default Footer
