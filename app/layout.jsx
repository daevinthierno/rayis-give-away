
import "../styles/globals.css";
import { Poppins,Cormorant_Upright } from "@next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollTop from "@/components/scrolltop";
const poppins = Poppins({
  weight: ["400", "500", "600","700", "800"],
  subsets: ["latin"],
  variable:'--font-poppins'
});

const cormorant_upright=Cormorant_Upright({
  
  weight: ["400", "500","600", "700"],
  subsets: ["latin"],
  variable:'--font-cormorant-upright'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant_upright.variable} overflow-x-hidden scroll-smooth hover:scroll-auto"`}>
      <head />
      <body className="bg-tertiary w-full" id="home">
        <Header />
        {children}
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
