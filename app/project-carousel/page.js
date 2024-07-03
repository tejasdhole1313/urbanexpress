
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
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Project Carousel">
                {/*Project Page Start*/}
                <section className="project-carousel-page">
                    <div className="container">
                        <Swiper {...swiperOptions} className="project-carousel-style thm-owl__carousel owl-theme owl-carousel carousel-dot-style">
                            {/*Project Page Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src="assets/images/project/project-page-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link href="project-details">Quality
                                                        Equipment</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <Link href="assets/images/project/project-1-1.jpg" className="img-popup"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Project Page End*/}
                            {/*Project Page Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src="assets/images/project/project-page-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link href="project-details">Clients
                                                        Equipment</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <Link href="assets/images/project/project-1-1.jpg" className="img-popup"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Project Page End*/}
                            {/*Project Page Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src="assets/images/project/project-page-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link href="project-details">Support
                                                        Equipment</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <Link href="assets/images/project/project-1-1.jpg" className="img-popup"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Project Page End*/}
                            {/*Project Page Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src="assets/images/project/project-page-1-4.jpg" alt=""/>
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link href="project-details">Product
                                                        Distribution</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <Link href="assets/images/project/project-1-1.jpg" className="img-popup"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Project Page End*/}
                            {/*Project Page Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src="assets/images/project/project-page-1-5.jpg" alt=""/>
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link href="project-details">Safety
                                                        Gurranted</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <Link href="assets/images/project/project-1-1.jpg" className="img-popup"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Project Page End*/}
                            {/*Project Page Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src="assets/images/project/project-page-1-6.jpg" alt=""/>
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link href="project-details">International
                                                        Shipping</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <Link href="assets/images/project/project-1-1.jpg" className="img-popup"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Project Page End*/}
                            {/*Project Page Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src="assets/images/project/project-page-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link href="project-details">Quality
                                                        Equipment</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <Link href="assets/images/project/project-1-1.jpg" className="img-popup"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Project Page End*/}
                            {/*Project Page Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src="assets/images/project/project-page-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link href="project-details">Clients
                                                        Equipment</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <Link href="assets/images/project/project-1-1.jpg" className="img-popup"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Project Page End*/}
                            {/*Project Page Start*/}
                            <SwiperSlide>
                            <div className="item">
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src="assets/images/project/project-page-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link href="project-details">Support
                                                        Equipment</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <Link href="assets/images/project/project-1-1.jpg" className="img-popup"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            {/*Project Page End*/}
                        </Swiper>
                    </div>
                </section>
                {/*Project Page End*/}

            </Layout>
        </>
    )
}