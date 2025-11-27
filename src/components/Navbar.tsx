"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, User, Search } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const cartItems = useCartStore((state) => state.items);
    const cartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled ? "py-2" : "py-6"
                )}
            >
                <div
                    className={clsx(
                        "container mx-auto px-6 transition-all duration-500",
                        scrolled
                            ? "bg-cream/80 backdrop-blur-md shadow-sm rounded-full max-w-6xl border border-white/20 py-3"
                            : "bg-transparent"
                    )}
                >
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="text-2xl font-serif font-bold text-secondary-dark group-hover:text-primary transition-colors">
                                Shuddh Swad
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'Shop', 'Story', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors uppercase tracking-widest relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* Icons */}
                        <div className="flex items-center space-x-6">
                            <button className="hidden md:block text-secondary hover:text-primary transition-colors">
                                <Search className="w-5 h-5" />
                            </button>

                            <Link href="/admin" className="hidden md:block text-secondary hover:text-primary transition-colors">
                                <User className="w-5 h-5" />
                            </Link>

                            <Link href="/cart" className="relative text-secondary hover:text-primary transition-colors group">
                                <div className="p-2 bg-secondary/5 rounded-full group-hover:bg-primary/10 transition-colors">
                                    <ShoppingCart className="w-5 h-5" />
                                </div>
                                {cartCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-cream"
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </Link>

                            <button
                                className="md:hidden text-secondary"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-secondary-dark/95 backdrop-blur-xl md:hidden flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center space-y-8 p-4">
                            {['Home', 'Shop', 'Story', 'Contact', 'Admin'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-3xl font-serif font-bold text-cream hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
