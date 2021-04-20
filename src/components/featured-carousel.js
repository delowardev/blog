import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "gatsby";
import Title from "./title";
import { ChevronRight, ChevronLeft } from "react-feather"
import clsx from "clsx";
import Img from 'gatsby-image'

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            clsx('slick-prev', 'slick-arrow', {'slick-disabled' : currentSlide === 0})
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0}
        type="button"
    >
        <ChevronLeft />
    </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            clsx('slick-next', 'slick-arrow', {'slick-disabled' : currentSlide === slideCount - 1})
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1}
        type="button"
    >
        <ChevronRight/>
    </button>
);

const FeaturedCarousel = ({ data }) => {

    console.log(data)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: 'featured-carousel',
        nextArrow: <SlickArrowLeft />,
        prevArrow: <SlickArrowRight />
    };

    const slide = {
        category: "Gatsby",
        title: "Magic Flip Cards Solving A Common Sizing Problem",
        date: "March 20, 2020",
        slug: "hello",
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
                            data.map(( { node } , key) => (
                                <div key={key} className="featured-slide">
                                    <div className="featured-slide-inner">
                                        <Link className="category" to={node.category[0]}>
                                            { node.category[0] }
                                        </Link>
                                        <h3 className="title">
                                            <Link className="text-white block" to={ `/blog/` + node.slug }> { node.title } </Link>
                                        </h3>

                                        <div className="row no-gutters author align-items-center">
                                            <div className="col-auto">
                                                <Img className="avatar" fluid={node.author.image.fluid}/>
                                            </div>
                                            <div className="col">
                                                <h4> { node.author.name } </h4>
                                                <span> { node.publishDate } </span>
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