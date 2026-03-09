import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import tether from "../assets/tether.png";
import bnb from "../assets/bnb.png";
import xrp from "../assets/xrp.png";
import usdc from "../assets/usdc.png";
import solana from "../assets/sol.png";     
import tron from "../assets/tron.png";         
import dogecoin from "../assets/dogecoin.png"; 
import cardano from "../assets/cardano.png";   

export const SPARKS = {
    down:  "M0 20 C10 18 20 22 30 19 C40 16 50 24 60 20 C70 16 80 22 90 18 L90 30 L0 30 Z",
    up:    "M0 22 C10 24 20 18 30 21 C40 24 50 16 60 20 C70 24 80 17 90 19 L90 30 L0 30 Z",
    flat:  "M0 20 C15 20 30 21 45 20 C60 19 75 20 90 20 L90 30 L0 30 Z",
    spike: "M0 22 C10 21 20 24 30 18 C40 12 45 26 55 20 C65 14 75 22 90 20 L90 30 L0 30 Z",
};

export const COINS = [
    { name: "Bitcoin",  symbol: "BTC",  price: "GHS 737,160.57", change: "2.25%", neg: false,  mktCap: "GHS 14.5T",  volume: "GHS 273.3B", color: "#F7931A", spark: SPARKS.down,  image: bitcoin  },
    { name: "Ethereum", symbol: "ETH",  price: "GHS 21,559.11",  change: "4.03%", neg: false,  mktCap: "GHS 2.5T",   volume: "GHS 135.6B", color: "#627EEA", spark: SPARKS.down,  image: ethereum },
    { name: "Tether",   symbol: "USDT", price: "GHS 10.77",      change: "0.01%", neg: false, mktCap: "GHS 2.0T",   volume: "GHS 571.0B", color: "#26A17B", spark: SPARKS.flat,  image: tether   },
    { name: "BNB",      symbol: "BNB",  price: "GHS 6,669.65",   change: "1.38%", neg: true,  mktCap: "GHS 908.8B", volume: "GHS 13.0B",  color: "#F3BA2F", spark: SPARKS.down,  image: bnb      },
    { name: "XRP",      symbol: "XRP",  price: "GHS 14.60",      change: "0.96%", neg: true,  mktCap: "GHS 891.4B", volume: "GHS 14.4B",  color: "#000",    spark: SPARKS.spike, image: xrp      },
    { name: "USDC",     symbol: "USDC", price: "GHS 10.77",      change: "0.00%",  neg: false, mktCap: "GHS 832.3B", volume: "GHS 54.7B",  color: "#2775CA", spark: SPARKS.flat,  image: usdc, note: "Earns 3.35% APY" },
    { name: "Solana",   symbol: "SOL",  price: "GHS 888.18",     change: "2.59%", neg: true,  mktCap: "GHS 504.9B", volume: "GHS 23.4B",  color: "#9945FF", spark: SPARKS.down,  image: solana   },
    { name: "TRON",     symbol: "TRX",  price: "GHS 3.08",       change: "0.83%", neg: false, mktCap: "GHS 292.0B", volume: "GHS 4.1B",   color: "#EF0027", spark: SPARKS.spike, image: tron     },
    { name: "Dogecoin", symbol: "DOGE", price: "GHS 0.96",       change: "1.62%", neg: true,  mktCap: "GHS 161.4B", volume: "GHS 7.3B",   color: "#C2A633", spark: SPARKS.down,  image: dogecoin },
    { name: "Cardano",  symbol: "ADA",  price: "GHS 2.74",       change: "1.78%", neg: true,  mktCap: "GHS 98.5B",  volume: "GHS 4.3B",   color: "#0033AD", spark: SPARKS.down,  image: cardano  },
];

export const MARKET_STATS = [
    { label: "Total market cap", value: "GHS 24.04T", change: "1.43%", neg: true, spark: SPARKS.down },
    { label: "Trade volume", value: "GHS 1.16T", change: "28.66%", neg: true, spark: SPARKS.down },
    { label: "Buy-sell ratio", value: "GHS 0.76", change: "4.01%", neg: true, spark: SPARKS.spike },
    { label: "BTC dominance", value: "59.95%", change: "0.30%", neg: true, spark: SPARKS.down },
];

export const FOOTER_COLS = [
    {
        heading: "Company",
        links: ["About","Careers","Affiliates","Blog","Press","Security","Investors","Vendors","Legal & privacy","Cookie policy","Cookie preferences","Digital Asset Disclosures"],
    },
    {
        heading: "Learn",
        links: ["Explore","Market statistics","Coinbase Bytes newsletter","Crypto basics","Tips & tutorials","Crypto glossary","Market updates","What is Bitcoin?","What is crypto?","What is a blockchain?","How to set up a crypto wallet?","How to send crypto?","Taxes"],
    },
    {
        heading: "Individuals",
        links: ["Buy & sell","Earn free crypto","Base App","Coinbase One","Debit Card"],
    },
    {
        heading: "Businesses",
        links: ["Asset Listings","Coinbase Business","Payments","Commerce","Token Manager"],
    },
    {
        heading: "Institutions",
        links: ["Prime","Staking","Exchange","International Exchange","Derivatives Exchange","Verified Pools"],
    },
    {
        heading: "Developers",
        links: ["Developer Platform","Base","Server Wallets","Embedded Wallets","Base Accounts (Smart Wallets)","Onramp & Offramp","x402","Trade API","Paymaster","OnchainKit","Data API","Verifications","Node","AgentKit","Staking","Faucet","Exchange API","International Exchange API","Prime API","Derivatives API"],
    },
    {
        heading: "Support",
        links: ["Help center","Contact us","Create account","ID verification","Account information","Payment methods","Account access","Supported crypto","Status"],
    },
    {
        heading: "Asset prices",
        links: ["Bitcoin price","Ethereum price","Solana price","XRP price"],
    },
    {
        heading: "Stock prices",
        links: ["NVIDIA price","Apple price","Microsoft price","Amazon price"],
    },
];
