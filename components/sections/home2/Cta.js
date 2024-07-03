import Link from "next/link"
export default function Cta() {
    return (
        <>
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
                            <Link href="contact" className="cta-one__btn thm-btn">GET A QUOTE</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/*CTA One End */}
        </>
    )
}
