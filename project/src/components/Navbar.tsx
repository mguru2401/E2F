import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/#home", isHash: true },
  { name: "About", href: "/#about", isHash: true },
  { name: "Services", href: "/#services", isHash: true },
  { name: "Industries", href: "/#industries", isHash: true },
  { name: "Why E2F", href: "/#why-e2f", isHash: true },
  { name: "Careers", href: "/careers", isHash: false },
  { name: "Contact", href: "/#contact", isHash: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    isHash: boolean
  ) => {
    if (isHash) {
      e.preventDefault();
      const targetId = href.replace("/", "");
      
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete then scroll
        setTimeout(() => {
          const element = document.querySelector(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== "/" ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-4"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img
              src="/E2F.png"
              alt="Elite Employee Fleet (E2F) Logo"
              className="h-12 md:h-16 w-auto"
            />

            <div className="flex flex-col justify-center leading-tight">
              <span
                className={`text-xl md:text-2xl lg:text-3xl font-bold ${
                  isScrolled || location.pathname !== "/" ? "text-navy-900" : "text-white"
                }`}
              >
                Elite Employee Fleet
              </span>

              <span
                className={`text-sm sm:text-base md:text-xl ${
                  isScrolled || location.pathname !== "/" ? "text-teal-600" : "text-teal-300"
                }`}
                style={{ fontFamily: "'Yesteryear', cursive" }}
              >
                Your Partner on the Road to Success
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.isHash ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href, true)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-teal-600 relative group ${
                    isScrolled || location.pathname !== "/" ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-teal-600 relative group ${
                    isScrolled || location.pathname !== "/" ? "text-gray-700" : "text-white"
                  } ${location.pathname === item.href ? "text-teal-600" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              )
            ))}
            <Link
              to="/#contact"
              onClick={(e) => handleClick(e, "/#contact", true)}
              className="px-6 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled || location.pathname !== "/" ? "text-navy-900" : "text-white"
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
                item.isHash ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href, true)}
                    className="px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors rounded-lg font-medium"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors rounded-lg font-medium ${location.pathname === item.href ? "bg-teal-50 text-teal-600" : ""}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link
                to="/#contact"
                onClick={(e) => handleClick(e, "/#contact", true)}
                className="mx-4 px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
