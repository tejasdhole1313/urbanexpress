'use client'
import CounterUp from "@/components/elements/CounterUp"
import { useState } from 'react'

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
            
        {/*FAQ One Start */}
        <section className="faq-one">
            <div className="faq-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/faq-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="faq-one__left">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="faq-one__count-single">
                                        <div className="faq-one__count count-box">
                                            <h3>900</h3>
                                        </div>
                                        <p className="faq-one__count-text">Projects
                                            <br/> Completed</p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="faq-one__count-single faq-one__count-single-2">
                                        <div className="faq-one__count count-box">
                                        <h3>820</h3>
                                        </div>
                                        <p className="faq-one__count-text">Delivered
                                            <br/> on Time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="faq-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">What people ask</span>
                                </div>
                                <h2 className="section-title__title">Get Every Single Answer
                                    from Here</h2>
                            </div>
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>How can we improve the lead generation process?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>The main elements of a marketing strategy are your target audiance
                                                goals and objectives and the tax you will employ to acitvely
                                                <br/>markter to your achive the goals</p>
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
                                                <br/>markter to your achive the goals</p>
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
                                                <br/>markter to your achive the goals</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>Can I success on this platform with my experience?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>The main elements of a marketing strategy are your target audiance
                                                goals and objectives and the tax you will employ to acitvely
                                                <br/>markter to your achive the goals</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*FAQ One End */}

        </>
    )
}
