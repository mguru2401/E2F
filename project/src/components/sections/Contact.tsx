import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import AnimatedCard from "../AnimatedCard";
import Button from "../Button";
import { ContactForm } from "../../types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/hr@e2fgroup.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Contact Form Submission from ${formData.name}`,
            _template: "table",
            _cc: "eliteemployeefleet@gmail.com",
          }),
        },
      );

      if (response.ok) {
        setSubmitMessage(
          "Thank you for your interest! We will contact you soon.",
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return (
    <Section id="contact" background="gradient">
      <SectionTitle
        title="Get In Touch"
        subtitle="Ready to transform your workforce? Let's start the conversation"
      />

      <div className="grid lg:grid-cols-2 gap-12">
        <AnimatedCard>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                Let's Partner for Success
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you need talent acquisition, employee transportation, or
                wellness programs, we're here to help. Reach out to discuss how
                E2F can support your organization.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content:
                    "5/34/41A, Kamarajar Nagar West, Palayampatti,\nVirudhunagar, Tamil Nadu, India",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 9176345451",
                  link: "tel:+919176345451",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "career@e2fgroup.com",
                  link: "mailto:career@e2fgroup.com",
                },
              ].map((item, index) => {
                const Card = (
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-white" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );

                return item.link ? (
                  <a key={index} href={item.link} className="cursor-pointer">
                    {Card}
                  </a>
                ) : (
                  <div key={index}>{Card}</div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday:</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={200}>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ""); // remove non-numbers
                      if (value.length <= 10) {
                        setFormData((prev) => ({
                          ...prev,
                          phone: value,
                        }));
                      }
                    }}
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                    placeholder="9876543210"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="talent_acquisition">Talent Acquisition</option>
                  <option value="employee_transportation">
                    Employee Transportation
                  </option>
                  <option value="employee_wellness">Employee Wellness</option>
                  <option value="all_services">All Services</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              {submitMessage && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full group"
                size="lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </>
                )}
              </Button>
            </div>
          </form>
        </AnimatedCard>
      </div>
    </Section>
  );
}
