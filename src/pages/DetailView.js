import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Header from '../navigation/header';
import Footer from '../navigation/footer';
import MetricBadge from '../components/MetricBadge';
import ItemCard from '../components/ItemCard';
import { getPortfolioItemBySlug } from '../data/portfolioData';

/**
 * DetailView Component
 * Two-tier dedicated subpage view for work items.
 * - Tier 1: Scannable resume-style bullet points, metric highlights, and tech chips.
 * - Cross-Reference: Embedded project link for extracurriculars with technical outputs (e.g. MIST -> Real Time Upscaling).
 * - Tier 2: Themed stylized breakdown box for items with completed deep dives (Vehicle Monitor Corp & Real Time Upscaling).
 * - Fallback: Graceful 404 state if slug does not match.
 */
export default function DetailView() {
  const { slug } = useParams();
  const item = getPortfolioItemBySlug(slug);

  // Fallback view for invalid or unknown slugs
  if (!item) {
    return (
      <div className="bg-wave bg-bg min-h-screen text-txt flex flex-col justify-between">
        <Header />
        <main className="mx-auto max-w-4xl px-6 py-40 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-primary title">
            ITEM NOT FOUND
          </h1>
          <p className="mt-6 text-xl text-txt paragraph">
            The project or experience you are looking for does not exist or may have been moved.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-elevation text-primary ring-1 ring-primary hover:ring-bright hover:bg-elevation2 transition-all duration-200 paragraph text-lg font-medium"
            >
              ← Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Determine back navigation anchor based on item section
  const backSection =
    item.section === 'experience'
      ? 'experience'
      : item.section === 'extracurricular'
        ? 'extracurriculars'
        : 'projects';

  const sectionLabel =
    item.section === 'experience'
      ? 'Experience'
      : item.section === 'extracurricular'
        ? 'Extra Curriculars'
        : 'Projects';

  // Resolve related projects if specified (e.g. MIST -> Real Time Upscaling)
  const relatedProjects = Array.isArray(item.relatedProjectSlugs)
    ? item.relatedProjectSlugs
      .map((relSlug) => getPortfolioItemBySlug(relSlug))
      .filter(Boolean)
    : [];

  return (
    <div className="bg-wave bg-bg min-h-screen text-txt flex flex-col justify-between">
      <Header />

      <main className="mx-auto max-w-4xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 w-full flex-grow">
        {/* Back Navigation */}
        <div className="mb-8">
          <HashLink
            smooth
            to={`/#${backSection}`}
            className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-200 paragraph text-base sm:text-lg font-medium group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-200">
              ←
            </span>
            Back to {sectionLabel}
          </HashLink>
        </div>

        {/* Hero Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary title tracking-wide leading-tight">
            {item.title}
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl font-medium text-secondary paragraph">
            {item.role} • <span className="text-bright">{item.organization}</span>
          </h2>
          <p className="mt-2 text-base sm:text-lg text-txt paragraph">
            {item.date}
            {item.location && <span> • {item.location}</span>}
          </p>

          {/* Subpage Metric Highlights */}
          {item.metrics && item.metrics.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {item.metrics.map((metric, idx) => (
                <MetricBadge key={idx} label={metric} variant="metric" />
              ))}
            </div>
          )}

          {/* Technology Chips */}
          {item.tags && item.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, idx) => (
                <MetricBadge key={idx} label={tag} variant="tech" />
              ))}
            </div>
          )}

          {/* External Action Links (GitHub, Demo, Papers) */}
          {item.links && item.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-4">
              {item.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-[#161616] text-bright ring-1 ring-white/10 hover:ring-primary hover:text-primary transition-all duration-200 paragraph text-sm font-semibold"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Tier 1: Highlights Box */}
        <section
          aria-labelledby="resume-highlights-heading"
          className="bg-[#141414] bg-gradient-to-b from-elevation2 to-elevation rounded-[24px] p-6 sm:p-10 ring-1 ring-white/10 shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <h3
              id="resume-highlights-heading"
              className="text-xl sm:text-2xl font-bold text-bright paragraph"
            >
              Highlights & Key Responsibilities
            </h3>
            <span className="text-xs uppercase tracking-wider text-secondary font-semibold px-2.5 py-1 rounded-md bg-elevation ring-1 ring-secondary/30">
              Overview
            </span>
          </div>

          <ul className="space-y-4 text-base sm:text-lg text-bright/90 paragraph">
            {item.resumeBullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary mr-3 text-xl leading-none mt-1 select-none">
                  •
                </span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Cross-Reference Card (e.g. MIST -> Real Time Image Upscaling) */}
        {relatedProjects.length > 0 && (
          <section className="mt-10">
            <h3 className="text-xl sm:text-2xl font-bold text-secondary paragraph mb-4">
              Featured Project Output
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {relatedProjects.map((rel) => (
                <ItemCard
                  key={rel.slug}
                  cardName={rel.cardName}
                  slug={rel.slug}
                  isClickable={true}
                />
              ))}
            </div>
          </section>
        )}

        {/* Tier 2: Stylized Detailed Breakdown Box (Rendered only when detailedBreakdown is present) */}
        {item.detailedBreakdown && (
          <section
            aria-labelledby="detailed-breakdown-heading"
            className="mt-12 bg-[#141414] bg-gradient-to-b from-elevation2 to-elevation rounded-[24px] p-6 sm:p-10 ring-1 ring-primary/40 shadow-xl"
          >
            <div className="border-b border-primary/20 pb-4 mb-8">
              <span className="text-xs uppercase tracking-wider text-primary font-semibold px-2.5 py-1 rounded-md bg-elevation ring-1 ring-primary/40">
                Engineering Deep Dive
              </span>
              <h3
                id="detailed-breakdown-heading"
                className="text-2xl sm:text-4xl font-bold text-primary title mt-3"
              >
                DETAILED TECHNICAL BREAKDOWN
              </h3>
            </div>

            <div className="space-y-8 text-txt paragraph">
              {/* Problem Overview */}
              {item.detailedBreakdown.problemOverview && (
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-bright mb-2">
                    1. Problem & Context
                  </h4>
                  <p className="text-base sm:text-lg leading-relaxed text-txt/95">
                    {item.detailedBreakdown.problemOverview}
                  </p>
                </div>
              )}

              {/* Technical Architecture */}
              {item.detailedBreakdown.technicalArchitecture && (
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-bright mb-2">
                    2. System Architecture & Pipeline Design
                  </h4>
                  <p className="text-base sm:text-lg leading-relaxed text-txt/95">
                    {item.detailedBreakdown.technicalArchitecture}
                  </p>
                </div>
              )}

              {/* Engineering Challenges */}
              {item.detailedBreakdown.engineeringChallenges && (
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-bright mb-2">
                    3. Low-Level Engineering & Optimization Challenges
                  </h4>
                  <p className="text-base sm:text-lg leading-relaxed text-txt/95">
                    {item.detailedBreakdown.engineeringChallenges}
                  </p>
                </div>
              )}

              {/* Impact and Results */}
              {item.detailedBreakdown.impactAndResults && (
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-bright mb-2">
                    4. Performance Benchmarks & Impact
                  </h4>
                  <p className="text-base sm:text-lg leading-relaxed text-txt/95">
                    {item.detailedBreakdown.impactAndResults}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
