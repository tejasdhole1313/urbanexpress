import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Counter from "@/components/sections/home1/Counter"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Service from "@/components/sections/home1/Service"
import Work from "@/components/sections/home1/Work"
import Team from "@/components/sections/home1/Team"
import Brand from "@/components/sections/home1/Brand"
import Blog from "@/components/sections/home1/Blog"
import Project from "@/components/sections/home1/Project"
import Testimonial from "@/components/sections/home1/Testimonial"
import Contact from "@/components/sections/home1/Contact"
import Cta from "@/components/sections/home1/Cta"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Brand />
                <About />
                <Service />
                <WhyChooseUs />
                <Counter />
                <Project />
                <Contact />
                <Team />
                <Work />
                <Testimonial />
                <Blog />
                <Cta />
                
            </Layout>

        </>
    )
}