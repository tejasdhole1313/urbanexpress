import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Shop">
        {/*s{/*shop Start*/}
        <section className="shop">
            <div className="container">
                <div className="shop__inner">
                    <div className="shop__showing-result">
                        <div className="shop__showing-text-box">
                            <p className="shop__showing-text">Showing 1-8 of 16 results</p>
                        </div>
                        <div className="shop__showing-sort-box">
                            <div className="shop__showing-sort">
                                <div className="select-box">
                                    <select className="wide">
                                        <option data-display="Default shorting">Default shorting</option>
                                        <option value="1">Sort by popular</option>
                                        <option value="2">Sort by Price</option>
                                        <option value="3">Sort by Ratings</option>
                                    </select>
                                </div>
                            </div>
                            <div className="shop__showing-sort">
                                <div className="select-box">
                                    <select className="wide">
                                        <option data-display="12 shop of Per Page">12 shop of Per Page</option>
                                        <option value="1">Sort by popular</option>
                                        <option value="2">Sort by Price</option>
                                        <option value="3">Sort by Ratings</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop__all">
                        <div className="row">
                            {/*shop All Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="shop__all-single">
                                    <div className="shop__all-img-box">
                                        <div className="shop__all-img">
                                            <img src="assets/images/shop/shop-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="shop__cart">
                                            <Link href="shop-details">ADD TO CART</Link>
                                        </div>
                                    </div>
                                    <div className="shop__all-content">
                                        <div className="shop__all-title-box">
                                            <h4 className="shop__all-title"><Link href="shop-details">Lather Bag</Link>
                                            </h4>
                                            <p className="shop__all-price">$325.00</p>
                                        </div>
                                        <div className="shop__all-review">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*shop All Single End*/}
                            {/*shop All Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="shop__all-single">
                                    <div className="shop__all-img-box">
                                        <div className="shop__all-img">
                                            <img src="assets/images/shop/shop-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="shop__cart">
                                            <Link href="shop-details">ADD TO CART</Link>
                                        </div>
                                    </div>
                                    <div className="shop__all-content">
                                        <div className="shop__all-title-box">
                                            <h4 className="shop__all-title"><Link href="shop-details">Eye Castal</Link>
                                            </h4>
                                            <p className="shop__all-price">$25.00</p>
                                        </div>
                                        <div className="shop__all-review">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*shop All Single End*/}
                            {/*shop All Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="shop__all-single">
                                    <div className="shop__all-img-box">
                                        <div className="shop__all-img">
                                            <img src="assets/images/shop/shop-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="shop__cart">
                                            <Link href="shop-details">ADD TO CART</Link>
                                        </div>
                                    </div>
                                    <div className="shop__all-content">
                                        <div className="shop__all-title-box">
                                            <h4 className="shop__all-title"><Link href="shop-details">High Heel Baby</Link>
                                            </h4>
                                            <p className="shop__all-price">$75.00</p>
                                        </div>
                                        <div className="shop__all-review">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*shop All Single End*/}
                            {/*shop All Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="shop__all-single">
                                    <div className="shop__all-img-box">
                                        <div className="shop__all-img">
                                            <img src="assets/images/shop/shop-1-4.jpg" alt=""/>
                                        </div>
                                        <div className="shop__cart">
                                            <Link href="shop-details">ADD TO CART</Link>
                                        </div>
                                    </div>
                                    <div className="shop__all-content">
                                        <div className="shop__all-title-box">
                                            <h4 className="shop__all-title"><Link href="shop-details">White Shoes</Link>
                                            </h4>
                                            <p className="shop__all-price">$325.00</p>
                                        </div>
                                        <div className="shop__all-review">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*shop All Single End*/}
                            {/*shop All Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                <div className="shop__all-single">
                                    <div className="shop__all-img-box">
                                        <div className="shop__all-img">
                                            <img src="assets/images/shop/shop-1-5.jpg" alt=""/>
                                        </div>
                                        <div className="shop__cart">
                                            <Link href="shop-details">ADD TO CART</Link>
                                        </div>
                                    </div>
                                    <div className="shop__all-content">
                                        <div className="shop__all-title-box">
                                            <h4 className="shop__all-title"><Link href="shop-details">Black Jacket</Link>
                                            </h4>
                                            <p className="shop__all-price">$99.00</p>
                                        </div>
                                        <div className="shop__all-review">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*shop All Single End*/}
                            {/*shop All Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                                <div className="shop__all-single">
                                    <div className="shop__all-img-box">
                                        <div className="shop__all-img">
                                            <img src="assets/images/shop/shop-1-6.jpg" alt=""/>
                                        </div>
                                        <div className="shop__cart">
                                            <Link href="shop-details">ADD TO CART</Link>
                                        </div>
                                    </div>
                                    <div className="shop__all-content">
                                        <div className="shop__all-title-box">
                                            <h4 className="shop__all-title"><Link href="shop-details">Diamond Ring</Link>
                                            </h4>
                                            <p className="shop__all-price">$3325.00</p>
                                        </div>
                                        <div className="shop__all-review">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*shop All Single End*/}
                            {/*shop All Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="700ms">
                                <div className="shop__all-single">
                                    <div className="shop__all-img-box">
                                        <div className="shop__all-img">
                                            <img src="assets/images/shop/shop-1-7.jpg" alt=""/>
                                        </div>
                                        <div className="shop__cart">
                                            <Link href="shop-details">ADD TO CART</Link>
                                        </div>
                                    </div>
                                    <div className="shop__all-content">
                                        <div className="shop__all-title-box">
                                            <h4 className="shop__all-title"><Link href="shop-details">Makeup Box</Link>
                                            </h4>
                                            <p className="shop__all-price">$85.00</p>
                                        </div>
                                        <div className="shop__all-review">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*shop All Single End*/}
                            {/*shop All Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="800ms">
                                <div className="shop__all-single">
                                    <div className="shop__all-img-box">
                                        <div className="shop__all-img">
                                            <img src="assets/images/shop/shop-1-8.jpg" alt=""/>
                                        </div>
                                        <div className="shop__cart">
                                            <Link href="shop-details">ADD TO CART</Link>
                                        </div>
                                    </div>
                                    <div className="shop__all-content">
                                        <div className="shop__all-title-box">
                                            <h4 className="shop__all-title"><Link href="shop-details">Sofa With Balish</Link>
                                            </h4>
                                            <p className="shop__all-price">$89.00</p>
                                        </div>
                                        <div className="shop__all-review">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*shop All Single End*/}
                            {/*shop All Single Start*/}
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="900ms">
                                <div className="shop__all-single">
                                    <div className="shop__all-img-box">
                                        <div className="shop__all-img">
                                            <img src="assets/images/shop/shop-1-9.jpg" alt=""/>
                                        </div>
                                        <div className="shop__cart">
                                            <Link href="shop-details">ADD TO CART</Link>
                                        </div>
                                    </div>
                                    <div className="shop__all-content">
                                        <div className="shop__all-title-box">
                                            <h4 className="shop__all-title"><Link href="shop-details">Baby Sunglass</Link>
                                            </h4>
                                            <p className="shop__all-price">$35.00</p>
                                        </div>
                                        <div className="shop__all-review">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*shop All Single End*/}
                        </div>
                    </div>
                    <div className="shop__pagination">
                        <ul className="pg-pagination list-unstyled">
                            <li className="count"><Link href="#">1</Link></li>
                            <li className="count"><Link href="#">2</Link></li>
                            <li className="count"><Link href="#">3</Link></li>
                            <li className="next">
                                <Link href="#" aria-label="Next"><i className="icon-next"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/*shop End*/}

            </Layout>
        </>
    )
}