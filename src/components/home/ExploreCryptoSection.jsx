import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CoinRow from "../common/CoinRow";
import bitcoin from "../../assets/bitcoin.png";
import ethereum from "../../assets/ethereum.png";
import tether from "../../assets/tether.png";
import usdc from "../../assets/usdc.png";
import bnb from "../../assets/bnb.png";
import xrp from "../../assets/xrp.png";
import solana from "../../assets/sol.png";
import cardano from "../../assets/cardano.png";
import dogecoin from "../../assets/dogecoin.png";
import tron from "../../assets/tron.png";

const TAB_KEYS = {
    tradable: "tradable",
    topGainers: "top-gainers",
    newOnCoinbase: "new-on-coinbase",
};

export default function ExploreCryptoSection() {
    const [activeTab, setActiveTab] = useState(TAB_KEYS.tradable);

    const tabData = useMemo(
        () => ({
            [TAB_KEYS.tradable]: [
                { name: "Bitcoin", symbol: "BTC", price: "GHS 737,160.57", change: "↗ 2.25%", image: bitcoin },
                { name: "Ethereum", symbol: "ETH", price: "GHS 21,559.11", change: "↗ 4.03%", image: ethereum },
                { name: "Tether", symbol: "USDT", price: "GHS 10.75", change: "↗ 0.00%", image: tether },
                { name: "BNB", symbol: "BNB", price: "GHS 6,855.50", change: "↗ 3.06%", image: bnb },
                { name: "XRP", symbol: "XRP", price: "GHS 14.06", change: "↗ 1.56%", image: xrp },
                { name: "USDC", symbol: "USDC", price: "GHS 10.79", change: "↗ 0.00%", image: usdc },
            ],
            [TAB_KEYS.topGainers]: [
                { name: "Flow", symbol: "FLOW", price: "GHS 0.52", change: "↗ 19.75%", image: ethereum },
                { name: "KernelDAO", symbol: "KERNEL", price: "GHS 1.01", change: "↗ 13.79%", image: xrp },
                { name: "Fabric Protocol", symbol: "FAB", price: "GHS 0.48", change: "↗ 11.99%", image: usdc },
                { name: "Hyperliquid", symbol: "HYPE", price: "GHS 368.94", change: "↗ 11.29%", image: solana },
                { name: "Spark", symbol: "SPK", price: "GHS 0.24", change: "↗ 11.64%", image: dogecoin },
                { name: "Definitive", symbol: "EDGE", price: "GHS 1.60", change: "↗ 9.10%", image: bnb },
            ],
            [TAB_KEYS.newOnCoinbase]: [
                { name: "Hyperliquid", symbol: "HYPE", price: "GHS 369.59", change: "↗ 11.34%", image: solana },
                { name: "Jupiter", symbol: "JUP", price: "GHS 1.73", change: "↙ 3.71%", image: ethereum, negative: true },
                { name: "Lighter", symbol: "LT", price: "GHS 10.87", change: "↙ 7.89%", image: cardano, negative: true },
                { name: "Walrus", symbol: "WAL", price: "GHS 0.82", change: "↗ 4.56%", image: tether },
                { name: "Sentient", symbol: "SNT", price: "GHS 0.25", change: "↙ 0.92%", image: dogecoin, negative: true },
                { name: "Raydium", symbol: "RAY", price: "GHS 6.46", change: "↗ 3.94%", image: tron },
            ],
        }),
        []
    );

    const coins = tabData[activeTab];

    return (
        <section className="bg-[#EEF1F4] py-20">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* left text */}
                    <div className="mx-auto max-w-md text-center lg:text-left">
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                            Explore crypto like Bitcoin,
                            <br />
                            Ethereum, and Dogecoin.
                        </h2>
                        <p className="mt-3 text-sm text-gray-600">
                            Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
                        </p>

                        <div className="mt-6">
                            <Link
                                to="/explore"
                                className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-xs font-semibold text-white hover:bg-neutral-800"
                            >
                                See more assets
                            </Link>
                        </div>
                    </div>

                    {/* right black card */}
                    <div className="flex w-full justify-center lg:justify-end p-0">
                        <div className="w-full max-w-xl md:h-[480px] rounded-3xl bg-[#0A0F14] p-6 sm:p-9 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)] overflow-hidden">
                            {/* tabs */}
                            <div className="flex items-center gap-2 sm:gap-3 pb-4 flex-wrap">
                                <button
                                    onClick={() => setActiveTab(TAB_KEYS.tradable)}
                                    className={`rounded-full px-3 py-1 text-[13px] sm:text-[15px] font-semibold transition ${activeTab === TAB_KEYS.tradable ? "bg-white/10 text-white" : "text-white/70 hover:text-white"}`}
                                >
                                    Tradable
                                </button>
                                <button
                                    onClick={() => setActiveTab(TAB_KEYS.topGainers)}
                                    className={`rounded-full px-3 py-1 text-[13px] sm:text-[15px] font-semibold transition ${activeTab === TAB_KEYS.topGainers ? "bg-white/10 text-white" : "text-white/70 hover:text-white"}`}
                                >
                                    Top gainers
                                </button>
                                <button
                                    onClick={() => setActiveTab(TAB_KEYS.newOnCoinbase)}
                                    className={`rounded-full px-3 py-1 text-[13px] sm:text-[15px] font-semibold transition ${activeTab === TAB_KEYS.newOnCoinbase ? "bg-white/10 text-white" : "text-white/70 hover:text-white"}`}
                                >
                                    New on Coinbase
                                </button>
                            </div>

                            {/* list */}
                            <div className="space-y-4">
                                {coins.map((coin) => (
                                    <CoinRow
                                        key={coin.name}
                                        name={coin.name}
                                        symbol={coin.symbol}
                                        price={coin.price}
                                        change={coin.change}
                                        image={coin.image}
                                        negative={coin.negative}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
