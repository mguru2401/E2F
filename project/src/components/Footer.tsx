import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="/E2F.png"
                alt="Elite Employee Fleet (E2F) Logo"
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <span
              className="text-sm md:text-base text-teal-600 block"
              style={{ fontFamily: "'Yesteryear', cursive" }}
            >
              Your Partner on the Road to Success
            </span>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-teal-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/#home", isHash: true },
                { name: "About", href: "/#about", isHash: true },
                { name: "Services", href: "/#services", isHash: true },
                { name: "Industries", href: "/#industries", isHash: true },
                { name: "Why E2F", href: "/#why-e2f", isHash: true },
                { name: "Careers", href: "/careers", isHash: false },
                { name: "Contact", href: "/#contact", isHash: true },
              ].map((item) => (
                <li key={item.name}>
                  {item.isHash ? (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-teal-300 transition-colors duration-300 text-sm md:text-base"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-teal-300 transition-colors duration-300 text-sm md:text-base"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-teal-300">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Talent Acquisition",
                "Employee Transportation",
                "Employee Wellness",
                "Workforce Planning"
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    className="text-gray-300 hover:text-teal-300 transition-colors duration-300 text-sm md:text-base"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-teal-300">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-teal-400 flex-shrink-0 mt-1"
                />
                <span className="text-gray-300 text-sm leading-relaxed">
                  5/34/41A, Kamarajar Nagar West, Palayampatti, Virudhunagar,
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <a
                  href="tel:+919176345451"
                  className="text-gray-300 text-sm hover:text-teal-400 transition-colors"
                >
                  +91 9176345451
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:career@e2fgroup.com"
                  className="text-gray-300 text-sm hover:text-teal-400 transition-colors"
                >
                  career@e2fgroup.com
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4 text-teal-300 uppercase tracking-wider">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/eliteemployeefleet/",
                  },
                  { icon: Twitter, href: "https://x.com/e2fgroup" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label="Social media"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {currentYear} E2F - Elite Employee Fleet. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
