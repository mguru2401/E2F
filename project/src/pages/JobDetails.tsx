import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle2, 
  Send, 
  ShieldCheck,
  Zap,
  Award
} from "lucide-react";
import { jobs } from "../data/jobs";
import SEO from "../components/SEO";

export default function JobDetails() {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Job Not Found</h2>
        <p className="text-gray-600 mb-8">The job opportunity you are looking for does not exist or has been removed.</p>
        <Link 
          to="/careers" 
          className="px-8 py-3 bg-navy-900 text-white rounded-full font-bold hover:bg-navy-800 transition-all shadow-lg"
        >
          Back to Careers
        </Link>
      </div>
    );
  }

  const handleApply = () => {
    const subject = encodeURIComponent(`Job application for ${job.title} - ${job.code}`);
    const body = encodeURIComponent(`Hi,\n\nI am interested in applying for the ${job.title} position (${job.code}) at ${job.company}.\n\nPlease find my application details attached.`);
    window.location.href = `mailto:career@e2fgroup.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-20">
      <SEO 
        title={`${job.title} at ${job.company} | Careers | E2F`}
        description={`Apply for the ${job.title} position at ${job.company} through Elite Employee Fleet. ${job.description}`}
      />
      {/* Dynamic Header */}
      <section className="bg-navy-900 text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <Link 
            to="/careers" 
            className="inline-flex items-center text-teal-300 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to All Opportunities
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {job.code}
                </span>
                <span className="text-teal-400 font-medium">Full-Time</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-teal-500" />
                  {job.company}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-teal-500" />
                  {job.location}
                </div>
              </div>
            </div>
            <button
              onClick={handleApply}
              className="px-10 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-2xl font-bold hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
            >
              Apply for this Position
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Image & Description */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg p-2">
              <img 
                src={job.image} 
                alt={job.title} 
                className="w-full h-auto rounded-2xl mb-8"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1521737706045-5186c675c6e4?auto=format&fit=crop&q=80&w=800';
                }}
              />
              <div className="p-6 md:p-8 pt-0">
                <h2 className="text-2xl font-bold text-navy-900 mb-4">About the Role</h2>
                <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
                  <p>{job.longDescription}</p>
                </div>
              </div>
            </div>

            {/* Quick Details Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {job.shifts && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Shift Information</h4>
                    <p className="text-navy-900 font-semibold">{job.shifts}</p>
                  </div>
                </div>
              )}
              {job.totalPositions && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Positions</h4>
                    <p className="text-navy-900 font-semibold">{job.totalPositions}</p>
                  </div>
                </div>
              )}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Status</h4>
                  <p className="text-navy-900 font-semibold">Immediate Joining</p>
                </div>
              </div>
            </div>

            {/* Eligibility & Requirements */}
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-navy-900 mb-8 flex items-center gap-3">
                <Zap className="text-teal-500" />
                Eligibility & Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-navy-800 mb-4">Qualification</h3>
                  <ul className="space-y-3">
                    {job.eligibility.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-teal-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {job.requirements && (
                  <div>
                    <h3 className="text-lg font-bold text-navy-800 mb-4">Specific Skills</h3>
                    <ul className="space-y-3">
                      {job.requirements.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-teal-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Compensation Box */}
            <div className="bg-navy-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award size={80} />
              </div>
              <h3 className="text-xl font-bold mb-6 text-teal-400">Earnings Package</h3>
              <div className="space-y-6">
                {job.salary.map((s, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <h4 className="text-sm text-gray-400 mb-1">{s.label}</h4>
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Box */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-navy-900">Key Benefits</h3>
              <ul className="space-y-4">
                {job.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-teal-600 rounded-full" />
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Action */}
            <div className="p-8 bg-teal-50 rounded-3xl text-center">
              <h3 className="text-lg font-bold text-navy-900 mb-4">Ready to start?</h3>
              <p className="text-sm text-gray-600 mb-6 font-medium">Click below to send your application to our hiring team.</p>
              <button
                onClick={handleApply}
                className="w-full py-4 bg-navy-900 text-white rounded-2xl font-bold hover:bg-navy-800 transition-all flex items-center justify-center gap-2"
              >
                Apply Now
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
