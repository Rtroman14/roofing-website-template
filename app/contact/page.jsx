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
        <div className="sm:space-y-52 space-y-44 sm:py-52 py-44">
            <Section>
                <PageHero
                    title={
                        <span>
                            Talk to a Roofing <span className="text-brand">AI Expert</span>
                        </span>
                    }
                    subheading="See how RoofEra’s AI Agents help roofing companies answer leads 24/7, respond instantly, and book more appointments without adding staff."
                />
                <div className="w-full mx-auto mt-14">
                    <CalWidget darkTheme={true} />
                </div>
            </Section>
        </div>
    );
}
