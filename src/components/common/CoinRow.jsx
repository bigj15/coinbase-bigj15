import React from "react";

export default function CoinRow({ name, symbol, price, change, image, negative }) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src={image} alt={name} className="h-8 w-8 rounded-full" />
                <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-[18px] text-white/60">{symbol}</p>
                </div>
            </div>

            <div className="text-right">
                <p className="text-sm font-semibold">{price}</p>
                <p className={`text-[18px] ${negative ? "text-red-400" : "text-emerald-400"}`}>
                    {change}
                </p>
            </div>
        </div>
    );
}
