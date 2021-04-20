import * as React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import pattern from "../images/pattern.png";
import GatsbyIcon from "../images/gatsby.svg";

const PostCard = ({ data , className}) => {

    const { slug, category, title, author, date } = data;

    return (
        <div className={clsx(className, "post-card")}>
            <div className="post-card-inner">
                <div className="row no-gutters">
                    <div className="col-4">
                        <div className="thumbnail">
                            <Link to={`/` + slug}>
                                <span className="pattern" style={{ backgroundImage: `url('${pattern}')`}} />
                                <img className="icon" src={GatsbyIcon} alt="gatsby"/>
                                { category.name }
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <Link className="category" to={`/` + category.slug }> { category.name } </Link>
                            <h3 className="title">{ title }</h3>
                            <div className="row">
                                <div className="col-auto">
                                    <span className="author">{author.name}</span>
                                </div>
                                <div className="col-auto">
                            <span className="date">
                                {date}
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard