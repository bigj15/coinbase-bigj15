import { createElement, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FiArrowDown,
    FiArrowUp,
    FiBell,
    FiChevronDown,
    FiChevronRight,
    FiCreditCard,
    FiGrid,
    FiHelpCircle,
    FiHome,
    FiMoreVertical,
    FiSearch,
    FiTrendingUp,
} from "react-icons/fi";
import { TbChartCandle, TbCoins, TbReceipt } from "react-icons/tb";
import { getAllCrypto } from "../api/api";
import useApp from "../context/useApp";
import bitcoin from "../assets/bitcoin.png";
import CoinbaseLogo from "../assets/coinbase_logo_white.png";
import ethereum from "../assets/ethereum.png";
import sol from "../assets/sol.png";

const accountRows = [
    { label: "Crypto", value: "GHS 0.00", icon: TbCoins },
    { label: "Cash", value: "Deposit", detail: "3.35% APY", icon: FiCreditCard, highlight: true },
    { label: "Derivatives", value: "0 positions", icon: TbChartCandle },
];

const derivativeRows = [
    { name: "BTC Perpetual", image: bitcoin },
    { name: "ETH Perpetual", image: ethereum },
    { name: "SOL Perpetual", image: sol, muted: true },
];

function RailButton({ icon: Icon, label, active = false, onClick }) {
    return (
        <button
            onClick={onClick}
            aria-label={label}
            className={`grid h-10 w-10 place-items-center rounded-full transition ${
                active ? "bg-[#051d5a] text-[#5b8cff]" : "text-white hover:bg-white/10"
            }`}
        >
            {createElement(Icon, { size: 21 })}
        </button>
    );
}

function EmptyWatchlistArt() {
    return (
        <div className="relative h-20 w-20">
            <div className="absolute left-5 top-4 grid h-12 w-12 place-items-center rounded-full bg-[#f5dc67] text-2xl font-bold text-black">
                +
            </div>
            <div className="absolute left-1 top-10 h-6 w-6 rounded-full bg-[#5b8cff]" />
            <div className="absolute right-3 top-2 h-7 w-7 rounded-full bg-[#343946]" />
        </div>
    );
}

function SupportArt() {
    return (
        <div className="relative mx-auto h-28 w-28">
            <div className="absolute inset-3 rounded-tl-[30px] rounded-tr-md rounded-br-md rounded-bl-md bg-[#424958]" />
            <div className="absolute left-2 top-7 h-16 w-16 rounded-full border-[12px] border-[#586070]" />
            <div className="absolute left-7 top-4 h-14 w-14 rounded-full border-[8px] border-[#38d5de]" />
            <div className="absolute left-10 top-9 h-14 w-14 rounded-full border-[8px] border-[#f4d762]" />
            <div className="absolute bottom-4 right-2 h-10 w-10 rounded-full border-[8px] border-[#5b8cff]" />
        </div>
    );
}

function SectionArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="grid h-12 w-12 place-items-center rounded-full bg-[#252932] text-white hover:bg-[#303541]"
        >
            <FiChevronRight size={24} />
        </button>
    );
}

function AssetRow({ asset, action = "Buy" }) {
    return (
        <div className={`flex items-center justify-between gap-4 px-0 py-3 ${asset.muted ? "opacity-70" : ""}`}>
            <div className="flex min-w-0 items-center gap-4">
                <img src={asset.image} alt={asset.name} className="h-10 w-10 shrink-0 rounded-full object-cover" />
                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <p className="truncate text-lg font-bold text-white">{asset.name}</p>
                        {asset.name.includes("Perpetual") && (
                            <span className="rounded-md bg-[#252932] px-1.5 py-0.5 text-sm font-bold text-gray-300">
                                50X
                            </span>
                        )}
                    </div>
                    <p className="text-base text-gray-400">{asset.note || "INTX"}</p>
                </div>
            </div>
            <button className="rounded-full bg-[#252932] px-6 py-3 text-lg font-bold text-white hover:bg-[#303541]">
                {action}
            </button>
        </div>
    );
}

export default function Profile() {
    const navigate = useNavigate();
    const { user, isLoggedIn, authLoading, logout } = useApp();
    const [tradeMode, setTradeMode] = useState("Buy");
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [dashboardCrypto, setDashboardCrypto] = useState([]);
    const [cryptoLoading, setCryptoLoading] = useState(true);
    const [cryptoError, setCryptoError] = useState("");

    useEffect(() => {
        if (!authLoading && !isLoggedIn) {
            navigate("/signin");
        }
    }, [authLoading, isLoggedIn, navigate]);

    useEffect(() => {
        async function fetchDashboardCrypto() {
            try {
                setCryptoLoading(true);
                setCryptoError("");
                const data = await getAllCrypto();
                setDashboardCrypto(Array.isArray(data) ? data.slice(0, 3) : []);
            } catch (err) {
                setCryptoError(err.message || "Failed to load crypto assets");
            } finally {
                setCryptoLoading(false);
            }
        }

        if (isLoggedIn) {
            fetchDashboardCrypto();
        }
    }, [isLoggedIn]);

    const initial = useMemo(() => user?.name?.charAt(0)?.toUpperCase() || "U", [user]);

    if (authLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#050608]">
                <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-[#5b8cff]" />
            </div>
        );
    }

    if (!user) return null;

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-[#050608] text-white">
            <div className="flex min-h-screen">
                <aside className="sticky top-0 hidden h-screen w-[76px] shrink-0 flex-col items-center border-r border-white/10 bg-[#070809] px-3 py-5 md:flex">
                    <button onClick={() => navigate("/")} className="mb-10 focus:outline-none" aria-label="Coinbase home">
                        <img src={CoinbaseLogo} alt="Coinbase" className="h-9 w-12 object-contain" />
                    </button>

                    <nav className="flex flex-1 flex-col items-center gap-5">
                        <RailButton icon={FiHome} label="Home" active />
                        <RailButton icon={FiTrendingUp} label="Markets" onClick={() => navigate("/explore")} />
                        <RailButton icon={FiCreditCard} label="Payments" />
                        <RailButton icon={TbReceipt} label="Activity" />
                        <RailButton icon={FiMoreVertical} label="More" />
                    </nav>

                    <div className="mb-5 flex flex-col items-center gap-3">
                        <RailButton icon={TbChartCandle} label="Advanced" />
                        <span className="text-xs font-bold text-white">Advanced</span>
                        <button className="h-6 w-11 rounded-full bg-[#2c303a] p-1">
                            <span className="block h-4 w-4 rounded-full bg-white" />
                        </button>
                    </div>
                </aside>

                <main className="min-w-0 flex-1">
                    <header className="sticky top-0 z-30 flex h-[70px] items-center justify-between border-b border-white/10 bg-[#070809]/95 px-5 backdrop-blur md:px-8">
                        <h1 className="text-2xl font-bold text-white">Home</h1>

                        <div className="flex items-center gap-2.5">
                            <div className="relative hidden w-[280px] md:block lg:w-[430px]">
                                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={18} />
                                <input
                                    placeholder="Search"
                                    className="h-11 w-full rounded-full bg-[#252932] pl-12 pr-5 text-lg text-white outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#5b8cff]"
                                />
                            </div>
                            <button className="grid h-11 w-11 place-items-center rounded-full bg-[#252932] text-white hover:bg-[#303541]">
                                <FiBell size={18} />
                            </button>
                            <button className="grid h-11 w-11 place-items-center rounded-full bg-[#252932] text-white hover:bg-[#303541]">
                                <FiHelpCircle size={21} />
                            </button>
                            <button className="hidden h-11 w-11 place-items-center rounded-full bg-[#252932] text-white hover:bg-[#303541] sm:grid">
                                <FiGrid size={20} />
                            </button>
                            <div className="relative">
                                <button
                                    onClick={() => setShowAccountMenu((prev) => !prev)}
                                    className="grid h-11 w-11 place-items-center rounded-full bg-[#00a6d6] text-base font-bold text-black"
                                    aria-expanded={showAccountMenu}
                                    aria-label="Open account menu"
                                >
                                    {initial}
                                </button>

                                {showAccountMenu && (
                                    <div className="absolute right-0 top-14 z-50 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#151820] text-white shadow-xl">
                                        <div className="px-5 py-4">
                                            <p className="truncate text-sm font-bold">{user.name || "User"}</p>
                                            <p className="mt-1 truncate text-xs text-gray-400">{user.email}</p>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full border-t border-white/10 px-5 py-3 text-center text-sm font-semibold hover:bg-white/10"
                                        >
                                            Log out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </header>

                    <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px]">
                        <div className="min-w-0">
                            <section className="border-b border-white/10 px-5 py-7 md:px-8">
                                <p className="text-4xl font-light tracking-tight text-white sm:text-5xl">GHS 0.00</p>

                                <div className="mt-8 max-w-4xl space-y-4">
                                    {accountRows.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <button
                                                key={item.label}
                                                className="flex w-full items-center justify-between gap-5 rounded-2xl py-1 text-left hover:bg-white/[0.03]"
                                            >
                                                <span className="flex min-w-0 items-center gap-4">
                                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#151820] text-white">
                                                        <Icon size={20} />
                                                    </span>
                                                    <span className="min-w-0">
                                                        <span className="text-base font-bold text-white">{item.label}</span>
                                                        {item.detail && (
                                                            <span className="ml-2 text-base text-emerald-400">{item.detail}</span>
                                                        )}
                                                    </span>
                                                </span>
                                                <span className={`flex items-center gap-3 text-base font-bold ${item.highlight ? "text-[#5b8cff]" : "text-white"}`}>
                                                    {item.value}
                                                    <FiChevronRight className="text-gray-500" />
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </section>

                            <section className="border-b border-white/10 px-5 py-8 md:px-8">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-white">Watchlist</h2>
                                    <SectionArrow onClick={() => navigate("/explore")} />
                                </div>

                                <div className="mt-5 flex flex-col items-center text-center">
                                    <EmptyWatchlistArt />
                                    <h3 className="mt-2 text-xl font-bold text-white">Build your watchlist</h3>
                                    <p className="mt-3 text-base text-gray-400">
                                        Keep track of crypto prices by adding assets to your watchlist
                                    </p>
                                    <button
                                        onClick={() => navigate("/explore")}
                                        className="mt-6 w-full max-w-4xl rounded-full bg-[#252932] px-6 py-3.5 text-base font-bold text-white hover:bg-[#303541]"
                                    >
                                        Add to watchlist
                                    </button>
                                </div>
                            </section>

                            <section className="border-b border-white/10 px-5 py-7 md:px-8">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">Crypto</h2>
                                        <p className="mt-1 text-lg text-gray-400">Trade millions of assets</p>
                                    </div>
                                    <SectionArrow onClick={() => navigate("/explore")} />
                                </div>

                                <div className="mt-7 max-w-4xl">
                                    {cryptoLoading && (
                                        <div className="py-6 text-base font-semibold text-gray-400">Loading crypto assets...</div>
                                    )}

                                    {!cryptoLoading && cryptoError && (
                                        <div className="py-6 text-base font-semibold text-red-400">{cryptoError}</div>
                                    )}

                                    {!cryptoLoading && !cryptoError && dashboardCrypto.length === 0 && (
                                        <div className="py-6 text-base font-semibold text-gray-400">No crypto assets available.</div>
                                    )}

                                    {!cryptoLoading && !cryptoError && dashboardCrypto.map((asset, index) => (
                                        <AssetRow
                                            key={asset._id || asset.symbol || asset.name}
                                            asset={{
                                                name: asset.name,
                                                note: index < 2 ? "Most popular" : "Most traded today",
                                                image: asset.image,
                                                muted: index === 2,
                                            }}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={() => navigate("/explore")}
                                    className="mt-4 w-full max-w-4xl rounded-full bg-[#252932] px-6 py-3.5 text-base font-bold text-white hover:bg-[#303541]"
                                >
                                    Explore all crypto
                                </button>
                            </section>

                            <section className="border-b border-white/10 px-5 py-7 md:px-8">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">Cash</h2>
                                        <p className="mt-1 text-lg text-gray-400">
                                            Earn <span className="text-emerald-400">3.35% APY</span>
                                        </p>
                                    </div>
                                    <SectionArrow />
                                </div>

                                <button className="mt-10 w-full max-w-4xl rounded-full bg-[#252932] px-6 py-3.5 text-base font-bold text-white hover:bg-[#303541]">
                                    Deposit cash
                                </button>
                            </section>

                            <section className="border-b border-white/10 px-5 py-7 md:px-8">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">Derivatives</h2>
                                        <p className="mt-1 text-lg text-gray-400">Trade with up to 50x leverage</p>
                                    </div>
                                    <SectionArrow />
                                </div>

                                <div className="mt-7 max-w-4xl">
                                    {derivativeRows.map((asset) => (
                                        <AssetRow key={asset.name} asset={asset} action="Trade" />
                                    ))}
                                </div>
                            </section>

                            <footer className="px-5 py-8 text-sm text-gray-400 md:px-8">
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                                    <a href="#" className="underline hover:text-white">Careers</a>
                                    <a href="#" className="underline hover:text-white">Legal & Privacy</a>
                                    <a href="#" className="underline hover:text-white">Accessibility Statement</a>
                                    <span>&copy; 2026 Coinbase</span>
                                </div>
                                <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#252932] px-5 py-3 text-base font-bold text-white hover:bg-[#303541]">
                                    English
                                    <FiChevronDown />
                                </button>
                            </footer>
                        </div>

                        <aside className="border-t border-white/10 bg-[#050608] lg:border-l lg:border-t-0">
                            <section className="border-b border-white/10 px-5 py-6 text-center md:px-8">
                                <div className="inline-flex rounded-full bg-[#252932] p-1">
                                    {["Buy", "Sell", "Convert"].map((mode) => (
                                        <button
                                            key={mode}
                                            onClick={() => setTradeMode(mode)}
                                            className={`rounded-full px-5 py-2.5 text-base font-bold transition ${
                                                tradeMode === mode ? "bg-white text-black" : "text-white hover:bg-white/10"
                                            }`}
                                        >
                                            {mode}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-12">
                                    <SupportArt />
                                    <h2 className="mt-8 text-3xl font-bold text-white">{tradeMode}s not supported</h2>
                                    <p className="mx-auto mt-5 max-w-sm text-lg leading-relaxed text-white">
                                        Coinbase does not currently support {tradeMode.toLowerCase()}s in your country.
                                        Subscribe to our blog to be notified when we add support for your country.
                                    </p>
                                    <button className="mt-9 w-full rounded-full bg-[#5b8cff] px-6 py-4 text-lg font-bold text-black hover:bg-[#76a0ff]">
                                        Subscribe now
                                    </button>
                                </div>
                            </section>

                            <section className="px-7 py-8">
                                <div className="mx-auto max-w-sm space-y-6">
                                    <button className="flex w-full items-center gap-5 text-left text-xl font-bold text-white">
                                        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#5b8cff] text-black">
                                            <FiArrowUp size={24} />
                                        </span>
                                        Send crypto
                                    </button>
                                    <button className="flex w-full items-center gap-5 text-left text-xl font-bold text-white">
                                        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#5b8cff] text-black">
                                            <FiArrowDown size={24} />
                                        </span>
                                        Receive crypto
                                    </button>
                                </div>
                            </section>
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    );
}
