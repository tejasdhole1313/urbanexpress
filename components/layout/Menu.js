import Link from "next/link"

export default function Menu() {

    return (
        <>
       
            <ul className="main-menu__list">
                <li className="dropdown">
                    <Link href="/">Home </Link>
                    <ul>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="index-2">Home Two</Link></li>
                        <li><Link href="index-3">Home Three</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="about">About</Link></li> 
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li><Link href="testimonial">Testimonials</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="/error">404 Error</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="services-carousel">Services Carousel</Link></li>
                        <li><Link href="railway-freight">Railway Freight</Link></li>
                        <li><Link href="medical-shipping">Medical Shipping</Link></li>
                        <li><Link href="land-freight">Land Freight</Link></li>
                        <li><Link href="shipping-freight">Shipping Freight</Link></li>
                        <li><Link href="road-transport">Road Transport</Link></li>
                        <li><Link href="air-freight">Air Freight</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Project</Link>
                    <ul>
                        <li><Link href="project">Project</Link></li>
                        <li><Link href="Project-carousel">Project Carousel</Link></li>
                        <li><Link href="project-details">Project Details</Link></li>
                        
                    </ul>
                </li>
                
                <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-carousel">Blog Carousel</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="shop">Shop</Link></li>
                        <li><Link href="shop-details">Shop Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
