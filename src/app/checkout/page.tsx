"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Checkout() {
    const { items, total, clearCart } = useCartStore();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call to create order
        try {
            // In a real app, this would call your Firebase Function or Next.js API route
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Mock success
            clearCart();
            router.push("/track-order?orderId=ORD-" + Math.floor(Math.random() * 10000));
        } catch (error) {
            console.error("Checkout failed", error);
        } finally {
            setLoading(false);
        }
    };

    if (items.length === 0) {
        return <div className="min-h-screen flex items-center justify-center">Your cart is empty</div>;
    }

    return (
        <div className="bg-cream min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold text-secondary-dark mb-8 text-center">Checkout</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Form */}
                    <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary/5">
                        <h2 className="text-xl font-bold text-secondary-dark mb-6">Shipping Details</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-secondary/70 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full p-3 border border-secondary/20 rounded-md focus:outline-none focus:border-primary"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-secondary/70 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full p-3 border border-secondary/20 rounded-md focus:outline-none focus:border-primary"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary/70 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full p-3 border border-secondary/20 rounded-md focus:outline-none focus:border-primary"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary/70 mb-1">Address</label>
                                <textarea
                                    name="address"
                                    required
                                    rows={3}
                                    className="w-full p-3 border border-secondary/20 rounded-md focus:outline-none focus:border-primary"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-secondary/70 mb-1">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        className="w-full p-3 border border-secondary/20 rounded-md focus:outline-none focus:border-primary"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary/70 mb-1">Pincode</label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        required
                                        className="w-full p-3 border border-secondary/20 rounded-md focus:outline-none focus:border-primary"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-primary-light text-white py-4 rounded-full font-bold text-lg transition-all mt-6 flex items-center justify-center"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : `Pay ₹${total()}`}
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-paper p-8 rounded-lg shadow-inner">
                        <h2 className="text-xl font-bold text-secondary-dark mb-6">Your Order</h2>
                        <div className="space-y-4 mb-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex justify-between items-center text-sm">
                                    <span className="text-secondary/80">{item.name} x {item.quantity}</span>
                                    <span className="font-bold text-secondary-dark">₹{item.price * (item.quantity || 1)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-secondary/10 pt-4 flex justify-between font-bold text-lg text-secondary-dark">
                            <span>Total</span>
                            <span>₹{total()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
