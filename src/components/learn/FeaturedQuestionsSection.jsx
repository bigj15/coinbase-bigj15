import { Link } from "react-router-dom";
import { POPULAR } from "../../data/learnData";
import featuredImg from "../../assets/blog_featured.png";
import basicsImg from "../../assets/learn_3.png";
import tutorialsImg from "../../assets/learn_4.png";
import advancedImg from "../../assets/advanced_trading.png";
import futuresImg from "../../assets/futures_anchor.png";

export default function FeaturedQuestionsSection() {
    return (
        <section className="border-b border-gray-100 py-12 px-4">
            <div className="mx-auto max-w-[900px]">
                <h1 className="text-center text-5xl font-bold text-gray-900">Crypto questions, answered</h1>
                <p className="mt-2 text-center text-sm text-gray-500">
                    Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
                </p>

                <div className="mt-15 grid gap-6 lg:grid-cols-[1fr_260px]">
                    {/* Featured */}
                    <div>
                        <p className="mb-3 text-sm font-semibold text-gray-800 uppercase tracking-wider">Featured</p>
                        <Link to="/learn" className="group block">
                            <div className="relative overflow-hidden rounded-sm bg-gray-100 h-[320px]">
                                <img src={featuredImg} alt="Featured" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />

                            </div>
                            <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">VIDEO TUTORIAL</p>
                            <h1 className="mt-1 text-lg font-bold text-gray-900 group-hover:underline">When is the best time to invest in crypto?</h1>
                            <p className="mt-1 text-sm text-gray-800 leading-relaxed">
                                When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.
                            </p>
                        </Link>


                    </div>

                    {/* Popular sidebar */}
                    <div>
                        <p className="mb-2 text-sm font-bold text-gray-900 tracking-wider">Popular</p>
                        <ul className="space-y-4">
                            {POPULAR.map((item) => (
                                <li key={item.title}>
                                    <Link to="/learn" className="group block">
                                        <p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-gray-500">{item.tag}</p>
                                        <p className="mt-0.5 text-[15px] font-bold text-gray-900 group-hover:underline leading-snug">{item.title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Category quick links */}
                <div className="mt-4 grid w-full grid-cols-1 lg:grid-cols-4">
                    {[
                        { label: "Crypto basics", icon: <img src={basicsImg} alt="Basics" className="h-8 w-8 object-contain" /> },
                        { label: "Tips and tutorials", icon: <img src={tutorialsImg} alt="Tutorials" className="h-8 w-8 object-contain" /> },
                        { label: "Advanced trading", icon: <img src={advancedImg} alt="Advanced" className="h-8 w-8 object-contain" /> },
                        { label: "Futures", icon: <img src={futuresImg} alt="Futures" className="h-8 w-8 object-contain" /> },
                    ].map((cat) => (
                        <Link
                            key={cat.label}
                            to="/learn"
                            className="flex items-center gap-2 rounded-md px-3 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            <span className="text-3xl">{cat.icon}</span>
                            <span>{cat.label}<br /><span className="font-normal text-[#0052FF]">See more →</span></span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
