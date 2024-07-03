'use client'
import Link from "next/link"
export default function Whychoose() {
    
    return (
        <>

        {/*Why Choose Two Start */}
        <div className="why-choose-two">
            <div className="why-choose-two__shape-2 float-bob-x">
                <img src="assets/images/shapes/why-choose-two-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="why-choose-two__left">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="why-choose-two__img-1">
                                        <img src="assets/images/resources/why-choose-two-img-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="why-choose-two__img-1">
                                        <img src="assets/images/resources/why-choose-two-img-2.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="why-choose-two__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">WHY CHOOSE BONDOR</span>
                                </div>
                                <h2 className="section-title__title">What Makes Us
                                    <br/> Different From Others</h2>
                            </div>
                            <p className="why-choose-two__text">Nullam eu nibh vitae est tempor molestie id sed ex. Quisque
                                dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt
                                ipsum. Eget tincidunt</p>
                            <div className="why-choose-two__list-box">
                                <ul className="why-choose-two__list list-unstyled">
                                    <li className="wow fadeInLeft" data-wow-delay="100ms">
                                        <div className="why-choose-two__list-single">
                                            <div className="why-choose-two__shape-1"></div>
                                            <div className="icon">
                                                <span className="icon-payment"></span>
                                            </div>
                                            <h3 className="why-choose-two__list-title"><Link href="about">Cost
                                                    <br/> Optimisation</Link></h3>
                                            <Link href="about" className="why-choose-two__list-arrow"><span
                                                    className="icon-right-arrow"></span></Link>
                                        </div>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-delay="200ms">
                                        <div className="why-choose-two__list-single">
                                            <div className="why-choose-two__shape-1"></div>
                                            <div className="icon">
                                                <span className="icon-truck"></span>
                                            </div>
                                            <h3 className="why-choose-two__list-title"><Link href="about">Reduced
                                                    <br/> Transit Time</Link></h3>
                                            <Link href="about" className="why-choose-two__list-arrow"><span
                                                    className="icon-right-arrow"></span></Link>
                                        </div>
                                    </li>
                                    <li className="wow fadeInLeft" data-wow-delay="300ms">
                                        <div className="why-choose-two__list-single">
                                            <div className="why-choose-two__shape-1"></div>
                                            <div className="icon">
                                                <span className="icon-shield"></span>
                                            </div>
                                            <h3 className="why-choose-two__list-title"><Link href="about">Delivery
                                                    <br/> On Your Time</Link></h3>
                                            <Link href="about" className="why-choose-two__list-arrow"><span
                                                    className="icon-right-arrow"></span></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*Why Choose Two End */}
        </>
    )
}
