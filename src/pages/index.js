import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ProductPreview from '../components/product-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulSupplements.nodes')

    return (
      <Layout location={this.props.location} >
        <h2>Your health is our business</h2>
        <ProductPreview posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulSupplements {
      nodes {
        title
        slug
        tags
        heroImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 400
            height: 200
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
