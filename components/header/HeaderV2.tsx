"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainMenu from "./MainMenu";
import HeaderLogo from "./HeaderLogo";
import SideBarMenu from "./SideBarMenu";
import HeaderSearch from "./HeaderSearch";
import SideBarOverlay from "./SideBarOverlay";

const HeaderV2 = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isSearchFormActive, setIsSearchFormActive] = useState(false);
    const [isMenuActive, setMenuActive] = useState(false);

    // Sticky menu effect
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 5);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent form reload
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        (event.target as HTMLFormElement).reset();
    };

    // Search toggle
    const handleSearchButtonClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        document.body.style.overflow = "hidden";
        setIsSearchFormActive(true);
    };

    const handleSearchCloseClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        document.body.style.overflow = "auto";
        setIsSearchFormActive(false);
    };

    const handleWindowClick = (e: MouseEvent) => {
        if ((e.target as HTMLElement).matches(".te-search-form-wrapper")) {
            setIsSearchFormActive(false);
            document.body.style.overflow = "auto";
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleWindowClick);
        return () => window.removeEventListener("click", handleWindowClick);
    }, []);

    const openMenu = () => setMenuActive(true);
    const closeMenu = () => setMenuActive(false);
    const handleOverlayClick = () => closeMenu();



    return (
        <>
            <header className="header-area style-2">
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
                                    <Link href="/contact" className="te-cta-btn">
                                        JOIN HUB <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <div className="te-search-btn-wrapper">
                                        <Link
                                            href="#"
                                            className="te-icon te-search-btn te-search-toggle-btn"
                                            onClick={handleSearchButtonClick}
                                        >
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="te-mobile-menu-bar d-lg-none text-end">
                                    <Link href="#" className="te-mobile-menu-toggle-btn" onClick={(e) => {
                                        e.preventDefault();
                                        openMenu();
                                    }}>
                                        <i className="fal fa-bars"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <HeaderSearch
                isSearchFormActive={isSearchFormActive}
                handleSearchCloseClick={handleSearchCloseClick}
                handleSearch={handleSearch}
            />

            <SideBarMenu
                closeMenu={closeMenu}
                isMenuActive={isMenuActive}
            />

            <SideBarOverlay
                isMenuActive={isMenuActive}
                handleOverlayClick={handleOverlayClick}
            />
        </>
    );
};

export default HeaderV2;
