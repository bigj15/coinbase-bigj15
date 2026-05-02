import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getAllCrypto, getProfile, logout as apiLogout, isAuthenticated } from "../api/api";

export const AppContext = createContext(null);

export function AppProvider({ children }) {
    const [query, setQuery] = useState("");
    const [watchlist, setWatchlist] = useState(() => new Set(["bitcoin", "ethereum"]));
    const [cryptoList, setCryptoList] = useState([]);
    const [loadingCrypto, setLoadingCrypto] = useState(true);

    // Auth state
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    // Fetch crypto data from API
    const fetchCrypto = useCallback(async () => {
        try {
            setLoadingCrypto(true);
            const data = await getAllCrypto();
            setCryptoList(data);
        } catch (err) {
            console.error("Failed to fetch crypto:", err);
        } finally {
            setLoadingCrypto(false);
        }
    }, []);

    // Check auth on mount
    useEffect(() => {
        async function checkAuth() {
            if (isAuthenticated()) {
                try {
                    const profile = await getProfile();
                    setUser(profile);
                } catch {
                    apiLogout();
                    setUser(null);
                }
            }
            setAuthLoading(false);
        }
        checkAuth();
    }, []);

    // Fetch crypto on mount
    useEffect(() => {
        fetchCrypto();
    }, [fetchCrypto]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return cryptoList;
        return cryptoList.filter((c) => (c.name + c.symbol).toLowerCase().includes(q));
    }, [query, cryptoList]);

    function toggleWatchlist(id) {
        setWatchlist((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }

    function login(userData) {
        setUser(userData);
    }

    function logout() {
        apiLogout();
        setUser(null);
    }

    const value = {
        query,
        setQuery,
        watchlist,
        toggleWatchlist,
        crypto: cryptoList,
        filtered,
        loadingCrypto,
        fetchCrypto,
        // Auth
        user,
        setUser,
        login,
        logout,
        authLoading,
        isLoggedIn: !!user,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
