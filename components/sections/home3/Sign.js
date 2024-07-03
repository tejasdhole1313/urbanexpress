import Link from "next/link"


export default function Sign() {
    return (
        <>
        {/*Sign Up Start*/}
        <section className="sign-up">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="sign-up__left">
                            <div className="sign-up__contact-box">
                                <h3 className="sign-up__contact-title">Find Transport Service</h3>
                                <div className="sign-up__contact">
                                    <div className="icon">
                                        <span className="fas fa-phone-alt"></span>
                                    </div>
                                    <div className="sign-up__contact-content">
                                        <p>Call Us Free</p>
                                        <h3><Link href="tel:+99932565894561">+999 325 6589 4561</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="sign-up__right">
                            <div className="sign-up__right-inner">
                                <h3 className="sign-up__right-title">Sign Up for Email</h3>
                                <form className="sign-up__contact-form mc-form" data-url="MC_FORM_URL">
                                    <div className="sign-up__contact-form-input-box">
                                        <input type="email" placeholder="Email Address" name="EMAIL"/>
                                        <button type="submit" className="sign-up__btn thm-btn">SUBMIT NOW</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Sign Up End*/}
        </>
    )
}
