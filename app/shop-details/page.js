
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Shop Details">
                
                {/*Shop Details Start*/}
                <section className="shop-details">
                    <div className="container">
                        <div className="shop-details__top">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="shop-details__top-left">
                                        <div className="shop-details__top-img">
                                            <img src="assets/images/shop/shop-details-top-img-1.jpg" alt=""/>
                                        </div>
                                        <div className="shop-details__search">
                                            <Link href="assets/images/shop/shop-details-top-img-1.jpg" className="img-popup"><span
                                                    className="icon-search"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="shop-details__top-right">
                                        <h3 className="shop-details__title">Quality Laptop</h3>
                                        <div className="shop-details__reveiw">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <span>(25 Customer Review)</span>
                                        </div>
                                        <div className="shop-details__doller">
                                            <h3>$1999.00</h3>
                                        </div>
                                        <p className="shop-details__text">In today’s online world, a brand’s success lies in
                                            combining
                                            technological planning and social strategies to draw
                                            customers in–and keep them coming back</p>
                                        <div className="shop-details__quantity">
                                            <h3 className="shop-details__quantity-title">Size & Fit</h3>
                                            <p className="shop-details__quantity-text">The model (height 6′) is perfect for you</p>
                                            <div className="shop-details__quantity-and-btn">
                                                <div className="quantity-box">
                                                    <button type="button" className="sub"><i className="fa fa-minus"></i></button>
                                                    <input type="number" />
                                                    <button type="button" className="add"><i className="fa fa-plus"></i></button>
                                                </div>
                                                <div className="shop-details__quantity-btn-box">
                                                    <Link href="#" className="shop-details__quantity-btn thm-btn">Add to Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shop-details__category">
                                            <ul className="shop-details__category-list list-unstyled">
                                                <li>
                                                    <p><span>SKU:</span>124224</p>
                                                </li>
                                                <li>
                                                    <p><span>Category:</span>Crux Indoor Fast and Easy</p>
                                                </li>
                                                <li>
                                                    <p><span>Tag:</span>accessories, business</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shop-details__social">
                                            <span>Share:</span>
                                            <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-link"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shop-details__text-box">
                            <h3>Our Description</h3>
                            <p className="shop-details__text-box-text-1">At vero eos et accusamus et iusto odio dignissimos
                                ducimus qui blanditiis praesentium voluptatum
                                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                                provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                                dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                                provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                                dolorum fuga similique sunt in culpa qui officia deserunt</p>
                        </div>
                        <div className="shop-details__client-review-box">
                            <h3 className="shop-details__client-review-title">Client Reviews</h3>
                            <div className="shop-details__client-review">
                                <div className="shop-details__client-img">
                                    <img src="assets/images/shop/shop-details-client-img.jpg" alt=""/>
                                </div>
                                <div className="shop-details__client-content">
                                    <p><span>by David Parker / </span>March 28, 2022</p>
                                    <div className="shop-details__client-ratting">
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p className="shop-details__client-text">Elementum tempus egestas sed sed risus pretium quam
                                        vulputate dignissim. Dictum at tempor commodo ullamcorper. Sed risus pretium
                                        quam vulputate dignissim suspendisse. Habitasse platea dictumst quisque</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Shop Details End*/}

                {/*Start Review Form*/}
                <section className="review-form-one">
                    <div className="container">
                        <div className="review-form-one__inner">
                            <h3 className="review-form-one__title">Add Your Review</h3>
                            <form action="assets/inc/sendemail.php" className="review-form-one__form contact-form-validated">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="review-form-one__input-box text-message-box">
                                            <textarea name="message" placeholder="Write Your Meassage"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="review-form-one__input-box">
                                            <input type="text" placeholder="Your Name" name="name"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="review-form-one__input-box">
                                            <input type="email" placeholder="Your Email" name="email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <button type="submit" className="thm-btn review-form-one__btn">SUBMIT</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/*End Review Form*/}

            </Layout>
        </>
    )
}