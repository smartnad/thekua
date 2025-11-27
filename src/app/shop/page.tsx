"use client";

import ProductCard from "@/components/ProductCard";

// Mock Data (same as homepage for now)
const products = [
    {
        id: "1",
        name: "Coconut Suji Magic",
        description: "Authentic homemade Thekua made with pure ghee and wheat flour.",
        price: 299,
        original_price: 599,
        image_url: "/images/coconut-suji-magic.png",
        category: "Signature"
    },
    {
        id: "2",
        name: "Coconut Jaggery Magic",
        description: "Healthy and delicious Thekua made with organic jaggery.",
        price: 299,
        original_price: 599,
        image_url: "/images/coconut-jaggery-magic.png",
        category: "Healthy"
    },
    {
        id: "3",
        name: "Festival Combo Pack",
        description: "Pack of 3 Traditional Thekua boxes.",
        price: 799,
        original_price: 1799,
        image_url: "/images/pack-of-3.png",
        category: "Gift Box"
    },
    {
        id: "4",
        name: "Freshly Baked Thekua",
        description: "Crispy, fresh, and full of flavor.",
        price: 399,
        original_price: 699,
        image_url: "/images/thekua-closeup.png",
        category: "Fresh"
    }
];

export default function Shop() {
    return (
        <div className="bg-cream min-h-screen py-24">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-serif font-bold text-secondary-dark mb-8 text-center">Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}
