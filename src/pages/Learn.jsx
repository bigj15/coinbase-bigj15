import PageLayout from "../components/layout/PageLayout";

// Sections
import FeaturedQuestionsSection from "../components/learn/FeaturedQuestionsSection";
import CryptoBasicsSection from "../components/learn/CryptoBasicsSection";
import WhatIsSection from "../components/learn/WhatIsSection";
import TipsTutorialsSection from "../components/learn/TipsTutorialsSection";
import AdvancedTradingSection from "../components/learn/AdvancedTradingSection";
import FuturesSection from "../components/learn/FuturesSection";
import AllThingsWalletSection from "../components/learn/AllThingsWalletSection";
import LearnDownloadFooterStrip from "../components/learn/LearnDownloadFooterStrip";

export default function Learn() {
  return (
    <PageLayout afterFooter={<LearnDownloadFooterStrip />}>
      <div className="min-h-screen bg-white">
        <FeaturedQuestionsSection />
        <CryptoBasicsSection />
        <WhatIsSection />
        <TipsTutorialsSection />
        <AdvancedTradingSection />
        <FuturesSection />
        <AllThingsWalletSection />
      </div>
    </PageLayout>
  );
}
