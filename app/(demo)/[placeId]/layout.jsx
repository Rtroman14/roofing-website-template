import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { fetchPlaceData } from "@/lib/actions/fetch-place-data";
import { defaultConfig } from "@/lib/default-config";
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
            <NavBar
                phoneNumber={config.phoneNumber}
                companyName={config.companyName}
                placeId={placeId}
            />
            <main className="h-full">{children}</main>
            <Footer companyName={config.companyName} />
        </>
    );
}
