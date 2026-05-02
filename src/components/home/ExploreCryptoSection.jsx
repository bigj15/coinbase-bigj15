import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import CoinRow from "../common/CoinRow";
import { getAllCrypto, getTopGainers, getNewListings } from "../../api/api";

const TAB_KEYS = {
    tradable: "tradable",
    topGainers: "top-gainers",
    newOnCoinbase: "new-on-coinbase",
};

export default function ExploreCryptoSection() {
    const [activeTab, setActiveTab] = useState(TAB_KEYS.tradable);
    const [tradable, setTradable] = useState([]);
    const [gainers, setGainers] = useState([]);
    const [newListings, setNewListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [allData, gainersData, newData] = await Promise.all([
                    getAllCrypto(),
                    getTopGainers(),
                    getNewListings(),
                ]);
                setTradable(allData.slice(0, 6));
                setGainers(gainersData.slice(0, 6));
                setNewListings(newData.slice(0, 6));
            } catch (err) {
                console.error("Failed to fetch crypto data:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const formatCoin = (crypto) => ({
        name: crypto.name,
        symbol: crypto.symbol,
        price: `$${crypto.price.toLocaleString()}`,
        change: `${crypto.change24h >= 0 ? "\u2197" : "\u2199"} ${Math.abs(crypto.change24h).toFixed(2)}%`,
        image: crypto.image,
        negative: crypto.change24h < 0,
    });

    const coins = useMemo(() => {
        let data = [];
        if (activeTab === TAB_KEYS.tradable) data = tradable;
        else if (activeTab === TAB_KEYS.topGainers) data = gainers;
        else data = newListings;
        return data.map(formatCoin);
    }, [activeTab, tradable, gainers, newListings]);

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
                                {loading ? (
                                    <div className="flex justify-center py-10">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                                    </div>
                                ) : (
                                    coins.map((coin) => (
                                        <CoinRow
                                            key={coin.name}
                                            name={coin.name}
                                            symbol={coin.symbol}
                                            price={coin.price}
                                            change={coin.change}
                                            image={coin.image}
                                            negative={coin.negative}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
