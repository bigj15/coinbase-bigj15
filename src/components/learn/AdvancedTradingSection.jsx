import ArticleCard from "../common/ArticleCard";
import SeeMoreBtn from "../common/SeeMoreBtn";
import techAnalysisImg from "../../assets/blog_techanalysis.png";
import futuresDataImg  from "../../assets/blog_futuresdata.png";
import tradingChartsImg from "../../assets/blog_tradingcharts.png";
import orderBookImg    from "../../assets/blog_orderbook.png";

export default function AdvancedTradingSection() {
    return (
        <section className="border-t border-gray-100 py-14 px-4">
            <div className="mx-auto max-w-[900px]">
                <h2 className="text-center text-3xl font-bold text-gray-900">Advanced trading</h2>
                <p className="mt-2 text-center text-sm text-gray-500">
                Ready to advance? Learn the tools and terminology you need to take control of your trades.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <ArticleCard wide image={techAnalysisImg} tag="KEY TERM"      title="What is technical analysis?" />
                <ArticleCard wide image={futuresDataImg}  tag="ADVANCED GUIDE" title="How can I use crypto futures market data for spot trading?" />
                <ArticleCard wide image={tradingChartsImg} tag="ADVANCED GUIDE" title="How to read advanced trading charts" isVideo />
                <ArticleCard wide image={orderBookImg}    tag="KEY TERM"      title="What is an order book?" isVideo />
                </div>

                <SeeMoreBtn label="See more advanced trading" />
            </div>
        </section>
    );
}
