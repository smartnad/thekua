"use client";

import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="bg-cream min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-secondary-dark">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block text-primary-light tracking-[0.3em] uppercase text-sm font-bold mb-4 border border-primary-light/30 px-4 py-1 rounded-full backdrop-blur-sm">
                            Get in Touch
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-6">Contact Us</h1>
                        <p className="text-xl text-cream/80 max-w-2xl mx-auto font-light">
                            We'd love to hear from you. Whether you have a question about our products, pricing, or just want to say hello.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {[
                            {
                                icon: MapPin,
                                title: "Visit Us",
                                content: "Adra, Near DVC More, West Bengal 723121",
                                sub: "Come say hello at our office HQ.",
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                icon: Phone,
                                title: "Call Us",
                                content: "+91 8016380734",
                                sub: "Mon-Sat from 9am to 6pm.",
                                color: "bg-green-50 text-green-600"
                            },
                            {
                                icon: Mail,
                                title: "Email Us",
                                content: "contact@shuddhswad.shop",
                                sub: "We'll get back to you within 24h.",
                                color: "bg-purple-50 text-purple-600"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/5 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-secondary-dark mb-2">{item.title}</h3>
                                <p className="text-secondary font-medium mb-1">{item.content}</p>
                                <p className="text-sm text-secondary/50">{item.sub}</p>
                            </motion.div>
                        ))}

                        {/* FAQ Teaser */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-primary/10 p-8 rounded-2xl border border-primary/20"
                        >
                            <div className="flex items-start gap-4">
                                <MessageSquare className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold text-secondary-dark mb-2">Need quick answers?</h3>
                                    <p className="text-secondary/70 text-sm mb-4">Check out our FAQ section for common questions about shipping and orders.</p>
                                    <button className="text-primary font-bold text-sm flex items-center hover:underline">
                                        View FAQ <ArrowRight className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-secondary/5"
                    >
                        <div className="mb-10">
                            <h2 className="text-3xl font-serif font-bold text-secondary-dark mb-4">Send us a Message</h2>
                            <p className="text-secondary/60">Fill out the form below and our team will get back to you shortly.</p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary-dark uppercase tracking-wider">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary-dark uppercase tracking-wider">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary-dark uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary-dark uppercase tracking-wider">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary-dark uppercase tracking-wider">Subject</label>
                                <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-secondary/70">
                                    <option>General Inquiry</option>
                                    <option>Order Support</option>
                                    <option>Wholesale / Bulk Order</option>
                                    <option>Feedback</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary-dark uppercase tracking-wider">Message</label>
                                <textarea
                                    rows={6}
                                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                    placeholder="How can we help you today?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-secondary-dark hover:bg-primary text-white py-5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
