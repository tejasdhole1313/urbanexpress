import Link from "next/link"


export default function Services() {
    return (
        <>
        {/*Services Two Start */}
        <section className="services-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-two__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">OUR SERVICES</span>
                                </div>
                                <h2 className="section-title__title">Popular Logistics
                                    <br/> Services</h2>
                            </div>
                            <p className="services-two__text">Nullam eu nibh vitae est tempor molestie tronisex
                                Quisque dignissim maximus ipsum prenures
                                centerale nullam kundra srinivas</p>
                            <div className="services-two__btn-box">
                                <Link href="services" className="services-two__btn thm-btn">EXPLORE More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="services-two__right">
                            <div className="services-two__shape-2 float-bob-y">
                                <img src="assets/images/shapes/services-two-shape-2.png" alt=""/>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4"></div>
                                {/*Services Two Single Start*/}
                                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                                    <div className="services-two__single">
                                        <div className="services-two__shape-1">
                                            <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
                                        </div>
                                        <div className="services-two__icon">
                                            <span className="icon-truck"></span>
                                        </div>
                                        <h3 className="services-two__title"><Link href="road-transport">Road Freight</Link>
                                        </h3>
                                    </div>
                                </div>
                                {/*Services Two Single End*/}
                                {/*Services Two Single Start*/}
                                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="services-two__single">
                                        <div className="services-two__shape-1">
                                            <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
                                        </div>
                                        <div className="services-two__icon">
                                            <span className="icon-cruise"></span>
                                        </div>
                                        <h3 className="services-two__title"><Link href="shipping-freight">Ocean
                                                Freight</Link>
                                        </h3>
                                    </div>
                                </div>
                                {/*Services Two Single End*/}
                                {/*Services Two Single Start*/}
                                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="services-two__single">
                                        <div className="services-two__shape-1">
                                            <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
                                        </div>
                                        <div className="services-two__icon">
                                            <span className="icon-data-warehouse"></span>
                                        </div>
                                        <h3 className="services-two__title"><Link href="land-freight">Warehouse</Link>
                                        </h3>
                                    </div>
                                </div>
                                {/*Services Two Single End*/}
                                {/*Services Two Single Start*/}
                                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="services-two__single">
                                        <div className="services-two__shape-1">
                                            <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
                                        </div>
                                        <div className="services-two__icon">
                                            <span className="icon-train"></span>
                                        </div>
                                        <h3 className="services-two__title"><Link href="railway-freight">Railway
                                                Freight</Link>
                                        </h3>
                                    </div>
                                </div>
                                {/*Services Two Single End*/}
                                {/*Services Two Single Start*/}
                                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="500ms">
                                    <div className="services-two__single">
                                        <div className="services-two__shape-1">
                                            <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
                                        </div>
                                        <div className="services-two__icon">
                                            <span className="icon-plane"></span>
                                        </div>
                                        <h3 className="services-two__title"><Link href="air-freight">Air Freight</Link>
                                        </h3>
                                    </div>
                                </div>
                                {/*Services Two Single End*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Services Two End */}
        </>
    )
}
