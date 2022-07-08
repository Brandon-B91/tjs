import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import get from 'lodash/get'
import * as styles from './store.module.css'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'

class store extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="Store" />
        <Hero title="Store" />
        <ul className={styles.ul}>
          <li>
            <Link to="/supplements/">
              <StaticImage src="../images/supplements.gif" alt="supplements" />
            </Link>
            <h2>Supplements</h2>
            <p>We have all your supplement needs!</p>
          </li>
          <li className={styles.li}>
            <Link to="/cbdHoney/">
              <StaticImage src="../images/supplements.gif" alt="supplements" />
            </Link>
            <h2>CBD & Local Honey</h2>
            <cite>**We are not a dispensary**</cite>
            <p>High quality CBD products and local honey!</p>
          </li>
          <li className={styles.li}>
            <Link to="/tea/">
              <StaticImage src="../images/supplements.gif" alt="supplements" />
            </Link>
            <h2>Teas</h2>
            <p>Large variety of loose leaf tea and tea accessories!</p>
          </li>
          <li className={styles.li}>
            <Link to="/oils/">
              <StaticImage src="../images/supplements.gif" alt="supplements" />
            </Link>
            <h2>Essential Oils</h2>
            <p>From healing to fragrance we have it all!</p>
          </li>
          <li className={styles.li}>
            <Link to="/herbs/">
              <StaticImage src="../images/supplements.gif" alt="supplements" />
            </Link>
            <h2>Extracts, Bulk & Herb Forumlas!</h2>
            <p>You know it's safe and high quality if you buy it from us!</p>
          </li>
          <li className={styles.li}>
            <Link to="/bodyProducts/">
              <StaticImage src="../images/supplements.gif" alt="supplements" />
            </Link>
            <h2>Body Products, Gifts & Supplies</h2>
            <p>The best selection for any of your needs!</p>
          </li>
          <li className={styles.li}>
            <Link to="/petCare/">
              <StaticImage src="../images/supplements.gif" alt="supplements" />
            </Link>
            <h2>Pet Care</h2>
            <p>We love our furry family and cater to them as well!</p>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default store
