import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ItemCard Component
 * Minimalist name-only rounded card matching the portfolio theme.
 * Supports dual interaction modes:
 * - Clickable: Wraps in Link to `/work/:slug`, shows corner arrow indicator (↗), and has hover lift/glow.
 * - Non-Clickable: Static themed container for activities without subpages (e.g. Skule Badminton Club).
 */
export default function ItemCard({
  cardName,
  slug,
  isClickable = true,
  className = ''
}) {
  const clickable = Boolean(isClickable && slug);

  if (clickable) {
    return (
      <Link
        to={`/work/${slug}`}
        className={`group relative flex items-center justify-between p-6 sm:p-8 bg-[#141414] bg-gradient-to-b from-elevation2 to-elevation hover:bg-elevation rounded-[20px] ring-1 ring-white/10 hover:ring-primary/40 transition-all duration-200 hover:-translate-y-1 shadow-lg cursor-pointer ${className}`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-bright group-hover:text-primary transition-colors duration-200 paragraph pr-4">
          {cardName}
        </h3>
        <div className="flex-shrink-0 text-txt group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </Link>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-between p-6 sm:p-8 bg-[#141414] bg-gradient-to-b from-elevation2 to-elevation rounded-[20px] ring-1 ring-white/10 shadow-lg select-none ${className}`}
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-bright paragraph">
        {cardName}
      </h3>
    </div>
  );
}
