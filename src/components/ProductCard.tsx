"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";
import { useCartStore, Product } from "@/lib/store";
import { motion } from "framer-motion";

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-secondary/5"
        >
            {/* Image Container */}
            <Link href={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Badges */}
                {product.original_price > product.price && (
                    <span className="absolute top-3 left-3 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-full tracking-wider uppercase shadow-lg">
                        {Math.round(((product.original_price - product.price) / product.original_price) * 100)}% OFF
                    </span>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                    <button className="p-2 bg-white text-secondary hover:text-accent rounded-full shadow-lg hover:scale-110 transition-all">
                        <Heart className="w-4 h-4" />
                    </button>
                </div>
            </Link>

            {/* Content */}
            <div className="p-5">
                <div className="mb-3">
                    <p className="text-xs text-primary font-bold tracking-widest uppercase mb-1">{product.category || 'Sweets'}</p>
                    <Link href={`/product/${product.id}`}>
                        <h3 className="text-lg font-serif font-bold text-secondary-dark group-hover:text-primary transition-colors line-clamp-1">
                            {product.name}
                        </h3>
                    </Link>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-secondary/40 line-through">₹{product.original_price}</span>
                        <span className="text-xl font-bold text-secondary-dark">₹{product.price}</span>
                    </div>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addItem(product);
                        }}
                        className="bg-secondary text-cream p-3 rounded-full hover:bg-primary transition-all hover:shadow-lg hover:-translate-y-1 group/btn"
                        aria-label="Add to cart"
                    >
                        <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
