import Link from "next/link"
export default function Work() {
    return (
        <>
        {/*Work Steps One Start */}
        <section className="work-steps-one work-steps-two">
            <div className="work-steps-one__bg-shape"
                style={{ backgroundImage: 'url(assets/images/backgrounds/work-steps-two-bg.jpg)' }} ></div>
            <div className="work-steps-one__shape-5 float-bob-y">
                <img src="assets/images/shapes/work-steps-two-shape-5.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">OUR EASY WORKING STEPS</span>
                    </div>
                    <h2 className="section-title__title">We Aim to Contribute Well
                        <br/> to Your Company</h2>
                </div>
                <div className="work-steps-one__inner">
                    <div className="work-steps-one__shape-4">
                        <img src="assets/images/shapes/work-steps-two-shape-4.png" alt=""/>
                    </div>
                    <ul className="work-steps-one__list list-unstyled">
                        <li>
                            <div className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-two-shape-1.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-2">
                                    <img src="assets/images/shapes/work-steps-two-shape-2.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-3">
                                    <img src="assets/images/shapes/work-steps-two-hover-shape.png" alt=""/>
                                </div>
                                <span className="icon-box"></span>
                            </div>
                            <p className="work-steps-one__text"><Link href="about">Replenishment & Picking</Link></p>
                        </li>
                        <li>
                            <div className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-two-shape-1.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-2">
                                    <img src="assets/images/shapes/work-steps-two-shape-2.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-3">
                                    <img src="assets/images/shapes/work-steps-two-hover-shape.png" alt=""/>
                                </div>
                                <span className="icon-packaging"></span>
                            </div>
                            <p className="work-steps-one__text"><Link href="about">Packaging & Distribution</Link></p>
                        </li>
                        <li>
                            <div className="work-steps-one__icon">
                                <div className="work-steps-one__shape-1">
                                    <img src="assets/images/shapes/work-steps-two-shape-1.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-2">
                                    <img src="assets/images/shapes/work-steps-two-shape-2.png" alt=""/>
                                </div>
                                <div className="work-steps-one__shape-3">
                                    <img src="assets/images/shapes/work-steps-two-hover-shape.png" alt=""/>
                                </div>
                                <span className="icon-truck"></span>
                            </div>
                            <p className="work-steps-one__text"><Link href="about">Transportation Process</Link></p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/*Work Steps One End */}
        </>
    )
}
