import * as React from "react";
import Title from "./title";
import PostCard from "./post-card";

const Posts = ({ category }) => {

    const post = {
        category: {
            name: "Gatsby",
            slug: "gatsby"
        },
        title: "Magic Flip Cards Solving A Common Sizing Problem",
        date: "March 20, 2020",
        slug: "hello",
        author: {
            slug: "delowardev",
            name: "Delowar Hossain",
            avatar: "https://i.imgur.com/FZjsVZR.jpeg"
        }
    };

    const posts = [
        ...Array(4).fill(post)
    ]

    return (
        <div className="posts-section">
            <Title title="Javascript" to="/" />
            <div className="spacing" />
            <div className="container">
                <div className="posts">
                    <div className="row no-gutters">
                        {
                            posts.map((p, k) => (
                                <PostCard className="col-6 post-item" key={k} data={p} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts