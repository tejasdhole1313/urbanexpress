import Link from "next/link"
export default function About() {
    return (
        <>
        {/*About Three Start*/}
        <section className="about-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-three__left wow fadeInLeft" data-wow-delay="100ms">
                            <div className="about-three__img-box">
                                <div className="about-three__shape-1"></div>
                                <div className="about-three__shape-2 float-bob-x">
                                    <img src="assets/images/shapes/about-three-shape-2.png" alt=""/>
                                </div>
                                <div className="about-three__img">
                                    <img src="assets/images/resources/about-three-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-three__img-2">
                                    <img src="assets/images/resources/about-three-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-three__count-box">
                                    <div className="about-three__client-img">
                                        <img src="assets/images/resources/about-three-client-img.jpg" alt=""/>
                                    </div>
                                    <div className="about-three__count-inner">
                                        <div className="about-three__count count-box">
                                        <h3>4.2</h3>
                                            <span>K</span>
                                        </div>
                                        <p className="about-three__count-text">Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-three__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">KNOW ABOUT OUR TRANSPORT</span>
                                </div>
                                <h2 className="section-title__title">We Guarantee Fast & Safe
                                    <br/> Transport for You</h2>
                            </div>
                            <p className="about-three__text">Arki features minimal and stylish design. The theme is well
                                crafted for all the modern architect and interior design website. With Arki, it makes
                                your website look even more attractive and impressive to</p>
                            <ul className="about-three__points list-unstyled">
                                <li>
                                    <div className="about-three__points-single">
                                        <div className="about-three__points-icon">
                                            <span className="icon-payment"></span>
                                        </div>
                                        <h3 className="about-three__points-title">Affrodable
                                            <br/> Cost</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-three__points-single">
                                        <div className="about-three__points-icon">
                                            <span className="icon-delivery-man"></span>
                                        </div>
                                        <h3 className="about-three__points-title">On Time
                                            <br/> Delivery</h3>
                                    </div>
                                </li>
                            </ul>
                            <p className="about-three__text-2">Duis aute irure dolor in reprehenderit in velit
                                esse cillum dolore eu nulla pariatur. </p>
                            <div className="about-three__btn-and-contact">
                                <div className="about-three__btn-box">
                                    <Link href="about" className="about-three__btn thm-btn">Discover More</Link>
                                </div>
                                <div className="about-three__contact-box">
                                    <div className="icon">
                                        <span className="fas fa-phone-alt"></span>
                                    </div>
                                    <div className="content">
                                        <p>Call Us Free</p>
                                        <h3><Link href="tel:+9993256589">+999 325 6589</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Three End*/}
        </>
    )
}
