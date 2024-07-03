'use client'
import Link from "next/link"
export default function About() {
    return (
        <>

        {/*About Two Start */}
        <section className="about-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-two__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-two__img-box">
                                <div className="about-two__img">
                                    <img src="assets/images/resources/about-two-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-two__img-2">
                                    <img src="assets/images/resources/about-two-img-2.jpg" alt=""/>
                                    <div className="about-two__shape-1 float-bob-y">
                                        <img src="assets/images/shapes/about-two-shape-1.png" alt=""/>
                                    </div>
                                </div>
                                <div className="about-two__count-box">
                                    <p className="about-two__sub-title">People</p>
                                    <div className="about-two__count count-box">
                                        <h3>100</h3>
                                        <span>+</span>
                                    </div>
                                    <p className="about-two__count-text">Adispiscing elit, do euism.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">KNOW ABOUT BONDOR</span>
                                </div>
                                <h2 className="section-title__title">We Develop and Create
                                    <br/> Logistic Progress</h2>
                            </div>
                            <p className="about-two__text">Arki features minimal and stylish design. The theme is well
                                crafted for all the modern architect and interior design website. With Arki, it makes
                                your website look even more attractive and impressive to</p>
                            <div className="about-two__content-and-btn">
                                <div className="about-two__content-box">
                                    <div className="about-two__icon">
                                        <span className="icon-delivery-man"></span>
                                    </div>
                                    <div className="about-two__content">
                                        <h3>On Time Delivery</h3>
                                        <p>Nullam eu nibh vitae est tempor molestie
                                            <br/> Quisque dignissim maximus ipsum</p>
                                    </div>
                                </div>
                                <div className="about-two__btn-box">
                                    <Link href="about" className="about-two__btn thm-btn">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Two End */}

        </>
    )
}
