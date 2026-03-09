import savingsImg from "../assets/Carousel.png";
import stakingImg from "../assets/What_is_Staking.png";

export const slides = [
    {
    image: savingsImg,
    imageAlt: "Cash savings",
    titleLines: ["Earn 3.50% AER on", "your cash savings"],
    body:
        "Savings Account with interest paid daily. Instant Access. FSCS protected. Powered by ClearBank.",
    cta: "Get started",
    route: "/signup",
    disclaimer:
        "Account is powered by ClearBank; interest rates are variable; account terms and conditions and eligibility criteria apply. FSCS protection is subject to eligibility and the £120,000 coverage is the maximum aggregated across all eligible ClearBank accounts.",
    },
    {
    image: stakingImg,
    imageAlt: "Staking",
    titleLines: ["Earn up to 14%", "APY on your crypto"],
    body:
        "Put your crypto to work by staking with Coinbase and earn up to 14% APY on your holdings.",
    cta: "Explore staking options",
    route: "/learn",
    disclaimer: "APY is variable and subject to change. Staking involves risk.",
    },
];
