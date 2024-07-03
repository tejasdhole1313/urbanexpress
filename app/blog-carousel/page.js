
'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
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
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Carousel">
                {/*Blog One Start */}
                <section className="blog-carousel-page">
                    <div className="container">
                        <Swiper {...swiperOptions} className="blog-carousel-style thm-owl__carousel owl-theme owl-carousel carousel-dot-style">
                            {/*Blog One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/news/blog-1-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h3 className="blog-one__title"><Link href="blog-details">Fast and Reliable Shipping
                                                Guaranteey Trusted</Link></h3>
                                        <div className="blog-one__meta-and-arrow">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                                </li>
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                        Comments</Link>
                                                </li>
                                            </ul>
                                            <div className="blog-one__arrow">
                                                <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/news/blog-1-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h3 className="blog-one__title"><Link href="blog-details">Cargo Follow Through the
                                                Best Supply Your Metal</Link></h3>
                                        <div className="blog-one__meta-and-arrow">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                                </li>
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                        Comments</Link>
                                                </li>
                                            </ul>
                                            <div className="blog-one__arrow">
                                                <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/news/blog-1-3.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h3 className="blog-one__title"><Link href="blog-details">Grow Your Following by the
                                                Building Cargo Service</Link></h3>
                                        <div className="blog-one__meta-and-arrow">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                                </li>
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                        Comments</Link>
                                                </li>
                                            </ul>
                                            <div className="blog-one__arrow">
                                                <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/news/blog-1-4.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h3 className="blog-one__title"><Link href="blog-details">What’s the Main Challange
                                                of Logistic Newbie</Link></h3>
                                        <div className="blog-one__meta-and-arrow">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                                </li>
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                        Comments</Link>
                                                </li>
                                            </ul>
                                            <div className="blog-one__arrow">
                                                <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/news/blog-1-5.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h3 className="blog-one__title"><Link href="blog-details">We are Very Carefull for
                                                Helpding the Goods</Link></h3>
                                        <div className="blog-one__meta-and-arrow">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                                </li>
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                        Comments</Link>
                                                </li>
                                            </ul>
                                            <div className="blog-one__arrow">
                                                <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/news/blog-1-6.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h3 className="blog-one__title"><Link href="blog-details">Why do You Love Bondor
                                                So Much Valuable</Link></h3>
                                        <div className="blog-one__meta-and-arrow">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                                </li>
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                        Comments</Link>
                                                </li>
                                            </ul>
                                            <div className="blog-one__arrow">
                                                <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/news/blog-1-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h3 className="blog-one__title"><Link href="blog-details">Fast and Reliable Shipping
                                                Guaranteey Trusted</Link></h3>
                                        <div className="blog-one__meta-and-arrow">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                                </li>
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                        Comments</Link>
                                                </li>
                                            </ul>
                                            <div className="blog-one__arrow">
                                                <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/news/blog-1-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h3 className="blog-one__title"><Link href="blog-details">Cargo Follow Through the
                                                Best Supply Your Metal</Link></h3>
                                        <div className="blog-one__meta-and-arrow">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                                </li>
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                        Comments</Link>
                                                </li>
                                            </ul>
                                            <div className="blog-one__arrow">
                                                <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Blog One Single End*/}
                            {/*Blog One Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="blog-one__single">
                                    <div className="blog-one__img-box">
                                        <div className="blog-one__img">
                                            <img src="assets/images/news/blog-1-3.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h3 className="blog-one__title"><Link href="blog-details">Grow Your Following by the
                                                Building Cargo Service</Link></h3>
                                        <div className="blog-one__meta-and-arrow">
                                            <ul className="blog-one__meta list-unstyled">
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                                </li>
                                                <li>
                                                    <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                        Comments</Link>
                                                </li>
                                            </ul>
                                            <div className="blog-one__arrow">
                                                <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Blog One Single End*/}
                        </Swiper>
                    </div>
                </section>
                {/*Blog One End */}

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

            </Layout>
        </>
    )
}