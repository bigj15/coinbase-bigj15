import ArticleCard from "../common/ArticleCard";
import SeeMoreBtn from "../common/SeeMoreBtn";
import bitcoinBasicImg from "../../assets/blog1.avif";
import defiImg        from "../../assets/blog2.png";
import ethereumImg    from "../../assets/blog3.avif";
import defiWhatImg    from "../../assets/blog_defi.png";
import stablecoinImg  from "../../assets/blog_stablecoin.png";
import fudImg         from "../../assets/blog_fud.png";

export default function CryptoBasicsSection() {
    return (
        <section className="py-14 px-4">
            <div className="mx-auto max-w-[900px]">
                <h2 className="text-center text-3xl font-bold text-gray-900">Crypto basics</h2>
                <p className="mt-2 text-center text-sm text-gray-500">New to crypto? Not for long — start with these guides and explainers</p>

                {/* Top 2 wide cards */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <ArticleCard wide image={bitcoinBasicImg} tag="BEGINNER'S GUIDE" title="What is Bitcoin?"
                    excerpt="Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the Internet." />
                <ArticleCard wide image={defiImg} tag="BEGINNER'S GUIDE" title="Guide to DeFi tokens and altcoins"
                    excerpt="From Aave to Zcash, decide what to trade with our beginner's guide" />
                </div>

                {/* Bottom 4 small cards */}
                <div className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-4">
                <ArticleCard image={ethereumImg}   tag="BEGINNER'S GUIDE" title="What is Ethereum?" />
                <ArticleCard image={defiWhatImg}   tag="KEY TERM"         title="What is DeFi?" />
                <ArticleCard image={stablecoinImg} tag="BEGINNER'S GUIDE" title="What is a stablecoin?" />
                <ArticleCard image={fudImg}        tag="GLOSSARY"
                    title="Don't let FUD give you FOMO or you'll end up REKT — crypto slang, explained" />
                </div>

                <SeeMoreBtn label="See more crypto basics" />
            </div>
        </section>
    );
}
