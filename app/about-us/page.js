"use client";
import Link from "next/link";
import TeamSlider from "@/components/slider/TeamSlider";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import AwardSlider from "@/components/slider/AwardSlider";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 3,
    },
  },
};

export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    
    <>

  

      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
       
        <section style={{ paddingTop : "10%" , marginBottom:"10%"}} className="about-one">
         
          <div className="container">
            <div className="row">
             
              <div className="col-xl-8 pt-2">
                <div className="about-one__right">
                  {/* about-one__title */}
                  <h3 className="">
                    Urban Express: Redefining Transportation Excellence
                  </h3>
                  <p className="about-one__text">
                    Urban Express is a premier provider of comprehensive
                    transportation solutions, specializing in Bus Operations and
                    Fleet Management. With a dedication to reliability, safety,
                    and efficiency, we offer a diverse range of services
                    tailored to meet the unique needs of our clients.{" "}
                  </p>
                  <ul className="about-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        {/* <span className="icon-payment"></span> */}
                      </div>
                      <div className="content">
                        <h3 className="pb-3">
                          Urban Express is specializing in :
                        </h3>
                        <p className="pb-1 ">
                          <span className="icon-right-arrow"></span> BUS
                          OPERATIONS AND FLEET MANAGEMENT{" "}
                        </p>
                        <p className="pb-1">
                          <span className="icon-right-arrow"></span>{" "}
                          TRANSPORTATION SERVICE FOR CORPORATE STAFF
                        </p>
                        <p className="pb-1">
                          {" "}
                          <span className="icon-right-arrow"></span> CHARTERED
                          ROUTE SERVICES
                        </p>
                        <p className="pb-1">
                          <span className="icon-right-arrow"></span> SCHOOL BUS
                          SERVICES
                        </p>
                      </div>
                    </li>
                    {/* <li>
                    
                    <p>
                        Our steadfast commitment to excellence has established
                        us as a trusted partner for businesses, schools, and
                        organizations seeking top-notch transportation
                        solutions.
                      </p>  
                    </li> */}
                  </ul>
                  {/* <div className="about-one__btn-and-client-img">
                    <div className="about-one__btn-box">
                      <Link href="about" className="thm-btn about-one__btn">
                        About Us
                      </Link>
                    </div>
                 </div> */}
                </div>
              </div> 
               <div className="col-xl-4">
                <div
                 
                >
                  <div className="">
                    <div className="">
                      <img
                        src="assets/images/resources/about-one-img-1.jpg"
                        alt=""
                      />
                    </div>
                    {/* <div className="about-one__img-2">
                      <img
                        src="assets/images/resources/about-one-img-2.jpg"
                        alt=""
                      />
                    </div> */}
                     {/* <div className="about-one__logo">
                      <img
                        src="assets/images/resources/about-one-logo.png"
                        alt=""
                      />
                    </div>  */}
                    {/* <div className="about-one__shape-1 float-bob-y">
                      <img
                        src="assets/images/shapes/about-one-shape-1.png"
                        alt=""
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      

       

       

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </Layout>
  </>
  );
}
