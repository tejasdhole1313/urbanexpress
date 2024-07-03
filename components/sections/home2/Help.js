'use client'
import Link from "next/link"
export default function Help() {
    return (
        <>
        {/* We Want Help Start */}
        <section className="we-want-help">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="we-want-help__left">
                            <div className="we-want-help__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="we-want-help__img">
                                    <img src="assets/images/resources/we-want-help-img-1.png" alt=""/>
                                </div>
                                <div className="we-want-help__shape-1 float-bob-x">
                                    <img src="assets/images/shapes/we-want-help-shape-1.png" alt=""/>
                                </div>
                                <div className="we-want-help__shape-2 float-bob-y">
                                    <img src="assets/images/shapes/we-want-help-shape-2.png" alt=""/>
                                </div>
                                <div className="we-want-help__quick-box">
                                    <div className="we-want-help__quick-icon">
                                        <span className="fas fa-check"></span>
                                    </div>
                                    <h4 className="we-want-help__quick-text">Quick, Easy and
                                        <br/> Hassle Free</h4>
                                </div>
                                <div className="we-want-help__policy">
                                    <div className="we-want-help__policy-icon">
                                        <span className="fas fa-check"></span>
                                    </div>
                                    <h4 className="we-want-help__policy-text">Save up to 50% in
                                        <br/> Our all Transport</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="we-want-help__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">WE WANT TO HELP YOU</span>
                                </div>
                                <h2 className="section-title__title">We Create Opportunity to
                                    <br/> Reach Potential</h2>
                            </div>
                            <ul className="we-want-help__list list-unstyled">
                                <li>
                                    <div className="we-want-help__count"></div>
                                    <h3>Order Management</h3>
                                </li>
                                <li>
                                    <div className="we-want-help__count"></div>
                                    <h3>Distribution & Fullfilment</h3>
                                </li>
                                <li>
                                    <div className="we-want-help__count"></div>
                                    <h3>Total Coverage & Flexibility in
                                        <br/> Exports & Imports</h3>
                                </li>
                            </ul>
                            <div className="we-want-help__btn-box">
                                <Link href="about" className="we-want-help__btn thm-btn">EXPLORE More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* We Want Help End */}


        </>
    )
}
