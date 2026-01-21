import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const servicesList = [
  "ID Cards",
  "Flex Banners",
  "Visiting Cards",
  "Sign Boards",
  "Glowing Sign Boards",
  "Wedding Cards",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-400 font-semibold"
      : "hover:text-orange-400";

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-orange-600"
          onClick={() => {
            setOpen(false);
            setMobileServices(false);
          }}
        >
          Sunrise<span className="text-white">Printers</span>
        </NavLink>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-white">
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>

          {/* Services Dropdown */}
<div className="relative group">
  <button className="flex items-center gap-1 hover:text-orange-400">
    Services <ChevronDown size={16} />
  </button>

  <div
    className="absolute top-full left-0 mt-3 w-64
                backdrop-blur-xl
               border border-orange-400/60
               text-white rounded-xl shadow-xl
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transition-all duration-300"
  >
    <ul className="py-3">
      {servicesList.map((service, i) => (
        <li key={i}>
          <NavLink
            to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
            className="block px-5 py-2 hover:bg-orange-400/10 hover:text-orange-300 transition"
          >
            {service}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
</div>


          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>

          <a
            href="https://wa.me/919568828814"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition"
          >
            Get Quote
          </a>
        </nav>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU (SLIDE) ================= */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full bg-gray-900 shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4 font-medium text-white">

          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink>

          {/* Mobile Services */}
          <button
            onClick={() => setMobileServices(!mobileServices)}
            className="flex justify-between items-center"
          >
            Services
            <ChevronDown
              className={`transition ${mobileServices ? "rotate-180" : ""}`}
            />
          </button>

          {mobileServices && (
            <div className="pl-4 space-y-2 text-sm text-gray-400">
              {servicesList.map((service, i) => (
                <NavLink
                  key={i}
                  to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => {
                    setOpen(false);
                    setMobileServices(false);
                  }}
                  className="block hover:text-orange-600"
                >
                  {service}
                </NavLink>
              ))}
            </div>
          )}

          <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink>

          <a
            href="https://wa.me/919568828814"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white text-center py-2 rounded-full"
            onClick={() => setOpen(false)}
          >
            Get Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
