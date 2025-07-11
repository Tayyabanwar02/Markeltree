"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import MainMenu from './MainMenu';
import HeaderLogo from './HeaderLogo';
import SideBarMenu from './SideBarMenu';
import SideBarOverlay from './SideBarOverlay';

const HeaderV1 = () => {

    // Sticky Menu 
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    // SideBar 
    const [isMenuActive, setMenuActive] = useState(false);

    const openMenu = () => {
        setMenuActive(true);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    const handleOverlayClick = () => {
        closeMenu();
    };

    return (
        <>
            <header className="header-area style-1">
                <div className={`te-header-menu-area te-sticky-header ${isSticky ? "te-sticky_menu" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                                <HeaderLogo />
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-6 col-6 d-flex align-items-center justify-content-end">
                                <div className="te-menu d-lg-inline-block d-none">
                                    <MainMenu />
                                </div>
                                <div className="te-header-btn">
                                    <Link href="/contact" className="te-cta-btn">Get a quote <i className="fa-solid fa-arrow-right"></i></Link>
                                    <div className="te-search-btn">
                                        <Link
                                            href="#"
                                            className="te-icon te-offcanvas-toggle-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                openMenu();
                                            }}
                                        >
                                            <i className="fa-regular fa-bars-sort"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="te-mobile-menu-bar d-lg-none text-end">
                                    <Link
                                        href="#"
                                        className="te-mobile-menu-toggle-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openMenu();
                                        }}
                                    >
                                        <i className="fal fa-bars"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <SideBarMenu closeMenu={closeMenu} isMenuActive={isMenuActive} />

            <SideBarOverlay isMenuActive={isMenuActive} handleOverlayClick={handleOverlayClick} />

        </>
    );
};

export default HeaderV1;