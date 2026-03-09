import { FiCheckCircle } from "react-icons/fi";

export default function AssetBenefitsSection() {
    return (
        <section className="bg-black px-4 py-16 text-white">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                <div className="flex justify-center">
                <div className="relative flex h-[280px] w-[360px] items-center justify-center">
                    <div className="absolute h-44 w-44 rounded-r-full bg-[#0A47FF] shadow-[0_0_40px_rgba(0,82,255,0.4)]" />
                    <div className="absolute left-[88px] h-28 w-28 rounded-full bg-black" />

                    <div className="absolute left-8 top-5 h-2 w-2 rounded-full bg-white/50" />
                    <div className="absolute left-24 top-0 h-14 w-14 rounded-full border border-white/50" />
                    <div className="absolute left-36 top-3 h-24 w-24 rounded-full border border-white/60" />
                    <div className="absolute left-52 top-0 h-40 w-40 rounded-full border border-white/60" />
                    <div className="absolute left-44 top-16 h-[2px] w-16 bg-white/60" />
                    <div className="absolute left-60 top-[62px] h-4 w-4 rounded-full border border-white/50" />

                    <div className="absolute left-20 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px]">
                    ₿
                    </div>
                    <div className="absolute left-4 top-40 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-[10px] font-bold text-black">
                    $
                    </div>
                    <div className="absolute left-98 top-32 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-xl font-bold text-white">
                    ₿
                    </div>
                    <div className="absolute left-82 top-20 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-400 text-[10px] font-bold text-white">
                    ◇
                    </div>
                    <div className="absolute left-88 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[9px] font-bold text-white">
                    ♥
                    </div>
                    <div className="absolute left-86 top-40 flex h-4 w-4 items-center justify-center rounded-full bg-[#0A47FF] text-[8px] text-white">
                    ○
                    </div>
                </div>
                </div>

                <div>
                <h2 className="text-4xl font-medium leading-tight">
                    Your asset, available
                    <br />
                    on Coinbase
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400">
                    List on the Exchange, Custody, and all our trading interfaces.
                </p>

                <div className="mt-6 space-y-4">
                    {[
                    "Global Reach: Tap into millions of active, trading users",
                    "Robust Security: Industry-leading security protocols",
                    "Access: Leverage our ecosystem of tools for developers",
                    ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-gray-300">
                        <FiCheckCircle className="mt-0.5 shrink-0 text-white" />
                        <span>{item}</span>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}
