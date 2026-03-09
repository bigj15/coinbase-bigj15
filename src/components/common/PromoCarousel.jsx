import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";

export default function PromoCarousel({ slides }) {
    const [index, setIndex] = useState(0);
    const startX = useRef(null);

    const total = slides.length;

    const goTo = (i) => setIndex((i + total) % total);
    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    // keyboard arrows
    useEffect(() => {
        function onKeyDown(e) {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    // swipe (touch)
    const onTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e) => {
        if (startX.current == null) return;
        const endX = e.changedTouches[0].clientX;
        const diff = startX.current - endX;
        startX.current = null;

        if (diff > 50) next(); // swipe left -> next
        if (diff < -50) prev(); // swipe right -> prev
    };

    const current = slides[index];

    return (
        <div className="relative">
        {/* carousel area */}
        <div
            className="rounded-[44px] bg-[#0A0F14] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            {/* image panel */}
            <div className="overflow-hidden rounded-[32px] bg-black/40">
                <img
                src={current.image}
                alt={current.imageAlt}
                className="h-[320px] w-full object-cover sm:h-[380px]"
                />
            </div>

            {/* text */}
            <div className="px-2 pb-2 lg:px-0">
                <h3 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {current.titleLines.map((t) => (
                    <span key={t} className="block">
                    {t}
                    </span>
                ))}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/80">
                {current.body}
                </p>

                <div className="mt-7">
                <Button
                    variant="outline"
                    className="border-white/15 bg-white text-gray-900 hover:bg-gray-100"
                    onClick={current.onCtaClick}
                >
                    {current.cta}
                </Button>
                </div>
            </div>
            </div>

            {/* disclaimer */}
            <p className="mt-6 text-center text-[11px] leading-5 text-white/50">
            {current.disclaimer}
            </p>
        </div>

        {/* controls (dots + arrows) */}
        <div className="mt-7 flex items-center justify-between px-2">
            {/* dots */}
            <div className="flex items-center gap-2">
            {slides.map((_, i) => (
                <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition ${
                    i === index ? "w-8 bg-white/90" : "w-2.5 bg-white/20 hover:bg-white/35"
                }`}
                />
            ))}
            </div>

            {/* arrows */}
            <div className="flex items-center gap-3">
            <button
                onClick={prev}
                aria-label="Previous"
                className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/15"
            >
                <span className="text-2xl leading-none">‹</span>
            </button>
            <button
                onClick={next}
                aria-label="Next"
                className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/15"
            >
                <span className="text-2xl leading-none">›</span>
            </button>
            </div>
        </div>
        </div>
    );
}