/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          designation
        }
      }
    }
  `)

    return (
        <>
            <div className="notice is-sticky">Notice: This site is under construction, all contents are fake</div>
            <Header title={data.site.siteMetadata?.title} designation={data.site.siteMetadata?.designation} />
            <div>
                <main>{children}</main>
                <footer className="footer">
                    <div className="container">
                        © {new Date().getFullYear()} @delowar.dev, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.com">Gatsby</a>
                    </div>
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
