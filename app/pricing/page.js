'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Pricing">
                {/*Pricing One Start */}
                <section className="pricing-one">
                    <div className="pricing-one__shape-1 float-bob-y">
                        <img src="assets/images/shapes/pricing-one-shape-1.png" alt=""/>
                    </div>
                    <div className="pricing-one__shape-2 float-bob">
                        <img src="assets/images/shapes/pricing-one-shape-2.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline">OUR PRICING PLAN</span>
                            </div>
                            <h2 className="section-title__title">Our Effective and Affordable
                                <br/> Pricing Plans</h2>
                        </div>
                        <div className="row">
                            {/*Pricing One Single Start*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-shape-1 float-bob-y">
                                        <img src="assets/images/shapes/pricing-one-single-shape-1.png" alt=""/>
                                    </div>
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__price-box">
                                            <h3 className="pricing-one__price">$150<span>/ month</span></h3>
                                            <p className="pricing-one__price-text">Collaborate Professionally.</p>
                                            <div className="pricing-one__cup-and-tag">
                                                <div className="pricing-one__price-cup">
                                                    <img src="assets/images/icon/cup.png" alt=""/>
                                                </div>
                                                <div className="pricing-one__price-tag">
                                                    <span>Commercial</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing-one__points-box">
                                            <ul className="pricing-one__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Pickup and delivery</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Custom coverage</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Customer Management</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Deliver in 2-3 days</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>24 Hours Support</p>
                                                </li>
                                            </ul>
                                            <div className="pricing-one__btn-box">
                                                <Link href="pricing" className="pricing-one__btn thm-btn">CHOOSE PLAN</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Pricing One Single End*/}
                            {/*Pricing One Single Start*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-shape-1 float-bob-y">
                                        <img src="assets/images/shapes/pricing-one-single-shape-1.png" alt=""/>
                                    </div>
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__price-box">
                                            <h3 className="pricing-one__price">$250<span>/ month</span></h3>
                                            <p className="pricing-one__price-text">Collaborate Professionally.</p>
                                            <div className="pricing-one__cup-and-tag">
                                                <div className="pricing-one__price-cup">
                                                    <img src="assets/images/icon/cup.png" alt=""/>
                                                </div>
                                                <div className="pricing-one__price-tag">
                                                    <span>Commercial</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing-one__points-box">
                                            <ul className="pricing-one__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Pickup and delivery</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Custom coverage</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Customer Management</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Deliver in 2-3 days</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>24 Hours Support</p>
                                                </li>
                                            </ul>
                                            <div className="pricing-one__btn-box">
                                                <Link href="pricing" className="pricing-one__btn thm-btn">CHOOSE PLAN</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Pricing One Single End*/}
                            {/*Pricing One Single Start*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-shape-1 float-bob-y">
                                        <img src="assets/images/shapes/pricing-one-single-shape-1.png" alt=""/>
                                    </div>
                                    <div className="pricing-one__single-inner">
                                        <div className="pricing-one__price-box">
                                            <h3 className="pricing-one__price">$350<span>/ month</span></h3>
                                            <p className="pricing-one__price-text">Collaborate Professionally.</p>
                                            <div className="pricing-one__cup-and-tag">
                                                <div className="pricing-one__price-cup">
                                                    <img src="assets/images/icon/cup.png" alt=""/>
                                                </div>
                                                <div className="pricing-one__price-tag">
                                                    <span>Commercial</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing-one__points-box">
                                            <ul className="pricing-one__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Pickup and delivery</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Custom coverage</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Customer Management</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>Deliver in 2-3 days</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                    <p>24 Hours Support</p>
                                                </li>
                                            </ul>
                                            <div className="pricing-one__btn-box">
                                                <Link href="pricing" className="pricing-one__btn thm-btn">CHOOSE PLAN</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Pricing One Single End*/}
                        </div>
                    </div>
                </section>
                {/*Pricing One End */}

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
                                <Link href="contact.html" className="cta-one__btn thm-btn">GET A QUOTE</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*CTA One End */}

            </Layout>
        </>
    )
}