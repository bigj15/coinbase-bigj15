import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowDownLeft, FiArrowUpRight, FiPlus } from "react-icons/fi";
import { getAllCrypto, addCrypto } from "../../api/api";
import useApp from "../../context/useApp";

export default function CryptoTableSection({ search }) {
    const navigate = useNavigate();
    const { isLoggedIn } = useApp();
    const [starred, setStarred] = useState(new Set());
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [addForm, setAddForm] = useState({ name: "", symbol: "", price: "", image: "", change24h: "" });
    const [addError, setAddError] = useState("");
    const [addSuccess, setAddSuccess] = useState("");
    const [addLoading, setAddLoading] = useState(false);

    const fetchCoins = async () => {
        try {
            setLoading(true);
            const data = await getAllCrypto();
            setCoins(data);
        } catch (err) {
            console.error("Failed to fetch coins:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCoins();
    }, []);

    const toggleStar = (symbol) => {
        setStarred((prev) => {
            const next = new Set(prev);
            next.has(symbol) ? next.delete(symbol) : next.add(symbol);
            return next;
        });
    };

    const filtered = coins.filter(
        (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.symbol.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddCrypto = async () => {
        const { name, symbol, price, image, change24h } = addForm;
        if (!name || !symbol || !price || !image || change24h === "") {
            setAddError("Please fill in all fields");
            return;
        }
        setAddError("");
        setAddLoading(true);
        try {
            await addCrypto({
                name,
                symbol,
                price: parseFloat(price),
                image,
                change24h: parseFloat(change24h),
            });
            setAddSuccess("Cryptocurrency added successfully!");
            setAddForm({ name: "", symbol: "", price: "", image: "", change24h: "" });
            await fetchCoins();
            setTimeout(() => {
                setShowAddModal(false);
                setAddSuccess("");
            }, 1500);
        } catch (err) {
            setAddError(err.message);
        } finally {
            setAddLoading(false);
        }
    };

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between mb-3">
                <div>
                <h2 className="text-xl font-bold text-gray-900">
                    Crypto market prices{" "}
                    <span className="text-sm font-normal text-gray-400">{coins.length} assets</span>
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                    The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.04 trillion,
                    representing a 0.27% increase from last week.{" "}
                    <button className="text-[#0052FF] hover:underline font-medium">Read more</button>
                </p>
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 rounded-full bg-[#0052FF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0046d6] transition-colors"
                >
                    <FiPlus size={16} />
                    Add Crypto
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-4">
                {["All assets", "1D", "USD", `${filtered.length} rows`].map((f, i) => (
                <button key={f} className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                    {i === 0 && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>}
                    {f}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                ))}
            </div>

            {/* Table */}
            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#0052FF]"></div>
                </div>
            ) : (
            <div className="overflow-x-auto rounded-2xl border border-gray-100">
                <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-gray-100 text-xs text-gray-400">
                    <th className="w-8 px-3 py-3" />
                    <th className="px-3 py-3 text-left font-medium">Asset</th>
                    <th className="px-3 py-3 text-right font-medium">Market price</th>
                    <th className="px-3 py-3 text-right font-medium">Change (24h)</th>
                    <th className="px-3 py-3 text-right font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((coin) => (
                    <tr key={coin._id || coin.symbol} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="px-3 py-4 text-center">
                        <button onClick={() => toggleStar(coin.symbol)} className="text-gray-300 hover:text-yellow-400 transition-colors">
                            {starred.has(coin.symbol) ? "\u2605" : "\u2606"}
                        </button>
                        </td>

                        <td className="px-3 py-4">
                        <div className="flex items-center gap-3">
                            <img src={coin.image} alt={coin.name} className="h-9 w-9 rounded-full" />
                            <div>
                            <p className="font-semibold text-gray-900">{coin.name}</p>
                            <p className="text-xs text-gray-400">{coin.symbol}</p>
                            </div>
                        </div>
                        </td>

                        <td className="px-3 py-4 text-right font-semibold text-gray-900">
                        ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>

                        <td className={`px-3 py-4 text-right font-medium ${coin.change24h < 0 ? "text-red-500" : "text-emerald-500"}`}>
                            <div className="flex items-center justify-end gap-1">
                                {coin.change24h < 0 ? <FiArrowDownLeft size={14} /> : <FiArrowUpRight size={14} />}
                                <span>{Math.abs(coin.change24h).toFixed(2)}%</span>
                            </div>
                        </td>

                        <td className="px-3 py-4 text-right">
                        <button
                            onClick={() => navigate(isLoggedIn ? "/" : "/signup")}
                            className="rounded-full bg-[#0052FF] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0046d6] transition-colors"
                        >
                            Trade
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            )}

            <p className="mt-4 text-center text-xs text-gray-400">{filtered.length} assets displayed</p>

            {/* Add Crypto Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Add New Cryptocurrency</h2>
                            <button onClick={() => { setShowAddModal(false); setAddError(""); setAddSuccess(""); }} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
                        </div>

                        {addError && (
                            <div className="mb-4 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm">{addError}</div>
                        )}
                        {addSuccess && (
                            <div className="mb-4 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-600 text-sm">{addSuccess}</div>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" value={addForm.name} onChange={(e) => setAddForm({ ...addForm, name: e.target.value })} placeholder="e.g. Bitcoin" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0052FF] transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Symbol</label>
                                <input type="text" value={addForm.symbol} onChange={(e) => setAddForm({ ...addForm, symbol: e.target.value })} placeholder="e.g. BTC" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0052FF] transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price (USD)</label>
                                <input type="number" step="0.01" value={addForm.price} onChange={(e) => setAddForm({ ...addForm, price: e.target.value })} placeholder="e.g. 68250.12" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0052FF] transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                <input type="url" value={addForm.image} onChange={(e) => setAddForm({ ...addForm, image: e.target.value })} placeholder="https://example.com/coin.png" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0052FF] transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">24h Change (%)</label>
                                <input type="number" step="0.01" value={addForm.change24h} onChange={(e) => setAddForm({ ...addForm, change24h: e.target.value })} placeholder="e.g. 2.5 or -1.3" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0052FF] transition-colors" />
                            </div>
                        </div>

                        <button
                            onClick={handleAddCrypto}
                            disabled={addLoading}
                            className="mt-6 w-full bg-[#0052FF] hover:bg-[#0046d6] text-white font-semibold py-3 rounded-full text-sm transition-colors disabled:opacity-50"
                        >
                            {addLoading ? "Adding..." : "Add Cryptocurrency"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
