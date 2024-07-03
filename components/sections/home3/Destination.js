
import Link from "next/link"
export default function Destination() {
    return (
        <>
        {/*Destination One Start*/}
        <section className="destination-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="destination-one__left">
                            <div className="destination-one__shape-1"></div>
                            <div className="icon">
                                <span className="icon-reputation"></span>
                            </div>
                            <div className="destination-one__left-content">
                                <div className="destination-one__count count-box">
                                <h3>800</h3>
                                    <span>+</span>
                                </div>
                                <p className="destination-one__left-text">Clients trust us under worlwide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="destination-one__right">
                            <div className="icon">
                                <span className="icon-location"></span>
                            </div>
                            <div className="content">
                                <h3>Tell Your Destination</h3>
                                <p>We are always ready wherever you want to go</p>
                                <Link href="contact">CONTACT US</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Destination One End*/}

        </>
    )
}
