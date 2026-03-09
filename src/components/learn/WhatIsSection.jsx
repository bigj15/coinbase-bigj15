import { Link } from "react-router-dom";
import { WHAT_IS_TAGS } from "../../data/learnData";
import SeeMoreBtn from "../common/SeeMoreBtn";

export default function WhatIsSection() {
    return (
        <section className="bg-[#F5F7FA] py-14 px-4">
            <div className="mx-auto max-w-[900px]">
                <h2 className="text-center text-3xl font-bold text-gray-900">What is...</h2>
                <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {WHAT_IS_TAGS.map((tag) => (
                        <Link
                            key={tag}
                            to="/learn"
                            className="rounded-sm border border-gray-300 bg-white px-8 py-3.5 text-xs font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
                <SeeMoreBtn label="See more" />
            </div>
        </section>
    );
}
