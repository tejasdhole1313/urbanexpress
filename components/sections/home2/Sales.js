'use client'
export default function Sales() {
    
    return (
        <>
        {/*Sales Growth Start */}
        <section className="sales-growth">
            <div className="sales-growth__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/sales-growth-bg.jpg)' }} >
                <div className="sales-growth__shape-1">
                    <img src="assets/images/shapes/sales-growth-shape-1.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="sales-growth__inner">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">FASTEST TRANSPORT</span>
                        </div>
                        <h2 className="section-title__title">Delivery Process</h2>
                    </div>
                    <p className="sales-growth__text">We strongly support best practice sharing across our and
                        <br/> operations around the world and across various industrial<br/> sectors. Anim pariatur cliche
                    </p>
                    <div className="sales-growth__progress-single">
                        <div className="sales-growth__progress-box">
                            <div className="circle-progress"
                                data-options='{ "value": 0.8,"thickness": 4,"emptyFill": "#f5f5f8","lineCap": "square", "size": 100, "fill": { "color": "#ca1f26" } }'>
                            </div>{/* /.circle-progress */}
                            <div className="sales-growth__pack">
                                <p>95%</p>
                            </div>
                        </div>
                        <div className="sales-growth__progress-content">
                            <p>Supper
                                <br/> Fast Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Sales Growth End */}
        </>
    )
}
