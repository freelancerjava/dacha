import React from "react"
import { graphql } from "gatsby"

import 'antd/dist/antd.css';
import "../styles/main.scss"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import CategoryList from "~/components/CategoryList"
import TopBanner from "~/components/TopBanner"
import SearchBanner from "~/components/SearchBanner"
import Populars from "~/components/Populars"
import PageHeading from "~/components/styled/page-heading"
import TopList from "~/components/TopList";

const IndexPage = ({ data: { allStrapiCategory, allStrapiProduct } }) => {
  const categories = allStrapiCategory.edges
  const topproducts = allStrapiProduct.edges
  const seo = { title: "Categories" }
  return (
    <Layout>
      <SEO seo={seo} />
      <TopBanner />
      <SearchBanner
        categories={categories}
        // searchQuery={searchQuery}
        // setSearchQuery={setSearchQuery}
         />
      <Populars />
      {/* <PageHeading>Kategoriyalar</PageHeading> */}
      <CategoryList categories={categories} />

      <TopList topproducts={topproducts} />


    </Layout>
  )
}

export const query = graphql`
  query CategoriesQuery {
    allStrapiCategory(limit: 4) {
      edges {
        node {
          name
          id
          slug
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
            }
          }
          products{
            title
          }
        }
      }
    }

    allStrapiProduct (filter:{istop: {eq: true}}) {
      edges {
        node {
          specifications {
            key
            value
          }
          title
          price
          slug
          id
          description
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
            }
          }
          category{
            name
            slug
          }

          pics {
            id
            formats {
              medium {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
                }
              }
            }
          }
          
        }
      }
    }
  }
`

export default IndexPage

/****
 *
 * pics {
            id
            formats {
              thumbnail {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
                }
              }
            }
          }
** */
