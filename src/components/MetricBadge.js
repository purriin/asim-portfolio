import React from 'react';

/**
 * MetricBadge Component
 * Reusable badge for displaying quantifiable achievements and tech chips.
 * - 'metric': Highlighted pill with cyan accent ring and glow.
 * - 'tech': Sleek pill for languages, frameworks, and system concepts.
 */
export default function MetricBadge({
  label,
  variant = 'metric',
  className = ''
}) {
  if (variant === 'metric') {
    return (
      <div
        className={`inline-flex items-center px-3.5 py-1.5 rounded-xl bg-elevation text-primary ring-1 ring-primary/40 text-sm sm:text-base font-medium shadow-sm transition-all duration-200 hover:ring-primary/70 hover:bg-elevation2 ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse" />
        <span className="paragraph">{label}</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-lg bg-elevation text-secondary ring-1 ring-secondary/40 text-xs sm:text-sm font-medium transition-all duration-200 hover:text-primary hover:ring-primary/60 hover:bg-elevation2 ${className}`}
    >
      <span className="paragraph">{label}</span>
    </div>
  );
}
