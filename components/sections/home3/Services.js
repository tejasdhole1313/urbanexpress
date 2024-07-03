
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
export default function Services() {
    return (
        <>
        {/*Services Three Start*/}
        <section className="services-three">
            <div className="services-three__bg-color">
                <div className="services-three__shape-1 float-bob-y">
                    <img src="assets/images/shapes/services-three-shape-1.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="services-three__inner">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">OUR SERVICES</span>
                        </div>
                        <h2 className="section-title__title">Service We’re Offering</h2>
                    </div>
                    <div className="services-three__count-box">
                        <div className="services-three__count-icon">
                            <span className="icon-reputation"></span>
                        </div>
                        <div className="services-three__count-inner">
                            <div className="services-three__count count-box">
                                <span>30</span>
                                <span>+</span>
                            </div>
                            <p className="services-three__count-text">Years Of
                                <br/> Experience</p>
                        </div>
                    </div>
                    <div className="row">
                        {/*services One Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
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
                                        <h3 className="services-one__title"><Link href="shipping-freight">Ocean
                                                Freight</Link>
                                        </h3>
                                        <p className="services-one__text">Arki features minimal and stylis main theme is
                                            well
                                            crafted for logistics</p>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="shipping-freight">read More<span
                                                className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*services One Single End*/}
                        {/*services One Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
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
                                        <p className="services-one__text">Arki features minimal and stylis main theme is
                                            well
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
                        <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
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
                                        <p className="services-one__text">Arki features minimal and stylis main theme is
                                            well
                                            crafted for logistics</p>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="land-freight">read More<span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*services One Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Services Three End*/}
        </>
    )
}
