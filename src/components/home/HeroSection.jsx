import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../assets/Hero.png";

export default function HeroSection() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const goSignup = () => navigate("/account-type", { state: { email } });

    return (
        <section className="bg-white">
            <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-4 py-8 lg:py-16 lg:grid lg:grid-cols-2">
                
                {/* LEFT: video/visual (Orders 2nd on mobile, 1st on Desktop) */}
                <div className="flex w-full justify-center lg:justify-start">
                    <div className="w-full max-w-[990px] overflow-hidden rounded-[20px] p-0">
                        <div className="overflow-hidden rounded-[32px] bg-white/10">
                            <img
                                src={Hero}
                                alt="Hero"
                                className="h-[300px] sm:h-[400px] lg:h-[550px] w-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-center lg:text-left pl-0 lg:pl-5 text-[11px] lg:text-[13px] text-gray-500">
                            Stocks and prediction markets not available in your jurisdiction.
                        </p>
                    </div>
                </div>

                {/* RIGHT: headline + input (Orders 1st on mobile, 2nd on Desktop) */}
                <div className="mx-auto w-full max-w-xl text-center lg:text-left">
                    <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl">
                        The future of <br />
                        finance is here.
                    </h1>
                    <p className="mt-5 text-sm text-gray-600">Trade crypto and more on a platform you can trust.</p>

                    <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row justify-center lg:justify-start">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="satoshi@nakamoto.com"
                            className="h-11 flex-1 max-w-sm rounded-md border border-gray-400 bg-white px-4 text-sm outline-none focus:border-[#0052FF]"
                        />
                        <button
                            onClick={goSignup}
                            className="h-11 rounded-full bg-[#0052FF] px-6 text-sm font-semibold text-white hover:brightness-95 whitespace-nowrap"
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
