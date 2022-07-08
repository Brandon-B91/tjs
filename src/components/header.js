import React from 'react'

import {StaticImage} from 'gatsby-plugin-image'
import * as styles from './header.module.css'

const Header = () => (
    <div className={styles.header}>
      <StaticImage src="../images/tjs.jpeg" 
       alt="A pikachu"
       placeholder="blurred"
       layout="fullWidth"
       />
    </div>

)

export default Header