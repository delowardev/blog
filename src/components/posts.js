import * as React from "react";
import Title from "./title";
import PostCard from "./post-card";
import { get } from "lodash";

const Posts = ({ data, isFirst, max = 99 }) => {
    const category = get(data, "node");
    const posts = get(data, "node.blog_post")

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
                            posts?.map((post, k) => k >= max ? null : (
                                <PostCard className="col-md-6 post-item" key={k} data={post} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts