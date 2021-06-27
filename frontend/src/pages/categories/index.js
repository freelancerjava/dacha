import React from "react"
import { graphql } from "gatsby"

import 'antd/dist/antd.css';
import "../../styles/main.scss"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import CategoryList from "~/components/category-list"
import TopBanner from "~/components/TopBanner"
import SearchBanner from "~/components/SearchBanner"
import Populars from "~/components/Populars"
import PageHeading from "~/components/styled/page-heading"
import TopList from "~/components/TopList";

const CategoriesPage = ({ data: { allStrapiCategory } }) => {
  const categories = allStrapiCategory.edges
  const seo = { title: "Categories" }
  return (
    <Layout>
      <SEO seo={seo} />
      {/* <PageHeading>Kategoriyalar</PageHeading> */}
      <CategoryList categories={categories} />
    </Layout>
  )
}

export const query = graphql`
  query AllCategoriesQuery {
    allStrapiCategory {
      edges {
        node {
          name
          id
          slug
          image {
            localFile{
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
              }
            }
          }
        }
      }
    }
  }
`

export default CategoriesPage

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
