import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import DetailView from './DetailView';
import Home from './index';
import { portfolioData } from '../data/portfolioData';

describe('Phase H: Comprehensive End-to-End User Journeys & Edge Cases', () => {
  // Test every individual clickable portfolio item
  const clickableItems = portfolioData.filter((item) => item.isClickable !== false && item.slug);

  test.each(clickableItems)(
    'Subpage renders correctly for "$cardName" (slug: $slug)',
    ({ slug, cardName, title, section, resumeBullets, detailedBreakdown }) => {
      render(
        <MemoryRouter initialEntries={[`/work/${slug}`]}>
          <Routes>
            <Route path="/work/:slug" element={<DetailView />} />
          </Routes>
        </MemoryRouter>
      );

      // Verify title
      expect(screen.getByRole('heading', { level: 1 }).textContent.trim()).toEqual(title.trim());

      // Verify Tier 1 resume bullets
      expect(screen.getByText(/highlights & key responsibilities/i)).toBeInTheDocument();
      expect(resumeBullets.length).toBeGreaterThan(0);
      expect(screen.getByText(resumeBullets[0])).toBeInTheDocument();

      // Verify back navigation target
      const expectedBack =
        section === 'experience'
          ? '/#experience'
          : section === 'extracurricular'
          ? '/#extracurriculars'
          : '/#projects';
      const backLink = screen.getByRole('link', { name: new RegExp(`back to ${section === 'experience' ? 'experience' : section === 'extracurricular' ? 'extra curriculars' : 'projects'}`, 'i') });
      expect(backLink).toHaveAttribute('href', expectedBack);

      // Verify Tier 2 deep dive behavior
      if (detailedBreakdown) {
        expect(screen.getByText(/detailed technical breakdown/i)).toBeInTheDocument();
        expect(screen.getByText(/1\. Problem & Context/i)).toBeInTheDocument();
        expect(screen.getByText(/2\. System Architecture & Pipeline Design/i)).toBeInTheDocument();
        expect(screen.getByText(/3\. Low-Level Engineering & Optimization Challenges/i)).toBeInTheDocument();
        expect(screen.getByText(/4\. Performance Benchmarks & Impact/i)).toBeInTheDocument();
      } else {
        expect(screen.queryByText(/detailed technical breakdown/i)).toBeNull();
        expect(screen.queryByText(/in progress/i)).toBeNull();
        expect(screen.queryByText(/coming soon/i)).toBeNull();
      }
    }
  );

  test('UofT MIST subpage dynamically cross-links to Real Time Image Upscaling', () => {
    render(
      <MemoryRouter initialEntries={['/work/uoft-machine-intelligence-student-team']}>
        <Routes>
          <Route path="/work/:slug" element={<DetailView />} />
        </Routes>
      </MemoryRouter>
    );

    const crossLink = screen.getByRole('link', { name: /real time image upscaling/i });
    expect(crossLink).toBeInTheDocument();
    expect(crossLink).toHaveAttribute('href', '/work/real-time-image-upscaling');
  });

  test('Edge Case: Unknown slug displays graceful 404 fallback with return link', () => {
    render(
      <MemoryRouter initialEntries={['/work/completely-nonexistent-path-slug']}>
        <Routes>
          <Route path="/work/:slug" element={<DetailView />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /item not found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /← return to home/i })).toHaveAttribute('href', '/');
  });

  test('Home page comprehensive integrity check', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Hero headline and updated summary
    expect(screen.getByText(/ai systems & low-level infrastructure/i)).toBeInTheDocument();
    expect(screen.getByText(/scalable, high-performance software/i)).toBeInTheDocument();

    // 4 Technical Skills categories
    expect(screen.getByText('Languages & Core Tools')).toBeInTheDocument();
    expect(screen.getByText('Machine Learning & AI')).toBeInTheDocument();
    expect(screen.getByText('Frameworks & Libraries')).toBeInTheDocument();
    expect(screen.getByText('Systems Programming')).toBeInTheDocument();

    // Education
    expect(screen.getByText(/bachelors of applied science in computer engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/september 2021 - june 2026/i)).toBeInTheDocument();

    // Experience section: 1 card
    expect(screen.getByRole('link', { name: /vehicle monitor corp\./i })).toHaveAttribute('href', '/work/vehicle-monitor-corp');

    // Projects section: 5 cards
    expect(screen.getByRole('link', { name: /real time image upscaling/i })).toHaveAttribute('href', '/work/real-time-image-upscaling');
    expect(screen.getByRole('link', { name: /operating system harness for agentic general intelligence/i })).toHaveAttribute('href', '/work/operating-system-harness-for-agentic-general-intelligence');
    expect(screen.getByRole('link', { name: /vehicle and road infrastructure detection model/i })).toHaveAttribute('href', '/work/vehicle-and-road-infrastructure-detection-model');
    expect(screen.getByRole('link', { name: /gis for students/i })).toHaveAttribute('href', '/work/gis-for-students');
    expect(screen.getByRole('link', { name: /bare-metal hardware-software interface \(de1-soc\)/i })).toHaveAttribute('href', '/work/bare-metal-hardware-software-interface-de1-soc');

    // Extra Curriculars section: 4 clickable cards + 1 non-clickable card
    expect(screen.getByRole('link', { name: /uoft machine intelligence student team/i })).toHaveAttribute('href', '/work/uoft-machine-intelligence-student-team');
    expect(screen.getByRole('link', { name: /ece academic director/i })).toHaveAttribute('href', '/work/ece-academic-director');
    expect(screen.getByRole('link', { name: /3rd & 4th year ece class representative/i })).toHaveAttribute('href', '/work/3rd-and-4th-year-ece-class-representative');
    expect(screen.getByRole('link', { name: /f!rosh leedur/i })).toHaveAttribute('href', '/work/frosh-leedur');
    expect(screen.getByText('Skule Badminton Club')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /skule badminton club/i })).toBeNull();

    // Contact
    expect(screen.getAllByRole('link', { name: /asim\.rahman321@gmail\.com/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/647-533-0409/)).toBeNull();
  });
});
