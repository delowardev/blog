import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {

    const nav = [
        {
            name: "Home",
            to: "/"
        },
        {
            name: "About",
            to: "/about"
        },
        {
            name: "Contact",
            to: "/contact"
        }
    ]

    return (
        <header className="header">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <Link className='branding' to='/'>
                            {siteTitle}
                        </Link>
                    </div>
                    <div className="col-auto">
                        <nav>
                            {
                                nav.map((n, k) => (
                                    <Link
                                        key={k}
                                        activeClassName="is-active"
                                        to={n.to}
                                    >
                                        {n.name}
                                    </Link>
                                ))
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
