import * as React from "react";
import PropTypes from "prop-types"
import { Link } from "gatsby";

const Title = ({ title, to}) => (
    <div className="title-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <h2 className="title">
                        {
                            to ? <Link to={to}>{title}</Link> : <span>{title}</span>
                        }
                    </h2>
                </div>
                {
                    to && (
                        <div className="col-auto">
                            <Link to={to} className="btn is-sm is-rounded">View More</Link>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
)

Title.prototype = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string
}

export default Title