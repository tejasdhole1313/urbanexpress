import Link from "next/link"

export default function Footer3() {
    return (
        <>
        {/*Site Footer Start*/}
        <footer className="site-footer site-footer-two">
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
                                <div className="footer-widget__column footer-widget__post">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Newsletter</h3>
                                    </div>
                                    <ul className="footer-widget__post-list list-unstyled">
                                        <li>
                                            <div className="footer-widget__post-img">
                                                <img src="assets/images/news/footer-widget-post-img-1.jpg" alt=""/>
                                                <div className="footer-widget__post-link">
                                                    <Link href="blog-details"><span className="icon-link"></span></Link>
                                                </div>
                                            </div>
                                            <div className="footer-widget__post-content">
                                                <span>21.08.2023</span>
                                                <h3><Link href="blog-details">We ensures you the best
                                                        <br/> quality services</Link></h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-widget__post-img">
                                                <img src="assets/images/news/footer-widget-post-img-2.jpg" alt=""/>
                                                <div className="footer-widget__post-link">
                                                    <Link href="blog-details"><span className="icon-link"></span></Link>
                                                </div>
                                            </div>
                                            <div className="footer-widget__post-content">
                                                <span>21.08.2023</span>
                                                <h3><Link href="blog-details">Manufacturing research in
                                                        <br/> Dublin and regions</Link></h3>
                                            </div>
                                        </li>
                                    </ul>
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
