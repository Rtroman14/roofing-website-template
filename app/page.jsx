import { WhyChooseUs } from "@/components/why-choose-us";
import { Services } from "@/components/services";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import Image from "next/image";
import { CTA } from "@/components/cta";

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden py-20 lg:py-0">
                <Image
                    src="/aerial-roof.jpg"
                    alt="Aerial view of a roof"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/65" />
                <Section className="relative z-10 w-full max-w-7xl">
                    <Hero
                        title="Protecting What Matters Most"
                        subheading="Expert roofing solutions built on 25+ years of craftsmanship, reliability, and unwavering commitment to quality."
                        primaryButton={{
                            label: "Call Us Today",
                            href: "/contact",
                        }}
                    />
                </Section>
            </div>

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <Services />
                </Section>
            </div>

            <div className="bg-secondary py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <WhyChooseUs />
                </Section>
            </div>

            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <Reviews />
                </Section>
            </div>

            <div className="pb-24 sm:pb-32">
                <CTA
                    title="Ready to protect your home?"
                    subheading="Get your free, no-obligation estimate today. Our experts are ready to answer your questions and provide the perfect roofing solution for your home."
                />
            </div>
        </div>
    );
}
