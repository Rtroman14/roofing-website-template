import { PageHero } from "@/components/page-hero";
import CalWidget from "@/components/cal";
import { Section } from "@/components/section";

export const metadata = {
    title: "Book a Demo | RoofEra - AI Roofing Sales Agent",
    description:
        "Transform your roofing sales with RoofEra's AI agent. Schedule a personalized demo to see how we automate lead nurturing, schedule appointments, and close more deals with intelligent CRM integration.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title={
                    <span>
                        Talk to a Roofing <span className="text-primary">Expert</span>
                    </span>
                }
                subheading="Get your free estimate today. Our experts are ready to answer your questions and provide the perfect roofing solution for your home."
                imageSrc="/aerial-roof.jpg"
                imageAlt="Aerial view of a quality roof installation"
            />
            <div className="py-24 sm:py-32">
                <Section className="max-w-7xl">
                    <div className="w-full mx-auto">
                        <CalWidget darkTheme={true} />
                    </div>
                </Section>
            </div>
        </div>
    );
}
