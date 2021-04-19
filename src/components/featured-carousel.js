import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "gatsby";

const FeaturedCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
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
        <div className="container">
            <div className="-mx-2">
                <Slider {...settings}>
                    {
                        slides.map(slide => (
                            <div className="px-2">
                                <div className="bg-gray-400 h-80 rounded-2xl p-6 bg-gradient-to-r from-yellow-400 to-red-500 flex flex-col items-start">
                                    <span className="bg-primary px-2 inline-block text-white rounded-md">
                                        { slide.category }
                                    </span>
                                    <h2 className="mt-auto text-2xl">
                                        <Link className="text-white block" to={ slide.slug }> { slide.title } </Link>
                                    </h2>
                                    <div className="pt-4 flex items-center">
                                        <div className="pr-3">
                                            <img
                                                className="w-14 h-14 rounded-full"
                                                src={ slide.author.avatar }
                                                alt={ slide.author.name }
                                            />
                                        </div>
                                        <div>
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
    )
}


export default FeaturedCarousel