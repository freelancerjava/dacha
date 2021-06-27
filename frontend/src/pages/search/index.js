import React, { useState, useRef, useEffect } from 'react';
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import GridSvg from '../../images/svg/GridSvg';
import ListSvg from '../../images/svg/ListSvg';
import Product from '../../components/Product';
import KategoryFilterSvg from '../../images/svg/KategoryFilterSvg';
import DirectionFilterSvg from '../../images/svg/DirectionFilterSvg';
import FilterSvg from '../../images/svg/FilterSvg';

import { useOnClickOutside, useOnKeypress } from "~/helpers/hooks"
import CloseSvg from '../../images/svg/CloseSvg';
import { Input, Slider } from 'antd';




const SearchDachaPage = ({
  data: {
    allStrapiProduct: { edges },
  },
}) => {
  const flatProducts = edges.map(({ node }) => node)
  const seo = { title: "Dachalar" }
  const [grid, setgrid] = useState(true);

  const modal = useRef()
  const [slideContent, setslideContent] = useState({
    show: false,
    title: "",
    content: EmptyContent
  });
  useOnClickOutside(modal, () => setslideContent({
    ...slideContent,
    show: false
  }))
  useOnKeypress(() => setslideContent({
    ...slideContent,
    show: false
  }))

  return (
    <Layout>
      <SEO seo={seo} />
      <div className="top-list">
        <h1 className='results-h1'>Результаты поиска</h1>
        <div className='search-filters'>
          <div className='filter'>Категории <KategoryFilterSvg /></div>
          <div className='filter'>Рекомендации <DirectionFilterSvg /></div>
          <div className='filter' onClick={() => {
            setslideContent({
              show: true,
              title: "Фильтры",
              content: FilterContent
            })
          }}>Фильтры <FilterSvg /></div>
        </div>
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
      <div ref={modal} className={`contacts ${slideContent.show ? 'move' : 'movedown'}`}>
        <span className='dragger'></span>
        <div className='title'>
          <span className='close'><CloseSvg
            onClick={() => setslideContent({
              ...slideContent,
              show: false
            })} />
          </span>
          <span>{slideContent.title}</span>
        </div>
        <slideContent.content />
      </div>
    </Layout>
  );
};

export const searchPageQuery = graphql`
  query DachaSearchQuery {
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
`


export default SearchDachaPage;

const EmptyContent = () => {
  return (
    <div>
    </div>
  );
};

const FilterContent = () => {
  return (
    <>
      <div className='price'>
        <div className='price-title'>цена</div>
        <div className='range-input'>
          <span><Input /></span>
          <span><Input /></span>
        </div>
        <div className='range'>
          <Slider range defaultValue={[20, 50]} />
        </div>
      </div>
      <div className='price'>
        <div className='price-title'>Количество спален</div>
        <div className='range-input'>
          <span><Input /></span>
          <span><Input /></span>
        </div>
        <div className='range'>
          <Slider range defaultValue={[20, 50]} />
        </div>
      </div>
    </>
  )
}