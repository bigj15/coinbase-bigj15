import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ image, title, excerpt, to }) {
    return (
        <Link to={to} className="group block">
        <div className="overflow-hidden rounded-2xl bg-white/0">
            <img
            src={image}
            alt={title}
            className="h-[140px] w-full rounded-2xl object-cover"
            />
        </div>

        <h4 className="mt-4 text-sm font-semibold text-gray-900 group-hover:underline">
            {title}
        </h4>
        <p className="mt-2 text-xs leading-5 text-gray-600">{excerpt}</p>
        </Link>
    );
}
