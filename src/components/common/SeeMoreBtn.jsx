import React from "react";
import { Link } from "react-router-dom";

export default function SeeMoreBtn({ label, to = "/learn" }) {
    return (
        <div className="mt-11 flex justify-center">
            <Link
                to={to}
                className="flex items-center gap-2 rounded-[5px] bg-[#0052FF] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#0046d6] transition-colors"
            >
                {label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </Link>
        </div>
    );
}
