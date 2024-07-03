import CounterUp from "@/components/elements/CounterUp"


export default function Counter() {
    return (
        <> 
        {/*Counter Two Start */}
        <section className="counter-two">
            <div className="container">
                <div className="row">
                    {/*Counter Two Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="counter-two__single">
                            <div className="counter-two__icon">
                                <span className="icon-world-wide-web"></span>
                            </div>
                            <div className="counter-two__content">
                                <div className="counter-two__count count-box">
                                <CounterUp end={250} />
                                    <span>+</span>
                                </div>
                                <p className="counter-two__count-text">Worldwide Branches</p>
                            </div>
                        </div>
                    </div>
                    {/*Counter Two Single End*/}
                    {/*Counter Two Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="counter-two__single">
                            <div className="counter-two__icon">
                                <span className="icon-user-avatar"></span>
                            </div>
                            <div className="counter-two__content">
                                <div className="counter-two__count count-box">
                                <CounterUp end={20} />
                                    <span>k</span>
                                </div>
                                <p className="counter-two__count-text">Total Clients in World</p>
                            </div>
                        </div>
                    </div>
                    {/*Counter Two Single End*/}
                    {/*Counter Two Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="counter-two__single">
                            <div className="counter-two__icon">
                                <span className="icon-rating"></span>
                            </div>
                            <div className="counter-two__content">
                                <div className="counter-two__count count-box">
                                <CounterUp end={2.56} />
                                    <span>k</span>
                                </div>
                                <p className="counter-two__count-text">Satisfied Customers</p>
                            </div>
                        </div>
                    </div>
                    {/*Counter Two Single End*/}
                    {/*Counter Two Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="counter-two__single">
                            <div className="counter-two__icon">
                                <span className="icon-delivery-man-1"></span>
                            </div>
                            <div className="counter-two__content">
                                <div className="counter-two__count count-box">
                                <CounterUp end={99} />
                                    <span>%</span>
                                </div>
                                <p className="counter-two__count-text">Successful Delivery</p>
                            </div>
                        </div>
                    </div>
                    {/*Counter Two Single End*/}
                </div>
            </div>
        </section>
        {/*Counter Two End */}
        </>
    )
}
