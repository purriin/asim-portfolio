import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import DetailView from './DetailView';

function renderWithRoute(slug) {
  return render(
    <MemoryRouter initialEntries={[`/work/${slug}`]}>
      <Routes>
        <Route path="/work/:slug" element={<DetailView />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('Phase D: DetailView & Routing Sanity Checks', () => {
  test('Expanded item (Real Time Image Upscaling) renders Tier 1 bullets and Tier 2 deep dive', () => {
    renderWithRoute('real-time-image-upscaling');

    // Title and Header
    expect(screen.getByRole('heading', { level: 1, name: /real time image upscaling/i })).toBeInTheDocument();
    expect(screen.getAllByText(/zero-copy gpu pipeline/i).length).toBeGreaterThanOrEqual(1);

    // Tier 1 Highlights
    expect(screen.getByText(/highlights & key responsibilities/i)).toBeInTheDocument();
    expect(screen.getByText(/retaining decoded frames entirely in vram/i)).toBeInTheDocument();

    // Tier 2 Deep Dive Box
    expect(screen.getByText(/detailed technical breakdown/i)).toBeInTheDocument();
    expect(screen.getByText(/1\. Problem & Context/i)).toBeInTheDocument();
    expect(screen.getByText(/2\. System Architecture & Pipeline Design/i)).toBeInTheDocument();
  });

  test('Expanded item (Vehicle Monitor Corp) renders Tier 1 bullets and Tier 2 deep dive', () => {
    renderWithRoute('vehicle-monitor-corp');

    expect(screen.getByRole('heading', { level: 1, name: /vehicle monitor corp\./i })).toBeInTheDocument();
    expect(screen.getAllByText(/21x cpu inference speedup/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/detailed technical breakdown/i)).toBeInTheDocument();
  });

  test('Unexpanded item (GIS for Students) renders Tier 1 bullets without Tier 2 box or in-progress text', () => {
    renderWithRoute('gis-for-students');

    expect(screen.getByRole('heading', { level: 1, name: /gis for students/i })).toBeInTheDocument();
    expect(screen.getByText(/highlights & key responsibilities/i)).toBeInTheDocument();

    // Verify Tier 2 deep dive box is NOT present
    expect(screen.queryByText(/detailed technical breakdown/i)).toBeNull();
    // Verify no "in progress" or "coming soon" placeholders exist
    expect(screen.queryByText(/in progress/i)).toBeNull();
    expect(screen.queryByText(/coming soon/i)).toBeNull();
  });

  test('MIST subpage renders Tier 1 bullets and featured project cross-link to Real Time Image Upscaling', () => {
    renderWithRoute('uoft-machine-intelligence-student-team');

    expect(screen.getByRole('heading', { level: 1, name: /uoft machine intelligence student team/i })).toBeInTheDocument();
    expect(screen.getByText(/featured project output/i)).toBeInTheDocument();

    // Confirm the embedded ItemCard renders a link to Real Time Image Upscaling
    const crossLink = screen.getByRole('link', { name: /real time image upscaling/i });
    expect(crossLink).toHaveAttribute('href', '/work/real-time-image-upscaling');
  });

  test('F!rosh Leedur subpage renders cleanly with resume bullets', () => {
    renderWithRoute('frosh-leedur');

    expect(screen.getByRole('heading', { level: 1, name: /f!rosh leedur/i })).toBeInTheDocument();
    expect(screen.getByText(/orientation leader & mentor/i)).toBeInTheDocument();
    expect(screen.getByText(/highlights & key responsibilities/i)).toBeInTheDocument();
  });

  test('Invalid slug displays graceful "ITEM NOT FOUND" fallback', () => {
    renderWithRoute('invalid-nonexistent-slug');

    expect(screen.getByRole('heading', { level: 1, name: /item not found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /← return to home/i })).toHaveAttribute('href', '/');
  });
});
