import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function ReviewArt({ type }) {
    if (type === "checklist") {
        return (
        <div className="relative flex h-36 w-36 items-center justify-center rounded-[28px] bg-[#EDEFF2]">
            <div className="absolute left-8 top-5 h-3 w-3 rounded-full bg-sky-300" />
            <div className="absolute left-12 top-9 h-3 w-3 rounded-full bg-yellow-300" />
            <div className="absolute top-4 h-3 w-8 rounded-full bg-[#BFC5CE]" />
            <div className="h-28 w-20 rounded-sm bg-[#0052FF] p-3 shadow-sm">
            <div className="space-y-4">
                {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center justify-between">
                    <div className="h-[3px] w-8 rounded bg-white/90" />
                    <FiCheckCircle className="text-white" />
                </div>
                ))}
            </div>
            </div>
        </div>
        );
    }

    if (type === "arrow") {
        return (
        <div className="relative flex h-36 w-36 items-center justify-center rounded-[28px] bg-[#EDEFF2]">
            <div className="absolute left-6 h-16 w-16 rounded-full bg-sky-300" />
            <div className="absolute left-12 h-16 w-16 rounded-full bg-[#0052FF]/80" />
            <div className="absolute left-18 h-16 w-16 rounded-full bg-yellow-300" />
            <div className="absolute flex items-center text-4xl text-black">
            <span className="mr-1">⟶</span>
            </div>
        </div>
        );
    }

    return (
        <div className="relative grid h-36 w-36 grid-cols-2 grid-rows-2 overflow-hidden rounded-[28px] bg-[#EDEFF2]">
        <div className="rounded-br-full bg-[#C9CED8]" />
        <div className="rounded-bl-full bg-yellow-300" />
        <div className="relative rounded-tr-full bg-[#0052FF]">
            <FiCheckCircle className="absolute left-6 top-6 text-4xl text-white" />
        </div>
        <div className="rounded-tl-full bg-[#0052FF]" />
        </div>
    );
}
