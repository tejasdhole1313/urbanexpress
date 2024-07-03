import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
export default function WhyChooseUs() {
    return (
        <>

     {/*Why Choose One Start*/}
     <section className="why-choose-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-one__left">
                            <div className="why-choose-one__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/why-choose-one-img-1.png" alt="" className="float-bob-x"/>
                            </div>
                            <div className="why-choose-one__shape-1">
                                <img src="assets/images/shapes/why-choose-one-shape-1.png" alt=""/>
                            </div>
                            <div className="why-choose-one__count-box">
                                <div className="why-choose-one__count-icon">
                                    <span className="far fa-clock"></span>
                                </div>
                                <div className="why-choose-one__count-inner">
                                    <div className="why-choose-one__count count-box">
                                    <CounterUp end={24} />
                                    </div>
                                    <p className="why-choose-one__count-text">Hours Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-choose-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">WHY YOU CHOOSE US</span>
                                </div>
                                <h2 className="section-title__title">We Provide clients Best
                                    Logistics Services</h2>
                            </div>
                            <p className="why-choose-one__text">Arki features minimal and stylish design. The theme is well
                                crafted for all the modern architect and interior design website. With Arki, it makes
                                your website look even more attractive and impressive to</p>
                            <ul className="why-choose-one__progress-list list-unstyled">
                                <li>
                                    <div className="progress-levels">
                                        <div className="progress-box">
                                            <div className="inner count-box">
                                                <div className="text">Shipping</div>
                                                <div className="bar">
                                                    <div className="bar-innner">
                                                        <div className="skill-percent">
                                                        <span className="count-text">90</span>
                                                            <span className="percent">%</span>
                                                        </div>
                                                        <div className="bar-fill" data-percent="80" style={{ width: '90%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress-levels">
                                        <div className="progress-box">
                                            <div className="inner count-box">
                                                <div className="text">Managment</div>
                                                <div className="bar">
                                                    <div className="bar-innner">
                                                        <div className="skill-percent">
                                                        <span className="count-text">80</span>
                                                        </div>
                                                        <div className="bar-fill" data-percent="80" style={{ width: '80%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="why-choose-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-air-freight"></span>
                                    </div>
                                    <div className="text">
                                        <p>International
                                            <br/> Shipping</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-shield"></span>
                                    </div>
                                    <div className="text">
                                        <p>Safety
                                            <br/> Gurranted</p>
                                    </div>
                                </li>
                            </ul>
                            <p className="why-choose-one__bottom-text">Do you have any project on your mind? Call Us: <Link
                                    href="tel:+123456789">+123 456789</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Why Choose One End*/}
        </>
    )
}
