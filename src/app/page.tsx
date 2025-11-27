"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Leaf, Award } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useRef } from "react";

// Mock Data
const featuredProducts = [
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

const features = [
  { icon: ShieldCheck, title: "100% Authentic", desc: "Traditional recipes passed down through generations." },
  { icon: Leaf, title: "Pure Ingredients", desc: "Made with premium Ghee and Organic Jaggery." },
  { icon: Award, title: "Handcrafted", desc: "Made with love and patience, just like home." },
];

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-cream overflow-x-hidden">
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1976&auto=format&fit=crop"
            alt="Royal Indian Sweets"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-cream" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary-light tracking-[0.3em] uppercase text-sm font-bold mb-6 border border-primary-light/30 px-6 py-2 rounded-full backdrop-blur-sm">
              Est. 2024 • West Bengal
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-cream mb-8 leading-tight drop-shadow-2xl">
              Shuddh <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">Swad</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Experience the royal essence of <span className="text-primary-light font-serif italic">Thekua</span>.
              Handcrafted with pure ghee, organic jaggery, and a legacy of tradition.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/shop"
                className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_-5px_rgba(217,119,6,0.5)] hover:shadow-[0_0_40px_-5px_rgba(217,119,6,0.7)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Shop Collection <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
              <Link
                href="/story"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-cream border border-white/20 rounded-full font-bold text-lg transition-all"
              >
                Our Legacy
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Offer Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 right-4 md:bottom-20 md:right-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-xs hidden md:block"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary p-3 rounded-xl">
              <Star className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <p className="text-cream font-bold text-lg">First Order Offer</p>
              <p className="text-cream/70 text-sm mb-2">Get flat 25% off on your first purchase.</p>
              <div className="bg-white/20 px-3 py-1 rounded text-xs font-mono text-primary-light inline-block">
                Code: SWAD25
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-cream relative z-20 -mt-10 rounded-t-[3rem]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-paper mb-6 group-hover:bg-primary/10 transition-colors duration-500">
                  <feature.icon className="w-10 h-10 text-secondary group-hover:text-primary transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-secondary-dark mb-3">{feature.title}</h3>
                <p className="text-secondary/70 leading-relaxed max-w-xs mx-auto">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-paper bg-grain">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Curated Collection</span>
              <h2 className="text-5xl font-serif font-bold text-secondary-dark">Taste the Tradition</h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center text-secondary hover:text-primary font-bold transition-colors group"
            >
              View All Products <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/shop"
              className="inline-block bg-secondary text-cream px-8 py-3 rounded-full font-bold"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Immersive Story Section */}
      <section className="py-32 bg-secondary-dark relative overflow-hidden text-cream">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border-8 border-white/5"
              >
                <Image
                  src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1974&auto=format&fit=crop"
                  alt="Making of Thekua"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="font-serif text-3xl italic">"Preserving the taste of home."</p>
                  <p className="text-primary-light mt-2 font-bold">— Jayanta & Kailash</p>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-primary-light font-bold tracking-widest uppercase text-sm mb-4 block">Our Heritage</span>
              <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
                A Journey Back to <br /><span className="text-primary">Roots</span>
              </h2>
              <p className="text-cream/70 text-lg mb-8 leading-relaxed">
                Shuddh Swad was born from a simple yet profound realization: the authentic taste of homemade Thekua was fading away.
                We embarked on a mission to revive these age-old recipes, using only the purest ingredients and traditional methods.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-3xl font-serif font-bold text-primary mb-2">10k+</h4>
                  <p className="text-cream/60">Happy Customers</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif font-bold text-primary mb-2">100%</h4>
                  <p className="text-cream/60">Homemade Love</p>
                </div>
              </div>
              <Link
                href="/story"
                className="inline-flex items-center text-primary-light hover:text-white font-bold text-lg transition-colors group"
              >
                Read Our Full Story <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Join the Shuddh Swad Family</h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new launches, and traditional recipes.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 transition-all"
            />
            <button className="px-8 py-4 bg-secondary-dark text-white rounded-full font-bold hover:bg-secondary transition-colors shadow-lg">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
