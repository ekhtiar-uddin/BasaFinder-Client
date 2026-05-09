import { Home, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
export function NewNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Properties",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Pricing",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-[#f6920a] p-2 rounded-lg group-hover:bg-[#e08309] transition-colors">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-xl font-bold tracking-tight ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              RentMode
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#f6920a] ${isScrolled ? "text-gray-600" : "text-gray-200"}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className={`text-sm font-medium transition-colors hover:text-[#f6920a] ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              Sign In
            </button>
            <button className="bg-[#f6920a] hover:bg-[#e08309] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
              List Property
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 font-medium py-2 border-b border-gray-50 hover:text-[#f6920a]"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <button className="w-full py-2.5 text-gray-900 font-medium border border-gray-200 rounded-lg">
              Sign In
            </button>
            <button className="w-full py-2.5 bg-[#f6920a] text-white font-medium rounded-lg">
              List Property
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
