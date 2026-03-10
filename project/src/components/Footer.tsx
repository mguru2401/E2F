import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <img
              src="/WhatsApp_Image_2026-03-09_at_10.51.10_PM.jpeg"
              alt="E2F Logo"
              className="h-12 w-auto"
            />
            <h3 className="text-2xl font-bold">E2F</h3>
            <p className="text-teal-300 font-medium">
              Your Partner on the Road to Success
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Comprehensive workforce solutions for talent acquisition, employee transportation, and workplace wellness.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-300">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Industries', 'Why E2F', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-teal-300 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-300">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                  Talent Acquisition
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                  Employee Transportation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                  Employee Wellness
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                  Workforce Planning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-teal-300">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  Business District, Corporate Avenue<br />Mumbai, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@e2f.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-teal-300">Follow Us</h5>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Facebook, href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-teal-600 transition-all duration-300 transform hover:scale-110"
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
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} E2F - Elite Employee Fleet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
