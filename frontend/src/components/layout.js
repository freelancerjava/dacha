import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SearchResults from "~/components/search-results"
import Footer from "~/components/footer"

import Header from "~/components/header"
import MyHeader from "~/components/MyHeader"
import Navbar from "./navbar"
import { useOnClickOutsideMenu, useOnKeypress, useScroll } from "~/helpers/hooks"

const Layout = ({ children, ref }) => {

  const [open, setOpen] = useState(false);

  const navbar = useRef()
  useOnClickOutsideMenu(navbar, () => setOpen(false))
  useOnKeypress(() => setOpen(false))
  useScroll(navbar, () => setOpen(false), () => setOpen(true))

  const [slideContent, setslideContent] = useState({
    show: false,
    title: "",
    content: EmptyContent
  });

  const data = useStaticQuery(graphql`
    query SiteNameQuery {
      strapiGlobal {
        siteName
      }
    }
  `)

  const setContent = () => {

  }

  return (
    <div className="bg-gray-50 relative body" id='bodydiv' ref={ref}>
      <MyHeader open={open} setOpen={setOpen} slideContent={slideContent} setslideContent={setslideContent} />
      <Navbar open={open} ref={navbar} />

      <div className="flex flex-col max-w-screen-lg m-auto min-h-screen p-0 md:p-10">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const EmptyContent = () => {
  return (
    <div>
    </div>
  );
};
