import Footer from "@/components/footer";
import GlobalStyles from "@/components/globalStyles";
import Navigation from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import ActiveSectionContextProvider from "../context/active-section-context";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <GlobalStyles />
            <ActiveSectionContextProvider>
                <Navigation />
                {children}
                <Analytics />
                <Footer />
            </ActiveSectionContextProvider>
        </>
    );
}
