import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "gatsby";
import Title from "./title";
import { ChevronRight, ChevronLeft } from "react-feather"

const FeaturedCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: 'featured-carousel',
        nextArrow: <button><ChevronRight/></button>,
        prevArrow: <button><ChevronLeft /></button>
    };

    const slide = {
        category: "Gatsby",
        title: "Magic Flip Cards Solving A Common Sizing Problem",
        date: "March 20, 2020",
        slug: "/hello",
        author: {
            slug: "delowardev",
            name: "Delowar Hossain",
            avatar: "https://i.imgur.com/FZjsVZR.jpeg"
        }
    };

    const slides = [
        ...Array(6).fill(slide)
    ]

    return (
        <div className="featured-section">
            <Title title="Latest posts" to="/" />
            <div className="spacing" />
            <div className="container">
                <div className="featured-slider">
                    <Slider {...settings}>
                        {
                            slides.map(slide => (
                                <div className="featured-slide">
                                    <div className="featured-slide-inner">
                                        <Link className="category" to={slide.category}>
                                            { slide.category }
                                        </Link>
                                        <h3 className="title">
                                            <Link className="text-white block" to={ slide.slug }> { slide.title } </Link>
                                        </h3>

                                        <div className="row no-gutters author align-items-center">
                                            <div className="col-auto">
                                                <img
                                                    className="avatar"
                                                    src={ slide.author.avatar }
                                                    alt={ slide.author.name }
                                                />
                                            </div>
                                            <div className="col">
                                                <h4> { slide.author.name } </h4>
                                                <span> { slide.date } </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}


export default FeaturedCarousel