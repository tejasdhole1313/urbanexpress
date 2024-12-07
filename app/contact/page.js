
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import ContactForm from "./contact-form";




export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
        {/*Contact Page Start*/}
        <section className="contact-page">
        <div className="contact-page__top-img" style={{ width: "100%", overflow: "hidden" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8581.313741012256!2d55.325069950744286!3d25.270653341961093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc83a39eaa9%3A0xcbaa1a71b5d6f5c1!2sAl%20Muteena%20Building%20-%20Salah%20Al%20Din%20St%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1732788880296!5m2!1sen!2sin"
    style={{ width: "100%", height: "400px", border: "0" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

            <div  className="container">
          
                {/* <div className="contact-page__top-img">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8581.313741012256!2d55.325069950744286!3d25.270653341961093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc83a39eaa9%3A0xcbaa1a71b5d6f5c1!2sAl%20Muteena%20Building%20-%20Salah%20Al%20Din%20St%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1732788880296!5m2!1sen!2sin" width="2000" height="400" ></iframe>
                </div> */}
                
                <div className="contact-page__middle">
                    <div className="row container">
                     <div className="col-xl-6 col-lg-6">
                            <div style={{ paddingTop: "12%"}} className="contact-page__middle-left">
                                <h3 className="contact-page__middle-title">Get In Touch</h3>
                                <p className="contact-page__middle-text">Urban Express Charter: Your Trusted Transportation Partner</p>
                                <div className="contact-page__contact-info">
                                    <h3 className="contact-page__contact-info-title">Contact Info</h3>
                                    <ul className="contact-page__contact-list list-unstyled">
                                    <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <span style={{ color: "black", display: "flex", alignItems: "center"  , fontSize:"20px" }}>
      <CiLocationOn />
    </span>
    <div>
      <h4 className="contact-page__contact-list-title">Address</h4>
      <p>
        Al Muteena, building Shikha Mahra Al Ghurair,
        <br />
        Office 201-06, Dubai.
      </p>
    </div>
  </li>
  <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <span style={{ color: "black", display: "flex", alignItems: "center" , fontSize:"18px" }}>
      <IoCallOutline />
    </span>
    <div>
      <h4 className="contact-page__contact-list-title">Phone</h4>
      <p>
        <Link href="tel:+971521124424">+971 52 1124 424</Link>
        <br />
        <Link href="tel:+971521134434">+971 52 1134 434</Link>
      </p>
    </div>
  </li> <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <span style={{ color: "black", display: "flex", alignItems: "center" , fontSize:"18px" }}>
      <i className="icon-email"></i>
    </span>
    <div>
      <h4 className="contact-page__contact-list-title">Email</h4>
      <p>
        <Link href="mailto:enquiries@urbanexpress.ae">enquiries@urbanexpress.ae</Link>
        <br></br>
        <Link href="mailto:enquiries@urbanexpress.ae">info@urbanexpress.ae</Link>
      </p>
    </div>
  </li>

                                    </ul>
                                 
                                </div>
                             
                            </div>
                        </div> 
                  
                     <div className="col-xl-6 col-lg-6">
                            <div className="contact-page__middle-right">
                            <div className="contact-page__bottom flex">
                    <div className="contact-page__form-box">
                        <h3 className="comment-one__title">Let’s Get In Touch</h3>
                        <p className="comment-one__text">Your email address will not be published. Required fields are
                            marked *</p>
                            <ContactForm />
{/* <form action="contact-form" className="contact-page__form contact-form-validated">
  <div className="row">
    <div className="col-xl-12 col-lg-12" style={{ width: "100%" }}>
      <div className="contact-page__input-box">
        <input
          type="text"
          placeholder="Your Name*"
          name="name"
          required
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
    <div className="col-xl-12 col-lg-12">
      <div className="contact-page__input-box">
        <input
          type="email"
          placeholder="Your Email*"
          name="email"
          required
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
    <div className="col-xl-12 col-lg-12">
      <div className="contact-page__input-box">
        <input
          type="text"
          placeholder="Phone*"
          name="number"
          required
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xl-12 col-lg-12">
      <div className="contact-page__input-box text-message-box">
        <textarea
          name="message"
          placeholder="Write Message*"
          required
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            width: "100%",
            height: "100px",
            boxSizing: "border-box",
          }}
        ></textarea>
      </div>
      <div className="contact-page__btn-box">
        <button type="submit" className="thm-btn contact-page__btn">
          Submit
        </button>
      </div>
    </div>
  </div>
</form> */}

                      
                        <div className="result"></div>
                    </div>
                 </div>
                                {/* <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9943329180664!2d55.320846575166115!3d25.270776077663665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc83a39eaa9%3A0xcbaa1a71b5d6f5c1!2sAl%20Muteena%20Building%20-%20Salah%20Al%20Din%20St%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1731686317716!5m2!1sen!2sus"
                                    className="contact-page__google-map"></iframe>  */} 
                            </div>
                        </div> 
                    </div>
                </div>
       
            </div>
        </section>
        {/*Contact Page End*/}
     

    
   
            </Layout>
        </>
)
}