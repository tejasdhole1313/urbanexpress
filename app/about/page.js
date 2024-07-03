'use client'
import Link from "next/link"
import TeamSlider from "@/components/slider/TeamSlider"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import ModalVideo from 'react-modal-video'
import AwardSlider from "@/components/slider/AwardSlider"

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
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    }



}



export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About Us">
        {/*Brand One Start*/}
        <section className="brand-one">
            <div className="container">
                <AwardSlider/>
            </div>
        </section>
        {/*Brand One End*/}

        {/*About One Start*/}
        <section className="about-one">
            <div className="about-one__shape-2 float-bob-x">
                <img src="assets/images/shapes/about-one-shape-2.png" alt=""/>
            </div>
            <div className="about-one__shape-3 float-bob-y">
                <img src="assets/images/shapes/about-one-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-one__img-box">
                                <div className="about-one__img">
                                    <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-one__img-2">
                                    <img src="assets/images/resources/about-one-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-one__logo">
                                    <img src="assets/images/resources/about-one-logo.png" alt=""/>
                                </div>
                                <div className="about-one__shape-1 float-bob-y">
                                    <img src="assets/images/shapes/about-one-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <h3 className="about-one__title">We Provide Full Range
                                Global Logistic Solution</h3>
                            <p className="about-one__text">Nullam eu nibh vitae est tempor molestie id sed ex. Quisque
                                dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt
                                ipsum. Eget tincidunt</p>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-payment"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Affrodable Cost</h3>
                                        <p>Nullam eu nibh vitae est tempor molestie
                                            <br/>Quisque dignissim maximus ipsum</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-delivery-man"></span>
                                    </div>
                                    <div className="content">
                                        <h3>On Time Delivery</h3>
                                        <p>Nullam eu nibh vitae est tempor molestie
                                            <br/>Quisque dignissim maximus ipsum</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="about-one__btn-and-client-img">
                                <div className="about-one__btn-box">
                                    <Link href="about" className="thm-btn about-one__btn">EXPLORE More</Link>
                                </div>
                                <div className="about-one__client-box">
                                    <div className="about-one__client-img">
                                        <img src="assets/images/resources/about-one-client-img.jpg" alt=""/>
                                    </div>
                                    <div className="about-one__client-signature">
                                        <img src="assets/images/resources/about-one-client-signature.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End*/}

        {/*Destination One Start*/}
        <section className="destination-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="destination-one__left">
                            <div className="destination-one__shape-1"></div>
                            <div className="icon">
                                <span className="icon-reputation"></span>
                            </div>
                            <div className="destination-one__left-content">
                                <div className="destination-one__count count-box">
                                    <h3>800</h3>
                                    <span>+</span>
                                </div>
                                <p className="destination-one__left-text">Clients trust us under worlwide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="destination-one__right">
                            <div className="icon">
                                <span className="icon-location"></span>
                            </div>
                            <div className="content">
                                <h3>Tell Your Destination</h3>
                                <p>We are always ready wherever you want to go</p>
                                <Link href="contact">CONTACT US</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Destination One End*/}

        {/*Video Two Start*/}
        <section className="video-two">
            <div className="video-two__shape-1 float-bob-x">
                <img src="assets/images/shapes/video-two-shape-1.png" alt=""/>
            </div>
            <div className="video-two__shape-2 float-bob-y">
                <img src="assets/images/shapes/video-two-shape-2.png" alt=""/>
            </div>
            <div className="video-two__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/video-two-bg.jpg)' }} ></div>
            <div className="container">
                <div className="video-two__inner">
                    <div className="video-two__video-link">
                        <a onClick={() => setOpen(true)} className="video-popup">
                            <div className="video-two__video-icon">
                                <span className="icon-play-button"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/*Video Two End*/}

        {/*Why Choose Two Start */}
        <div className="why-choose-three">
            <div className="why-choose-two__shape-2 float-bob-x">
                <img src="assets/images/shapes/why-choose-two-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="why-choose-two__left">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="why-choose-two__img-1">
                                        <img src="assets/images/resources/why-choose-two-img-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="why-choose-two__img-1">
                                        <img src="assets/images/resources/why-choose-two-img-2.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="why-choose-two__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">WHY CHOOSE BONDOR</span>
                                </div>
                                <h2 className="section-title__title">What Makes Us
                                    <br/> Different From Others</h2>
                            </div>
                            <p className="why-choose-two__text">Nullam eu nibh vitae est tempor molestie id sed ex. Quisque
                                dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt
                                ipsum. Eget tincidunt</p>
                            <div className="why-choose-two__list-box">
                                <ul className="why-choose-two__list list-unstyled">
                                    <li className="wow fadeInLeft" data-wow-delay="100ms">
                                        <div className="why-choose-two__list-single">
                                            <div className="why-choose-two__shape-1"></div>
                                            <div className="icon">
                                                <span className="icon-payment"></span>
                                            </div>
                                            <h3 className="why-choose-two__list-title"><Link href="about.html">Cost
                                                    <br/> Optimisation</Link></h3>
                                            <Link href="about" className="why-choose-two__list-arrow"><span
                                                    className="icon-right-arrow"></span></Link>
                                        </div>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-delay="200ms">
                                        <div className="why-choose-two__list-single">
                                            <div className="why-choose-two__shape-1"></div>
                                            <div className="icon">
                                                <span className="icon-truck"></span>
                                            </div>
                                            <h3 className="why-choose-two__list-title"><Link href="about">Reduced
                                                    <br/> Transit Time</Link></h3>
                                            <Link href="about" className="why-choose-two__list-arrow"><span
                                                    className="icon-right-arrow"></span></Link>
                                        </div>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-delay="300ms">
                                        <div className="why-choose-two__list-single">
                                            <div className="why-choose-two__shape-1"></div>
                                            <div className="icon">
                                                <span className="icon-shield"></span>
                                            </div>
                                            <h3 className="why-choose-two__list-title"><Link href="about">Delivery
                                                    <br/> On Your Time</Link></h3>
                                            <Link href="about" className="why-choose-two__list-arrow"><span
                                                    className="icon-right-arrow"></span></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*Why Choose Two End */}

        {/*Work Steps One Start */}
        <section className="work-steps-one">
            <div className="work-steps-one__bg-shape"
                style={{ backgroundImage: 'url(assets/images/shapes/work-steps-one-bg-shape.png)' }} ></div>
            <div className="work-steps-one__shape-5 float-bob-y">
                <img src="assets/images/shapes/work-steps-one-shape-4.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">OUR EASY WORKING STEPS</span>
                    </div>
                    <h2 className="section-title__title">We Aim to Contribute Well
                        <br/> to Your Company</h2>
                </div>
                <div className="work-steps-one__inner">
                    <div className="work-steps-one__shape-4">
                        <img src="assets/images/shapes/work-steps-one-shape-3.png" alt=""/>
                    </div>
                    <ul className="work-steps-one__list list-unstyled">
                        <li>
                            <div className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-one-shape-1.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-2">
                                    <img src="assets/images/shapes/work-steps-one-shape-2.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-3">
                                    <img src="assets/images/shapes/work-steps-one-hover-shape.png" alt=""/>
                                </div>
                                <span className="icon-box"></span>
                            </div>
                            <p className="work-steps-one__text"><Link href="about">Replenishment & Picking</Link></p>
                        </li>
                        <li>
                            <div className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-one-shape-1.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-2">
                                    <img src="assets/images/shapes/work-steps-one-shape-2.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-3">
                                    <img src="assets/images/shapes/work-steps-one-hover-shape.png" alt=""/>
                                </div>
                                <span className="icon-packaging"></span>
                            </div>
                            <p className="work-steps-one__text"><Link href="about">Packaging & Distribution</Link></p>
                        </li>
                        <li>
                            <div className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-one-shape-1.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-2">
                                    <img src="assets/images/shapes/work-steps-one-shape-2.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-3">
                                    <img src="assets/images/shapes/work-steps-one-hover-shape.png" alt=""/>
                                </div>
                                <span className="icon-truck"></span>
                            </div>
                            <p className="work-steps-one__text"><Link href="about">Transportation Process</Link></p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/*Work Steps One End */}

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
                        <Link href="testimonial" className="testimonial-one__btn thm-btn">view all reviews</Link>
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

        {/*Team One Start*/}
        <section className="team-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">OUR TEAM MEMBER</span>
                    </div>
                    <h2 className="section-title__title">Our Talented Team
                        <br/> Member Behind Bondor</h2>
                </div>
                <div className="team-one__bottom">
                    <TeamSlider/>
                </div>
            </div>
        </section>
        {/*Team One End */}

        {/*CTA One Start */}
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/cta-one-bg.jpg)' }} >
                    </div>
                    <div className="cta-one__title-box">
                        <h3>Looking for the Best Transport Services?</h3>
                        <p>Try it risk free - We don’t charge cancellation fees</p>
                    </div>
                    <div className="cta-one__btn-box">
                        <Link href="contact" className="cta-one__btn thm-btn">GET A QUOTE</Link>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End */}


            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </Layout>

        
        
        </>
    )
}


