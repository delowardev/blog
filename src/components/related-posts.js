import * as React from "react";
import {Link} from "gatsby";

const RelatedPosts = ({ data }) => (
    <div className="related-posts-wrap sidebar-widget">
        <h3>Related Posts</h3>

        <div className="related-posts">
            {
                data.map((post, k) => k > 7 ? null : (
                    <div key={post.slug} className="post-card-mini">
                        <h4> <Link to={'/blog/' + post.slug}>{post.title}</Link> </h4>
                        <div className="no-gutters row justify-content-between">
                            <span className="author">{post.author.name}</span>
                            <span className="date">{post.publishDate}</span>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
)

export default RelatedPosts