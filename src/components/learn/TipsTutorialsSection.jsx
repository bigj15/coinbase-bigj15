import ArticleCard from "../common/ArticleCard";
import SeeMoreBtn from "../common/SeeMoreBtn";
import donateCryptoImg from "../../assets/blog_donate.png";
import walletSetupImg  from "../../assets/blog_wallet_setup.png";
import bestTimeImg     from "../../assets/blog_featured.png";
import retirementImg   from "../../assets/blog_retirement.png";

export default function TipsTutorialsSection() {
    return (
        <section className="py-14 px-4">
            <div className="mx-auto max-w-[900px]">
                <h2 className="text-center text-3xl font-bold text-gray-900">Tips and tutorials</h2>
                <p className="mt-2 text-center text-sm text-gray-500">Get practical, step-by-step answers to all things crypto</p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <ArticleCard wide image={donateCryptoImg} tag="GETTING STARTED" title="How to donate crypto" />
                <ArticleCard wide image={walletSetupImg}  tag="VIDEO TUTORIAL"  title="How to set up a crypto wallet" isVideo />
                <ArticleCard wide image={bestTimeImg}     tag="VIDEO TUTORIAL"  title="When is the best time to invest in crypto?" isVideo />
                <ArticleCard wide image={retirementImg}   tag="YOUR CRYPTO"     title="How to invest in crypto via your retirement account" />
                </div>

                <SeeMoreBtn label="See more tips and tutorials" />
            </div>
        </section>
    );
}
