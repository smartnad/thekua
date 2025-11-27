"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useCartStore } from "@/lib/store";
import { ShoppingCart, Star, Truck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

// Mock Data (should be fetched)
const products = [
    {
        id: "1",
        name: "Traditional Thekua",
        description: "Authentic homemade Thekua made with pure ghee and wheat flour. A traditional delicacy from Bihar and Jharkhand, perfect for festivals and tea-time snacks.",
        price: 299,
        original_price: 599,
        image_url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop",
        category: "sweets",
        ingredients: "Wheat Flour, Ghee, Sugar, Cardamom, Coconut, Dry Fruits"
    },
    {
        id: "2",
        name: "Jaggery Thekua",
        description: "Healthy and delicious Thekua made with organic jaggery. Enjoy the guilt-free sweetness of jaggery combined with the crunch of traditional Thekua.",
        price: 299,
        original_price: 599,
        image_url: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=2070&auto=format&fit=crop",
        category: "sweets",
        ingredients: "Wheat Flour, Ghee, Jaggery, Fennel Seeds, Coconut"
    },
    {
        id: "3",
        name: "Traditional 3 Combo",
        description: "Pack of 3 Traditional Thekua boxes. Perfect for gifting or stocking up for the family.",
        price: 799,
        original_price: 1799,
        image_url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop",
        category: "combo",
        ingredients: "Wheat Flour, Ghee, Sugar, Cardamom, Coconut, Dry Fruits"
    },
    {
        id: "4",
        name: "Jaggery 3 Combo",
        description: "Pack of 3 Jaggery Thekua boxes. A healthy and tasty treat for everyone.",
        price: 799,
        original_price: 1799,
        image_url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1926&auto=format&fit=crop",
        category: "combo",
        ingredients: "Wheat Flour, Ghee, Jaggery, Fennel Seeds, Coconut"
    }
];

export default function ProductPage() {
    const params = useParams();
    const product = products.find((p) => p.id === params.id);
    const addItem = useCartStore((state) => state.addItem);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }

    return (
        <div className="bg-cream min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-secondary/10"
                        >
                            <Image
                                src={product.image_url}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Details */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="text-4xl font-serif font-bold text-secondary-dark mb-2">{product.name}</h1>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="flex text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <span className="text-secondary/60">(120 Reviews)</span>
                            </div>

                            <div className="flex items-end space-x-4 mb-6">
                                <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                                <span className="text-xl text-secondary/40 line-through mb-1">₹{product.original_price}</span>
                                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-sm font-bold mb-1">
                                    {Math.round(((product.original_price - product.price) / product.original_price) * 100)}% OFF
                                </span>
                            </div>

                            <p className="text-secondary/80 leading-relaxed mb-6">{product.description}</p>

                            {product.ingredients && (
                                <div className="mb-6">
                                    <h3 className="font-bold text-secondary-dark mb-2">Ingredients:</h3>
                                    <p className="text-secondary/70 text-sm">{product.ingredients}</p>
                                </div>
                            )}

                            <div className="flex space-x-4 mb-8">
                                <button
                                    onClick={() => addItem(product)}
                                    className="flex-1 bg-primary hover:bg-primary-light text-white py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                                >
                                    <ShoppingCart className="mr-2 w-5 h-5" /> Add to Cart
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm text-secondary/70">
                                <div className="flex items-center space-x-2">
                                    <Truck className="w-5 h-5 text-primary" />
                                    <span>Free Shipping on orders above ₹499</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <ShieldCheck className="w-5 h-5 text-primary" />
                                    <span>100% Authentic & Homemade</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
