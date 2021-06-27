import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import ProductList from "~/components/product-list"
import SEO from "~/components/seo"
import Image from "~/components/image"

import { formatPrice } from "~/helpers/currency-formatter"
import GridSvg from "../../images/svg/GridSvg"
import ListSvg from "../../images/svg/ListSvg"
import Product from "../../components/Product"
import ImageCarousel from "../../components/ImageCarousel"
import ViewSvg from "../../images/svg/ViewSvg"
import { Space, Rate } from "antd"
import Icons from "../../helpers/Icons"
import LocationMap from "../../components/LocationMap"

const ProductPage = ({ data }) => {
  const product = data.strapiProduct

  const pics = product.pics && [product.image.localFile, ...product.pics.map(item => item.localFile)] || [product.image.localFile]

  const seo = { title: product.title, image: product.image.publicURL }

  const flexJustify = product.specifications.length > 0 ? "between" : "center"

  const flatProducts = product.relatedProducts
  const [grid, setgrid] = useState(true);

  return (
    <Layout>
      <SEO seo={seo} />
      <ImageCarousel dots={true} images={pics} />

      <div className='product p-4'>
        <div className='idview'>
          <div className='id'>ID {product.id.split('Product_')[1]}</div>
          <div className='view'>{product.id.split('Product_')[1] * 111} <ViewSvg /></div>
        </div>
        <div className='title'>Дача на Чарвакском водохранилище</div>
        <Space><Rate className='mt--5' allowHalf defaultValue={3} /><span className='ml-2'>3.0</span></Space>

        <div className="w-full specifications">
          {product.specifications &&
            product.specifications.map((spec, index) => (
              <div
                className="w-full flex text-sm justify-start items-between mb-22 pb-1"
                key={`${spec.key}-${index}`}
              >
                <Icons icon={spec.icon} />
                <span className="font-extralight">{spec.key}</span>
                <span className='specs-value'>{spec.value}</span>
              </div>
            ))}
        </div>

      </div>


      <div className='features'>
        <div className='title'>Удобства</div>
        <div className='features-container'>
          <div className='features-list'>
            {
              product.features.map((item, key) => {
                return (
                  <div className='feature' key={key}>
                    <Image image={item.image.localFile} alt="card bg" />
                    <div >{item.name}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className='owner-contacts'>
        <div className='title'>Контакты</div>
        <div className='text'>
          <div className='initials'>AH</div>
          <div className='names'>
            <div className='fio'>Aziz Husanov</div>
            <div className='phone'>+998 (97) 455-59-42</div>
          </div>
        </div>
      </div>

      <div className='description'>
        <div className='title'>Описание</div>
        <div className='text'>
          <ReactMarkdown
            className="prose md:w-4/5 m-auto"
            children={product.description}
          />
        </div>
      </div>

      <div className='location'>
        <div className='title'>Расположение на карте</div>
        <div className='map'>
          {/* <LocationMap/> */}
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 mt-4">
          {product.image && (
            <div className="md:col-span-2 md:pr-4">
              <Image
                className="rounded-md"
                image={product.image.localFile}
                alt="Product Image"
              />
            </div>
          )}
          <div className={`flex flex-col justify-${flexJustify}`}>
            <div className="mb-4">
              <h1 className="text-4xl mb-1">{product.title}</h1>
              {product.price && (
                <div className="text-sm flex justify-between">
                  <p className="font-extralight">Narxi</p>
                  <p>{formatPrice(product.price)}</p>
                </div>
              )}
            </div>
            <div className="w-full">
              {product.specifications &&
                product.specifications.map((spec, index) => (
                  <div
                    className="w-full flex text-sm justify-between items-between border-b mb-2 pb-1"
                    key={`${spec.key}-${index}`}
                  >
                    <span className="font-extralight">{spec.key}</span>
                    <span>{spec.value}</span>
                  </div>
                ))}
            </div>
            <a
              href={product.dealerUrl}
              target="_blank"
              rel="noreferrer"
              className="p-4 text-center font-medium rounded-md border-2 mt-4"
            >
              Shop Online
          </a>
          </div>
        </div>
        <div className="my-6 mb-24">
          <h1 className="text-4xl font-bold text-center">Qo'shimcha ma'lumotlar</h1>
          <hr className="mt-6 mb-12 m-auto w-24 border-t-4" />
          <ReactMarkdown
            className="prose md:w-4/5 m-auto"
            children={product.description}
          />
        </div>
         */}



      {flatProducts.length > 0 && <div className="top-list">
        <div className='title'>
          <h3>Похожие объявления</h3>
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
      </div>}
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($slug: String!) {
    strapiProduct(slug: { eq: $slug }) {
      title
      description
      id
      price
      dealerUrl
      category{
        name
        slug
      }
      features {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
            }
          }
        }
        name
      }
      image {
        localFile{
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
          }
        }
      }
      specifications {
        key
        value
        icon
      }
      pics {
        localFile{
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
          }
        }
      } 
      relatedProducts {
        title
        price
        id
        slug
        image {
          localFile{
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
            }
          }
        }
        category
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
`

export default ProductPage
