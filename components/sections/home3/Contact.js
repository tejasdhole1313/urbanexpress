
export default function Contact() {
    return (
        <>
        {/*Contact Two Start*/}
        <section className="contact-two">
            <div className="contact-two__bg-color"></div>
            <div className="contact-two__bg-shape"
                style={{ backgroundImage: 'url(assets/images/shapes/contact-two-shape-1.png)' }} ></div>
            <div className="contact-two__shape-2 float-bob-x">
                <img src="assets/images/shapes/contact-two-shape-2.png" alt=""/>
            </div>
            <div className="contact-two__shape-3 float-bob-y">
                <img src="assets/images/shapes/contact-two-shape-3.png" alt=""/>
            </div>
            <div className="contact-two__shape-4 img-bounce">
                <img src="assets/images/shapes/contact-two-shape-4.png" alt=""/>
            </div>
            <div className="contact-two__img wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <img src="assets/images/resources/contact-two-img-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-two__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">CONTACT WITHOUT HESITATION</span>
                                </div>
                                <h2 className="section-title__title">We Have a Wide
                                    <br/> Range Logistic Solutions</h2>
                            </div>
                            <div className="contact-two__points-and-progress-bar">
                                <ul className="contact-two__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <p>24 Hours Support</p>
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
                                        <p>Customer Management</p>
                                    </li>
                                </ul>
                                <div className="contact-two__progress-single">
                                    <div className="contact-two__progress-box">
                                        <div className="circle-progress"
                                            data-options='{ "value": 0.8,"thickness": 4,"emptyFill": "#f5f5f8","lineCap": "square", "size": 100, "fill": { "color": "#ca1f26" } }'>
                                        </div>{/* /.circle-progress */}
                                        <div className="contact-two__pack">
                                            <p>95%</p>
                                        </div>
                                    </div>
                                    <div className="contact-two__progress-content">
                                        <p>Supper
                                            <br/> Fast Delivery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__right wow slideInRight" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="contact-one__content">
                                <p className="contact-one__tagline">GET FREE QUOTE</p>
                                <h2 className="contact-one__title">Request a Quote</h2>
                                <form className="contact-one__form">
                                    <div className="contact-one__content-box">
                                        <div className="contact-one__input-box">
                                            <input type="text" placeholder="Your Name" name="name"/>
                                        </div>
                                        <div className="contact-one__input-box">
                                            <input type="email" placeholder="Email Address" name="email"/>
                                        </div>
                                        <div className="contact-one__input-box">
                                            <input type="email" placeholder="Phone Number" name="email"/>
                                        </div>
                                        <div className="contact-one__input-box">
                                            <input type="email" placeholder="Property Types" name="email"/>
                                        </div>
                                    </div>
                                    <div className="contact-one__progress">
                                        <div className="contact-one__progress-single">
                                            <h4 className="contact-one__progress-title">DIST (Miles):</h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="70%" style={{ width: '70%' }}>
                                                    <div className="count-text"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-one__content-bottom">
                                        <button type="submit" className="thm-btn contact-one__btn">GET YOUR QUOTE</button>
                                        <div className="contact-one__content-bottom-text-box">
                                            <div className="contact-one__count-box">
                                                <div className="contact-one__count count-box">
                                                    <h3>212</h3>
                                                    <span>+</span>
                                                </div>
                                                <p>Reviews</p>
                                            </div>
                                            <div className="contact-one__ratting">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Two End*/}
        </>
    )
}
