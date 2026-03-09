import { Link } from "react-router-dom";
import advancedImg from "../../assets/Advanced (8).png";

export default function AdvancedTradeSection() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* image */}
                <div className="flex justify-center lg:justify-start">
                <div className="overflow-hidden rounded-[40px] bg-black p-10 shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
                    <img src={advancedImg} alt="Advanced Trade" className="h-[260px] w-auto object-contain" />
                </div>
                </div>

                {/* copy */}
                <div className="mx-auto max-w-xl text-center lg:text-left">
                <h3 className="text-4xl font-semibold tracking-tight text-gray-900">
                    Powerful tools, designed <br />
                    for the advanced trader.
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                    Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading
                    experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity
                    across hundreds of markets.
                </p>

                <div className="mt-7">
                    <Link
                    to="/trade"
                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-xs font-semibold text-white hover:bg-neutral-800"
                    >
                    Start trading
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}
