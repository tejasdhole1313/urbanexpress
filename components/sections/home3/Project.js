'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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




export default function Project() {
    return (
        <>
        

        {/*Project Three Start*/}
        <section className="project-three">
            <div className="project-three__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/project-three-bg.jpg)' }} ></div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">CHECK OUR LATEST PROJECT</span>
                    </div>
                    <h2 className="section-title__title">Project We’ve Already Done</h2>
                </div>
                <div className="row">
                    {/*Project Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="project-three__single">
                            <div className="project-three__img-box">
                                <div className="project-three__img">
                                    <img src="assets/images/project/project-3-1.jpg" alt=""/>
                                </div>
                                <div className="project-three__content">
                                    <p>Logistics</p>
                                    <h3><Link href="project-details">Product Distribution</Link></h3>
                                </div>
                                <div className="project-three__arrow-box">
                                    <Link href="project-details"><span className="icon-link"></span></Link>
                                    <Link href="assets/images/project/project-3-1.jpg" className="img-popup"><span
                                            className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project Three Single End*/}
                    {/*Project Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="project-three__single">
                            <div className="project-three__img-box">
                                <div className="project-three__img">
                                    <img src="assets/images/project/project-3-2.jpg" alt=""/>
                                </div>
                                <div className="project-three__content">
                                    <p>Logistics</p>
                                    <h3><Link href="project-details">Product Distribution</Link></h3>
                                </div>
                                <div className="project-three__arrow-box">
                                    <Link href="project-details"><span className="icon-link"></span></Link>
                                    <Link href="assets/images/project/project-3-2.jpg" className="img-popup"><span
                                            className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project Three Single End*/}
                    {/*Project Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="project-three__single">
                            <div className="project-three__img-box">
                                <div className="project-three__img">
                                    <img src="assets/images/project/project-3-3.jpg" alt=""/>
                                </div>
                                <div className="project-three__content">
                                    <p>Logistics</p>
                                    <h3><Link href="project-details">Product Distribution</Link></h3>
                                </div>
                                <div className="project-three__arrow-box">
                                    <Link href="project-details"><span className="icon-link"></span></Link>
                                    <Link href="assets/images/project/project-3-3.jpg" className="img-popup"><span
                                            className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project Three Single End*/}
                    {/*Project Three Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="project-three__single">
                            <div className="project-three__img-box">
                                <div className="project-three__img">
                                    <img src="assets/images/project/project-3-4.jpg" alt=""/>
                                </div>
                                <div className="project-three__content">
                                    <p>Logistics</p>
                                    <h3><Link href="project-details">Product Distribution</Link></h3>
                                </div>
                                <div className="project-three__arrow-box">
                                    <Link href="project-details"><span className="icon-link"></span></Link>
                                    <Link href="assets/images/project/project-3-4.jpg" className="img-popup"><span
                                            className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project Three Single End*/}
                </div>
            </div>
        </section>
        {/*Project Three End*/}
        </>
    )
}
