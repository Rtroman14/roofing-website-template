"use client";

import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
    {
        title: "About Us",
        href: "/about-us",
    },
    {
        title: "Services",
        children: [
            {
                title: "Residential",
                href: "/services/residential",
                description: "Expert roofing solutions for homeowners and residential properties.",
            },
            {
                title: "Commercial",
                href: "/services/commercial",
                description:
                    "Professional roofing services for businesses and commercial buildings.",
            },
            {
                title: "Gutters",
                href: "/services/gutters",
                description: "Installation, repair, and maintenance for seamless gutter systems.",
            },
            {
                title: "Storm Damage",
                href: "/services/storm-damage",
                description:
                    "24/7 emergency response and insurance claim assistance for storm damage.",
            },
        ],
    },
    // {
    //     title: "Gallery",
    //     href: "/gallery",
    // },
    {
        title: "Contact",
        href: "/contact",
    },
];

export function NavBar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    return (
        <motion.nav
            initial={{
                y: -80,
            }}
            animate={{
                y: 0,
            }}
            transition={{
                ease: [0.6, 0.05, 0.1, 0.9],
                duration: 0.8,
            }}
            className="md:max-w-7xl fixed top-4 mx-auto inset-x-0 z-99999 w-[90vw] lg:w-full"
        >
            <div className="w-full">
                {isMobile ? (
                    <MobileNavbar navItems={navItems} />
                ) : (
                    <DesktopNavbar navItems={navItems} />
                )}
            </div>
        </motion.nav>
    );
}
