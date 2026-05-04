import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import useApp from "../../context/useApp";
import { getTopGainers, getNewListings } from "../../api/api";
import nuxPopularAssets from "../../assets/nuxPopularAssets-5.svg";

export default function ExploreSidebar() {
    const navigate = useNavigate();
    const { isLoggedIn } = useApp();
    const moversRef = useRef(null);
    const newOnRef = useRef(null);

    const [moversScroll, setMoversScroll] = useState({ prev: false, next: true });
    const [newOnScroll, setNewOnScroll] = useState({ prev: false, next: true });

    const [topMovers, setTopMovers] = useState([]);
    const [newOnCoinbase, setNewOnCoinbase] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [gainersData, newData] = await Promise.all([
                    getTopGainers(),
                    getNewListings(),
                ]);
                
                // Format movers
                setTopMovers(gainersData.slice(0, 5).map(m => ({
                    symbol: m.symbol,
                    price: `$${m.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                    change: `${Math.abs(m.change24h).toFixed(2)}%`,
                    pos: m.change24h >= 0,
                    image: m.image
                })));

                // Format new listings
                setNewOnCoinbase(newData.slice(0, 5).map(n => ({
                    label: n.symbol,
                    name: n.name,
                    date: `Added ${new Date(n.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`,
                    image: n.image
                })));

            } catch (err) {
                console.error("Failed to fetch sidebar data:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const updateTrackState = (ref, setState) => {
        if (!ref.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        setState({
            prev: scrollLeft > 2,
            next: scrollLeft + clientWidth < scrollWidth - 2,
        });
    };

    const scrollTrack = (ref, direction) => {
        if (!ref.current) return;
        const distance = ref.current.clientWidth * 0.9;
        ref.current.scrollBy({
            left: direction === "prev" ? -distance : distance,
            behavior: "smooth",
        });
    };

    return (
        <div className="hidden lg:block w-[280px] space-y-3 pt-0">
            {/* Get started card */}
            {!isLoggedIn && (
                <div className="relative w-full overflow-hidden rounded-2xl bg-[#0052FF] px-3 py-3 text-white">
                <div className="max-w-[150px]">
                    <p className="text-xl font-semibold leading-none">Get started</p>
                    <p className="mt-2 text-xs font-medium text-blue-100">Create your account today</p>
                    <button
                        onClick={() => navigate("/signup")}
                        className="mt-6 rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-blue-50"
                    >
                        Sign up
                    </button>
                </div>
                <img
                    src={nuxPopularAssets}
                    alt="Popular assets"
                    className="pointer-events-none absolute -right-0  top-7 w-[90px] pr-3"
                />
                </div>
            )}

            {/* Top movers */}
            <div className="rounded-2xl border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-gray-900">Top movers</p>
                <div className="flex gap-1">
                <button
                    onClick={() => scrollTrack(moversRef, "prev")}
                    disabled={!moversScroll.prev}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button
                    onClick={() => scrollTrack(moversRef, "next")}
                    disabled={!moversScroll.next}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
                </div>
            </div>
            <p className="text-xs text-gray-400 mb-3">24hr change</p>
            <div
                ref={moversRef}
                onScroll={() => updateTrackState(moversRef, setMoversScroll)}
                className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {loading ? (
                    [1,2,3].map(i => <div key={i} className="min-w-[104px] h-[104px] rounded-xl bg-gray-100 animate-pulse" />)
                ) : (
                    topMovers.map((m) => (
                        <div key={m.symbol} className="min-w-[104px] rounded-xl bg-gray-50 p-3">
                            <img
                                src={m.image}
                                alt={`${m.symbol} logo`}
                                className="mb-2 h-8 w-8 rounded-full border border-gray-200 bg-white object-cover"
                            />
                            <p className="text-xs font-bold text-gray-900">{m.symbol}</p>
                            <p className={`mt-0.5 flex items-center gap-1 text-sm font-bold ${m.pos ? "text-emerald-500" : "text-red-500"}`}>
                                {m.pos ? <FiArrowUpRight size={14} /> : <FiArrowDownLeft size={14} />} {m.change}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">{m.price}</p>
                        </div>
                    ))
                )}
            </div>
            </div>

            {/* New on Coinbase */}
            <div className="rounded-2xl border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-gray-900">New on Coinbase</p>
                <div className="flex gap-1">
                <button
                    onClick={() => scrollTrack(newOnRef, "prev")}
                    disabled={!newOnScroll.prev}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button
                    onClick={() => scrollTrack(newOnRef, "next")}
                    disabled={!newOnScroll.next}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
                </div>
            </div>
            <div
                ref={newOnRef}
                onScroll={() => updateTrackState(newOnRef, setNewOnScroll)}
                className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {loading ? (
                    [1,2,3].map(i => <div key={i} className="min-w-[104px] h-[80px] rounded-xl bg-gray-100 animate-pulse" />)
                ) : (
                    newOnCoinbase.map((n) => (
                        <div key={n.label} className="min-w-[104px] rounded-xl bg-gray-50 p-3">
                            {n.image ? (
                                <img src={n.image} className="mb-2 h-8 w-8 rounded-full border border-gray-200 bg-white object-cover" />
                            ) : (
                                <div className="mb-2 h-8 w-8 rounded-full border border-gray-200 bg-white" />
                            )}
                            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{n.label}</p>
                            <p className="text-sm font-semibold text-gray-900">{n.name}</p>
                            <p className="text-xs text-gray-400 mt-1">{n.date}</p>
                        </div>
                    ))
                )}
            </div>
            </div>
        </div>
    );
}
