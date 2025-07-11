"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Popup = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const isShown = localStorage.getItem("popup-shown");
            if (!isShown) {
                setShowModal(true);
                localStorage.setItem("popup-shown", "true");
            }
        }, 2000); // Delay of 2 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="relative bg-red-600 text-white p-8 rounded-xl w-[95%] md:max-w-5xl">
                <button
                    className="absolute top-4 right-4 text-3xl font-bold hover:text-gray-300"
                    onClick={() => setShowModal(false)}
                >
                    &times;
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Left: Form */}
                    <div>
                        <h2 className="text-xl font-semibold">
                            Wait! Looking for an <span className="text-white font-bold">Amazing Offer?</span>
                        </h2>
                        <h1 className="text-3xl font-extrabold my-2">
                            Get Your <span className="text-white">Design Now</span>
                        </h1>

                        <form className="flex flex-col gap-4 mt-4">
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="rounded-full px-4 py-2 text-black"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="rounded-full px-4 py-2 text-black"
                            />
                            <div className="flex items-center gap-2">
                                <span className="bg-white rounded-full px-3 py-2 text-black text-sm">🇵🇰 +92</span>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="flex-1 rounded-full px-4 py-2 text-black"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-white text-red-600 font-bold rounded-full px-6 py-2 hover:bg-gray-100"
                            >
                                GET IN TOUCH
                            </button>
                        </form>
                    </div>

                    {/* Right: Info */}
                    <div>
                        <div className="mb-4">
                            <p className="font-bold">Email</p>
                            <p>info@xpertwebstudio.co.uk</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">Phone</p>
                            <p>074 4627 4802</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">Address</p>
                            <p>242 Ellesmere Road, West Gate Road, Newcastle upon Tyne, NE4 8TQ</p>
                        </div>

                        <div className="mt-4">
                            <Image
                                src="/images/illustration.png"
                                alt="Design Illustration"
                                width={208}
                                height={208}
                                className="w-52 mx-auto rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
