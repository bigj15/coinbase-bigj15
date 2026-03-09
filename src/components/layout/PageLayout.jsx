import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children, afterFooter = null }) {
    return (
        <div className="min-h-screen bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {afterFooter}
        </div>
    );
}