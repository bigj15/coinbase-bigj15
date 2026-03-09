import PageLayout from "../components/layout/PageLayout";
import HeroSection from "../components/home/HeroSection";
import ExploreCryptoSection from "../components/home/ExploreCryptoSection";
import AdvancedTradeSection from "../components/home/AdvancedTradeSection";
import CoinbaseOneSection from "../components/home/CoinbaseOneSection";
import BaseAppSection from "../components/home/BaseAppSection";
import NewToCryptoSection from "../components/home/NewToCryptoSection";
import TakeControlSection from "../components/home/TakeControlSection";

export default function Home() {
    return (
        <PageLayout>
        {/* HERO */}
        <HeroSection />

        {/* EXPLORE + COIN LIST (light grey band) */}
        <ExploreCryptoSection />

        {/* ADVANCED TRADE (image left, copy right like screenshot) */}
        <AdvancedTradeSection />

        {/* COINBASE ONE */}
        <CoinbaseOneSection />

        {/* BASE APP section (remove old advanced/trust, add this) */}
        <BaseAppSection />

        {/* NEW TO CRYPTO section (grey band + 3 cards) */}
        <NewToCryptoSection />

        {/* TAKE CONTROL section */}
        <TakeControlSection />
        </PageLayout>
    );
}