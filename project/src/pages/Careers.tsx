import { MapPin, Send, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { jobs, Job } from "../data/jobs";
import SEO from "../components/SEO";

export default function Careers() {
  const handleApply = (job: Job, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const subject = encodeURIComponent(
      `Job application for ${job.title} - ${job.code}`,
    );
    const body = encodeURIComponent(
      `Hi,\n\nI am interested in applying for the ${job.title} position (${job.code}) at ${job.company}.\n\nPlease find my application details attached.`,
    );
    window.location.href = `mailto:career@e2fgroup.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <SEO 
        title="Careers | Elite Employee Fleet (E2F)" 
        description="Join Elite Employee Fleet and build your career with industry leaders like Apollo Tyres, Ashok Leyland, and Caterpillar. Explore our latest opportunities."
      />
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Join Our Fleet
          </h1>
          <p className="text-xl text-teal-300 max-w-3xl mx-auto animate-fade-in-up">
            Elite Employee Fleet is looking for dedicated professionals to join
            our growing team. Explore our latest opportunities with
            industry-leading partners.
          </p>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobs.map((job) => (
              <Link
                to={`/careers/${job.id}`}
                key={job.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col group/card animate-fade-in-up"
                style={{ animationDelay: `${parseInt(job.id.slice(-1)) * 150}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={job.image}
                    alt={`${job.company} ${job.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1521737706045-5186c675c6e4?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full font-bold border border-white/30 flex items-center gap-2 transform translate-y-4 group-hover/card:translate-y-0 transition-all duration-300">
                      View Details
                      <ExternalLink size={16} />
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 bg-teal-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    {job.code}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col relative bg-white">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-px bg-teal-600"></span>
                      <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
                        {job.company}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover/card:text-teal-600 transition-colors uppercase leading-tight">
                      {job.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm font-medium">
                      <MapPin className="w-5 h-5 mr-2 text-teal-500" />
                      {job.location}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow line-clamp-3">
                    {job.description}
                  </p>

                  <button
                    onClick={(e) => handleApply(job, e)}
                    className="w-full py-4 bg-navy-900 text-white rounded-2xl font-bold overflow-hidden relative group/btn transition-all duration-300 hover:shadow-xl active:scale-95"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Apply Now
                      <Send className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24 px-4 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Didn't find the right fit?
          </h2>
          <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
            We're always looking for exceptional talent. If you don't see a
            position that matches your skills, send us your CV and we'll keep
            you on our radar.
          </p>
          <a
            href="mailto:career@e2fgroup.com"
            className="inline-flex items-center justify-center px-10 py-4 bg-navy-900 text-white rounded-full font-bold hover:bg-navy-800 transition-all duration-300 hover:shadow-2xl shadow-lg transform hover:-translate-y-1"
          >
            Send General Application
          </a>
        </div>
      </section>
    </div>
  );
}
