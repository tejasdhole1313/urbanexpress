'use client'
import Link from "next/link"
export default function About() {
    
    return (
        <>

        {/*About One Start*/}
        <section className="about-one">
            <div className="about-one__shape-2 float-bob-x">
                <img src="assets/images/shapes/about-one-shape-2.png" alt=""/>
            </div>
            <div className="about-one__shape-3 float-bob-y">
                <img src="assets/images/shapes/about-one-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-one__img-box">
                                <div className="about-one__img">
                                    <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-one__img-2">
                                    <img src="assets/images/resources/about-one-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-one__logo">
                                    <img src="assets/images/resources/about-one-logo.png" alt=""/>
                                </div>
                                <div className="about-one__shape-1 float-bob-y">
                                    <img src="assets/images/shapes/about-one-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <h3 className="about-one__title">We Provide Full Range
                                Global Logistic Solution</h3>
                            <p className="about-one__text">Nullam eu nibh vitae est tempor molestie id sed ex. Quisque
                                dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt
                                ipsum. Eget tincidunt</p>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-payment"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Affrodable Cost</h3>
                                        <p>Nullam eu nibh vitae est tempor molestie
                                            <br/>Quisque dignissim maximus ipsum</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-delivery-man"></span>
                                    </div>
                                    <div className="content">
                                        <h3>On Time Delivery</h3>
                                        <p>Nullam eu nibh vitae est tempor molestie
                                            <br/>Quisque dignissim maximus ipsum</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="about-one__btn-and-client-img">
                                <div className="about-one__btn-box">
                                    <Link href="about" className="thm-btn about-one__btn">EXPLORE More</Link>
                                </div>
                                <div className="about-one__client-box">
                                    <div className="about-one__client-img">
                                        <img src="assets/images/resources/about-one-client-img.jpg" alt=""/>
                                    </div>
                                    <div className="about-one__client-signature">
                                        <img src="assets/images/resources/about-one-client-signature.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End*/}
        </>
    )
}
