import { useNavigate } from "react-router-dom";
import coinClusterImg from "../../assets/coin_cluster.avif";

export default function TakeControlSection() {
    const navigate = useNavigate();
    
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-14 lg:grid-cols-2">
                {/* left */}
                <div className="mx-auto max-w-md text-center lg:text-left">
                <h3 className="text-5xl font-semibold leading-tight tracking-tight text-gray-900">
                    Take control
                    <br />
                    of your money
                </h3>

                <p className="mt-4 text-sm text-gray-600">
                    Start your portfolio today and discover crypto
                </p>

                <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                    <input
                    defaultValue="satoshi@nakamoto.com"
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-[#0052FF]"
                    />
                    <button
                    onClick={() => navigate("/signup")}
                    className="h-11 shrink-0 rounded-full bg-[#0052FF] px-6 text-sm font-semibold text-white hover:bg-[#0146d6]"
                    >
                    Sign up
                    </button>
                </div>
                </div>

                {/* right image */}
                <div className="flex justify-center lg:justify-end">
                <img
                    src={coinClusterImg}
                    alt="Crypto icons"
                    className="w-full max-w-md object-contain"
                />
                </div>
            </div>

            {/* disclaimer ABOVE footer */}
            <div className="mt-24 text-center text-[11px] leading-5 text-gray-500">
                <p>DEX trading is offered by Coinbase Bermuda Technologies Ltd.</p>
                <p className="mt-2">
                Products and features may not be available in all regions. Information is for informational purposes only,
                and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares,
                or to participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice,
                or investment recommendations. Trading cryptocurrency comes with risk.
                </p>
            </div>
            </div>
        </section>
    );
}
