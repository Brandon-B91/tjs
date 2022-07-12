import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './products.module.css'

class products extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulSupplements')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.description.childMarkdownRemark.excerpt}
          image={`http:${post.heroImage}`}
        />
        <Hero
          image={post.heroImage?.gatsbyImageData}
          title={post.title}
          price={` $ ${post.Price}`}
          content={post.description?.childMarkdownRemark?.excerpt}
        />
        <div className={styles.container}>
          <div className={styles.article}>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{
                __html: post.body?.childMarkdownRemark?.html,
              }}
            />
            <Tags tags={post.tags} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/store/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/store/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default products

export const pageQuery = graphql`
  query SupplementsBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulSupplements(slug: { eq: $slug }) {
      slug
      title
      heroImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1280)

      }
      body {
        childMarkdownRemark {
          html
        }
      }
      tags
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
    previous: contentfulSupplements(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulSupplements(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
