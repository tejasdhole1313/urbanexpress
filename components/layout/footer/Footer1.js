import Link from "next/link"
export default function Footer1() {
    return (
        <>
          
        {/*Site Footer Start*/}
        <footer className="site-footer">
            <div className="site-footer__shape-1 float-bob-x">
                <img src="assets/images/shapes/footer-shape-1.png" alt=""/>
            </div>
            <div className="site-footer__shape-2 float-bob-y">
                <img src="assets/images/shapes/footer-shape-2.png" alt=""/>
            </div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__logo">
                                        <Link href="/"><img src="assets/images/resources/footer-logo-1.png"
                                                alt=""/></Link>
                                    </div>
                                    <p className="footer-widget__about-text">Address 301 Princes Street, Ei className
                                        <br/> Mahall Damietta Egypt-104</p>
                                    <div className="footer-widget__emergency-call">
                                        <Link href="tel:+134353353545">+1 343 5335 3545</Link>
                                        <Link href="mailto:bondor@mail.com"
                                            className="footer-widget__emergency-mail">bondor@mail.com</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__navigation">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Navigation</h3>
                                    </div>
                                    <ul className="footer-widget__navigation-list list-unstyled">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="services">Services</Link>
                                        </li>
                                        <li>
                                            <Link href="contact">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link href="blog">Our Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__quick-link">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Quick Link</h3>
                                    </div>
                                    <ul className="footer-widget__navigation-list list-unstyled">
                                        <li>
                                            <Link href="contact">Help</Link>
                                        </li>
                                        <li>
                                            <Link href="contact">Support</Link>
                                        </li>
                                        <li>
                                            <Link href="testimonial">Clients</Link>
                                        </li>
                                        <li>
                                            <Link href="shop">Shop</Link>
                                        </li>
                                        <li>
                                            <Link href="project">Portfolio</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__column footer-widget__newsletter">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Newsletter</h3>
                                    </div>
                                    <p className="footer-widget__newsletter-text">Subscribe our newsletter to get the
                                        <br/> latest news & updates</p>
                                    <form className="footer-widget__newsletter-form">
                                        <div className="footer-widget__newsletter-input-box">
                                            <input type="email" placeholder="email@example.com" name="email"/>
                                            <button type="submit" className="footer-widget__newsletter-btn"><i
                                                    className="icon-paper-plane"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">Copyright © 2024 Bondor by <Link href="#">Codesholder.</Link> All
                            Rights Reserved</p>
                        <div className="site-footer__social">
                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                            <Link href="#"><i className="fab fa-facebook"></i></Link>
                            <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/*Site Footer End*/}

        </>
    )
}
