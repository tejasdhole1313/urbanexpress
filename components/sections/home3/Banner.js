
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    return (
        <>
        {/* Main Slider Three Start */}
        <section className="main-slider-three">
            <Swiper {...swiperOptions} className="main-slider-three__carousel owl-carousel owl-theme thm-owl__carousel">
                <SwiperSlide>
                <div className="item main-slider-three__slide-1">
                    <div className="main-slider-three__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-3-1.jpg)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider-three__shape-1">
                        <img src="assets/images/shapes/main-slider-three-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-2">
                        <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-3">
                        <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-4">
                        <img src="assets/images/shapes/main-slider-three-shape-4.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-2"></div>
                    <div className="main-slider-three__shape-3"></div>
                    <div className="main-slider-three__shape-4"></div>
                    <div className="container">
                        <div className="main-slider-three__content">
                            <p className="main-slider-three__sub-title">INTERNATIONAL LOGISTICS</p>
                            <h2 className="main-slider-three__title">FULL SUSTAINABLE <br/>
                                SOLUTIONS
                            </h2>
                            <div className="main-slider-three__btn-box">
                                <Link href="about" className="main-slider-three__btn-1 thm-btn">Discover More</Link>
                                <Link href="contact" className="main-slider-three__btn-2 thm-btn">GET A QUOTE</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item main-slider-three__slide-1">
                    <div className="main-slider-three__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-3-2.jpg)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider-three__shape-1">
                        <img src="assets/images/shapes/main-slider-three-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-2">
                        <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-3">
                        <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-4">
                        <img src="assets/images/shapes/main-slider-three-shape-4.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-2"></div>
                    <div className="main-slider-three__shape-3"></div>
                    <div className="main-slider-three__shape-4"></div>
                    <div className="container">
                        <div className="main-slider-three__content">
                            <p className="main-slider-three__sub-title">INTERNATIONAL LOGISTICS</p>
                            <h2 className="main-slider-three__title">FULL SUSTAINABLE <br/>
                                SOLUTIONS
                            </h2>
                            <div className="main-slider-three__btn-box">
                                <Link href="about" className="main-slider-three__btn-1 thm-btn">Discover More</Link>
                                <Link href="contact" className="main-slider-three__btn-2 thm-btn">GET A QUOTE</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item main-slider-three__slide-1">
                    <div className="main-slider-three__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/slider-3-3.jpg)' }} >
                    </div>{/* /.slider-one__bg */}
                    <div className="main-slider-three__shape-1">
                        <img src="assets/images/shapes/main-slider-three-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-2">
                        <img src="assets/images/shapes/main-slider-three-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-3">
                        <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-4">
                        <img src="assets/images/shapes/main-slider-three-shape-4.png" alt=""/>
                    </div>
                    <div className="main-slider-three__shape-2"></div>
                    <div className="main-slider-three__shape-3"></div>
                    <div className="main-slider-three__shape-4"></div>
                    <div className="container">
                        <div className="main-slider-three__content">
                            <p className="main-slider-three__sub-title">INTERNATIONAL LOGISTICS</p>
                            <h2 className="main-slider-three__title">FULL SUSTAINABLE <br/>
                                SOLUTIONS
                            </h2>
                            <div className="main-slider-three__btn-box">
                                <Link href="about" className="main-slider-three__btn-1 thm-btn">Discover More</Link>
                                <Link href="contact" className="main-slider-three__btn-2 thm-btn">GET A QUOTE</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </section>
        {/*Main Slider Three End */}
            
        </>
    )
}
