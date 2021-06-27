import React from "react"

import github from "~/images/github.svg"
import twitter from "~/images/twitter.svg"
import PrimaryBtn from "./PrimaryBtn"
import { graphql, useStaticQuery, Link } from "gatsby"

import logo from '~/images/foot-logo.png'
import facebook from '~/images/facebook.png'
import instagram from '~/images/instagram.png'
import telegram from '~/images/telegram.png'
import vk from '~/images/vk.png'

const Footer = () => {

  const data = useStaticQuery(graphql`
    query Cats {
      allStrapiCategory {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <PrimaryBtn text='Добавить свой объект' type="primary" />

      <ul className='site-map'>
        {data.allStrapiCategory.edges.map(({ node }) => {
          return (
            <li><Link to={`/categories/${node.slug}`} key={node.slug}>{node.name}</Link></li>
          )
        })}
      </ul>

      <div className='foot-nav'>
        <div className='logo'>
          <img src={logo} />
          <span>© 2021 TopDacha</span>
        </div>
        <div className='socials'>
          <img src={facebook} />
          <img src={instagram} />
          <img src={telegram} />
          <img src={vk} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
