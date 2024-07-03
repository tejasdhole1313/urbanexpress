
'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
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
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/* Main Slider Two Start */}
        <section className="main-slider-two">
            <Swiper {...swiperOptions} className="main-slider-two__carousel owl-carousel owl-theme thm-owl__carousel">
                <SwiperSlide>
                <div className="item main-slider-two__slide-1">
                    <div className="main-slider-two__shape-1">
                        <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-2">
                        <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-3 img-bounce">
                        <img src="assets/images/shapes/main-slider-two-shape-3.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-4"></div>
                    <div className="main-slider-two__map">
                        <img src="assets/images/shapes/main-slider-two-map-1.png" alt="" className="rotate-me"/>
                    </div>
                    <div className="main-slider-two__img">
                        <img src="assets/images/resources/main-slider-two-img-1.png" alt="" className="float-bob-y"/>
                    </div>
                    <div className="container">
                        <div className="main-slider-two__content">
                            <p className="main-slider-two__sub-title">WE SPEACIAL IN THE TRANSPORTATION</p>
                            <h2 className="main-slider-two__title">We Are Global <br/>
                                Logistics Provider
                            </h2>
                            <div className="main-slider-two__btn-and-video-box">
                                <div className="main-slider-two__btn-box">
                                    <Link href="about" className="main-slider-two__btn thm-btn">Discover More</Link>
                                </div>
                                <div className="main-slider-two__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="main-slider-two__video-icon">
                                            <span className="icon-play-button"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                    <h4 className="main-slider-two__video-text">Showreel</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item main-slider-two__slide-1">
                    <div className="main-slider-two__shape-1">
                        <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-2">
                        <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-3 img-bounce">
                        <img src="assets/images/shapes/main-slider-two-shape-3.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-4"></div>
                    <div className="main-slider-two__map">
                        <img src="assets/images/shapes/main-slider-two-map-1.png" alt="" className="rotate-me"/>
                    </div>
                    <div className="main-slider-two__img">
                        <img src="assets/images/resources/main-slider-two-img-1.png" alt="" className="float-bob-y"/>
                    </div>
                    <div className="container">
                        <div className="main-slider-two__content">
                            <p className="main-slider-two__sub-title">WE SPEACIAL IN THE TRANSPORTATION</p>
                            <h2 className="main-slider-two__title">We Are Global <br/>
                                Logistics Provider
                            </h2>
                            <div className="main-slider-two__btn-and-video-box">
                                <div className="main-slider-two__btn-box">
                                    <Link href="about" className="main-slider-two__btn thm-btn">Discover More</Link>
                                </div>
                                <div className="main-slider-two__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="main-slider-two__video-icon">
                                            <span className="icon-play-button"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                    <h4 className="main-slider-two__video-text">Showreel</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="item main-slider-two__slide-1">
                    <div className="main-slider-two__shape-1">
                        <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-2">
                        <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-3 img-bounce">
                        <img src="assets/images/shapes/main-slider-two-shape-3.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-4"></div>
                    <div className="main-slider-two__map">
                        <img src="assets/images/shapes/main-slider-two-map-1.png" alt="" className="rotate-me"/>
                    </div>
                    <div className="main-slider-two__img">
                        <img src="assets/images/resources/main-slider-two-img-1.png" alt="" className="float-bob-y"/>
                    </div>
                    <div className="container">
                        <div className="main-slider-two__content">
                            <p className="main-slider-two__sub-title">WE SPEACIAL IN THE TRANSPORTATION</p>
                            <h2 className="main-slider-two__title">We Are Global <br/>
                                Logistics Provider
                            </h2>
                            <div className="main-slider-two__btn-and-video-box">
                                <div className="main-slider-two__btn-box">
                                    <Link href="about" className="main-slider-two__btn thm-btn">Discover More</Link>
                                </div>
                                <div className="main-slider-two__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="main-slider-two__video-icon">
                                            <span className="icon-play-button"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                    <h4 className="main-slider-two__video-text">Showreel</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </section>
        {/*Main Slider Two End */}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />



        </>
    )
}
