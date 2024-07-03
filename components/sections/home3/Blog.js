
import Link from "next/link"
export default function Blog() {
    return (
        <>
        {/*Blog Three Start*/}
        <section className="blog-three">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">OUR LATEST BLOGS</p>
                    </div>
                    <h2 className="section-title__title">Read Our Latest Blog Post</h2>
                </div>
                <div className="row">
                    {/*BLog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/news/blog-3-1.jpg" alt=""/>
                                </div>
                                <div className="blog-three__date">
                                    <p>15
                                        <br/> Mar</p>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <div className="blog-three__tag">
                                    <span>Transport</span>
                                    <span>Agency</span>
                                </div>
                                <h3 className="blog-three__title"><Link href="blog-details">What’s the Main Challange
                                        of Logistic Newbie</Link></h3>
                                <div className="blog-three__client-info">
                                    <div className="blog-three__client-img">
                                        <img src="assets/images/news/blog-three-client-img-1.jpg" alt=""/>
                                    </div>
                                    <div className="blog-three__client-content">
                                        <h3>Janes Cooper</h3>
                                        <p>August 3, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*BLog Three Single End*/}
                    {/*BLog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/news/blog-3-2.jpg" alt=""/>
                                </div>
                                <div className="blog-three__date">
                                    <p>15
                                        <br/> Mar</p>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <div className="blog-three__tag">
                                    <span>Transport</span>
                                    <span>Agency</span>
                                </div>
                                <h3 className="blog-three__title"><Link href="blog-details">We are Very Carefull for
                                        Helpding the Goods</Link></h3>
                                <div className="blog-three__client-info">
                                    <div className="blog-three__client-img">
                                        <img src="assets/images/news/blog-three-client-img-2.jpg" alt=""/>
                                    </div>
                                    <div className="blog-three__client-content">
                                        <h3>Saiful Islam</h3>
                                        <p>August 3, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*BLog Three Single End*/}
                    {/*BLog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/news/blog-3-3.jpg" alt=""/>
                                </div>
                                <div className="blog-three__date">
                                    <p>15
                                        <br/> Mar</p>
                                </div>
                            </div>
                            <div className="blog-three__content">
                                <div className="blog-three__tag">
                                    <span>Transport</span>
                                    <span>Agency</span>
                                </div>
                                <h3 className="blog-three__title"><Link href="blog-details">Why do You Love Bondor
                                        So Much Valuable</Link></h3>
                                <div className="blog-three__client-info">
                                    <div className="blog-three__client-img">
                                        <img src="assets/images/news/blog-three-client-img-3.jpg" alt=""/>
                                    </div>
                                    <div className="blog-three__client-content">
                                        <h3>Anannya Rahman</h3>
                                        <p>August 3, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*BLog Three Single End*/}
                </div>
            </div>
        </section>
        {/*Blog Three End*/}
        </>
    )
}
