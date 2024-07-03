'use client'
import Link from "next/link"
import { useState } from 'react'
import Layout from "@/components/layout/Layout"

export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
        <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Air Freight">
        {/*Services Details Start*/}
        <section className="services-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5">
                        <div className="services-details__left">
                            <div className="services-details__catagories-box">
                                <h3 className="services-details__catagories-title">Catagories</h3>
                                <ul className="services-details__catagories-list list-unstyled">
                                    <li>
                                        <Link href="railway-freight">Railway Freight<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="medical-shipping">Medical Shipping<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="land-freight">Land Freight<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="shipping-freight">Shipping Freight<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="road-transport">Road Transport<span className="icon-next"></span></Link>
                                    </li>
                                    <li className="active">
                                        <Link href="air-freight">Air Freight<span className="icon-next"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="services-details__need-help">
                                <div className="services-details__need-help-shape-1">
                                    <img src="assets/images/shapes/services-details-need-help-shape-1.png" alt=""/>
                                </div>
                                <div className="services-details__need-help-bg"
                                    style={{ backgroundImage: 'url(assets/images/backgrounds/services-details-need-help-bg.jpg)' }} >
                                </div>
                                <h3 className="services-details__need-help-title">Need Any Types
                                    <br/> of Service
                                    <br/> from us</h3>
                                <div className="services-details__need-help-btn-box">
                                    <Link href="contact" className="services-details__need-help-btn thm-btn">FIND
                                        SOLUTION</Link>
                                </div>
                            </div>
                            <div className="services-details__contact">
                                <div className="services-details__contact-icon">
                                    <span className="icon-phone-call"></span>
                                </div>
                                <div className="services-details__contact-content">
                                    <span>You can call anytime </span>
                                    <p>Free<Link href="tel:+997868765">+99 (786) 8765</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-details__right">
                            <h3 className="services-details__title-1">We Contribute
                                <br/> Well to Your Compay Future</h3>
                            <p className="services-details__text-1">We embrace holistic development and support for
                                employees with the aim of being a first-choice employer within our sectors. Through a
                                unique combination of engineering, construction and design disciplines and expertise.
                            </p>
                            <div className="services-details__img-1">
                                <img src="assets/images/services/services-details-img-2.jpg" alt=""/>
                            </div>
                            <h3 className="services-details__title-2">Air Freight</h3>
                            <p className="services-details__text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.
                                Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan
                                tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis
                                libero, vitae commodo nunc quam et ligula</p>
                            <div className="services-details__points-and-text-box">
                                <div className="services-details__points-box">
                                    <h3 className="services-details__points-title">Our Goals</h3>
                                    <ul className="services-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-check"></span>
                                            </div>
                                            <p>Aliquam accumsan et ante id</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-check"></span>
                                            </div>
                                            <p>Lorem ipsum dolor sit dgdr</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-check"></span>
                                            </div>
                                            <p>Maecenas varius tortor</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="services-details__text-box">
                                    <h3>The Challenges</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Maecenas varius
                                        tortor
                                        nibh, sit amet tempor<br/> finibus et. Aenean eu enim justo. Vestibulum</p>
                                </div>
                            </div>
                            <div className="services-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>I'm a total beginner. Can I still follow along?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case,
                                                    look for applicants who are motivated to grow and have some
                                                    transferable nibh finibus et. Aenean eu enim justo. Vestibulum
                                                    aliquam hendrerit moles accumsan</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>Which technical skills would you improve?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case,
                                                    look for applicants who are motivated to grow and have some
                                                    transferable nibh finibus et. Aenean eu enim justo. Vestibulum
                                                    aliquam hendrerit moles accumsan</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>What do Logical Drives do?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case,
                                                    look for applicants who are motivated to grow and have some
                                                    transferable nibh finibus et. Aenean eu enim justo. Vestibulum
                                                    aliquam hendrerit moles accumsan</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>What about our safety measures ?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case,
                                                    look for applicants who are motivated to grow and have some
                                                    transferable nibh finibus et. Aenean eu enim justo. Vestibulum
                                                    aliquam hendrerit moles accumsan</p>
                                            </div>{/* /.inner */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Services Details End*/}

            </Layout>
        </>
    )
}