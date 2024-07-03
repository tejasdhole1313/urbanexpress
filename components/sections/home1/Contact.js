'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function Contact() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {/*Contact One Start */}
        <section className="contact-one">
            <div className="contact-one__shape-2">
                <img src="assets/images/shapes/contact-one-shape-2.png" alt=""/>
            </div>
            <div className="contact-one__shape-3">
                <img src="assets/images/shapes/contact-one-shape-3.png" alt=""/>
            </div>
            <div className="contact-one__shape-4">
                <img src="assets/images/shapes/contact-one-shape-4.png" alt=""/>
            </div>
            <div className="contact-one__shape-5 float-bob-x">
                <img src="assets/images/shapes/contact-one-shape-5.png" alt=""/>
            </div>
            <div className="contact-one__shape-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                <img src="assets/images/shapes/contact-one-shape-6.png" alt="" className="float-bob-x"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__left">
                            <div className="contact-one__img-box">
                                <div className="contact-one__img">
                                    <img src="assets/images/resources/contact-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="contact-one__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="contact-one__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className="contact-one__shape-1 float-bob-y">
                                    <img src="assets/images/shapes/contact-one-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__right">
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
                                                    <h3> 212</h3>
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
        {/*Contact One End */}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
