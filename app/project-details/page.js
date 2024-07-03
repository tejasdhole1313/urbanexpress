import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Project Details">
        {/*Project Details Start*/}
        <section className="project-details">
            <div className="container">
                <div className="project-details__inner">
                    <div className="project-details__img-box">
                        <div className="project-details__img">
                            <img src="assets/images/project/project-details-img-1.jpg" alt=""/>
                        </div>
                        <div className="project-details__catagory">
                            <ul className="project-details__catagory-list list-unstyled">
                                <li>
                                    <span>published:</span>
                                    <h4>April 20, 2023</h4>
                                </li>
                                <li>
                                    <span>CATAGORY:</span>
                                    <h4>Logistic/Transport</h4>
                                </li>
                                <li>
                                    <span>client:</span>
                                    <h4>NSSTHEME</h4>
                                </li>
                            </ul>
                            <ul className="project-details__social list-unstyled">
                                <li><Link href="#"><span className="icon-facebook-app-symbol"></span></Link></li>
                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                <li><Link href="#"><span className="icon-link"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <h3 className="project-details__title-1">Futuristic Logistic and Transport Service</h3>
                    <p className="project-details__text-1">With worldwide annual spend on digital advertising surpassing
                        $325 billion, it’s no surprise that different approaches to online marketing are becoming
                        available. One of these new approache marketing or digital performance marketing. Keep reading
                        to learn all about performance marketing, from how it works to how it compares to digital
                        marketing. Plus, get insight into the benefits and risks of performance marketing and how it can
                        affect your company’s long-term success and profitability. Performance marketing is an approach
                        to digital marketing or advertising where businesses only pay when a specific result occurs.
                        This result could be a new lead, sale, or other outcome agreed upon by the advertiser and
                        business. Performance marketing involves channels such as affiliate marketing, online</p>
                    <p className="project-details__text-2">The main thing that separates performance marketing from other
                        types of marketing is the way businesses pay for their campaigns. Rather than paying up front or
                        by month, advertisers pay when a specific action takes place. You might enlist a marketing
                        company’s help to bring your branding to more individuals by having these marketers promote your
                        business to prospective customers. The hope is that users will complete a form to learn more
                        about your company </p>
                    <div className="project-details__tag-and-share">
                        <div className="project-details__tag">
                            <Link href="#">Trasportation</Link>
                            <Link href="#">Digital</Link>
                            <Link href="#">Tech</Link>
                        </div>
                        <div className="project-details__share">
                            <Link href="#"><span className="icon-share"></span></Link>
                        </div>
                    </div>
                    <div className="project-details__pagination-box">
                        <div className="project-details__pagination-single">
                            <div className="project-details__arrow">
                                <Link href="#"><span className="icon-next"></span></Link>
                            </div>
                            <div className="project-details__next-content">
                                <p className="project-details__pagination-sub-title">Previous</p>
                                <Link href="#" aria-label="Previous">
                                    <span className="project-details__pagination-title">Logistic Solution</span>
                                </Link>
                            </div>
                        </div>
                        <div className="project-details__pagination-single project-details__pagination-single-two">
                            <div className="project-details__previous-content">
                                <p className="project-details__pagination-sub-title">Next</p>
                                <Link href="#" aria-label="Next">
                                    <span className="project-details__pagination-title">Product Distribution</span>
                                </Link>
                            </div>
                            <div className="project-details__arrow">
                                <Link href="#"><span className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Project Details End*/}

        {/*Related Projects Start*/}
        <section className="related-project">
            <div className="container">
                <h3 className="related-project__title">Our Related Projects</h3>
                <div className="row">
                    {/*Project One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-1.jpg" alt=""/>
                                </div>
                                <div className="project-one__content">
                                    <div className="project-one__title-box">
                                        <p className="project-one__sub-title">Logistics</p>
                                        <h3 className="project-one__title"><Link href="project-details">Quality
                                                Equipment</Link></h3>
                                    </div>
                                    <div className="project-one__arrow">
                                        <Link href="assets/images/project/project-1-1.jpg" className="img-popup"><span
                                                className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-2.jpg" alt=""/>
                                </div>
                                <div className="project-one__content">
                                    <div className="project-one__title-box">
                                        <p className="project-one__sub-title">Logistics</p>
                                        <h3 className="project-one__title"><Link href="project-details">Product
                                                Distribution</Link></h3>
                                    </div>
                                    <div className="project-one__arrow">
                                        <Link href="assets/images/project/project-1-2.jpg" className="img-popup"><span
                                                className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-3.jpg" alt=""/>
                                </div>
                                <div className="project-one__content">
                                    <div className="project-one__title-box">
                                        <p className="project-one__sub-title">Logistics</p>
                                        <h3 className="project-one__title"><Link href="project-details">Safety
                                                Gurranted</Link></h3>
                                    </div>
                                    <div className="project-one__arrow">
                                        <Link href="assets/images/project/project-1-3.jpg" className="img-popup"><span
                                                className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                </div>
            </div>
        </section>
        {/*Related Projects End*/}

            </Layout>
        </>
    )
}