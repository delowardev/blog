import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ title, designation }) => {

    const nav = [
        {
            name: "Blog",
            to: "/"
        },
        {
            name: "All posts",
            to: "/blog"
        },
        {
            name: "Contact",
            to: "/contact"
        }
    ]

    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-12 col-sm-auto branding-col">
                            <Link className='branding' to='/'>
                                {title}
                                <small>{designation}</small>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-auto nav-col">
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
            </div>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    designation: PropTypes.string,
}

Header.defaultProps = {
    title: ``,
    designation: ``,
}

export default Header
