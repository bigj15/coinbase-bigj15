import PageLayout from "../components/layout/PageLayout";

// Sections
import ListingsHeader from "../components/asset-detail/ListingsHeader";
import ListingsHero from "../components/asset-detail/ListingsHero";
import AssetBenefitsSection from "../components/asset-detail/AssetBenefitsSection";
import AssetReviewsSection from "../components/asset-detail/AssetReviewsSection";
import ReviewPrioritizationSection from "../components/asset-detail/ReviewPrioritizationSection";
import ListingProcessSection from "../components/asset-detail/ListingProcessSection";
import FAQSection from "../components/asset-detail/FAQSection";

export default function AssetDetail() {
    return (
        <PageLayout>
        <div className="bg-white">
            <ListingsHeader />
            <ListingsHero />
            <AssetBenefitsSection />
            <AssetReviewsSection />
            <ReviewPrioritizationSection />
            <ListingProcessSection />
            <FAQSection />
        </div>
        </PageLayout>
    );
}