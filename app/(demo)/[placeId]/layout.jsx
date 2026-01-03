import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { fetchPlaceData } from "@/lib/actions/fetch-place-data";
import Script from "next/script";
import { isValidPlaceId } from "@/lib/validators";
import { notFound } from "next/navigation";

export default async function DemoLayout({ children, params }) {
    const { placeId } = await params;

    // Validate Place ID format first to avoid unnecessary API calls
    if (!isValidPlaceId(placeId)) {
        notFound();
    }

    // Fetch place data
    const config = await fetchPlaceData(placeId);

    // If place not found, show 404
    if (!config) {
        notFound();
    }

    return (
        <>
            <Script src="https://roofera.ai/api/chatbot/85bd9560-1d94-407c-a337-2c45f32124c9/widget" />

            <NavBar
                phoneNumber={config.phoneNumber}
                companyName={config.companyName}
                cityName={config.city || "City"}
                placeId={placeId}
            />
            <main className="h-full">{children}</main>
            <Footer
                companyName={config.companyName}
                phoneNumber={config.phoneNumber}
                address={config.address}
                placeId={placeId}
            />
        </>
    );
}
