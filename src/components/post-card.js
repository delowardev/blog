import * as React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import pattern from "../images/pattern.png";

const PostCard = ({ data , className}) => {

    const { slug, category, title, publishDate, author } = data;

    return (
        <div className={clsx(className, "post-card")}>
            <div className="post-card-inner" style={{ '--post-color' : category.color, '--post-text-color': category.textColor }}>
                <div className="row no-gutters">
                    <div className="col-4">
                        <div className="thumbnail">
                            <Link to={`/blog/` + slug}>
                                <span className="pattern" style={{ backgroundImage: `url('${pattern}')`}} />
                                <img className="icon" src={category.image.file.url} alt={category.name} />
                                { category.name }
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="content">
                            <Link className="category" to={`/category/` + category.slug }> { category.name } </Link>
                            <h3 className="title">
                                <Link to={'/blog/' + slug}>{ title }</Link>
                            </h3>
                            <div className="row justify-content-between align-self-stretch">
                                <div className="col-auto">
                                    <span className="author">{author.name}</span>
                                </div>
                                <div className="col-auto">
                                    <span className="date">
                                        {publishDate}
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