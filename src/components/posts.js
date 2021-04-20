import * as React from "react";
import Title from "./title";
import PostCard from "./post-card";
import { get } from "lodash";

const Posts = ({ data, isFirst }) => {

    const blogPosts = get(data, "edges")
    if (!blogPosts.length) return null;
    const category = get(blogPosts[0], "node.category")

    return (
        <div className="posts-section">
            {
                !isFirst && <div className="spacing is-lg" />
            }
            <Title title={category.name} to={'/category/' + category.slug} />
            <div className="spacing" />
            <div className="container">
                <div className="posts">
                    <div className="row no-gutters">
                        {
                            blogPosts?.map((p, k) => (
                                <PostCard className="col-6 post-item" key={k} data={p.node} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts