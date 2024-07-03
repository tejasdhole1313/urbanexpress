'use client' 
import Link from "next/link"
export default function Project() {

    return (
        <>

        {/*Project One Start */}
        <section className="project-one">
            <div className="project-one__bg-color"></div>
            <div className="project-one__shape-1 float-bob-y">
                <img src="assets/images/shapes/project-one-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="project-one__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">SEE OUR PORTFOLIO</span>
                        </div>
                        <h2 className="section-title__title">Explore Our Recent Work</h2>
                    </div>
                    <div className="project-one__btn-box">
                        <Link href="project" className="project-one__btn thm-btn">view all projects</Link>
                    </div>
                </div>
            </div>
            <div className="project-one__bottom">
                <div className="container">
                    <div className="row">
                        {/*Project One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="project-one__single">
                                <div className="project-one__img-box">
                                    <div className="project-one__img">
                                        <img src="assets/images/project/project-1-1.jpg" alt=""/>
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
                        {/*Project One Single End*/}
                        {/*Project One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="project-one__single">
                                <div className="project-one__img-box">
                                    <div className="project-one__img">
                                        <img src="assets/images/project/project-1-2.jpg" alt=""/>
                                    </div>
                                    <div className="project-one__content">
                                        <div className="project-one__title-box">
                                            <p className="project-one__sub-title">Logistics</p>
                                            <h3 className="project-one__title"><Link href="project-details">International
                                                    Shipping</Link></h3>
                                        </div>
                                        <div className="project-one__arrow">
                                            <Link href="assets/images/project/project-1-2.jpg" className="img-popup"><span
                                                    className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project One Single End*/}
                        {/*Project One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                            <div className="project-one__single">
                                <div className="project-one__img-box">
                                    <div className="project-one__img">
                                        <img src="assets/images/project/project-1-3.jpg" alt=""/>
                                    </div>
                                    <div className="project-one__content">
                                        <div className="project-one__title-box">
                                            <p className="project-one__sub-title">Logistics</p>
                                            <h3 className="project-one__title"><Link href="project-details">Safety
                                                    Gurranted</Link></h3>
                                        </div>
                                        <div className="project-one__arrow">
                                            <Link href="assets/images/project/project-1-3.jpg" className="img-popup"><span
                                                    className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project One Single End*/}
                        {/*Project One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                            <div className="project-one__single">
                                <div className="project-one__img-box">
                                    <div className="project-one__img">
                                        <img src="assets/images/project/project-1-4.jpg" alt=""/>
                                    </div>
                                    <div className="project-one__content">
                                        <div className="project-one__title-box">
                                            <p className="project-one__sub-title">Logistics</p>
                                            <h3 className="project-one__title"><Link href="project-details">Product
                                                    Distribution</Link></h3>
                                        </div>
                                        <div className="project-one__arrow">
                                            <Link href="assets/images/project/project-1-4.jpg" className="img-popup"><span
                                                    className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project One Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Project One End */}
            
        </>
    )
}
