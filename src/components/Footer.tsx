import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary-dark text-cream pt-24 pb-12 relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <h3 className="text-4xl font-serif font-bold text-primary">Shuddh Swad</h3>
                        </Link>
                        <p className="text-cream/70 leading-relaxed max-w-xs">
                            Bringing the authentic taste of tradition to your doorstep. Handmade with love, pure ingredients, and a legacy of flavor.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-primary-light">Explore</h4>
                        <ul className="space-y-4">
                            {['Shop', 'Our Story', 'Track Order', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-cream/70 hover:text-primary transition-colors inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-primary-light">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Shipping Policy', 'Refund Policy'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-cream/70 hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-primary-light">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <span className="text-cream/70">
                                    Adra, Near DVC More,<br />
                                    West Bengal 723121
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-cream/70">+91 8016380734</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-cream/70">contact@shuddhswad.shop</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/40">
                    <p>&copy; {new Date().getFullYear()} Shuddh Swad. All rights reserved.</p>
                    <p>Designed with ❤️ for Tradition</p>
                </div>
            </div>
        </footer>
    );
}
