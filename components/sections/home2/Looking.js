import Link from "next/link"
export default function Looking() {
    return (
        <>
        {/*Looking Best Start */}
        <section className="looking-best">
            <div className="looking-best__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/looking-best-bg.jpg)' }} >
            </div>
            <div className="looking-best__shape-2 float-bob-y">
                <img src="assets/images/shapes/looking-best-shape-2.png" alt=""/>
            </div>
            <div className="looking-best__shape-4">
                <img src="assets/images/shapes/looking-best-shape-4.png" alt=""/>
            </div>
            <div className="looking-best__shape-3">
                <img src="assets/images/shapes/looking-best-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4">
                        <div className="looking-best__left">
                            <div className="looking-best__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/looking-best-img-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="looking-best__right">
                            <div className="looking-best__shape-1 float-bob-y">
                                <img src="assets/images/shapes/looking-best-shape-1.png" alt=""/>
                            </div>
                            <h3 className="looking-best__title">Looking for the Best
                                <br/> logistics Transport Service?</h3>
                            <div className="looking-best__btn-and-call">
                                <div className="looking-best__btn-box">
                                    <Link href="contact" className="looking-best__btn thm-btn">GET A QUOTE</Link>
                                </div>
                                <div className="looking-best__call-us">
                                    <div className="icon">
                                        <span className="fas fa-phone-alt"></span>
                                    </div>
                                    <div className="content">
                                        <span>Call Us Free</span>
                                        <p><Link href="tel:+9993256589">+999 325 6589</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Looking Best End */}
        </>
    )
}
