import { Link } from "react-router-dom";
import oneImg from "../../assets/zero_en-gb_2 (1).avif";

export default function CoinbaseOneSection() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* left text */}
                    <div className="mx-auto max-w-md text-center lg:text-left">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-[10px] font-semibold text-gray-700">
                            <span className="h-2 w-2 rounded-full bg-black" />
                            COINBASE ONE
                        </span>

                        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
                            Zero trading fees,
                            <br />
                            more rewards.
                        </h3>

                        <p className="mt-3 text-sm text-gray-600">
                            Get more out of crypto with one membership: zero trading fees, boosted rewards,
                            priority support, and more.
                        </p>

                        <div className="mt-6">
                            <Link
                                to="/signup"
                                className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-xs font-semibold text-white hover:bg-neutral-800"
                            >
                                Claim free trial
                            </Link>
                        </div>
                    </div>
                    {/* right image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="rounded-3xl bg-[#F3F4F6] p-10">
                            <img src={oneImg} alt="Coinbase One" className="h-[280px] w-auto object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
