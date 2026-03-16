import { CheckCircle2, Star } from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import AnimatedCard from "../AnimatedCard";
import { testimonials } from "../../data/testimonials";

const benefits = [
  "Integrated workforce solutions tailored to your needs",
  "Reliable employee transportation services",
  "Strategic talent acquisition expertise",
  "Strong focus on employee wellbeing",
  "Professional and dependable service delivery",
  "Proven track record of client success",
  "Scalable solutions for growing organizations",
  "Dedicated support team",
];

export default function WhyE2F() {
  return (
    <Section id="why-e2f" background="gradient">
      <SectionTitle
        title="Why Choose E2F?"
        subtitle="Your trusted partner for comprehensive workforce solutions"
      />

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <AnimatedCard>
          <div className="bg-white rounded-2xl p-8 shadow-xl h-full">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              Key Benefits
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700 leading-relaxed group-hover:text-teal-600 transition-colors">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={200}>
          <div className="bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl p-8 text-white shadow-xl h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
            <p className="text-lg leading-relaxed mb-6">
              At E2F – Elite Employee Fleet, we are committed to being more than
              just a service provider. We aim to be a trusted partner that
              supports organizations and employees every step of the way.
            </p>
            <p className="text-xl font-semibold text-teal-300">
              Together, we move forward on the road to success.
            </p>
            {/* <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-teal-300">500+</div>
                <div className="text-sm text-gray-300 mt-1">Clients</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-teal-300">50K+</div>
                <div className="text-sm text-gray-300 mt-1">Employees</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-teal-300">98%</div>
                <div className="text-sm text-gray-300 mt-1">Satisfaction</div>
              </div>
            </div> */}
          </div>
        </AnimatedCard>
      </div>

      {/* <div>
        <h3 className="text-2xl md:text-3xl font-bold text-navy-900 text-center mb-12">
          What Our Clients Say
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard key={testimonial.id} delay={index * 100}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-navy-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div> */}
    </Section>
  );
}
