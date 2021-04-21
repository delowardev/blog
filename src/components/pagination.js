import * as React from "react";
import {Link} from "gatsby";
import { ChevronLeft, ChevronRight } from "react-feather";

const Pagination = ({ pageContext }) => {

    const {humanPageNumber, numberOfPages, previousPagePath, nextPagePath} = pageContext;

    if (numberOfPages === 1) {
        return null;
    }


    return (
        <div className="pagination-section">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="pagination">

                        {
                            humanPageNumber > 1 ? (
                                <Link  className="prev btn is-round icon-left" to={previousPagePath}>
                                    <span className="icon">
                                        <ChevronLeft />
                                    </span>
                                    Previous
                                </Link>
                            ) : (
                                <span className="prev" />
                            )
                        }

                        <span className="page-info"> Page {humanPageNumber} of {numberOfPages} </span>

                        {
                            humanPageNumber < numberOfPages ? (
                                <Link  className="next btn is-round icon-right" to={nextPagePath}>
                                    Next

                                    <span className="icon">
                                        <ChevronRight />
                                    </span>
                                </Link>
                            ) : (
                                <span className="next" />
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination