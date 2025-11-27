"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/lib/store";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Cart() {
    const { items, removeItem, updateQuantity, total } = useCartStore();

    if (items.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-cream">
                <h2 className="text-2xl font-serif font-bold text-secondary-dark mb-4">Your Cart is Empty</h2>
                <p className="text-secondary/60 mb-8">Looks like you haven't added any sweets yet.</p>
                <Link
                    href="/shop"
                    className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-light transition-colors"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-cream min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-serif font-bold text-secondary-dark mb-8">Your Cart</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items */}
                    <div className="flex-grow space-y-6">
                        {items.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white p-4 rounded-lg shadow-sm border border-secondary/5 flex items-center gap-4"
                            >
                                <div className="relative w-24 h-24 shrink-0 rounded-md overflow-hidden">
                                    <Image
                                        src={item.image_url}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-grow">
                                    <h3 className="font-serif font-bold text-secondary-dark">{item.name}</h3>
                                    <p className="text-primary font-bold">₹{item.price}</p>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                                        className="p-1 rounded-full hover:bg-secondary/10 text-secondary"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="font-bold w-8 text-center">{item.quantity || 1}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                        className="p-1 rounded-full hover:bg-secondary/10 text-secondary"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-96 shrink-0">
                        <div className="bg-white p-6 rounded-lg shadow-lg border border-secondary/5 sticky top-24">
                            <h3 className="text-xl font-serif font-bold text-secondary-dark mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-secondary/80">
                                    <span>Subtotal</span>
                                    <span>₹{total()}</span>
                                </div>
                                <div className="flex justify-between text-secondary/80">
                                    <span>Shipping</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="border-t border-dashed border-secondary/20 pt-4 flex justify-between font-bold text-lg text-secondary-dark">
                                    <span>Total</span>
                                    <span>₹{total()}</span>
                                </div>
                            </div>

                            <Link
                                href="/checkout"
                                className="w-full bg-primary hover:bg-primary-light text-white py-4 rounded-full font-bold flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                            >
                                Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
