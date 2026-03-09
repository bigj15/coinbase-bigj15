import logo from "../../assets/coinbase_logo.png";
import xIcon from "../../assets/x-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import instagramIcon from "../../assets/instagram-light.svg";
import tiktokIcon from "../../assets/tiktok-light.svg";
import { FiGlobe } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-[#EEF1F4]">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid gap-10 lg:grid-cols-5">
                    {/* logo */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="Coinbase"
                                className="h-9 w-auto"
                            />
                        </div>
                    </div>

                    {/* columns */}
                    <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
                        <FooterCol
                            title="Company"
                            items={[
                                "About",
                                "Careers",
                                "Blog",
                                "Press",
                                "Security",
                                "Vendors",
                                "Legal & privacy",
                                "Cookie policy",
                                "Cookie preferences",
                                "Digital Asset Disclosures",
                                "UK Modern Slavery Statement",
                            ]}
                        />
                        <FooterCol
                            title="Individuals"
                            items={[
                                "Buy & sell",
                                "Base App",
                                "Coinbase One",
                                "Debit Card",
                                "Derivatives",
                                "Token Sales",
                                "Savings",
                                "Businesses",
                                "Asset Listings",
                                "Payments",
                                "Commerce",
                                "Prime",
                                "Staking",
                                "Exchange",
                                "International Exchange",
                                "Verified Pools",
                            ]}
                        />
                        <FooterCol
                            title="Developers"
                            items={[
                                "Developer Platform",
                                "Base",
                                "Server Wallets",
                                "Embedded Wallets",
                                "Base Accounts (Smart Wallets)",
                                "Onramp & offramp",
                                "x402",
                                "Trade API",
                                "Paymaster",
                                "OnchainKit",
                                "Data API",
                                "Verifications",
                                "Node",
                                "AgentKit",
                                "Staking",
                                "Faucet",
                                "Exchange API",
                                "International Exchange API",
                                "Prime API",
                            ]}
                        />
                        <FooterCol
                            title="Support"
                            items={[
                                "Help center",
                                "Contact us",
                                "Create account",
                                "ID verification",
                                "Account information",
                                "Payment methods",
                                "Account access",
                                "Supported crypto",
                                "Status",
                                "Asset prices",
                                "Bitcoin price",
                                "Ethereum price",
                                "Solana price",
                                "XRP price",
                                "Stock prices",
                                "NVIDIA price",
                                "Apple price",
                                "Microsoft price",
                            ]}
                        />
                    </div>
                </div>

                {/* Social Icons */}
                <div className="mt-12 flex items-center gap-6 pb-6 mt-4">
                    <a href="#" className="hover:opacity-70 transition-opacity">
                        <img src={xIcon} alt="X" className="h-[14px] w-auto" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                        <img src={linkedinIcon} alt="LinkedIn" className="h-[14px] w-auto" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                        <img src={instagramIcon} alt="Instagram" className="h-[14px] w-auto" />
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                        <img src={tiktokIcon} alt="TikTok" className="h-[14px] w-auto" />
                    </a>
                </div>

                <div className="border-t border-gray-300 pt-4 text-[13px] text-gray-800 font-semibold">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © {new Date().getFullYear()} Coinbase <span className="mx-1 font-bold text-gray-500">•</span> Privacy <span className="mx-1 font-bold text-gray-500">•</span> Terms & Conditions
                        </p>

                        <button className="inline-flex items-center gap-2 text-[13px] font-semibold text-gray-700 hover:text-gray-900">
                            <FiGlobe size={15} />
                            <span>Global</span>
                            <span className="text-gray-500">•</span>
                            <span>English</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterCol({ title, items }) {
    return (
        <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-gray-700">
                {title}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {items.map((t) => (
                    <li key={t}>
                        <a href="#" className="hover:text-gray-900">
                            {t}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}