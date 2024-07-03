import Link from "next/link"
export default function Blog() {
    return (
        <>
        {/*Blog One Start */}
        <section className="blog-one blog-two">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">News & Blog</span>
                    </div>
                    <h2 className="section-title__title">Latest News from Insight</h2>
                </div>
                <div className="row">
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/news/blog-1-1.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>15
                                        <br/> Mar</p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h3 className="blog-one__title"><Link href="blog-details">Fast and Reliable Shipping
                                        Guaranteey Trusted</Link></h3>
                                <div className="blog-one__meta-and-arrow">
                                    <ul className="blog-one__meta list-unstyled">
                                        <li>
                                            <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                        </li>
                                        <li>
                                            <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                Comments</Link>
                                        </li>
                                    </ul>
                                    <div className="blog-one__arrow">
                                        <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/news/blog-1-2.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>15
                                        <br/> Mar</p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h3 className="blog-one__title"><Link href="blog-details">Cargo Follow Through the
                                        Best Supply Your Metal</Link></h3>
                                <div className="blog-one__meta-and-arrow">
                                    <ul className="blog-one__meta list-unstyled">
                                        <li>
                                            <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                        </li>
                                        <li>
                                            <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                Comments</Link>
                                        </li>
                                    </ul>
                                    <div className="blog-one__arrow">
                                        <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="600ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/news/blog-1-3.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>15
                                        <br/> Mar</p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h3 className="blog-one__title"><Link href="blog-details">Grow Your Following by the
                                        Building Cargo Service</Link></h3>
                                <div className="blog-one__meta-and-arrow">
                                    <ul className="blog-one__meta list-unstyled">
                                        <li>
                                            <Link href="blog-details"><span className="fas fa-user"></span>admin</Link>
                                        </li>
                                        <li>
                                            <Link href="blog-details"><span className="fas fa-comment"></span>0
                                                Comments</Link>
                                        </li>
                                    </ul>
                                    <div className="blog-one__arrow">
                                        <Link href="blog-details"><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                </div>
            </div>
        </section>
        {/*Blog One End */}
        </>
    )
}
