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
            slidesPerView: 3,
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

        {/*Testimonial One Start */}
        <section className="testimonial-one">
            <div className="testimonial-one__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/testimonial-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="testimonial-one__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">OUR CLIENT AWESOME RIVEWS</span>
                        </div>
                        <h2 className="section-title__title">Why Customers Love to
                            <br/> Working With Us</h2>
                    </div>
                    <div className="testimonial-one__btn-box">
                        <Link href="#" className="testimonial-one__btn thm-btn">view all reviews</Link>
                    </div>
                </div>
                <div className="testimonial-one__bottom">
                    <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel">

                        {/*Testimonial One Single Start*/}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote-box">
                                    <div className="testimonial-one__quote">
                                        <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                    </div>
                                    <div className="testimonial-one__quote-2">
                                        <img src="assets/images/icon/quote-icon-2.png" alt=""/>
                                    </div>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <div className="testimonial-one__text-box-bg"
                                        style={{ backgroundImage: 'url(assets/images/shapes/testimonial-one-text-box-bg-shape.png)' }} >
                                    </div>
                                    <p className="testimonial-one__text">Pension schemes ensu security during retirement
                                        years for eligible individua. Retirement pensions provide financ security for
                                        qualifying individu</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">Hazard
                                            Williamson</Link></h3>
                                    <p className="testimonial-one__client-sub-title">Delivery Man</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial One Single End*/}
                        {/*Testimonial One Single Start*/}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote-box">
                                    <div className="testimonial-one__quote">
                                        <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                    </div>
                                    <div className="testimonial-one__quote-2">
                                        <img src="assets/images/icon/quote-icon-2.png" alt=""/>
                                    </div>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <div className="testimonial-one__text-box-bg"
                                        style={{ backgroundImage: 'url(assets/images/shapes/testimonial-one-text-box-bg-shape.png)' }} >
                                    </div>
                                    <p className="testimonial-one__text">Pension schemes ensu security during retirement
                                        years for eligible individua. Retirement pensions provide financ security for
                                        qualifying individu</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-2.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">Ononto Khan</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Developer</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial One Single End*/}
                        {/*Testimonial One Single Start*/}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote-box">
                                    <div className="testimonial-one__quote">
                                        <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                    </div>
                                    <div className="testimonial-one__quote-2">
                                        <img src="assets/images/icon/quote-icon-2.png" alt=""/>
                                    </div>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <div className="testimonial-one__text-box-bg"
                                        style={{ backgroundImage: 'url(assets/images/shapes/testimonial-one-text-box-bg-shape.png)' }} >
                                    </div>
                                    <p className="testimonial-one__text">Pension schemes ensu security during retirement
                                        years for eligible individua. Retirement pensions provide financ security for
                                        qualifying individu</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-3.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">Richard
                                            Pitterson</Link></h3>
                                    <p className="testimonial-one__client-sub-title">CEO Of Bondor</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial One Single End*/}
                        {/*Testimonial One Single Start*/}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote-box">
                                    <div className="testimonial-one__quote">
                                        <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                    </div>
                                    <div className="testimonial-one__quote-2">
                                        <img src="assets/images/icon/quote-icon-2.png" alt=""/>
                                    </div>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <div className="testimonial-one__text-box-bg"
                                        style={{ backgroundImage: 'url(assets/images/shapes/testimonial-one-text-box-bg-shape.png)' }} >
                                    </div>
                                    <p className="testimonial-one__text">Pension schemes ensu security during retirement
                                        years for eligible individua. Retirement pensions provide financ security for
                                        qualifying individu</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-4.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">Alisha
                                            Martin</Link></h3>
                                    <p className="testimonial-one__client-sub-title">SEO Of Bondor</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/*Testimonial One Single End*/}
                    </Swiper>
                </div>
            </div>
        </section>
        {/*Testimonial One End */}

            
        </>
    )
}
