import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { defaultConfig } from "@/lib/default-config";

export default function RootLayout({ children, config = defaultConfig }) {
    return (
        <>
            <NavBar phoneNumber={config.phoneNumber} companyName={config.companyName} />
            <main className="h-full">{children}</main>
            <Footer companyName={config.companyName} />
        </>
    );
}
