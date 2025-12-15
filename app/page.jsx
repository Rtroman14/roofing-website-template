import { WhyChooseUs } from "@/components/why-choose-us";
import { Section } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { Reviews } from "@/components/reviews";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
                <Image
                    src="/aerial-roof.jpg"
                    alt="Aerial view of a roof"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/65" />
                <Section className="relative z-10 w-full">
                    <PageHero
                        title="Protecting What Matters Most"
                        subheading="Expert roofing solutions built on 25+ years of craftsmanship, reliability, and unwavering commitment to quality."
                        primaryButton={{
                            label: "Get a Quote",
                            href: "/solutions/sales-agent/trial",
                        }}
                        titleClassName="text-white"
                        subheadingClassName="text-neutral-200"
                    />
                </Section>
            </div>

            <div className="sm:space-y-52 space-y-44 sm:py-52 py-44">
                {/* badges */}

                {/* about us */}

                {/* latest work */}

                {/* CTA */}

                <Section className="max-w-7xl">
                    <WhyChooseUs />
                </Section>

                <Section>
                    <Reviews />
                </Section>

                {/* testimonials */}
            </div>
        </div>
    );
}
