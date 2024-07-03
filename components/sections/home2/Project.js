'use client'
import Link from "next/link"
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
export default function Projects() {
   
    return (
        <>
        {/* Project Two Start */}
        <section className="project-two">
            <div className="project-two__top">
                <div className="container">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">KNOW ABOUT BONDOR</span>
                        </div>
                        <h2 className="section-title__title">We Develop and Create
                            <br/> Logistic Progress</h2>
                    </div>
                </div>
            </div>
            <div className="project-two__bottom">
                <div className="container">
                    <div className="project-two__carousel-container">
                        <Swiper {...swiperOptions} className="project-two__carousel owl-carousel owl-theme thm-owl__carousel project-style1-carousel owl-dot-style1">
                            
                            {/*Portfolio Two Single Start*/}
                            <SwiperSlide>
                            <div className="project-two__single-box">
                                <ul className="project-two__box list-unstyled">
                                    <li>
                                        <div className="project-two__box-content">
                                            <div className="single-project-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/project-2-1.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="project-two__box-content-inner-icon">
                                                <Link href="assets/images/project/project-2-1.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="project-two__box-content-inner">
                                                <div className="project-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="project-details">Speacial Transport</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-two__box-content">
                                            <div className="single-project-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/project-2-2.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="project-two__box-content-inner-icon">
                                                <Link href="assets/images/project/project-2-2.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="project-two__box-content-inner">
                                                <div className="project-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="project-details">Speacial Transport</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-two__box-content">
                                            <div className="single-project-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/project-2-3.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="project-two__box-content-inner-icon">
                                                <Link href="assets/images/project/project-2-3.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="project-two__box-content-inner">
                                                <div className="project-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="project-details">Speacial Transport</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            </SwiperSlide>
                            {/*Portfolio Two Single End*/}
                            {/*Portfolio Two Single Start*/}
                            <SwiperSlide>
                            <div className="project-two__single-box">
                                <ul className="project-two__box list-unstyled">
                                    <li>
                                        <div className="project-two__box-content">
                                            <div className="single-project-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/project-2-1.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="project-two__box-content-inner-icon">
                                                <Link href="assets/images/project/project-2-1.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="project-two__box-content-inner">
                                                <div className="project-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="project-details">Speacial Transport</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-two__box-content">
                                            <div className="single-project-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/project-2-2.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="project-two__box-content-inner-icon">
                                                <Link href="assets/images/project/project-2-2.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="project-two__box-content-inner">
                                                <div className="project-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="project-details">Speacial Transport</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-two__box-content">
                                            <div className="single-project-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/project-2-3.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="project-two__box-content-inner-icon">
                                                <Link href="assets/images/project/project-2-3.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="project-two__box-content-inner">
                                                <div className="project-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="project-details">Speacial Transport</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            </SwiperSlide>
                            {/*Portfolio Two Single End*/}
                            {/*Portfolio Two Single Start*/}
                            <SwiperSlide>
                            <div className="project-two__single-box">
                                <ul className="project-two__box list-unstyled">
                                    <li>
                                        <div className="project-two__box-content">
                                            <div className="single-project-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/project-2-1.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="project-two__box-content-inner-icon">
                                                <Link href="assets/images/project/project-2-1.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="project-two__box-content-inner">
                                                <div className="project-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="project-details">Speacial Transport</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-two__box-content">
                                            <div className="single-project-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/project-2-2.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="project-two__box-content-inner-icon">
                                                <Link href="assets/images/project/project-2-2.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="project-two__box-content-inner">
                                                <div className="project-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="project-details">Speacial Transport</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="project-two__box-content">
                                            <div className="single-project-two__bg"
                                                style={{ backgroundImage: 'url(assets/images/project/project-2-3.jpg)' }} >
                                            </div>
                                            <div className="img-holder-img-bg"></div>
                                            <div className="project-two__box-content-inner-icon">
                                                <Link href="assets/images/project/project-2-3.jpg" className="img-popup"><i
                                                        className="icon-next"></i></Link>
                                            </div>
                                            <div className="project-two__box-content-inner">
                                                <div className="project-two__box-content-inner-wrapper">
                                                    <p>San Fransisco </p>
                                                    <h4><Link href="project-details">Speacial Transport</Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            </SwiperSlide>
                            {/*Portfolio Two Single End*/}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        {/* Project Two End */}
        </>
    )
}
