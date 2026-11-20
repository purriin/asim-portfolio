import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './index';

describe('Phase F: Home Page Overhaul Sanity Checks', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  test('Renders Hero section with updated title and bio headline', () => {
    expect(screen.getByRole('heading', { level: 1, name: /asim/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: /rahman/i })).toBeInTheDocument();
    expect(screen.getByText(/ai systems & low-level infrastructure/i)).toBeInTheDocument();
  });

  test('Renders 4 Technical Skills categories', () => {
    expect(screen.getByRole('heading', { level: 2, name: /technical skills/i })).toBeInTheDocument();
    expect(screen.getByText('Languages & Core Tools')).toBeInTheDocument();
    expect(screen.getByText('Machine Learning & AI')).toBeInTheDocument();
    expect(screen.getByText('Frameworks & Libraries')).toBeInTheDocument();
    expect(screen.getByText('Systems Programming')).toBeInTheDocument();
  });

  test('Renders updated Education credentials', () => {
    expect(screen.getByRole('heading', { level: 2, name: /education/i })).toBeInTheDocument();
    expect(screen.getByText(/bachelors of applied science in computer engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/september 2021 - june 2026/i)).toBeInTheDocument();
    expect(screen.getByText('Operating Systems')).toBeInTheDocument();
    expect(screen.getByText('Computer Systems Programming')).toBeInTheDocument();
  });

  test('Renders Experience section with Vehicle Monitor Corp. card linking to subpage', () => {
    expect(screen.getByRole('heading', { level: 2, name: /experience/i })).toBeInTheDocument();
    const vmcLink = screen.getByRole('link', { name: /vehicle monitor corp\./i });
    expect(vmcLink).toHaveAttribute('href', '/work/vehicle-monitor-corp');
  });

  test('Renders Projects section with 5 minimalist cards linking to subpages', () => {
    expect(screen.getByRole('heading', { level: 2, name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /real time image upscaling/i })).toHaveAttribute(
      'href',
      '/work/real-time-image-upscaling'
    );
    expect(screen.getByRole('link', { name: /operating system harness for agentic general intelligence/i })).toHaveAttribute(
      'href',
      '/work/operating-system-harness-for-agentic-general-intelligence'
    );
    expect(screen.getByRole('link', { name: /vehicle and road infrastructure detection model/i })).toHaveAttribute(
      'href',
      '/work/vehicle-and-road-infrastructure-detection-model'
    );
    expect(screen.getByRole('link', { name: /gis for students/i })).toHaveAttribute(
      'href',
      '/work/gis-for-students'
    );
    expect(screen.getByRole('link', { name: /bare-metal hardware-software interface \(de1-soc\)/i })).toHaveAttribute(
      'href',
      '/work/bare-metal-hardware-software-interface-de1-soc'
    );
  });

  test('Renders Extra Curriculars section with 4 clickable cards and 1 non-clickable card', () => {
    expect(screen.getByRole('heading', { level: 2, name: /extra curriculars/i })).toBeInTheDocument();

    // Clickable cards
    expect(screen.getByRole('link', { name: /uoft machine intelligence student team/i })).toHaveAttribute(
      'href',
      '/work/uoft-machine-intelligence-student-team'
    );
    expect(screen.getByRole('link', { name: /ece academic director/i })).toHaveAttribute(
      'href',
      '/work/ece-academic-director'
    );
    expect(screen.getByRole('link', { name: /3rd & 4th year ece class representative/i })).toHaveAttribute(
      'href',
      '/work/3rd-and-4th-year-ece-class-representative'
    );
    expect(screen.getByRole('link', { name: /f!rosh leedur/i })).toHaveAttribute(
      'href',
      '/work/frosh-leedur'
    );

    // Non-clickable card
    const badmintonHeading = screen.getByText('Skule Badminton Club');
    expect(badmintonHeading).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /skule badminton club/i })).toBeNull();
  });

  test('Renders Contact section with updated email and no phone number', () => {
    expect(screen.getByRole('heading', { level: 2, name: /contact/i })).toBeInTheDocument();
    const contactLinks = screen.getAllByRole('link', { name: /asim\.rahman321@gmail\.com/i });
    expect(contactLinks.length).toBeGreaterThanOrEqual(1);

    // Verify phone number is NOT on the public page
    expect(screen.queryByText(/647-533-0409/)).toBeNull();
  });
});
