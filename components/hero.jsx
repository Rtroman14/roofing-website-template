"use client";

import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

export function Hero({ title, subheading, primaryButton = null, className }) {
    return (
        <div
            className={cn(
                "w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                className
            )}
        >
            {/* Column 1: Content */}
            <div className="flex flex-col">
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
                        "text-4xl tracking-tight lg:text-7xl font-semibold relative z-10 text-white"
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
                    className={cn("mt-6 text-base md:text-lg relative z-10 text-neutral-200")}
                >
                    <Balancer>{subheading}</Balancer>
                </motion.p>

                {primaryButton && (
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
                            delay: 0.4,
                        }}
                        className="mt-8 relative z-10"
                    >
                        <Button asChild className="rounded-full" size="lg">
                            <Link href={primaryButton.href}>{primaryButton.label}</Link>
                        </Button>
                    </motion.div>
                )}
            </div>

            {/* Column 2: Form */}
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
                    delay: 0.3,
                }}
                className="relative z-10"
            >
                <ContactForm />
            </motion.div>
        </div>
    );
}
