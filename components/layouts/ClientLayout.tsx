"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import HeaderV1 from "@/components/header/HeaderV1";
import HeaderV2 from "@/components/header/HeaderV2";
import HeaderV3 from "@/components/header/HeaderV3";
import FooterV1 from "@/components/footer/FooterV1";
import FooterV2 from "@/components/footer/FooterV2";
import PreLoader from "@/components/others/PreLoader";
import dynamic from "next/dynamic";

const ScrollToTop = dynamic(
  () =>
    import("react-simple-scroll-up").then((mod) => mod.ScrollToTop),
  { ssr: false }
);

let hasLoadedOnce = false;

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(!hasLoadedOnce);

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle");
        if (!hasLoadedOnce) {
            hasLoadedOnce = true;
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1200);
            return () => clearTimeout(timer);
        } else {
            setIsLoading(false);
        }
    }, []);

    let HeaderComponent = HeaderV3;
    let FooterComponent = FooterV1;

    if (pathname === "/") {
        HeaderComponent = HeaderV1;
        FooterComponent = FooterV1;
    } else if (pathname === "/home-two") {
        HeaderComponent = HeaderV2;
        FooterComponent = FooterV2;
    }

    return isLoading ? (
        <PreLoader />
    ) : (
        <>
            <HeaderComponent />
            {children}
            <FooterComponent />
            <ScrollToTop symbol={<i className="fa-solid fa-arrow-up"></i>} />
        </>
    );
}
