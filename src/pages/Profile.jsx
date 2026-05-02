import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApp from "../context/useApp";
import PageLayout from "../components/layout/PageLayout";

export default function Profile() {
    const navigate = useNavigate();
    const { user, isLoggedIn, authLoading, logout } = useApp();

    useEffect(() => {
        if (!authLoading && !isLoggedIn) {
            navigate("/signin");
        }
    }, [authLoading, isLoggedIn, navigate]);

    if (authLoading) {
        return (
            <PageLayout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0052FF]"></div>
                </div>
            </PageLayout>
        );
    }

    if (!user) return null;

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <PageLayout>
            <div className="min-h-screen bg-gray-50 py-12 px-4">
                <div className="mx-auto max-w-xl">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#0052FF] to-[#0046db] px-8 py-10 text-center">
                            <div className="mx-auto h-20 w-20 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl font-bold">
                                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                            </div>
                            <h1 className="mt-4 text-2xl font-bold text-white">{user.name}</h1>
                            <p className="mt-1 text-blue-200 text-sm">{user.email}</p>
                        </div>

                        {/* Info */}
                        <div className="px-8 py-6 space-y-5">
                            <div>
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name</label>
                                <p className="mt-1 text-gray-900 font-medium">{user.name}</p>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                                <p className="mt-1 text-gray-900 font-medium">{user.email}</p>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Member Since</label>
                                <p className="mt-1 text-gray-900 font-medium">
                                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "N/A"}
                                </p>
                            </div>
                        </div>

                        {/* Logout */}
                        <div className="px-8 py-6 border-t border-gray-100">
                            <button
                                onClick={handleLogout}
                                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-full text-sm transition-colors"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
