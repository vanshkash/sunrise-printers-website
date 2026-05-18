import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#0b0b0f] text-gray-300 pt-16">

            <div className="relative max-w-7xl mx-auto px-4 grid gap-12 md:grid-cols-4">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        <span className="text-orange-500">Sunrise</span> Printers
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed">
                        A Trusted Unit of Printing, Packaging & Advertisement
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-orange-400 cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="hover:text-orange-400 cursor-pointer"><Link to="/about">About Us</Link></li>
                        <li className="hover:text-orange-400 cursor-pointer"><Link to="/services">Services</Link></li>
                        <li className="hover:text-orange-400 cursor-pointer"><Link to="/gallery">Gallery</Link></li>
                        <li className="hover:text-orange-400 cursor-pointer"><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Flex Printing</li>
                        <li>Posters & Banners</li>
                        <li>Visiting Cards</li>
                        <li>Glowing Sign Boards</li>
                        <li>Wedding Cards</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>

                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <Phone size={16} /> +91 95688 28814
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={16} /> +91 99270 42675
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} />
                            <a
                                href="mailto:sunrisegautam1617@gmail.com"
                                className="hover:text-orange-400 transition"
                                target='blank'
                            >
                                sunrisegautam1617@gmail.com
                            </a>
                        </li>

                        <li className="flex items-center gap-2">
                            <MapPin size={42} /> <a 
                            className="hover:text-orange-400 transition" 
                            target='blank' 
                            href="https://www.google.com/maps/dir//SUNRISE+PRINTERS,+SANTOSH+COMPLEX,+Swarg+Ashram+Rd,+opp.+TARACHAND+HOSPITAL,+Hapur,+Uttar+Pradesh+245101/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390c85c571be9a23:0x44dad69ab423305c?sa=X&ved=1t:57443&ictx=111">Santosh Complex, Shop No 14, Opposite Tarachand Hospital, Swarag Ashram Road, Hapur, Uttar Pradesh
                            </a>
                        </li>
                    </ul>

                    {/* Social Media */}
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=100063901146375#"
                            className="w-9 h-9 flex items-center justify-center rounded-full
               bg-white/5 hover:bg-orange-500 transition"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://www.instagram.com/sunriseprinters_hapur/"
                            className="w-9 h-9 flex items-center justify-center rounded-full
               bg-white/5 hover:bg-orange-500 transition"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://wa.me/919568828814"
                            target="_blank"
                            className="w-9 h-9 flex items-center justify-center rounded-full
               bg-white/5 hover:bg-green-500 transition"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-12 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Sunrise Printers. All rights reserved.
                <div className="mt-2 text-xs text-gray-600">
  Designed & Developed by{" "}
  <a
    href="https://vanshkash.github.io/Portfolio-Website/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-orange-400 hover:text-orange-300 transition"
  >
    Vansh Kashyap
  </a>
</div>
            </div>
        </footer>
    );
}
