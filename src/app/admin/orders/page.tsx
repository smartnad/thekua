"use client";

import { Eye } from "lucide-react";

// Mock Data
const orders = [
    {
        id: "ORD-1001",
        customer: "Rahul Kumar",
        date: "2023-11-20",
        total: 598,
        status: "Delivered",
    },
    {
        id: "ORD-1002",
        customer: "Priya Singh",
        date: "2023-11-21",
        total: 1799,
        status: "Processing",
    },
    {
        id: "ORD-1003",
        customer: "Amit Sharma",
        date: "2023-11-22",
        total: 299,
        status: "Pending",
    },
];

export default function AdminOrders() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Orders</h1>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 font-medium text-gray-500">Order ID</th>
                            <th className="p-4 font-medium text-gray-500">Customer</th>
                            <th className="p-4 font-medium text-gray-500">Date</th>
                            <th className="p-4 font-medium text-gray-500">Total</th>
                            <th className="p-4 font-medium text-gray-500">Status</th>
                            <th className="p-4 font-medium text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-mono text-sm text-gray-600">{order.id}</td>
                                <td className="p-4 font-medium text-gray-800">{order.customer}</td>
                                <td className="p-4 text-gray-600">{order.date}</td>
                                <td className="p-4 text-gray-600">₹{order.total}</td>
                                <td className="p-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === "Delivered"
                                                ? "bg-green-100 text-green-700"
                                                : order.status === "Processing"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                                        <Eye className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
