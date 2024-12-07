import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
import { RiCustomerServiceLine } from "react-icons/ri";
export default function WhyChooseUs() {
    return (
        <>

     {/*Why Choose One Start*/}
     <section style={{
        paddingBottom:"10%"
     }} className="why-choose-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="why-choose-one__left">
                            <div className="why-choose-one__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/why-choose-one-img-1.png" alt="" className="float-bob-x"/>
                            </div>
                            {/* <div className="why-choose-one__shape-1">
                                <img src="assets/images/shapes/why-choose-one-shape-1.png" alt=""/>
                            </div> */}
                            {/* <div className="why-choose-one__count-box">
                                <div className="why-choose-one__count-icon">
                                    <span className="far fa-clock"></span>
                                </div>
                                <div className="why-choose-one__count-inner">
                                    <div className="why-choose-one__count count-box">
                                    <CounterUp end={24} />
                                    </div>
                                    <p className="why-choose-one__count-text">Hours Service</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div style={{paddingLeft:"0px", paddingRight:"0px"}} className="col-xl-8">
                        <div className="why-choose-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">why urbanexpress?</span>
                                </div>
                                {/* <h2 className="section-title__title">We Provide clients Best
                                    Logistics Services</h2> */}
                            </div>
                            {/* <p className="why-choose-one__text">Arki features minimal and stylish design. The theme is well
                                crafted for all the modern architect and interior design website. With Arki, it makes
                                your website look even more attractive and impressive to</p> */}
                            {/* <ul className="why-choose-one__progress-list list-unstyled">
                                <li>
                                    <div className="progress-levels">
                                        <div className="progress-box">
                                            <div className="inner count-box">
                                                <div className="text">Shipping</div>
                                                <div className="bar">
                                                    <div className="bar-innner">
                                                        <div className="skill-percent">
                                                        <span className="count-text">90</span>
                                                            <span className="percent">%</span>
                                                        </div>
                                                        <div className="bar-fill" data-percent="80" style={{ width: '90%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress-levels">
                                        <div className="progress-box">
                                            <div className="inner count-box">
                                                <div className="text">Managment</div>
                                                <div className="bar">
                                                    <div className="bar-innner">
                                                        <div className="skill-percent">
                                                        <span className="count-text">80</span>
                                                        </div>
                                                        <div className="bar-fill" data-percent="80" style={{ width: '80%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul> */}
                            <ul  className="why-choose-one__points list-unstyled">
                                <li>
                                    <div  className="icon">
                                        <span style={{fontSize:"50%", paddingRight:"5%"}}    className=""><img style={{width:"150%", paddingRight:"5%",fontSize:""}}  src="/assets/images/resources/iconns-1.png"></img></span>
                                    </div>
                                    <div className="text">
                                        <h5>Reliability</h5>
                                            
                                             <p>Urban Express boasts a stellar track record of reliability, ensuring punctual arrivals and departures for all our services.</p>
                                            
                                            
                                    </div>
                                    
                                </li>
                                <li className="change ">
                                    <div className="icon">
                                        <span className=""><img style={{width:"150%", paddingRight:"7%"}}  src="/assets/images/resources/icoss-2.png"></img> </span>
                                    </div>
                                    <div className="text">
                                        <h5>Customisation</h5>
                                        <p>Recognizing that each client has unique requirements, we offer personalized solutions tailored to specific needs and preferences.</p>
                                    </div>
                                </li>
                            </ul>
                            <br></br>
                            <br></br>
                            <ul className="why-choose-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className=""><img style={{width:"150%", paddingRight:"5%"}}  src="/assets/images/resources/iconss-3.png"></img></span>
                                    </div>
                                    <div className="text">
                                        <h5>Safety</h5>
                                        <p>Safety is our utmost priority, and we adhere to rigorous safety protocols to ensure passenger well-being at all times.</p>
                                            
                                            
                                    </div>
                                    
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className=""><img style={{width:"150%", paddingRight:"5%"}}  src="/assets/images/resources/iconss-4.png"></img></span>
                                    </div>
                                    <div  className="text ">
                                       <h5>Customer Service</h5>
                                       <p>Urban Express is backed by a dedicated customer service team, available to address inquiries and concerns promptly and professionally</p>
                                    </div>
                                </li>
                            </ul>
                            <br></br>
                            <br></br>
                            <ul className="why-choose-one__points list-unstyled">
                                <li className="">
                                    <div className="icon">
                                        <span className=""><img style={{width:"150%", paddingRight:"5%"}}  src="/assets/images/resources/iconss-5.png"></img></span>
                                    </div>
                                    <div  className=" text">
                                        <h5>Efficiency</h5>
                                        <p className="second-last"  >Our efficient operations and strategic planning minimize downtime and optimize resource utilization, delivering cost-effective solutions for our clients.</p>
                                            
                                            
                                    </div>
                                    
                                </li>
                                 
                                <li  className="last">
                                    <div className="icon">
                                        <span className=""><img style={{width:"150%", paddingRight:"5%"}}  src="/assets/images/resources/iconss-6.png"></img></span>
                                    </div>
                                    <div   className="text" >
                                       <h5>Community Engagement</h5>
                                       <p >Urban Express actively engages with local communities, contributing to social initiatives and fostering a sense of belonging.</p>
                                    </div>
                                </li>
                            </ul>
                           
                          
                            {/* <p className="why-choose-one__bottom-text">Do you have any project on your mind? Call Us: <Link
                                    href="tel:+123456789">+123 456789</Link></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Why Choose One End*/}
        </>
    )
}
