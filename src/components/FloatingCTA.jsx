export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1 ">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919568828814"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2  p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <img
          src="/images/WhatsApp.webp"
          alt="WhatsApp"
          className="w-12 h-12"
        />

      </a>

      {/* Call */}
      <a
        href="tel:+919568828814"
        className="group flex items-center gap-3  p-3 rounded-full shadow-lg "
      >
        <img
          src="/images/CallButton.gif"
          alt="Call"
          className="w-12 h-12"
        />
      </a>

    </div>
  );
}
