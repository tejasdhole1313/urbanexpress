
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Contact">
        {/*Contact Page Start*/}
        <section className="contact-page">
            <div className="container">
                <div className="contact-page__top-img">
                    <img src="assets/images/resources/contact-page-top-img-1.jpg" alt=""/>
                </div>
                <div className="contact-page__middle">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact-page__middle-left">
                                <h3 className="contact-page__middle-title">Get in Touch</h3>
                                <p className="contact-page__middle-text">A vast majority of the app marketers mainly concent
                                    post-launch<br/> app marketing techniques and measures while completely missing
                                    <br/>pre-launch campaign. This prevents the</p>
                                <div className="contact-page__contact-info">
                                    <h3 className="contact-page__contact-info-title">Contact Info</h3>
                                    <ul className="contact-page__contact-list list-unstyled">
                                        <li>
                                            <h4 className="contact-page__contact-list-title">Address</h4>
                                            <p>254, North City, Bulex Center, New York</p>
                                        </li>
                                        <li>
                                            <h4 className="contact-page__contact-list-title">Phone</h4>
                                            <p><Link href="tel:09354587874">09 (354) 587 874</Link><span>or</span><Link
                                                    href="tel:10698852741">10 (698) 852 741</Link></p>
                                        </li>
                                        <li>
                                            <h4 className="contact-page__contact-list-title">Email</h4>
                                            <p><Link href="mailto:info@example.com">info@example.com</Link><span>or</span><Link
                                                    href="mailto:info@example.com">info@example.com</Link></p>
                                        </li>
                                    </ul>
                                </div>
                                <Link href="#" className="contact-page__contact-link">www.example.com</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact-page__middle-right">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                    className="contact-page__google-map"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-page__bottom">
                    <div className="contact-page__form-box">
                        <h3 className="comment-one__title">Let’s Get in Touch</h3>
                        <p className="comment-one__text">Your email address will not be published. Required fields are
                            marked *</p>
                        <form action="assets/inc/sendemail.php" className="contact-page__form contact-form-validated">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="contact-page__input-box">
                                        <input type="text" placeholder="Your Name*" name="name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="contact-page__input-box">
                                        <input type="email" placeholder="Your Email*" name="email"/>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="contact-page__input-box">
                                        <input type="text" placeholder="Website*" name="email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="contact-page__input-box text-message-box">
                                        <textarea name="message" placeholder="Write Message*"></textarea>
                                    </div>
                                    <div className="contact-page__btn-box">
                                        <button type="submit" className="thm-btn contact-page__btn">Send
                                            Meassage</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="result"></div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Page End*/}

            </Layout>
        </>
    )
}