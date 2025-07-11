"use client";

import React from 'react';
import Image from "next/image";
import MainMenu from './MainMenu';
import Link from "next/link";
import SocialShare from '../slider/SocialShare';

type SideBarMenuProps = {
    isMenuActive: boolean;
    closeMenu: () => void;
};

const SideBarMenu = ({ isMenuActive, closeMenu }: SideBarMenuProps) => {
    return (
        <>
            <div className={`te-menu-sidebar-area ${isMenuActive ? 'active' : ''}`}>
                <div className="te-menu-sidebar-wrapper">
                    <div className="te-menu-sidebar-close">
                        <button className="te-menu-sidebar-close-btn" id="menu_sidebar_close_btn" onClick={closeMenu}>
                            <i className="fal fa-times"></i>
                        </button>
                    </div>
                    <div className="te-menu-sidebar-content">
                        <div className="te-menu-sidebar-logo">
                            <Link href="/">

                                <Image
                                    src="/images/logo/Markel-Logo.png"
                                    alt="Image"
                                    width={187}
                                    height={56}
                                />
                            </Link>
                        </div>
                        <div className="te-mobile-nav-menu d-lg-none">
                            <MainMenu />
                        </div>
                        <div className="te-menu-sidebar-content">
                            <div className="te-menu-sidebar-single-widget">
                                <h5 className="te-menu-sidebar-title">Contact Info</h5>
                                <div className="te-header-contact-info">
                                    <span><i className="fa-solid fa-location-dot"></i>1005 17th Ave S, Nashville, TN 37212</span>
                                    <span><Link href="mailto:info@markeltree.com"><i
                                        className="fa-solid fa-envelope"></i>info@markeltree.com</Link> </span>
                                    <span><Link href="tel:(610) 413 1829"><i className="fa-solid fa-phone"></i>(610) 413 1829</Link></span>
                                </div>
                                <div className="te-social-profile">
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBarMenu;