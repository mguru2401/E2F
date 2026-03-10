import { Target, Eye, Award, Users, Handshake, Lightbulb } from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import AnimatedCard from "../AnimatedCard";

const values = [
  {
    icon: Users,
    title: "People First",
    description:
      "Employees are the foundation of every successful organization",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "We operate with transparency, trust, and ethical responsibility",
  },
  {
    icon: Handshake,
    title: "Reliability",
    description:
      "Our services are dependable and designed to support operational efficiency",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We work alongside organizations to achieve shared success",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously improve our solutions to meet evolving workforce needs",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive to deliver the highest standards of service",
  },
];

export default function About() {
  return (
    <Section id="about" background="white">
      <div className="space-y-16">
        {/* Intro */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900">
            About E2F
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            E2F – At E2F – Employee Elite Fleet, we believe that people are the
            driving force behind every successful organization. When employees
            are supported, empowered, and connected with the right
            opportunities, they perform at their best and contribute
            meaningfully to organizational growth. E2F was established with a
            vision to provide comprehensive workforce solutions that support
            organizations and employees at every stage of their professional
            journey. From identifying and acquiring the right talent, to
            ensuring safe and reliable employee transportation, and supporting
            employee wellbeing and engagement, E2F acts as a trusted partner for
            organizations seeking to build strong and resilient workforces.
            Guided by our commitment to people-first values, we combine
            innovative talent solutions, dependable mobility services, and
            employee-focused programs to create environments where individuals
            and organizations can thrive together. At E2F, we don’t just provide
            services—we guide organizations and employees forward on the road to
            success.
          </p>
        </div>

        {/* Vision & Mission — equal height */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <AnimatedCard>
            <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl h-full flex flex-col">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl font-bold">Vision</h3>
              </div>
              <p className="text-lg leading-relaxed flex-1">
                To be a trusted workforce solutions partner that empowers
                organizations and employees through talent, mobility, and
                wellbeing—driving progress on the road to success.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="bg-gradient-to-br from-navy-700 to-navy-900 rounded-3xl p-8 text-white shadow-2xl h-full flex flex-col">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-bold">Mission</h3>
              </div>
              <p className="text-lg leading-relaxed flex-1">
                To deliver integrated workforce solutions that attract the right
                talent, support employee wellbeing, and provide reliable
                transportation services—helping organizations build stronger,
                more productive, and engaged workforces.
              </p>
            </div>
          </AnimatedCard>
        </div>

        {/* Core Values — equal height cards */}
        <div>
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedCard key={index} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <AnimatedCard>
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-8 md:p-12 text-center border border-teal-100">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              Our Approach
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Users size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-navy-900">People</h4>
                <p className="text-gray-600">
                  We prioritize the wellbeing, growth, and engagement of
                  employees
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Handshake size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-navy-900">Partnership</h4>
                <p className="text-gray-600">
                  We collaborate closely with organizations to understand their
                  needs
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <Target size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-navy-900">Progress</h4>
                <p className="text-gray-600">
                  We deliver solutions that help organizations move forward
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </Section>
  );
}
