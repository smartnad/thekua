"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, Leaf, Award, Users, TrendingUp } from "lucide-react";

export default function Story() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div ref={containerRef} className="bg-cream min-h-screen overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <Image
                        src="/images/thekua-closeup.png"
                        alt="Thekua Texture"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-cream" />
                </motion.div>

                <div className="relative z-10 text-center text-cream px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <Sparkles className="w-5 h-5 text-primary-light" />
                            <span className="text-primary-light tracking-[0.5em] uppercase text-sm font-bold">Our Heritage</span>
                            <Sparkles className="w-5 h-5 text-primary-light" />
                        </motion.div>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
                            A Journey of <span className="text-primary italic">Taste</span>, <br />
                            Tradition, & Togetherness
                        </h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2"
                    >
                        <div className="w-1 h-2 bg-cream/50 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* The Beginning */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2"
                        >
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white group">
                                <Image
                                    src="/images/coconut-suji-magic.png"
                                    alt="Traditional Kitchen"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-sm font-serif italic">Handcrafted with love & tradition</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full md:w-1/2"
                        >
                            <div className="inline-flex items-center gap-2 mb-6">
                                <Heart className="w-6 h-6 text-primary" />
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Chapter One</span>
                            </div>
                            <h2 className="text-5xl font-serif font-bold text-secondary-dark mb-8">The Beginning</h2>
                            <div className="prose prose-lg text-secondary/70">
                                <p className="mb-6 text-xl leading-relaxed">
                                    Shuddh Swad was born from a simple yet profound realization by our founders, <strong className="text-primary">Jayanta & Kailash</strong>.
                                    Growing up in the heartland of India, they were surrounded by the rich aroma of homemade sweets, especially during festivals like Chhath Puja.
                                </p>
                                <p className="text-xl leading-relaxed">
                                    Thekua wasn't just a sweet; it was an emotion, a symbol of devotion and family bonding. As they moved away for work, they realized that authentic,
                                    homemade Thekua was hard to find. The market was flooded with factory-made versions that lacked the soul and purity of the traditional recipe.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-secondary/5"
                                >
                                    <Users className="w-8 h-8 text-primary mb-3" />
                                    <h4 className="text-3xl font-serif font-bold text-secondary-dark mb-1">10k+</h4>
                                    <p className="text-secondary/60 text-sm">Happy Customers</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-secondary/5"
                                >
                                    <TrendingUp className="w-8 h-8 text-primary mb-3" />
                                    <h4 className="text-3xl font-serif font-bold text-secondary-dark mb-1">100%</h4>
                                    <p className="text-secondary/60 text-sm">Pure & Natural</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Parallax */}
            <section className="py-32 bg-secondary-dark text-cream relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                {/* Decorative Elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-64 h-64 border border-primary/20 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 left-20 w-48 h-48 border border-primary/10 rounded-full"
                />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-8">
                            <Award className="w-6 h-6 text-primary" />
                            <span className="text-primary-light tracking-[0.3em] uppercase text-sm font-bold">Our Promise</span>
                            <Award className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12">Our Mission</h2>
                        <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed text-cream/90">
                            "To deliver <span className="text-primary font-serif italic">purity</span> and <span className="text-primary font-serif italic">tradition</span> in every bite.
                            We believe that food should be made with love, patience, and the finest ingredients."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-32 bg-paper bg-grain">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">What We Stand For</span>
                        <h2 className="text-5xl font-serif font-bold text-secondary-dark">Core Values</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Sparkles,
                                title: "Purity",
                                desc: "Only pure ghee, organic jaggery, and high-quality wheat flour. No preservatives.",
                                color: "text-blue-500"
                            },
                            {
                                icon: Heart,
                                title: "Tradition",
                                desc: "We stick to the age-old recipes passed down through generations.",
                                color: "text-red-500"
                            },
                            {
                                icon: Leaf,
                                title: "Sustainability",
                                desc: "Eco-friendly packaging and locally sourced ingredients.",
                                color: "text-green-500"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.8 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 rounded-2xl shadow-sm border border-secondary/5 hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-secondary-dark mb-4">{item.title}</h3>
                                <p className="text-secondary/70 text-lg leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h3 className="text-4xl font-serif font-bold text-secondary-dark mb-6">
                            Experience the Tradition
                        </h3>
                        <p className="text-xl text-secondary/70 mb-8">
                            Every bite of our Thekua tells a story of heritage, craftsmanship, and pure love.
                        </p>
                        <a
                            href="/shop"
                            className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Shop Our Collection
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
