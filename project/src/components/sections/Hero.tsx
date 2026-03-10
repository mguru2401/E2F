import { ArrowRight, Users, Bus, Heart } from "lucide-react";
import { ShieldCheck, BadgeDollarSign } from "lucide-react";
import Button from "../Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">
                Your Partner on the Road to Success
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elite{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Employee Fleet
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Comprehensive workforce solutions for talent acquisition, employee
              transportation, and workplace wellness. Building stronger teams
              for a better tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="w-full sm:w-auto group">
                  Get Started
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                >
                  Explore Services
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                {
                  icon: Users,
                  label: "Talent Acquisition",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  icon: Bus,
                  label: "Transportation",
                  color: "from-teal-400 to-teal-600",
                },
                {
                  icon: Heart,
                  label: "Employee Wellness",
                  color: "from-emerald-400 to-emerald-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}
                  >
                    <item.icon size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block animate-fade-in-up animation-delay-500">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-emerald-500/20 rounded-3xl transform rotate-6" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  {/* 100% Genuine */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl border border-white/20">
                    <div>
                      <p className="text-sm text-gray-300">Authenticity</p>
                      <p className="text-2xl font-bold text-white">
                        100% Genuine Services
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full flex items-center justify-center">
                      <ShieldCheck size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Zero Commission */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl border border-white/20">
                    <div>
                      <p className="text-sm text-gray-300">
                        Transparent Pricing
                      </p>
                      <p className="text-2xl font-bold text-white">
                        Zero Commission
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center">
                      <BadgeDollarSign size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Trusted Network */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-xl border border-white/20">
                    <div>
                      <p className="text-sm text-gray-300">Reliability</p>
                      <p className="text-2xl font-bold text-white">
                        Trusted Workforce Network
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full flex items-center justify-center">
                      <Users size={32} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
