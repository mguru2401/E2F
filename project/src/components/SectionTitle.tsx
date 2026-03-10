interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 animate-fade-in-up">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          {subtitle}
        </p>
      )}
    </div>
  );
}
