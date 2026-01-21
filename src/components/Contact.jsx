import { Send, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Name validation
  const isValidName = (name) =>
    /^[a-zA-Z][a-zA-Z\s.]{1,40}$/.test(name.trim());

  //  Email validation
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // phone validation
  const isValidPhone = (phone) =>
    /^[6-9]\d{9}$/.test(phone);

  // WhatsApp fallback
  const openWhatsAppFallback = (form) => {
    const phoneNumber = "917983202009";

    const text = `New Contact Request:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappURL, "_blank");
  };

  // Handle input change with validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    // NAME
    if (name === "name") {
      setForm({ ...form, name: value });

      if (value && !isValidName(value)) {
        setNameError("Enter a valid full name");
      } else {
        setNameError("");
      }
      return;
    }

    // PHONE
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setForm({ ...form, phone: numericValue });

      if (numericValue && !isValidPhone(numericValue)) {
        setPhoneError("Enter a valid 10-digit mobile number");
      } else {
        setPhoneError("");
      }
      return;
    }

    // EMAIL
    if (name === "email") {
      setForm({ ...form, email: value });

      if (value && !isValidEmail(value)) {
        setEmailError("Enter a valid email address");
      } else {
        setEmailError("");
      }
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // it Stops if invalid
    if (!isValidName(form.name)) {
      setNameError("Enter a valid full name");
      return;
    }

    if (!isValidEmail(form.email)) {
      setEmailError("Enter a valid email address");
      return;
    }

    if (!isValidPhone(form.phone)) {
      setPhoneError("Enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_ausbmdh",
        "template_zx94jch",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "-ENBcrVCEkdTERirU"
      )
      .then(() => {
        alert("Thank you! Your message has been sent successfully.");
        setForm({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("We couldn’t send your message right now. Please try again.");
        openWhatsAppFallback(form);
        setForm({ name: "", email: "", phone: "", message: "" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="relative py-28 text-white overflow-hidden">
      <div className="relative z-10 text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-orange-500">Us</span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Let’s discuss your printing & branding needs
        </p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Full Name
            </label>
            <div className="flex items-center gap-3 bg-black/40 rounded-lg px-4">
              <User size={18} className="text-orange-400" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-transparent py-3 outline-none text-white"
              />
            </div>
            {nameError && (
              <p className="mt-1 text-sm text-red-400">{nameError}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Email
            </label>
            <div className="flex items-center gap-3 bg-black/40 rounded-lg px-4">
              <Mail size={18} className="text-orange-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-transparent py-3 outline-none text-white"
              />
            </div>
            {emailError && (
              <p className="mt-1 text-sm text-red-400">{emailError}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Phone
            </label>
            <div className="flex items-center gap-3 bg-black/40 rounded-lg px-4">
              <Phone size={18} className="text-orange-400" />
              <input
                type="tel"
                name="phone"
                inputMode="numeric"
                maxLength={10}
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                className="w-full bg-transparent py-3 outline-none text-white"
              />
            </div>
            {phoneError && (
              <p className="mt-1 text-sm text-red-400">{phoneError}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full bg-black/40 rounded-lg px-4 py-3 outline-none text-white resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 transition py-3 rounded-xl font-semibold disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
