"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export const Logo = ({ href = "/", textSize = "text-3xl", className }) => {
    return (
        <Link
            href={href}
            className={cn(
                "font-normal flex space-x-2 items-center text-sm px-2 py-1 relative z-20",
                className
            )}
        >
            {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" /> */}
            <span className={cn("font-medium logo-font", textSize)}>ACME Roofing</span>
        </Link>
    );
};
