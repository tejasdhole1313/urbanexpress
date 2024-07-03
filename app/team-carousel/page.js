
'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 4,
        },
    }



}
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Team Carousel">
                {/*Team Page Start */}
                <section className="team-carousel-page">
                    <div className="container">
                        <Swiper {...swiperOptions} className="blog-carousel-style thm-owl__carousel owl-theme owl-carousel carousel-dot-style">
                            {/*Team Two Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="team-details">William Hender</Link></h3>
                                        <p className="team-two__sub-title">CEO of Company</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                                <Link href="team-details"><span className="icon-twitter"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Two Single End*/}
                            {/*Team Two Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="team-details">Janes Cooper</Link></h3>
                                        <p className="team-two__sub-title">Designer</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                                <Link href="team-details"><span className="icon-twitter"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Two Single End*/}
                            {/*Team Two Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-3.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="team-details">Jonas Blueyar</Link></h3>
                                        <p className="team-two__sub-title">Manager</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                                <Link href="team-details"><span className="icon-twitter"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Two Single End*/}
                            {/*Team Two Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-4.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="team-details">Sara Jahan</Link></h3>
                                        <p className="team-two__sub-title">CEO of Company</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                                <Link href="team-details"><span className="icon-twitter"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Two Single End*/}
                            {/*Team Two Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-5.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="team-details">David Cooper</Link></h3>
                                        <p className="team-two__sub-title">Designer</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                                <Link href="team-details"><span className="icon-twitter"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Two Single End*/}
                            {/*Team Two Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-6.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="team-details">Alisha Martin</Link></h3>
                                        <p className="team-two__sub-title">Manager</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                                <Link href="team-details"><span className="icon-twitter"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Two Single End*/}
                            {/*Team Two Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="team-details">William Hender</Link></h3>
                                        <p className="team-two__sub-title">CEO of Company</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                                <Link href="team-details"><span className="icon-twitter"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Two Single End*/}
                            {/*Team Two Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="team-details">Janes Cooper</Link></h3>
                                        <p className="team-two__sub-title">Designer</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                                <Link href="team-details"><span className="icon-twitter"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Two Single End*/}
                            {/*Team Two Single Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-3.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="team-details">Jonas Blueyar</Link></h3>
                                        <p className="team-two__sub-title">Manager</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="team-details"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                                <Link href="team-details"><span className="icon-twitter"></span></Link>
                                                <Link href="team-details"><span className="icon-instagram"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Team Two Single End*/}
                        </Swiper>
                    </div>
                </section>
                {/*Team Page End */}

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
                                <Link href="contact.html" className="cta-one__btn thm-btn">GET A QUOTE</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*CTA One End */}

            </Layout>
        </>
    )
}