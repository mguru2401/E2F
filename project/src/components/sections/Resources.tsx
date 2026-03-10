import { useState } from "react";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import AnimatedCard from "../AnimatedCard";
import { blogPosts } from "../../data/blogs";
import { BlogPost } from "../../types";

export default function Resources() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <Section id="resources" background="white">
      <SectionTitle
        title="Resources &amp; Insights"
        subtitle="Stay informed with the latest trends in workforce management and employee wellbeing"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <AnimatedCard key={post.id} delay={index * 100}>
            <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 h-full flex flex-col border border-gray-100">
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>

                {/* Full excerpt — no truncation */}
                <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-700">
                    By {post.author}
                  </span>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center space-x-1 text-teal-600 font-semibold text-sm group-hover:text-emerald-600 transition-colors hover:underline focus:outline-none"
                    aria-label={`Read full article: ${post.title}`}
                  >
                    <span>Read More</span>
                    <ArrowRight
                      size={16}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </article>
          </AnimatedCard>
        ))}
      </div>

      {/* Full Blog Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Blog post detail"
          onClick={() => setSelectedPost(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-3xl flex-shrink-0">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full">
                {selectedPost.category}
              </div>
              {/* Close button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-200 focus:outline-none"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>
                    {new Date(selectedPost.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{selectedPost.readTime}</span>
                </div>
                <span className="font-medium text-gray-700">
                  By {selectedPost.author}
                </span>
              </div>

              {/* Full Content */}
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {selectedPost.excerpt}
                </p>
                {/* Extended content placeholder paragraphs */}
                <p className="text-gray-600 leading-relaxed mt-4">
                  The workforce landscape is evolving rapidly, and organizations
                  that adapt quickly are the ones that will thrive.
                  Understanding the nuances of each sector's requirements is
                  crucial to developing effective strategies that drive
                  long-term success.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  At E2F, we work closely with industry leaders to understand
                  their unique challenges and deliver customized solutions.
                  Continuous learning, collaboration, and innovation remain at
                  the core of everything we do—ensuring that our clients always
                  have the competitive edge they need.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Whether you're looking to scale your workforce, improve
                  employee wellbeing programs, or streamline transportation
                  logistics, our team is ready to provide expert guidance every
                  step of the way.
                </p>
              </div>

              {/* Footer CTA */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="text-sm text-gray-500">
                  Want to learn more? Contact our team for a personalized
                  consultation.
                </p>
                <a
                  href="#contact"
                  onClick={() => setSelectedPost(null)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-12">
        <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          View All Articles
        </button>
      </div>
    </Section>
  );
}
