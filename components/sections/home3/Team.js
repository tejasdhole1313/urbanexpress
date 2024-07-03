import Link from "next/link"


export default function Team() {
    return (
        <>
        {/*Team Two Start */}
        <section className="team-two">
            <div className="team-two__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/team-two-bg.jpg)' }} ></div>
            <div className="team-two__shape-1 float-bob-y">
                <img src="assets/images/shapes/team-two-shape-1.png" alt=""/>
            </div>
            <div className="team-two__shape-2 float-bob-x">
                <img src="assets/images/shapes/team-two-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">OUR TEAM MEMBER</span>
                    </div>
                    <h2 className="section-title__title">Our Talented Team
                        <br/> Member Behind Bondor</h2>
                </div>
                <div className="row">
                    {/*Team Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
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
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
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
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
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
                </div>
            </div>
        </section>
        {/*Team Two End */}

        </>
    )
}
