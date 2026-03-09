import { FiArrowDownLeft } from "react-icons/fi";

export default function ExploreHeaderSection({ search, setSearch }) {
    return (
        <div className="border-b border-gray-200 pb-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-[42px] leading-tight font-medium text-gray-900">Explore crypto</h1>
                    <p className="mt-1 text-sm text-gray-500">
                    Coinbase 50 Index is up{" "}

                        <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                            <FiArrowDownLeft size={14} className="rotate-180" />
                            3.19% (24hrs)
                        </span>{" "}

                        <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 text-[9px] text-white font-bold">
                            i
                        </span>
                    </p>
                </div>

                <div className="relative w-full lg:w-[360px] lg:flex-shrink-0">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    </svg>
                    <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for an asset"
                    className="w-full rounded-full border border-transparent bg-gray-100 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#0052FF] focus:bg-white"
                    />
                </div>
            </div>
        </div>
    );
}
