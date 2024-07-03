import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
        <header className="main-header">
            <div className="main-menu__top">
                <div className="main-menu__top-inner">
                    <ul className="list-unstyled main-menu__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-location"></i>
                            </div>
                            <div className="text">
                                <p>465 NT Road. North West, England</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-email"></i>
                            </div>
                            <div className="text">
                                <p><Link href="mailto:needhelpbondor@gmail.cpm">needhelpbondor@gmail.cpm</Link>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className="main-menu__top-right">
                        <div className="main-menu__social-box">
                            <div className="main-menu__social-box-inner">
                                <h4 className="main-menu__social-box-title">Follow us:</h4>
                                <div className="main-menu__social">
                                    <Link href="#"><i className="icon-facebook-app-symbol"></i></Link>
                                    <Link href="#"><i className="icon-instagram"></i></Link>
                                    <Link href="#"><i className="fab fa-google-plus"></i></Link>
                                    <Link href="#"><i className="icon-twitter"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                                <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu/>
                            </div>
                        </div>
                        <div className="main-menu__right">
                            <div className="main-menu__search-cart-btn-box">
                                <form action="#" className="main-menu__search-form">
                                    <input type="search" placeholder="Search...."/>
                                    <button type="submit"><i className="icon-search"></i></button>
                                </form>
                                <Link href="shop" className="main-menu__cart-box"><span
                                        className="icon-shopping-bag"></span></Link>
                                <div className="main-menu__btn-box">
                                    <Link href="contact" className="thm-btn main-menu__btn">GET A QUOTE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <MobileMenu handleMobileMenu={handleMobileMenu} />

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">

                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></Link>
                                    <Menu/>
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__search-cart-btn-box">
                                    <form action="#" className="main-menu__search-form">
                                        <input type="search" placeholder="Search...."/>
                                        <button type="submit"><i className="icon-search"></i></button>
                                    </form>
                                    <Link href="shop" className="main-menu__cart-box"><span
                                            className="icon-shopping-bag"></span></Link>
                                    <div className="main-menu__btn-box">
                                        <Link href="contact" className="thm-btn main-menu__btn">GET A QUOTE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}
