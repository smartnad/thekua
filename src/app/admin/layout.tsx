"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Package, ShoppingBag, LogOut } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // Mock Auth Check
        const isAdmin = localStorage.getItem("isAdmin");
        if (!isAdmin && pathname !== "/admin/login") {
            router.push("/admin/login");
        } else {
            setAuthorized(true);
        }
    }, [pathname, router]);

    if (!authorized && pathname !== "/admin/login") {
        return null; // Or a loading spinner
    }

    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-secondary-dark text-cream hidden md:flex flex-col">
                <div className="p-6">
                    <h2 className="text-2xl font-serif font-bold">Admin Panel</h2>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    <Link
                        href="/admin"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </Link>
                    <Link
                        href="/admin/products"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <Package className="w-5 h-5" />
                        <span>Products</span>
                    </Link>
                    <Link
                        href="/admin/orders"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        <span>Orders</span>
                    </Link>
                </nav>
                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={() => {
                            localStorage.removeItem("isAdmin");
                            router.push("/admin/login");
                        }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-500/20 text-red-300 w-full transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
