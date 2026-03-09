import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ image, tag, title, excerpt, isVideo, wide, to = "/learn" }) {
    return (
        <Link to={to} className="group block">
            <div className={`relative overflow-hidden rounded-sm bg-gray-100 ${wide ? "h-[220px]" : "h-[160px]"}`}>
                <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                {isVideo}
            </div>
            {tag && <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">{tag}</p>}
            <h3 className="mt-1 text-sm font-semibold text-gray-900 group-hover:underline leading-snug">{title}</h3>
            {excerpt && <p className="mt-1 text-xs text-gray-500 leading-relaxed line-clamp-3">{excerpt}</p>}
        </Link>
    );
}
