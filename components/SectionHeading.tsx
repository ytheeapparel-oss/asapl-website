import React from "react";

interface SectionHeadingProps {
  badge: string;
  badgeColor?: "sunshine" | "ocean" | "coral" | "mint" | "purple" | "bubblegum";
  title: string;
  highlightWord?: string;
  highlightColor?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  badge,
  badgeColor = "sunshine",
  title,
  highlightWord,
  highlightColor = "text-coral-500",
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const badgeClasses = {
    sunshine: "bg-sunshine-100 text-amber-800 border-sunshine-300",
    ocean: "bg-ocean-100 text-ocean-800 border-ocean-300",
    coral: "bg-coral-100 text-coral-800 border-coral-300",
    mint: "bg-mint-100 text-emerald-800 border-mint-300",
    purple: "bg-purple-100 text-purple-800 border-purple-300",
    bubblegum: "bg-bubblegum-100 text-pink-800 border-bubblegum-300",
  }[badgeColor];

  // Render highlighted word if provided
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className={highlightColor}>{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={`space-y-3 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } max-w-3xl ${className}`}
    >
      {/* Badge */}
      <div className={align === "center" ? "flex justify-center" : "flex"}>
        <span
          className={`inline-flex items-center px-4 py-1 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase border shadow-sm ${badgeClasses}`}
        >
          {badge}
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {renderTitle()}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
