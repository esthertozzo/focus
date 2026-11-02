function SectionHeading({ subtitle, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="mb-4 inline-block text-lg font-semibold uppercase tracking-wider text-slate-500">
        {subtitle}
      </span>
      
      <h2 className="mb-4 mt-0 text-[3rem] font-bold leading-tight tracking-tight text-slate-900">
        {title}
      </h2>
      
      <p className="text-xl text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
