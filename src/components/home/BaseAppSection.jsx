import { Link } from "react-router-dom";
import baseAppImg from "../../assets/base_app.png";

export default function BaseAppSection() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-14 lg:grid-cols-2">
                {/* left image */}
                <div className="flex justify-center lg:justify-start">
                <div className="rounded-3xl bg-[#EEF1F4] p-10">
                    <img
                    src={baseAppImg}
                    alt="Base App"
                    className="h-[320px] w-auto object-contain"
                    />
                </div>
                </div>

                {/* right text */}
                <div className="mx-auto max-w-md text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-[10px] font-semibold text-gray-700">
                    <span className="h-2 w-2 rounded-full bg-black" />
                    BASE APP
                </span>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
                    Countless ways to earn
                    <br />
                    crypto with the Base App.
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                    An everything app to trade, create, discover, and chat, all in one place.
                </p>

                <div className="mt-6">
                    <Link
                    to="/learn"
                    className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-xs font-semibold text-white hover:bg-neutral-800"
                    >
                    Learn more
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}
