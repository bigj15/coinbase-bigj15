import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { COINS } from "../../data/exploreData";

export default function CryptoTableSection({ search }) {
    const navigate = useNavigate();
    const [starred, setStarred] = useState(new Set());

    const toggleStar = (symbol) => {
        setStarred((prev) => {
        const next = new Set(prev);
        next.has(symbol) ? next.delete(symbol) : next.add(symbol);
        return next;
        });
    };

    const filtered = COINS.filter(
        (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between mb-3">
                <div>
                <h2 className="text-xl font-bold text-gray-900">
                    Crypto market prices{" "}
                    <span className="text-sm font-normal text-gray-400">18,563 assets</span>
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                    The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.04 trillion,
                    representing a 0.27% increase from last week.{" "}
                    <button className="text-[#0052FF] hover:underline font-medium">Read more</button>
                </p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-4">
                {["All assets", "1D", "GHS", "10 rows"].map((f, i) => (
                <button key={f} className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                    {i === 0 && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>}
                    {f}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-gray-100">
                <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-gray-100 text-xs text-gray-400">
                    <th className="w-8 px-3 py-3" />
                    <th className="px-3 py-3 text-left font-medium">
                        Asset
                        <button className="ml-1 text-gray-300 hover:text-gray-500">⇅</button>
                    </th>
                    <th className="px-3 py-3 text-right font-medium">
                        Market price
                        <button className="ml-1 text-gray-300 hover:text-gray-500">⇅</button>
                    </th>
                    <th className="px-3 py-3 text-center font-medium">Chart</th>
                    <th className="px-3 py-3 text-right font-medium">
                        Change
                        <button className="ml-1 text-gray-300 hover:text-gray-500">⇅</button>
                    </th>
                    <th className="px-3 py-3 text-right font-medium text-[#0052FF]">
                        Mkt cap
                        <button className="ml-1 text-blue-300 hover:text-blue-500">⇅</button>
                    </th>
                    <th className="px-3 py-3 text-right font-medium">
                        Volume
                        <button className="ml-1 text-gray-300 hover:text-gray-500">⇅</button>
                    </th>
                    <th className="px-3 py-3 text-right font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((coin) => (
                    <tr key={coin.symbol} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        {/* Star */}
                        <td className="px-3 py-4 text-center">
                        <button onClick={() => toggleStar(coin.symbol)} className="text-gray-300 hover:text-yellow-400 transition-colors">
                            {starred.has(coin.symbol) ? "★" : "☆"}
                        </button>
                        </td>

                        {/* Asset */}
                        <td className="px-3 py-4">
                        <div className="flex items-center gap-3">
                            <img src={coin.image} alt={coin.name} className="h-9 w-9 rounded-full" />
                            <div>
                            <p className="font-semibold text-gray-900">{coin.name}</p>
                            <p className="text-xs text-gray-400">
                                {coin.symbol}
                                {coin.note && <span className="ml-1 text-emerald-600">• {coin.note}</span>}
                            </p>
                            </div>
                        </div>
                        </td>

                        {/* Price */}
                        <td className="px-3 py-4 text-right font-semibold text-gray-900">
                        {coin.price}
                        </td>

                        {/* Sparkline */}
                        <td className="px-3 py-4 text-center">
                        <svg viewBox="0 0 90 30" className="h-8 w-20 mx-auto">
                            <path d={coin.spark} fill={coin.neg ? "#fee2e250" : "#dcfce750"} />
                            <path d={coin.spark.split(" L")[0]} fill="none" stroke={coin.neg ? "#ef4444" : "#22c55e"} strokeWidth="1.8" />
                        </svg>
                        </td>

                        {/* Change */}
                        <td className={`px-3 py-4 text-right font-medium ${coin.neg ? "text-red-500" : "text-emerald-500"}`}>
                            <div className="flex items-center justify-end gap-1">
                                {coin.neg ? <FiArrowDownLeft size={14} /> : <FiArrowUpRight size={14} />}
                                <span>{coin.change.replace(/^[+-]/, "")}</span>
                            </div>
                        </td>

                        {/* Mkt cap */}
                        <td className="px-3 py-4 text-right text-gray-700">{coin.mktCap}</td>

                        {/* Volume */}
                        <td className="px-3 py-4 text-right text-gray-700">{coin.volume}</td>

                        {/* Trade button */}
                        <td className="px-3 py-4 text-right">
                        {coin.symbol !== "TRX" && (
                            <button
                            onClick={() => navigate("/signup")}
                            className="rounded-full bg-[#0052FF] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0046d6] transition-colors"
                            >
                            Trade
                            </button>
                        )}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex items-center justify-center gap-2">
                {[1, 2, 3, "...", "1,857"].map((p, i) => (
                <button
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors
                    ${p === 1 ? "bg-[#0052FF] text-white" : "text-gray-600 hover:bg-gray-100"}`}
                >
                    {p}
                </button>
                ))}
                <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
            </div>
            <p className="mt-2 text-center text-xs text-gray-400">1–10 of 18,563 assets</p>
        </div>
    );
}
