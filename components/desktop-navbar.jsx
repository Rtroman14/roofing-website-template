"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/solid";

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground/80">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export function DesktopNavbar({ navItems, isAuthenticated = false }) {
    const { scrollY } = useScroll();
    const [showBackground, setShowBackground] = useState(false);

    useMotionValueEvent(scrollY, "change", (value) => {
        if (value > 100) {
            setShowBackground(true);
        } else {
            setShowBackground(false);
        }
    });

    const textColor = showBackground ? "text-neutral-900 dark:text-white" : "text-white";

    return (
        <div
            className={cn(
                "w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-100",
                showBackground &&
                    "bg-neutral-50 dark:bg-neutral-900 shadow-[0px_-2px_0px_0px_var(--neutral-100),0px_2px_0px_0px_var(--neutral-100)] dark:shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]"
            )}
        >
            <AnimatePresence>
                {showBackground && (
                    <motion.div
                        key={String(showBackground)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 h-full w-full bg-neutral-100 dark:bg-neutral-800 pointer-events-none mask-[linear-gradient(to_bottom,white,transparent,white)] rounded-full"
                    />
                )}
            </AnimatePresence>

            <div className="flex flex-row gap-2 items-center">
                <Logo className={textColor} />
                <NavigationMenu delayDuration={100}>
                    <NavigationMenuList>
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.title}>
                                {item.children ? (
                                    <>
                                        <NavigationMenuTrigger
                                            className={cn(
                                                "bg-transparent hover:bg-accent/50",
                                                textColor
                                            )}
                                        >
                                            {item.title}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2">
                                                {item.children.map((child) => (
                                                    <ListItem
                                                        key={child.title}
                                                        title={child.title}
                                                        href={child.href}
                                                    >
                                                        {child.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink
                                        asChild
                                        className={cn(
                                            navigationMenuTriggerStyle(),
                                            "bg-transparent hover:bg-accent/50",
                                            textColor
                                        )}
                                    >
                                        <Link href={item.href}>{item.title}</Link>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex space-x-2 items-center z-50">
                {isAuthenticated ? (
                    <Button asChild className="rounded-full" variant="brand">
                        <Link href="/agent/chatbot/playground">
                            Dashboard
                            <ArrowRightIcon />
                        </Link>
                    </Button>
                ) : (
                    <>
                        <Button
                            asChild
                            className={cn("rounded-full hover:bg-accent/50", textColor)}
                            variant="ghost"
                        >
                            <Link href="/login">Get a Quote</Link>
                        </Button>
                        <Button asChild className="rounded-full">
                            <a href="tel:+17203166031">
                                <PhoneIcon />
                                (720) 316-6031
                            </a>
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}
