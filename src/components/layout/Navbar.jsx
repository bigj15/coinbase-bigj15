import { Link, NavLink } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    FiSearch,
    FiGlobe,
    FiCheck,
    FiChevronDown,
    FiChevronUp,
    } from "react-icons/fi";
    import {
    HiOutlineCube,
    HiOutlineBuildingLibrary,
    HiOutlineWallet,
    HiOutlineUserGroup,
    HiOutlineAcademicCap,
    HiOutlineChartBar,
    HiOutlineGlobeAlt,
    HiOutlineBanknotes,
    HiOutlineCircleStack,
    } from "react-icons/hi2";
    import {
    TbArrowsExchange,
    TbCoin,
    TbChartCandle,
    TbPercentage,
    TbLockSquare,
    TbPlugConnected,
    TbWorld,
    TbBrandGoogleAnalytics,
    TbBuildingBank,
    TbApps,
    TbFileDollar,
    TbCurrencyDollar,
    TbHelpCircle,
    TbArticle,
    TbAffiliate,
    } from "react-icons/tb";
    import { FiBriefcase, FiCreditCard, FiBookOpen, FiShield } from "react-icons/fi";

    import logo from "../../assets/coinbase_logo.png";
    import individualsPromo from "../../assets/individuals-promo.png";
    import businessesPromo from "../../assets/business-promo.png";
    import institutionsPromo from "../../assets/institutions-promo.png";
    import developersPromo from "../../assets/developers-promo.jpg";
    import companyPromo from "../../assets/company-promo.png";

    import bitcoin from "../../assets/bitcoin.png";
    import ethereum from "../../assets/ethereum.png";
    import tether from "../../assets/tether.png";
    import usdc from "../../assets/usdc.png";
    import bnb from "../../assets/bnb.png";
    import xrp from "../../assets/xrp.png";

    import apple from "../../assets/apple.png";
    import arnold from "../../assets/arnold.png";
    import puerto from "../../assets/puerto.png";
    import joburg from "../../assets/joburg.png";
    import sol from "../../assets/sol.png";

    const menuData = {
    individuals: {
        columns: [
        [
            { title: "Buy and sell", desc: "Buy, sell, and use crypto", icon: TbCoin },
            { title: "Base App", desc: "Post, earn, trade, and chat, all in one place", icon: TbApps },
            { title: "Coinbase One", desc: "Get zero trading fees and more", icon: TbPercentage },
            { title: "Private Client", desc: "For trusts, family offices, UHNWIs", icon: HiOutlineUserGroup },
            { title: "Onchain", desc: "Dive into the world of onchain apps", icon: TbPlugConnected },
            { title: "Learn", desc: "Crypto tips and guides", icon: FiBookOpen, path: "/learn" },
        ],
        [
            { title: "Advanced", desc: "Professional-grade trading tools", icon: TbChartCandle },
            { title: "Earn", desc: "Stake your crypto and earn rewards", icon: TbPercentage },
            { title: "Coinbase Wealth", desc: "Institutional-grade services for UHNW", icon: HiOutlineBuildingLibrary },
            { title: "Credit Card", desc: "Earn up to 4% bitcoin back", icon: FiCreditCard },
            { title: "Debit Card", desc: "Spend crypto, get crypto back", icon: HiOutlineWallet },
        ],
        ],
        promo: {
        image: individualsPromo,
        heading: "System Update 2025",
        text: "The next chapter of Coinbase. Live on X 12/17.",
        cta: "Learn more",
        },
    },
    businesses: {
        columns: [
        [
            { title: "Business", desc: "Crypto trading and payments for startups and SMBs", icon: FiBriefcase },
            { title: "Asset Listings", desc: "List your asset on Coinbase", icon: HiOutlineCube, path: "/asset-details" },
        ],
        [
            { title: "Payments", desc: "The stablecoin payments stack for commerce platforms", icon: HiOutlineBanknotes },
            { title: "Token Manager", desc: "The platform for token distributions, vesting, and lockups", icon: TbArrowsExchange },
        ],
        ],
        promo: {
        image: businessesPromo,
        heading: "Commerce Payments Protocol",
        text: "A new standard for onchain payments.",
        cta: "Go to Payments",
        },
    },
    institutions: {
        columns: [
        [
            { title: "Prime", desc: "", icon: TbWorld },
            { title: "Trading and Financing", desc: "Professional prime brokerage services", icon: TbChartCandle },
            { title: "Custody", desc: "Securely store all your digital assets", icon: TbLockSquare },
            { title: "Staking", desc: "Explore staking across our products", icon: TbPercentage },
            { title: "Onchain Wallet", desc: "Institutional-grade wallet to get onchain", icon: HiOutlineWallet },
        ],
        [
            { title: "Markets", desc: "", icon: HiOutlineChartBar },
            { title: "Exchange", desc: "Spot markets for high-frequency trading", icon: TbArrowsExchange },
            { title: "International Exchange", desc: "Access perpetual futures markets", icon: HiOutlineGlobeAlt },
            { title: "Derivatives Exchange", desc: "Trade an accessible futures market", icon: TbBrandGoogleAnalytics },
            { title: "Verified Pools", desc: "Transparent, verified liquidity pools", icon: HiOutlineCircleStack },
        ],
        ],
        promo: {
        image: institutionsPromo,
        heading: "Our clients",
        text: "Trusted by institutions and government.",
        cta: "Learn more",
        },
    },
    developers: {
        columns: [
        [
            { title: "Coinbase Developer Platform", desc: "", icon: TbApps },
            { title: "Payments", desc: "Fast and global stablecoin payments with a single integration", icon: HiOutlineBanknotes },
            { title: "Trading", desc: "Launch crypto trading and custody for your users", icon: TbChartCandle },
            { title: "Wallets", desc: "Deploy customizable and scalable wallets for your business", icon: HiOutlineWallet },
            { title: "Stablecoins", desc: "Access USDC and Coinbase Custom Stablecoins", icon: TbCurrencyDollar },
        ],
        [
            { title: "Solutions for any company", desc: "", icon: FiBriefcase },
            { title: "Banks & Brokerages", desc: "Secure, regulated offerings for retail, private banking, & institutional clients", icon: TbBuildingBank },
            { title: "Payment Firms", desc: "Near-instant, low-cost, global payment rails for modern providers", icon: TbFileDollar },
            { title: "Startups", desc: "Launch your business with the world's leader in crypto", icon: HiOutlineAcademicCap },
        ],
        ],
        promo: {
        image: developersPromo,
        heading: "World class crypto infrastructure.",
        text: "Discover Coinbase's complete crypto-as-a-service platform.",
        cta: "Learn more",
        },
    },
    company: {
        columns: [
        [
            { title: "About", desc: "Powering the crypto economy", icon: FiBookOpen },
            { title: "Affiliates", desc: "Help introduce the world to crypto", icon: TbAffiliate },
            { title: "Blog", desc: "Read the latest from Coinbase", icon: TbArticle },
        ],
        [
            { title: "Careers", desc: "Work with us", icon: FiBriefcase },
            { title: "Support", desc: "Find answers to your questions", icon: TbHelpCircle },
            { title: "Security", desc: "The most trusted & secure", icon: FiShield },
        ],
        ],
        promo: {
        image: companyPromo,
        heading: "Learn all about Coinbase:",
        text: "We're building the open financial system.",
        cta: "Create your account",
        },
    },
    };

    const marketTabs = ["Top", "Crypto", "Stocks", "Predictions", "Perpetuals", "Futures"];

    const marketItems = {
    Top: [
        {
        section: "CRYPTO",
        items: [
            {
            image: bitcoin,
            name: "Bitcoin",
            symbol: "BTC",
            badge: "#1",
            meta1: "GHS 24.5B vol",
            meta2: "GHS 1.4T mcap",
            price: "GHS 6,823.19",
            change: "↘ 0.42%",
            negative: true,
            },
            {
            image: ethereum,
            name: "Ethereum",
            symbol: "ETH",
            badge: "#2",
            meta1: "GHS 10.9B vol",
            meta2: "GHS 236.2B mcap",
            price: "GHS 1,965.97",
            change: "↘ 0.96%",
            negative: true,
            },
            {
            image: tether,
            name: "Tether",
            symbol: "USDT",
            badge: "#3",
            meta1: "GHS 499B vol",
            meta2: "GHS 184B mcap",
            price: "GHS 1.00",
            change: "↘ 0.00%",
            negative: true,
            },
        ],
        },
        {
        section: "STOCKS",
        items: [
            {
            image: apple,
            name: "NVIDIA",
            symbol: "NVDA",
            meta1: "GHS 189.6M vol",
            meta2: "GHS 4.3T mcap",
            price: "GHS 178.03",
            change: "↘ 2.90%",
            negative: true,
            },
            {
            image: apple,
            name: "Apple",
            symbol: "AAPL",
            meta1: "GHS 41.2M vol",
            meta2: "GHS 3.8T mcap",
            price: "GHS 257.00",
            change: "↘ 1.26%",
            negative: true,
            },
            {
            image: apple,
            name: "Alphabet Inc. Class A",
            symbol: "GOOGL",
            meta1: "GHS 25.6M vol",
            meta2: "GHS 3.6T mcap",
            price: "GHS 297.13",
            change: "↘ 1.25%",
            negative: true,
            },
        ],
        },
        {
        section: "PREDICTIONS",
        items: [
            {
            image: apple,
            name: "Arnold Palmer Invitational Winner?",
            symbol: "Daniel Berger",
            price: "53%",
            change: "↗ 8",
            negative: false,
            },
        ],
        },
    ],
    Crypto: [
        {
        section: "CRYPTO",
        items: [
            {
            image: bitcoin,
            name: "Bitcoin",
            symbol: "BTC",
            badge: "#1",
            meta1: "GHS 24.5B vol",
            meta2: "GHS 1.4T mcap",
            price: "GHS 6,823.19",
            change: "↘ 0.42%",
            negative: true,
            },
            {
            image: ethereum,
            name: "Ethereum",
            symbol: "ETH",
            badge: "#2",
            meta1: "GHS 10.9B vol",
            meta2: "GHS 236.2B mcap",
            price: "GHS 1,965.97",
            change: "↘ 0.96%",
            negative: true,
            },
            {
            image: tether,
            name: "Tether",
            symbol: "USDT",
            badge: "#3",
            meta1: "GHS 499B vol",
            meta2: "GHS 184B mcap",
            price: "GHS 1.00",
            change: "↘ 0.00%",
            negative: true,
            },
            {
            image: bnb,
            name: "BNB",
            symbol: "BNB",
            meta1: "GHS 7.6M vol",
            meta2: "GHS 84B mcap",
            price: "GHS 2,435.00",
            change: "↗ 1.20%",
            negative: false,
            },
            {
            image: xrp,
            name: "XRP",
            symbol: "XRP",
            meta1: "GHS 5.1M vol",
            meta2: "GHS 66B mcap",
            price: "GHS 10.13",
            change: "↘ 0.75%",
            negative: true,
            },
            {
            image: usdc,
            name: "USDC",
            symbol: "USDC",
            meta1: "GHS 62M vol",
            meta2: "GHS 58B mcap",
            price: "GHS 1.00",
            change: "↘ 0.00%",
            negative: true,
            },
        ],
        },
    ],
    Stocks: [
        {
        section: "STOCKS",
        items: [
            {
            image: apple,
            name: "NVIDIA",
            symbol: "NVDA",
            meta1: "GHS 189.6M vol",
            meta2: "GHS 4.3T mcap",
            price: "GHS 178.03",
            change: "↘ 2.90%",
            negative: true,
            },
            {
            image: apple,
            name: "Apple",
            symbol: "AAPL",
            meta1: "GHS 41.2M vol",
            meta2: "GHS 3.8T mcap",
            price: "GHS 257.00",
            change: "↘ 1.26%",
            negative: true,
            },
            {
            image: apple,
            name: "Alphabet Inc. Class A",
            symbol: "GOOGL",
            meta1: "GHS 25.6M vol",
            meta2: "GHS 3.6T mcap",
            price: "GHS 297.13",
            change: "↘ 1.25%",
            negative: true,
            },
        ],
        },
    ],
    Predictions: [
        {
        section: "PREDICTIONS",
        items: [
            {
            image: arnold,
            name: "Arnold Palmer Invitational Winner?",
            symbol: "Daniel Berger",
            price: "53%",
            change: "↗ 8",
            negative: false,
            },
            {
            image: puerto,
            name: "Puerto Rico Open Winner?",
            symbol: "Ricky Castillo",
            price: "27%",
            change: "↗ 17",
            negative: false,
            },
            {
            image: joburg,
            name: "LIV Golf Hong Kong Champion?",
            symbol: "Jon Rahm",
            price: "99%",
            change: "↗ 64",
            negative: false,
            },
        ],
        },
    ],
    Perpetuals: [
        {
        section: "PERPETUALS",
        items: [
            {
            image: bitcoin,
            name: "BTC PERP",
            symbol: "CDE",
            meta1: "GHS 92M vol",
            meta2: "0.0004% fund",
            price: "GHS 67,795.00",
            change: "↘ 0.32%",
            negative: true,
            },
            {
            image: ethereum,
            name: "ETH PERP",
            symbol: "CDE",
            meta1: "GHS 20.2M vol",
            meta2: "0.0011% fund",
            price: "GHS 1,966.50",
            change: "↘ 1.01%",
            negative: true,
            },
            {
            image: sol,
            name: "SOL PERP",
            symbol: "CDE",
            meta1: "GHS 7.5M vol",
            meta2: "-0.0007% fund",
            price: "GHS 83.23",
            change: "↘ 1.58%",
            negative: true,
            },
        ],
        },
    ],
    Futures: [
        {
        section: "FUTURES",
        items: [
            {
            image: bitcoin,
            name: "BTC Futures",
            symbol: "Mar 2026 · CDE",
            meta1: "GHS 18.9M vol",
            meta2: "GHS 43.8K oi",
            price: "GHS 68,020.00",
            change: "↘ 0.18%",
            negative: true,
            highlighted: true,
            },
            {
            image: ethereum,
            name: "ETH Futures",
            symbol: "Mar 2026 · CDE",
            meta1: "GHS 4.9M vol",
            meta2: "GHS 55.5K oi",
            price: "GHS 1,956.50",
            change: "↘ 1.78%",
            negative: true,
            },
            {
            image: sol,
            name: "SOL Futures",
            symbol: "Mar 2026 · CDE",
            meta1: "GHS 1.2M vol",
            meta2: "GHS 13.3K oi",
            price: "GHS 83.16",
            change: "↘ 1.93%",
            negative: true,
            },
        ],
        },
    ],
};

const languages = [
    { name: "English", region: "Global" },
    { name: "Español", region: "United States" },
    { name: "English", region: "United States" },
    { name: "Deutsch", region: "Deutschland" },
    { name: "Français", region: "France" },
    { name: "Italiano", region: "Italia" },
];

function MegaMenu({ menu }) {
    if (!menu) return null;

    return (
        <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-sm">
        <div className="mx-auto grid max-w-7xl gap-10 px-8 py-10 lg:grid-cols-[1.2fr_1.2fr_1fr]">
            {menu.columns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-4">
                {column.map((item, idx) => {
                const Icon = item.icon;
                return (
                    <Link
                    key={idx}
                    to={item.path || "/"}
                    className="flex items-start gap-4 rounded-xl p-2 transition hover:bg-gray-50"
                    >
                    <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gray-100 text-gray-900">
                        {Icon && <Icon size={18} />}
                    </div>

                    <div>
                        <p className={`${item.desc ? "text-sm font-semibold text-gray-900" : "text-sm font-bold text-gray-900"}`}>
                        {item.title}
                        </p>
                        {item.desc && <p className="mt-1 text-sm text-gray-600">{item.desc}</p>}
                    </div>
                    </Link>
                );
                })}
            </div>
        ))}

        <div className="flex flex-col justify-start">
            <div className="h-36 w-36 overflow-hidden rounded-3xl bg-blue-600">
                <img
                src={menu.promo.image}
                alt={menu.promo.heading}
                className="h-full w-full object-cover"
                />
            </div>

            <h3 className="mt-4 text-2xl font-medium text-gray-900">{menu.promo.heading}</h3>
            <p className="mt-2 text-sm text-gray-600">{menu.promo.text}</p>

            <Link
                to="/"
                className="mt-5 w-fit text-sm font-semibold text-black underline underline-offset-4"
            >
                {menu.promo.cta}
            </Link>
            </div>
        </div>
        </div>
    );
    }

function SearchPanel({ searchTab, setSearchTab, searchQuery }) {
    const filteredSections = useMemo(() => {
        const sections = marketItems[searchTab] || [];
        if (!searchQuery.trim()) return sections;

        return sections
        .map((section) => ({
            ...section,
            items: section.items.filter((item) =>
            `${item.name} ${item.symbol} ${item.meta1 || ""} ${item.meta2 || ""}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            ),
        }))
        .filter((section) => section.items.length > 0);
    }, [searchTab, searchQuery]);

    return (
        <div className="absolute right-0 top-[70px] z-50 w-[420px] overflow-hidden rounded-[20px] bg-[#F6F7F8] shadow-[0_15px_45px_rgba(0,0,0,0.15)]">

        {/* tabs */}
        <div className="flex gap-2 border-b border-gray-200 px-4 py-3">
            {marketTabs.map((tab) => (
            <button
                key={tab}
                onClick={() => setSearchTab(tab)}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                searchTab === tab
                    ? "bg-[#2B2F38] text-white"
                    : "bg-[#E9EAEC] text-gray-900 hover:bg-[#DFE1E5]"
                }`}
            >
                {tab}
            </button>
            ))}
        </div>

        {/* results */}
        <div className="max-h-[420px] overflow-y-auto px-4 py-3">

            {filteredSections.map((section) => (
            <div key={section.section} className="mb-5">

                <p className="mb-2 text-[10px] font-bold tracking-wide text-gray-500">
                {section.section}
                </p>

                <div className="space-y-2">

                {section.items.map((item, index) => (
                    <Link
                    to="/"
                    key={`${item.name}-${index}`}
                    className={`grid grid-cols-[1.6fr_1fr_0.8fr] items-center gap-3 rounded-xl px-2 py-2 hover:bg-[#ECEDEF] ${
                        item.highlighted ? "bg-[#E9EAEC]" : ""
                    }`}
                    >

                    {/* coin info */}
                    <div className="flex items-center gap-2">

                        <img
                        src={item.image}
                        alt={item.name}
                        className="h-7 w-7 rounded-full object-cover"
                        />

                        <div className="min-w-0">

                        <div className="flex items-center gap-1">
                            <p className="truncate text-xs font-semibold text-gray-900">
                            {item.name}
                            </p>

                            {item.badge && (
                            <span className="rounded bg-[#E2E4E8] px-1 text-[9px] font-semibold text-gray-600">
                                {item.badge}
                            </span>
                            )}
                        </div>

                        <p className="truncate text-[11px] text-gray-500">
                            {item.symbol}
                        </p>

                        </div>
                    </div>

                    {/* volume */}
                    <div className="text-[11px] text-gray-600">
                        {item.meta1 && <p>{item.meta1}</p>}
                        {item.meta2 && <p>{item.meta2}</p>}
                    </div>

                    {/* price */}
                    <div className="text-right">

                        <p className="text-xs font-medium text-gray-900">
                        {item.price}
                        </p>

                        <p
                        className={`text-[11px] ${
                            item.negative ? "text-red-500" : "text-green-600"
                        }`}
                        >
                        {item.change}
                        </p>

                    </div>

                    </Link>
                ))}

                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

function LanguagePanel({ languageQuery, setLanguageQuery, selectedLanguage, setSelectedLanguage }) {
    const filteredLanguages = useMemo(() => {
        if (!languageQuery.trim()) return languages;
        return languages.filter((item) =>
        `${item.name} ${item.region}`.toLowerCase().includes(languageQuery.toLowerCase())
        );
    }, [languageQuery]);

    return (
    <div className="absolute right-0 top-[70px] z-50 w-[300px] rounded-[20px] bg-[#F6F7F8] px-5 py-5 shadow-[0_15px_45px_rgba(0,0,0,0.15)]">
        <h3 className="text-[18px] font-semibold text-gray-900">Language and region</h3>

        <div className="mt-5 flex items-center rounded-full bg-[#E7E9EC] px-4 py-3">
            <FiSearch className="mr-3 text-gray-500" />
            <input
            value={languageQuery}
            onChange={(e) => setLanguageQuery(e.target.value)}
            placeholder="Search"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
            />
        </div>

        <div className="mt-5 max-h-[250px] overflow-y-auto pr-1">
            {filteredLanguages.map((item, index) => {
            const active =
                selectedLanguage.name === item.name && selectedLanguage.region === item.region;

            return (
                <button
                key={`${item.name}-${item.region}-${index}`}
                onClick={() => setSelectedLanguage(item)}
                className="flex w-full items-start justify-between rounded-xl px-1 py-3 text-left hover:bg-[#ECEDEF]"
                >
                <div>
                    <p className="text-[14px] font-semibold leading-none text-gray-900">{item.name}</p>
                    <p className="mt-1 text-[14px] leading-none text-gray-500">{item.region}</p>
                </div>
                {active && <FiCheck className="mt-3 text-[7px] text-green-600" />}
                </button>
            );
            })}
        </div>

        <div className="mt-4 flex items-center justify-end text-gray-500">
            <FiChevronDown />
        </div>
        </div>
    );
}

function DesktopNavItem({ label, menuKey, activeMenu, setActiveMenu, closePanels }) {
    const isOpen = activeMenu === menuKey;

    return (
        <div
        className="relative"
        onMouseEnter={() => {
            closePanels();
            setActiveMenu(menuKey);
        }}
    >
        <button
            onClick={() => {
            closePanels();
            setActiveMenu(isOpen ? null : menuKey);
            }}
            className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
            isOpen ? "bg-gray-100 text-gray-900" : "text-gray-900 hover:bg-gray-50"
            }`}
        >
            {label}
        </button>
        </div>
    );
}

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [showSearchPanel, setShowSearchPanel] = useState(false);
    const [showLanguagePanel, setShowLanguagePanel] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [searchTab, setSearchTab] = useState("Top");
    const [searchQuery, setSearchQuery] = useState("");

    const [languageQuery, setLanguageQuery] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState({
        name: "English",
        region: "Global",
    });

    const wrapperRef = useRef(null);

    function closePanels() {
        setShowSearchPanel(false);
        setShowLanguagePanel(false);
    }

    useEffect(() => {
    function handleClickOutside(e) {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            setActiveMenu(null);
            setShowSearchPanel(false);
            setShowLanguagePanel(false);
        }
    }

    function handleEsc(e) {
        if (e.key === "Escape") {
            setActiveMenu(null);
            setShowSearchPanel(false);
            setShowLanguagePanel(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <header
        ref={wrapperRef}
        className="sticky top-0 z-50 bg-white"
        onMouseLeave={() => setActiveMenu(null)}
        >
        <div className="border-b border-gray-200">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center">
                <img src={logo} alt="Coinbase" className="h-8 w-auto" />
                </Link>

                <nav className="hidden items-center gap-1 lg:flex">
                <NavLink
                    to="/explore"
                    className="rounded-full px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                    Cryptocurrencies
                </NavLink>

                <DesktopNavItem
                    label="Individuals"
                    menuKey="individuals"
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                    closePanels={closePanels}
                />
                <DesktopNavItem
                    label="Businesses"
                    menuKey="businesses"
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                    closePanels={closePanels}
                />
                <DesktopNavItem
                    label="Institutions"
                    menuKey="institutions"
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                    closePanels={closePanels}
                />
                <DesktopNavItem
                    label="Developers"
                    menuKey="developers"
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                    closePanels={closePanels}
                />
                <DesktopNavItem
                    label="Company"
                    menuKey="company"
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                    closePanels={closePanels}
                />
                </nav>
            </div>

            {/* Desktop right side actions - hidden on mobile/tablet */}
            <div className="hidden relative items-center gap-3 lg:flex">
                <div className="relative">
                <button
                    onClick={() => {
                    setActiveMenu(null);
                    setShowLanguagePanel(false);
                    setShowSearchPanel((prev) => !prev);
                    }}
                    className={`grid h-10 w-10 place-items-center rounded-full bg-gray-100 hover:bg-gray-200 ${
                    showSearchPanel ? "ring-2 ring-[#0052FF]" : ""
                    }`}
                >
                    <FiSearch className="text-gray-900" />
                </button>

                {showSearchPanel && (
                    <div className="absolute right-0 top-[52px]">
                    <div className="mb-3 flex w-[420px] items-center rounded-full border-2 border-[#0052FF] bg-white px-4 py-2">
                        <FiSearch className="mr-2 text-[#0052FF]" />
                        <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search"
                        className="w-full bg-transparent text-lg outline-none placeholder:text-gray-500"
                    />
                    </div>
                    <SearchPanel
                        searchTab={searchTab}
                        setSearchTab={setSearchTab}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                    </div>
                )}
                </div>

                <div className="relative">
                <button
                    onClick={() => {
                    setActiveMenu(null);
                    setShowSearchPanel(false);
                    setShowLanguagePanel((prev) => !prev);
                    }}
                    className={`grid h-10 w-10 place-items-center rounded-full bg-gray-100 hover:bg-gray-200 ${
                    showLanguagePanel ? "ring-2 ring-[#0052FF]" : ""
                    }`}
                >
                    <FiGlobe className="text-gray-900" />
                </button>

                {showLanguagePanel && (
                    <LanguagePanel
                    languageQuery={languageQuery}
                    setLanguageQuery={setLanguageQuery}
                    selectedLanguage={selectedLanguage}
                    setSelectedLanguage={setSelectedLanguage}
                    />
                )}
                </div>

                <Link
                to="/signin"
                className="rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200"
                >
                Sign in
                </Link>

                <Link
                to="/signup"
                className="rounded-full bg-[#0052FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0046db]"
                >
                Sign up
                </Link>
            </div>
            
            {/* Mobile Menu Button  (only visible below lg) */}
            <button
                className="lg:hidden text-gray-900"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className="space-y-1.5 p-2">
                    <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-current transition duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </button>
            </div>
        </div>

        {activeMenu && <MegaMenu menu={menuData[activeMenu]} />}

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-md flex flex-col p-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <Link
                    to="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-center rounded-full bg-[#0052FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0046db] mb-3"
                >
                    Get started
                </Link>
                <Link
                    to="/signin"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-center rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200 mb-4"
                >
                    Sign in
                </Link>

                <div className="border-t border-gray-200 pt-4 flex flex-col gap-4">
                    <Link to="/explore" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-lg text-gray-900">Explore</Link>
                    <p className="font-semibold text-lg text-gray-900">Individuals</p>
                    <p className="font-semibold text-lg text-gray-900">Businesses</p>
                    <p className="font-semibold text-lg text-gray-900">Developers</p>
                    <p className="font-semibold text-lg text-gray-900">Company</p>
                </div>
            </div>
        )}
        </header>
    );
}