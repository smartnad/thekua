"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Package, Truck, MapPin } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function TrackOrderContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");

    if (!orderId) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
                <h2 className="text-2xl font-bold text-secondary-dark mb-4">No Order ID Found</h2>
                <Link href="/" className="text-primary hover:underline">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-cream min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 rounded-lg shadow-lg border border-secondary/5 text-center"
                >
                    <div className="flex justify-center mb-6">
                        <CheckCircle className="w-20 h-20 text-green-500" />
                    </div>
                    <h1 className="text-3xl font-serif font-bold text-secondary-dark mb-2">Order Placed Successfully!</h1>
                    <p className="text-secondary/60 mb-8">Order ID: <span className="font-mono font-bold text-secondary-dark">{orderId}</span></p>

                    <div className="space-y-8 text-left">
                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <Package className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-secondary-dark">Order Confirmed</h3>
                                <p className="text-sm text-secondary/60">We have received your order.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 opacity-50">
                            <div className="bg-secondary/10 p-2 rounded-full">
                                <Truck className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-secondary-dark">Shipped</h3>
                                <p className="text-sm text-secondary/60">Your order is on the way.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 opacity-50">
                            <div className="bg-secondary/10 p-2 rounded-full">
                                <MapPin className="w-6 h-6 text-secondary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-secondary-dark">Delivered</h3>
                                <p className="text-sm text-secondary/60">Expected delivery by next week.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link
                            href="/"
                            className="inline-block bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary-dark transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default function TrackOrder() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TrackOrderContent />
        </Suspense>
    );
}
