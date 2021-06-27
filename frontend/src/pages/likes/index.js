import React, { useState } from 'react';
import { graphql, useStaticQuery } from "gatsby"

import Layout from "~/components/layout"
import PageHeading from "~/components/styled/page-heading"
import ProductList from "~/components/product-list"
import SEO from "~/components/seo"
import GridSvg from '../../images/svg/GridSvg';
import ListSvg from '../../images/svg/ListSvg';
import Product from '../../components/Product';



const LikedDachaPage = () => {
    let likes = JSON.parse(localStorage.getItem('likes')) || []

    const query = useStaticQuery(graphql`
    query LikedDachaQuerydata {
        allStrapiProduct {
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
                        localFile{
                            childImageSharp {
                                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
                            }
                        }
                    }
                    category{
                        name
                        slug
                    }
                    pics {
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
    `)

    const flatProducts = query.allStrapiProduct.edges.map(({ node }) => node).filter((node)=>likes.includes(node.id))
    const seo = { title: "Dachalar" }
    const [grid, setgrid] = useState(true);
    return (
        <Layout>
            <SEO seo={seo} />
            <div className="top-list">
                <h1 className='results-h1'>Избранное</h1>
                <div className='title'>
                    <h3>Мы нашли {flatProducts.length} объявлений</h3>
                    <span>
                        <GridSvg selected={grid} select={() => {
                            setgrid(true)
                        }} />
                        <ListSvg selected={!grid} select={() => {
                            setgrid(false)
                        }} />
                    </span>
                </div>

                <div className="products">
                    {flatProducts.map((node) => {
                        return (
                            <Product node={node} />
                        )
                    })}

                </div>
            </div>
        </Layout>
    );
};

export default LikedDachaPage;