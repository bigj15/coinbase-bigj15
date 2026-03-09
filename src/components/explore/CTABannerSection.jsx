import { useNavigate } from "react-router-dom";
import exploreImage from "../../assets/explore_image.png";

export default function CTABannerSection() {
    const navigate = useNavigate();

    return (
        <div className="mt-7 overflow-hidden rounded-none bg-[#0052FF] p-5 flex items-center justify-between gap-0 mb-0">
            <div>
                <h3 className="text-xl font-bold text-white leading-snug">
                Create a Coinbase account to trade<br />crypto. It's quick, easy, and secure.
                </h3>
                <button
                onClick={() => navigate("/signup")}
                className="mt-5 flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                >
                Start Trading
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
            </div>
            {/* Decorative illustration */}
            <div className="hidden sm:block flex-shrink-0">
                <img
                    src={exploreImage}
                    alt="Explore illustration"
                    className="h-[110px] "
                />
            </div>
        </div>
    );
}
