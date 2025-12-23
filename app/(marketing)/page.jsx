import { WhyChooseUs } from "@/components/why-choose-us";
import { Services } from "@/components/services";
import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import Image from "next/image";
import { CTA } from "@/components/cta";
import { defaultConfig } from "@/lib/default-config";

export default function Home({ config = defaultConfig }) {
    return (
        <div className="flex flex-col">
            <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-32 pb-20 lg:py-0">
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
                        title={config.heroTitle}
                        subheading={config.heroDescription}
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
                    <Reviews reviews={config.reviews} />
                </Section>
            </div>

            <div className="pb-24 sm:pb-32">
                <CTA
                    title={config.ctaTitle}
                    subheading={config.ctaDescription}
                    phoneNumber={config.phoneNumber}
                />
            </div>
        </div>
    );
}
