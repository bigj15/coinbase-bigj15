import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { getAllCrypto } from "../../api/api";
import useApp from "../../context/useApp";

export default function CryptoTableSection({ search }) {
    const navigate = useNavigate();
    const { isLoggedIn } = useApp();
    const [starred, setStarred] = useState(new Set());
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCoins = async () => {
        try {
            setLoading(true);
            const data = await getAllCrypto();
            setCoins(data);
        } catch (err) {
            console.error("Failed to fetch coins:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCoins();
    }, []);

    const toggleStar = (symbol) => {
        setStarred((prev) => {
            const next = new Set(prev);
            next.has(symbol) ? next.delete(symbol) : next.add(symbol);
            return next;
        });
    };

    const filtered = coins.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mt-10">
            <div className="mb-3">
                <div className="min-w-0">
                    <h2 className="text-xl font-bold text-gray-900">
                        Crypto market prices{" "}
                        <span className="text-sm font-normal text-gray-400">{coins.length} assets</span>
                    </h2>
                    <p className="mt-1 max-w-3xl text-xs text-gray-500">
                        The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.04 trillion,
                        representing a 0.27% increase from last week.{" "}
                        <button className="text-[#0052FF] hover:underline font-medium">Read more</button>
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-4">
                {["All assets", "1D", "USD", `${filtered.length} rows`].map((f, i) => (
                    <button key={f} className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                        {i === 0 && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /></svg>}
                        {f}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                ))}
            </div>

            {/* Table */}
            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0052FF]"></div>
                </div>
            ) : (
                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 text-xs text-gray-400">
                                <th className="w-8 px-3 py-3" />
                                <th className="px-3 py-3 text-left font-medium">Asset</th>
                                <th className="px-3 py-3 text-right font-medium">Market price</th>
                                <th className="px-3 py-3 text-right font-medium">Change (24h)</th>
                                <th className="px-3 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((coin) => (
                                <tr key={coin._id || coin.symbol} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                    <td className="px-3 py-4 text-center">
                                        <button onClick={() => toggleStar(coin.symbol)} className="text-gray-300 hover:text-yellow-400 transition-colors">
                                            {starred.has(coin.symbol) ? "\u2605" : "\u2606"}
                                        </button>
                                    </td>

                                    <td className="px-3 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={coin.image} alt={coin.name} className="h-9 w-9 rounded-full" />
                                            <div>
                                                <p className="font-semibold text-gray-900">{coin.name}</p>
                                                <p className="text-xs text-gray-400">{coin.symbol}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-3 py-4 text-right font-semibold text-gray-900">
                                        ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>

                                    <td className={`px-3 py-4 text-right font-medium ${coin.change24h < 0 ? "text-red-500" : "text-emerald-500"}`}>
                                        <div className="flex items-center justify-end gap-1">
                                            {coin.change24h < 0 ? <FiArrowDownLeft size={14} /> : <FiArrowUpRight size={14} />}
                                            <span>{Math.abs(coin.change24h).toFixed(2)}%</span>
                                        </div>
                                    </td>

                                    <td className="px-3 py-4 text-right">
                                        <button
                                            onClick={() => navigate(isLoggedIn ? "/" : "/signup")}
                                            className="rounded-full bg-[#0052FF] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0046d6] transition-colors"
                                        >
                                            Trade
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <p className="mt-4 mb-3 text-center text-xs text-gray-400">{filtered.length} assets displayed</p>
        </div>
    );
}
