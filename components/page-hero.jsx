"use client";

import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const PageHero = ({
    title,
    subheading,
    primaryButton = null,
    secondaryButton = null,
    className,
    titleClassName,
    subheadingClassName,
}) => {
    return (
        <div className={cn("flex flex-col overflow-visible", className)}>
            <motion.div
                initial={{
                    y: 40,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                }}
                className="flex justify-center"
            ></motion.div>
            <motion.h1
                initial={{
                    y: 40,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                }}
                className={cn(
                    "text-5xl tracking-tight lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10",
                    titleClassName
                )}
            >
                <Balancer>{title}</Balancer>
            </motion.h1>
            <motion.p
                initial={{
                    y: 40,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay: 0.2,
                }}
                className={cn(
                    "text-center mt-6 text-base md:text-xl text-muted-foreground max-w-3xl mx-auto relative z-10",
                    subheadingClassName
                )}
            >
                <Balancer>{subheading}</Balancer>
            </motion.p>
            {(primaryButton || secondaryButton) && (
                <motion.div
                    initial={{
                        y: 80,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.5,
                        delay: 0.4,
                    }}
                    className="flex items-center gap-4 justify-center mt-6 relative z-10"
                >
                    {primaryButton && (
                        <Button asChild className="rounded-full" size="lg">
                            <Link href={primaryButton.href}>{primaryButton.label}</Link>
                        </Button>
                    )}
                </motion.div>
            )}
        </div>
    );
};
