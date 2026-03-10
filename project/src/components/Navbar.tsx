import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Why E2F", href: "#why-e2f" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center space-x-3"
            onClick={(e) => handleClick(e, "#home")}
          >
            <img
              src="/E2F.png"
              alt="E2F Logo"
              className="h-10 md:h-12 w-auto"
            />
            <div className="flex flex-col">
              <span
                className={`text-xl md:text-2xl font-bold transition-colors ${isScrolled ? "text-navy-900" : "text-white"}`}
              >
                Employee Elite Fleet
              </span>
              <span
                className={`text-xs transition-colors ${isScrolled ? "text-teal-600" : "text-teal-300"}`}
              >
                Employee Elite Fleet
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-teal-600 relative group ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="px-6 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-navy-900" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors rounded-lg font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="mx-4 px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
