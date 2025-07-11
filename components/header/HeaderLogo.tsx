import React from 'react';
import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
    return (
        <>
            <div className="te-logo">
                <Link href="/index" className="te-standard-logo">
                    <Image
                        src="/images/logo/Markel-Logo.png"
                        alt="Image"
                        width={187}
                        height={56}
                    />
                </Link>
                <Link href="/index" className="te-sticky-logo">
                    <Image
                        src="/images/logo/Markel-Logo.png"
                        alt="Image"
                        width={187}
                        height={56}
                    />
                </Link>
                <Link href="/index" className="te-retina-logo">
                    <Image
                        src="/images/logo/Markel-Logo.png"
                        alt="Image"
                        width={187}
                        height={56}
                    />
                </Link>
            </div>
        </>
    );
};

export default HeaderLogo;