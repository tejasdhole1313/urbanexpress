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



}

export default function Service() {
    return (
        <>

        {/*Services One Start*/}
        <section className="services-one">
            <div className="services-one__bg-shape float-bob-x">
                <img src="assets/images/shapes/services-one-bg-shape.png" alt=""/>
            </div>
            <div className="services-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/services-one-bg.jpg)' }} >
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">OUR SERVICES</span>
                    </div>
                    <h2 className="section-title__title">Logistics Speacial Services</h2>
                </div>
                <div className="row">
                    {/*services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-1.jpg" alt=""/>
                                </div>
                                <div className="services-one__icon-box">
                                    <div className="services-one__icon">
                                        <span className="icon-cruise"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><Link href="shipping-freight">Ocean Freight</Link>
                                    </h3>
                                    <p className="services-one__text">Arki features minimal and stylis main theme is well
                                        crafted for logistics</p>
                                </div>
                                <div className="services-one__read-more">
                                    <Link href="shipping-freight">read More<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*services One Single End*/}
                    {/*services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-2.jpg" alt=""/>
                                </div>
                                <div className="services-one__icon-box">
                                    <div className="services-one__icon">
                                        <span className="icon-plane"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><Link href="air-freight">Air Freight</Link>
                                    </h3>
                                    <p className="services-one__text">Arki features minimal and stylis main theme is well
                                        crafted for logistics</p>
                                </div>
                                <div className="services-one__read-more">
                                    <Link href="air-freight">read More<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*services One Single End*/}
                    {/*services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-3.jpg" alt=""/>
                                </div>
                                <div className="services-one__icon-box">
                                    <div className="services-one__icon">
                                        <span className="icon-truck"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><Link href="land-freight">Land Freight</Link>
                                    </h3>
                                    <p className="services-one__text">Arki features minimal and stylis main theme is well
                                        crafted for logistics</p>
                                </div>
                                <div className="services-one__read-more">
                                    <Link href="land-freight">read More<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*services One Single End*/}
                    {/*services One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-4.jpg" alt=""/>
                                </div>
                                <div className="services-one__icon-box">
                                    <div className="services-one__icon">
                                        <span className="icon-train"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><Link href="railway-freight">Railway Freight</Link>
                                    </h3>
                                    <p className="services-one__text">Arki features minimal and stylis main theme is well
                                        crafted for logistics</p>
                                </div>
                                <div className="services-one__read-more">
                                    <Link href="railway-freight">read More<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*services One Single End*/}
                </div>
                <p className="services-one__bottom-text">Please <Link href="services">click here</Link> to see all services
                </p>
            </div>
        </section>
        {/*Services One End*/}
        </>
    )
}
