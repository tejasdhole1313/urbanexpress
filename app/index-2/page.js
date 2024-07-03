
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Brand from "@/components/sections/home2/Brand"
import Cta from "@/components/sections/home2/Cta"
import Counter from "@/components/sections/home2/Counter"
import Video from "@/components/sections/home2/Video"
import Services from "@/components/sections/home2/Services"
import Project from "@/components/sections/home2/Project"
import Help from "@/components/sections/home2/Help"
import Work from "@/components/sections/home2/Work"
import Pricing from "@/components/sections/home2/Pricing"
import Looking from "@/components/sections/home2/Looking"
import Faq from "@/components/sections/home2/Faq"
import Sales from "@/components/sections/home2/Sales"
import Map from "@/components/sections/home2/Map"

export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <Services />
                <About />
                <Counter />
                <Video />
                <Project />
                <Help />
                <Work />
                <Pricing />
                <Looking />
                <Faq />
                <Sales />
                <Brand />
                <Blog />
                <Map />
                <Cta />
            
            </Layout>
        </>
    )
}