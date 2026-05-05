import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

export default function WarningBanner() {
    return (
        <div className="bg-orange-200 text-white px-4 py-1 text-center text-sm font-medium flex items-center justify-center gap-2 z-50 relative">
            <FiAlertTriangle size={16} />
            <span>
                <strong>Student Project:</strong> This is a demo application created for educational purposes and is not affiliated with Coinbase.
            </span>
        </div>
    );
}
