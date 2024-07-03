'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Pricing() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            
        {/*Video One Start */}
        <section className="video-one">
            <div className="video-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/video-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="video-one__inner">
                    <div className="video-one__inner-bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/video-one-inner-bg.jpg)' }} ></div>
                    <div className="video-one__shape-2 float-bob-y">
                        <img src="assets/images/shapes/video-one-shape-2.png" alt=""/>
                    </div>
                    <h3 className="video-one__title">We Are The Leader of
                        <br/> Transportation</h3>
                    <div className="video-one__video-link">
                        <div className="video-one__shape-1 float-bob-x">
                            <img src="assets/images/shapes/video-one-shape-1.png" alt=""/>
                        </div>
                        <a onClick={() => setOpen(true)} className="video-popup">
                            <div className="video-one__video-icon">
                                <span className="icon-play-button"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/*Video One End */}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
