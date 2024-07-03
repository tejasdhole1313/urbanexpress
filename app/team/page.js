import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Team Members">
        {/*Team Page Start */}
        <section className="team-page">
            <div className="container">
                <div className="row">
                    {/*Team Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details">William Hender</Link></h3>
                                <p className="team-two__sub-title">CEO of Company</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                        <Link href="team-details"><span className="icon-twitter"></span></Link>
                                        <Link href="team-details"><span className="icon-instagram"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Two Single End*/}
                    {/*Team Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details">Janes Cooper</Link></h3>
                                <p className="team-two__sub-title">Designer</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                        <Link href="team-details"><span className="icon-twitter"></span></Link>
                                        <Link href="team-details"><span className="icon-instagram"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Two Single End*/}
                    {/*Team Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details">Jonas Blueyar</Link></h3>
                                <p className="team-two__sub-title">Manager</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                        <Link href="team-details"><span className="icon-twitter"></span></Link>
                                        <Link href="team-details"><span className="icon-instagram"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Two Single End*/}
                    {/*Team Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details">Sara Jahan</Link></h3>
                                <p className="team-two__sub-title">CEO of Company</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                        <Link href="team-details"><span className="icon-twitter"></span></Link>
                                        <Link href="team-details"><span className="icon-instagram"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Two Single End*/}
                    {/*Team Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-5.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details">David Cooper</Link></h3>
                                <p className="team-two__sub-title">Designer</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                        <Link href="team-details"><span className="icon-twitter"></span></Link>
                                        <Link href="team-details"><span className="icon-instagram"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Two Single End*/}
                    {/*Team Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-6.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="team-details">Alisha Martin</Link></h3>
                                <p className="team-two__sub-title">Manager</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="team-details"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="team-details"><span className="icon-facebook-app-symbol"></span></Link>
                                        <Link href="team-details"><span className="icon-twitter"></span></Link>
                                        <Link href="team-details"><span className="icon-instagram"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Two Single End*/}
                </div>
            </div>
        </section>
        {/*Team Page End */}

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
                        <Link href="contact.html" className="cta-one__btn thm-btn">GET A QUOTE</Link>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End */}

            </Layout>
        </>
    )
}