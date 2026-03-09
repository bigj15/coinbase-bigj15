import ArticleCard from "../common/ArticleCard";
import SeeMoreBtn from "../common/SeeMoreBtn";
import walletDiffImg   from "../../assets/blog_walletdiff.png";
import walletSetup2Img from "../../assets/blog_wallet_setup.png";
import walletAddImg    from "../../assets/blog_walletadd.png";
import walletSendImg   from "../../assets/blog_walletsend.webp";

export default function AllThingsWalletSection() {
    return (
        <section className="border-t border-gray-100 py-14 px-4">
            <div className="mx-auto max-w-[900px]">
                <h2 className="text-center text-3xl font-bold text-gray-900">All Things Wallet</h2>
                <p className="mt-2 text-center text-sm text-gray-500">
                Earn yield, dive into crypto apps, control your holdings, and much more
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <ArticleCard wide image={walletDiffImg} title="What's the difference between Coinbase and Coinbase Wallet?"
                    excerpt="And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered" />
                <ArticleCard wide image={walletSetup2Img} tag="VIDEO TUTORIAL" title="How to set up a crypto wallet"
                    excerpt="Learn how to setup and get started with a crypto wallet." isVideo />
                <ArticleCard wide image={walletAddImg} tag="GETTING STARTED" title="How to add crypto to your Coinbase Wallet"
                    excerpt="A quick guide on how to add crypto to your Coinbase self-custody wallet." />
                <ArticleCard wide image={walletSendImg} title="How to send or receive crypto using Coinbase Wallet"
                    excerpt="Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers without any financial intermediaries." />
                </div>

                <SeeMoreBtn label="See more Wallet articles" />
            </div>
        </section>
    );
}
