import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      &copy;2020 All rights reserved
    </div>
  </Container>
)

export default Footer
