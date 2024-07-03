'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'


export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>


        {/*Video Two Start*/}
        <section className="video-two">
            <div className="video-two__shape-1 float-bob-x">
                <img src="assets/images/shapes/video-two-shape-1.png" alt=""/>
            </div>
            <div className="video-two__shape-2 float-bob-y">
                <img src="assets/images/shapes/video-two-shape-2.png" alt=""/>
            </div>
            <div className="video-two__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/video-two-bg.jpg)' }} ></div>
            <div className="container">
                <div className="video-two__inner">
                    <div className="video-two__video-link">
                        <a onClick={() => setOpen(true)} className="video-popup">
                            <div className="video-two__video-icon">
                                <span className="icon-play-button"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/*Video Two End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
