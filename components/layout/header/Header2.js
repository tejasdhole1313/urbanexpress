import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
        <header className="main-header-two">
            <div className="main-menu-two__top">
                <div className="container">
                    <div className="main-menu-two__top-inner">
                        <div className="main-menu-two__logo">
                            <Link href="/"><img src="assets/images/resources/logo-2.png" alt=""/></Link>
                        </div>
                        <div className="main-menu-two__top-right">
                            <div className="main-menu-two__top-icon-box">
                                <div className="main-menu-two__top-icon">
                                    <span className="icon-payment"></span>
                                </div>
                                <div className="main-menu-two__top-icon-content">
                                    <p>Best Transport</p>
                                    <h6>5.6k People Connect</h6>
                                </div>
                            </div>
                            <div className="main-menu-two__social">
                                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                <Link href="#"><i className="fab fa-instagram"></i></Link>
                                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                            <div className="main-menu-two__btn-box">
                                <Link href="contact" className="thm-btn main-menu-two__btn">GET A QUOTE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="container">
                        <div className="main-menu-two__wrapper-inner">
                            <div className="main-menu-two__left">
                                <div className="main-menu-two__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu/>
                                </div>
                            </div>
                            <div className="main-menu-two__right">
                                <div className="main-menu-two__cart-search-box">
                                    <Link href="#" className="main-menu__cart-box"><span className="icon-shopping-bag"></span></Link>
                                    <form action="#" className="main-menu__search-form">
                                        <input type="search" placeholder="Search...."/>
                                        <button type="submit"><i className="icon-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        
        <MobileMenu handleMobileMenu={handleMobileMenu} />

        <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-two">
                    <div className="main-menu-two__wrapper">
                        <div className="container">
                            <div className="main-menu-two__wrapper-inner">
                                <div className="main-menu-two__left">
                                    <div className="main-menu-two__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                        <Menu/>
                                    </div>
                                </div>
                                <div className="main-menu-two__right">
                                    <div className="main-menu-two__cart-search-box">
                                        <Link href="#" className="main-menu__cart-box"><span className="icon-shopping-bag"></span></Link>
                                        <form action="#" className="main-menu__search-form">
                                            <input type="search" placeholder="Search...."/>
                                            <button type="submit"><i className="icon-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>    
            </div>{/*  /.sticky-header__content  */}
        </div>{/*  /.stricky-header  */}

        </>
    )
}
