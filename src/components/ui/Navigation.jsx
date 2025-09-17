import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Experience", href: "#experience" },
    { name: "Process", href: "#process" },
    { name: "AI Coach", href: "#ai" },
    { name: "Begin", href: "#cta" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-14 py-4 font-playfair">
        <div className="relative flex items-center justify-between">
          {/* Centered Name - absolutely centered, always on top */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max pointer-events-none select-none">
            <span className="font-luxury text-2xl md:text-3xl text-luxury-gold tracking-wide whitespace-nowrap">
              SANAYA CHATURVEDI
            </span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 z-20 ml-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-luxury-gold transition-all duration-300 font-times-condensed font-light tracking-wide relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-luxury-gold transition-colors z-20 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-white/90 hover:text-luxury-gold transition-colors font-times-condensed font-light"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
