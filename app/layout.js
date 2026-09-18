import { Anton, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/components/SiteContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import BookingModal from "@/components/BookingModal";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand" });

export const metadata = {
  title: "Ember & Crust — Made for Cravings",
  description: "Fire-kissed food, bold flavors and unforgettable moments at Ember & Crust.",
  openGraph: {
    title: "Ember & Crust — Made for Cravings",
    description: "Bold flavors, fire-kissed favorites, and unforgettable moments — served fresh every day.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body className="min-h-screen bg-cream text-coal antialiased">
        <SiteProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <BookingModal />
        </SiteProvider>
      </body>
    </html>
  );
}

