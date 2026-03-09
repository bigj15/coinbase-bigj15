import { useMemo, useRef, useState } from "react";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { MARKET_STATS } from "../../data/exploreData";

export default function MarketStatsSection() {
    const rowRef = useRef(null);
    const [canScroll, setCanScroll] = useState({ prev: false, next: true });

    const stats = useMemo(() => [...MARKET_STATS, ...MARKET_STATS], []);

    const updateScrollState = () => {
        if (!rowRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
        setCanScroll({
            prev: scrollLeft > 2,
            next: scrollLeft + clientWidth < scrollWidth - 2,
        });
    };

    const scrollRow = (direction) => {
        if (!rowRef.current) return;
        const offset = rowRef.current.clientWidth * 0.8;
        rowRef.current.scrollBy({
            left: direction === "prev" ? -offset : offset,
            behavior: "smooth",
        });
    };

    return (
        <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-gray-900">Market stats</h2>
                <div className="flex gap-2">
                <button
                    onClick={() => scrollRow("prev")}
                    disabled={!canScroll.prev}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button
                    onClick={() => scrollRow("next")}
                    disabled={!canScroll.next}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
                </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">
                The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.04 trillion,
                representing a 0.27% increase from last week.{" "}
                <button className="text-[#0052FF] hover:underline font-medium">Read more</button>
            </p>

            <div
                ref={rowRef}
                onScroll={updateScrollState}
                className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {stats.map((stat, idx) => (
                <div key={`${stat.label}-${idx}`} className="min-w-[220px] flex-1 rounded-2xl border border-gray-100 bg-gray-50 p-4 lg:min-w-[240px]">
                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-base font-bold text-gray-900">{stat.value}</p>
                    <p className={`mt-0.5 flex items-center gap-1 text-xs font-medium ${stat.neg ? "text-red-500" : "text-emerald-500"}`}>
                        {stat.neg ? <FiArrowDownLeft size={12} /> : <FiArrowUpRight size={12} />}
                        <span>{stat.change.replace(/[↘↗]/g, "").trim()}</span>
                    </p>
                    <svg viewBox="0 0 90 30" className="mt-2 h-8 w-full">
                    <path d={stat.spark} fill={stat.neg ? "#fee2e2" : "#dcfce7"} />
                    <path d={stat.spark.split(" L")[0]} fill="none" stroke={stat.neg ? "#ef4444" : "#22c55e"} strokeWidth="1.5" />
                    </svg>
                </div>
                ))}
            </div>
        </div>
    );
}
