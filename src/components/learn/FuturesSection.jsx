import ArticleCard from "../common/ArticleCard";
import SeeMoreBtn from "../common/SeeMoreBtn";
import futuresIntroImg from "../../assets/blog_futures_intro.png";
import futuresFundImg  from "../../assets/blog_futures_fund.png";
import futuresOpenImg  from "../../assets/blog_futures_open.png";
import futuresStratImg from "../../assets/blog_futures_strat.png";

export default function FuturesSection() {
    return (
        <section className="border-t border-gray-100 py-14 px-4">
            <div className="mx-auto max-w-[900px]">
                <h2 className="text-center text-3xl font-bold text-gray-900">Futures</h2>
                <p className="mt-2 text-center text-sm text-gray-500">New to futures trading? Get up to speed on the basics.</p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <ArticleCard wide image={futuresIntroImg} title="Futures: Introductions and origins" />
                <ArticleCard wide image={futuresFundImg}  title="Futures fundamentals: Understanding the basics" />
                <ArticleCard wide image={futuresOpenImg}  title="Opening, holding, and closing a position in the futures market" />
                <ArticleCard wide image={futuresStratImg} title="Trading strategies: Speculating, hedging, and spreading in the futures market" />
                </div>

                <SeeMoreBtn label="See more about futures" />
            </div>
        </section>
    );
}
