import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Tags from '../components/tags'

const Supplements = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={data.title}
        description={data.description}
        image={`http:${data.heroImage}`}
      />
      <ul className=''>
        {data.allContentfulSupplements.nodes.map((post) => {
          return (
            <div>
              <li>
                <Link to={`/store/${post.slug}`} className=''>
                  <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                  <h2>{post.title}</h2>
                </Link>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.description.childMarkdownRemark.html,
                  }}
                />
                <Tags tags={post.tags} />
              </li>
            </div>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Supplements

export const query = graphql`
  query {
    allContentfulSupplements(
      filter: { tags: { eq: "Supplement"} }
    ) {
      nodes {
        title
        slug
        tags
        heroImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 424
            height: 212
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
