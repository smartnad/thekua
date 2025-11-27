"use client";

import { DollarSign, ShoppingBag, Users, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
                        <DollarSign className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-800">₹45,231</p>
                    <span className="text-green-500 text-sm flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 mr-1" /> +20.1% from last month
                    </span>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
                        <ShoppingBag className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-800">156</p>
                    <span className="text-green-500 text-sm flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 mr-1" /> +12.5% from last month
                    </span>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-500 text-sm font-medium">Active Users</h3>
                        <Users className="w-5 h-5 text-purple-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-800">2,345</p>
                    <span className="text-green-500 text-sm flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 mr-1" /> +5.4% from last month
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div>
                                    <p className="font-medium text-gray-800">Order #ORD-{1000 + i}</p>
                                    <p className="text-sm text-gray-500">2 items • ₹598</p>
                                </div>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                    Delivered
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Low Stock Alert</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                            <div>
                                <p className="font-medium text-gray-800">Traditional 3 Combo</p>
                                <p className="text-sm text-red-600">Only 5 left in stock</p>
                            </div>
                            <button className="text-sm text-red-600 font-medium hover:underline">Restock</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
