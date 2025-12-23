import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { defaultConfig } from "@/lib/default-config";

export const Footer = ({ companyName = defaultConfig.companyName }) => {
    const links = [
        // {
        //     name: "Pricing",
        //     href: "/pricing",
        // },
        // {
        //     name: "Blog",
        //     href: "/blog",
        // },
        // {
        //     name: "Contact",
        //     href: "/contact",
        // },
        // {
        //     name: "JobNimbus",
        //     href: "/integrations/jobnimbus",
        // },
    ];
    const legal = [
        {
            name: "Privacy Policy",
            href: "/privacy-policy",
        },
        {
            name: "Terms and Conditions",
            href: "/terms",
        },
        {
            name: "Cookie Policy",
            href: "/cookie-policy",
        },
    ];
    const socials = [
        {
            name: "Facebook",
            href: "https://www.facebook.com/rooferaai",
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/roofera",
        },
        {
            name: "Google",
            href: "https://google.com",
        },
    ];
    return (
        <footer className="relative max-w-7xl mx-auto">
            <div className="border-t border-neutral-100 dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
                <div className="mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
                    <div className="mx-auto sm:mx-0">
                        <div className="mr-4  md:flex mb-4">
                            <Logo companyName={companyName} />
                        </div>
                        <div>
                            Copyright &copy; {new Date().getFullYear()} {companyName}
                        </div>
                        <div className="mt-2">All rights reserved</div>
                    </div>
                    <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    className="transition-colors hover:text-black text-muted-foreground-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            {legal.map((link) => (
                                <Link
                                    key={link.name}
                                    className="transition-colors hover:text-black text-muted-foreground-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            {socials.map((link) => (
                                <Link
                                    key={link.name}
                                    className="transition-colors hover:text-black text-muted-foreground-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="w-screen relative left-1/2 -translate-x-1/2 leading-none">
                <p className="text-center logo-font w-full text-[18.2vw] font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-brand-500/60 tracking-tighter">
                    ROOFERA
                </p>
            </div> */}
        </footer>
    );
};
