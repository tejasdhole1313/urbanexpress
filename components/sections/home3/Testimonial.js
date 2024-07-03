'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 20,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 20,
        },
    }



}


export default function Testimonial() {
    return (
        <>
        {/*Testimonial Two Start*/}
        <section className="testimonial-two">
            <div className="container">
                <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">OUR CLIENT AWESOME RIVEWS</span>
                    </div>
                    <h2 className="section-title__title">Why Customers Love to
                        <br/> Working With Us</h2>
                </div>
                <div className="testimonial-two__middle">
                    <Swiper {...swiperOptions} className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel">
                        {/*Testimonial Two Single Start*/}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-inner">
                                    <div className="testimonial-two__shape-1">
                                        <img src="assets/images/shapes/testimonial-two-shape-1.png" alt=""/>
                                    </div>
                                    <div className="testimonial-two__shape-2">
                                        <img src="assets/images/shapes/testimonial-two-shape-2.png" alt=""/>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                    <p className="testimonial-two__text">Pension schemes ensu security during retirement
                                        years
                                        for eligible individua. Retirement pensions provide fina</p>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <img src="assets/images/testimonial/testimonial-2-1.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h3><Link href="testimonial">Hazard Will</Link></h3>
                                            <p>Delivery Man</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Two Single End*/}
                        {/*Testimonial Two Single Start*/}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-inner">
                                    <div className="testimonial-two__shape-1">
                                        <img src="assets/images/shapes/testimonial-two-shape-1.png" alt=""/>
                                    </div>
                                    <div className="testimonial-two__shape-2">
                                        <img src="assets/images/shapes/testimonial-two-shape-2.png" alt=""/>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                    <p className="testimonial-two__text">Pension schemes ensu security during retirement
                                        years
                                        for eligible individua. Retirement pensions provide fina</p>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <img src="assets/images/testimonial/testimonial-2-2.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h3><Link href="testimonial">Alisha Martin</Link></h3>
                                            <p>Delivery Man</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        
                        {/*Testimonial Two Single End*/}
                        {/*Testimonial Two Single Start*/}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-inner">
                                    <div className="testimonial-two__shape-1">
                                        <img src="assets/images/shapes/testimonial-two-shape-1.png" alt=""/>
                                    </div>
                                    <div className="testimonial-two__shape-2">
                                        <img src="assets/images/shapes/testimonial-two-shape-2.png" alt=""/>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                    <p className="testimonial-two__text">Pension schemes ensu security during retirement
                                        years
                                        for eligible individua. Retirement pensions provide fina</p>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <img src="assets/images/testimonial/testimonial-2-3.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h3><Link href="testimonial">Robert Son</Link></h3>
                                            <p>Delivery Man</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Two Single End*/}
                        {/*Testimonial Two Single Start*/}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-two__single">
                                <div className="testimonial-two__single-inner">
                                    <div className="testimonial-two__shape-1">
                                        <img src="assets/images/shapes/testimonial-two-shape-1.png" alt=""/>
                                    </div>
                                    <div className="testimonial-two__shape-2">
                                        <img src="assets/images/shapes/testimonial-two-shape-2.png" alt=""/>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                    <p className="testimonial-two__text">Pension schemes ensu security during retirement
                                        years
                                        for eligible individua. Retirement pensions provide fina</p>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <img src="assets/images/testimonial/testimonial-2-4.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h3><Link href="testimonial">Saila Sara</Link></h3>
                                            <p>Delivery Man</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial Two Single End*/}
                    </Swiper>
                </div>
                <div className="testimonial-two__bottom">
                    <div className="testimonial-two__bottom-left count-box">
                        <div className="icon">
                            <span className="icon-rating"></span>
                        </div>
                        <p className="testimonial-two__bottom-text">We Have <span className="count-text" data-stop="25"
                                data-speed="1500">00</span><span>+</span> Years Of Experience For Give
                            <br/>High Quality Better Services.</p>
                    </div>
                    <div className="testimonial-two__btn-box">
                        <Link href="testimonial" className="testimonial-two__btn thm-btn">EXPLORE More</Link>
                    </div>
                </div>
            </div>
        </section>
        {/*Testimonial Two End*/}

            
        </>
    )
}
