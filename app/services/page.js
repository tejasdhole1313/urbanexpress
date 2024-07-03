import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our services">
        {/*Services Page Start*/}
        <section className="services-page">
            <div className="container">
                <div className="row">
                    {/*services One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
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
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
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
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
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
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
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
                    {/*services One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-5.jpg" alt=""/>
                                </div>
                                <div className="services-one__icon-box">
                                    <div className="services-one__icon">
                                        <span className="icon-data-warehouse"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><Link href="medical-shipping">Warehouse</Link>
                                    </h3>
                                    <p className="services-one__text">Arki features minimal and stylis main theme is well
                                        crafted for logistics</p>
                                </div>
                                <div className="services-one__read-more">
                                    <Link href="medical-shipping">read More<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*services One Single End*/}
                    {/*services One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-6.jpg" alt=""/>
                                </div>
                                <div className="services-one__icon-box">
                                    <div className="services-one__icon">
                                        <span className="icon-train"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><Link href="road-transport">Others Solution</Link>
                                    </h3>
                                    <p className="services-one__text">Arki features minimal and stylis main theme is well
                                        crafted for logistics</p>
                                </div>
                                <div className="services-one__read-more">
                                    <Link href="road-transport">read More<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*services One Single End*/}
                </div>
            </div>
        </section>
        {/*Services Page End*/}

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