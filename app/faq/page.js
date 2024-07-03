'use client'
import Link from "next/link"
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
export default function Faq() {
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
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Faq">
                <div>
                    {/*FAQ Page Start*/}
                    <section className="faq-page">
                        <div className="container">
                            <div className="faq-page__text-box">
                                <div className="faq-page__text-box-shape-1">
                                    <img src="assets/images/shapes/faq-page-text-box-shape-1.png" alt=""/>
                                </div>
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Our question and answer</span>
                                    </div>
                                    <h2 className="section-title__title">Frequently Asked Question
                                        <br/> & Answer Here</h2>
                                </div>
                            </div>
                            <div className="faq-page__bottom">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5">
                                        <div className="faq-page__bottom-left">
                                            <div className="faq-page__search">
                                                <form action="#" className="faq-page__search-form">
                                                    <input type="search" placeholder="Search...."/>
                                                    <button type="submit"><i className="icon-search"></i></button>
                                                </form>
                                            </div>
                                            <div className="faq-page__bottom-left-img-box">
                                                <div className="faq-page__bottom-left-img">
                                                    <img src="assets/images/resources/faq-page-bottom-left-img-1.jpg" alt=""/>
                                                </div>
                                                <h3 className="faq-page__bottom-left-img-text">Bondor Transpor
                                                    <br/> Agency</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="faq-page__bottom-right">
                                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                    <div className="accrodion-title">
                                                        <h4>How can we improve generation process?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>The main elements of a marketing strategy are your target audiance
                                                                goals and objectives and the tax you will employ to acitvely
                                                                markter to your achive the goals</p>
                                                        </div>{/* /.inner */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                    <div className="accrodion-title">
                                                        <h4>What is content marketing stratagy?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>The main elements of a marketing strategy are your target audiance
                                                                goals and objectives and the tax you will employ to acitvely
                                                                markter to your achive the goals</p>
                                                        </div>{/* /.inner */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                    <div className="accrodion-title">
                                                        <h4>What is the purpose of digital agency?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>The main elements of a marketing strategy are your target audiance
                                                                goals and objectives and the tax you will employ to acitvely
                                                                markter to your achive the goals</p>
                                                        </div>{/* /.inner */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                    <div className="accrodion-title">
                                                        <h4>Can I success on this platform experience?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>The main elements of a marketing strategy are your target audiance
                                                                goals and objectives and the tax you will employ to acitvely
                                                                markter to your achive the goals</p>
                                                        </div>{/* /.inner */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                                    <div className="accrodion-title">
                                                        <h4>Can I success on this my experience?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>The main elements of a marketing strategy are your target audiance
                                                                goals and objectives and the tax you will employ to acitvely
                                                                markter to your achive the goals</p>
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
                    {/*FAQ Page End*/}

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
                                    <Link href="contact" className="cta-one__btn thm-btn">GET A QUOTE</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*CTA One End */}
                </div>

            </Layout>
        </>
    )
}