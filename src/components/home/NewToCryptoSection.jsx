import { Link } from "react-router-dom";
import BlogCard from "../common/BlogCard";
import blog1Img from "../../assets/blog1.avif"; 
import blog2Img from "../../assets/blog2.png"; 
import blog3Img from "../../assets/blog3.avif";

export default function NewToCryptoSection() {
    return (
        <section className="bg-[#EEF1F4] py-20">
            <div className="mx-auto max-w-6xl px-4">
            {/* header row */}
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <h3 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900">
                New to crypto?
                <br />
                Learn some
                <br />
                crypto basics
                </h3>

                <div className="max-w-md">
                <p className="text-sm text-gray-600">
                    Beginner guides, practical tips, and market updates for first-timers,
                    experienced investors, and everyone in between
                </p>

                <div className="mt-5">
                    <Link
                    to="/learn"
                    className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-xs font-semibold text-white hover:bg-neutral-800"
                    >
                    Read More
                    </Link>
                </div>
                </div>
            </div>

            {/* 3 cards */}
            <div className="mt-10 grid gap-8 md:grid-cols-3">
                <BlogCard
                image={blog1Img}
                title="USDC: The digital dollar for the global crypto economy"
                excerpt="Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more..."
                to="/learn"
                />
                <BlogCard
                image={blog2Img}
                title="Can crypto really replace your bank account?"
                excerpt="If you're a big enough fan of crypto, you've probably heard the phrase “be your own bank” or the term “bankless” — the idea being that..."
                to="/learn"
                />
                <BlogCard
                image={blog3Img}
                title="When is the best time to invest in crypto?"
                excerpt="Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause..."
                to="/learn"
                />
            </div>
            </div>
        </section>
    );
}
