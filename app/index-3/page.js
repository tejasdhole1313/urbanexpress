
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"

import Banner from "@/components/sections/home3/Banner"

import Services from "@/components/sections/home3/Services"
import Blog from "@/components/sections/home3/Blog"
import Team from "@/components/sections/home3/Team"
import Video from "@/components/sections/home3/video"
import Testimonial from "@/components/sections/home3/Testimonial"
import Cta from "@/components/sections/home3/Cta"
import Sign from "@/components/sections/home3/Sign"
import Project from "@/components/sections/home3/Project"
import Destination from "@/components/sections/home3/Destination"
import Contact from "@/components/sections/home3/Contact"
import Whychoose from "@/components/sections/home3/Whychoose"
import Counter from "@/components/sections/home3/Counter"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <Services />
                <About />
                <Sign />
                <Project />
                <Destination />
                <Video />
                <Testimonial />
                <Contact />
                <Cta />
                <Whychoose />
                <Team />
                <Counter />
                <Blog />
                
            </Layout>
        </>
    )
}