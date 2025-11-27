"use client";

import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import Image from "next/image";

// Mock Data
const initialProducts = [
    {
        id: "1",
        name: "Coconut Suji Magic",
        price: 299,
        stock: 100,
        image_url: "/images/coconut-suji-magic.png",
    },
    {
        id: "2",
        name: "Coconut Jaggery Magic",
        price: 299,
        stock: 85,
        image_url: "/images/coconut-jaggery-magic.png",
    },
];

export default function AdminProducts() {
    const [products, setProducts] = useState(initialProducts);

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Products</h1>
                <button className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg font-bold flex items-center transition-colors">
                    <Plus className="w-5 h-5 mr-2" /> Add Product
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 font-medium text-gray-500">Product</th>
                            <th className="p-4 font-medium text-gray-500">Price</th>
                            <th className="p-4 font-medium text-gray-500">Stock</th>
                            <th className="p-4 font-medium text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                            <Image
                                                src={product.image_url}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="font-medium text-gray-800">{product.name}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-gray-600">₹{product.price}</td>
                                <td className="p-4 text-gray-600">{product.stock}</td>
                                <td className="p-4">
                                    <div className="flex space-x-2">
                                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
