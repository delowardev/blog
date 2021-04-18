import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import clsx from "clsx"

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

    const navClass = `py-2 px-3 leading-8 inline-block hover:text-primary text-lg font-medium`

    const isActive = ({ isCurrent }) => {
        return isCurrent ? { className: clsx(navClass, 'text-primary') } : { className: clsx(navClass, 'text-omega')}
    }

    const ExactNavLink = props => (
        <Link getProps={isActive} {...props} />
    )


    return (
        <header className="bg-white">
            <div className="container">
                <div className="-mx-3">
                    <div className="flex py-5 justify-between">
                        <Link className={clsx(navClass, 'text-2xl')} to='/'>
                            {siteTitle}
                        </Link>
                        <nav>
                            {
                                nav.map((n, k) => (
                                    <ExactNavLink
                                        key={k}
                                        className={clsx(navClass)}
                                        to={n.to}
                                    >
                                        {n.name}
                                    </ExactNavLink>
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
