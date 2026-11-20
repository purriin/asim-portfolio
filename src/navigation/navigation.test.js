import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

describe('Phase E: Navigation & Header/Footer Sanity Checks', () => {
  test('Header renders all 7 navigation items and updated resume link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verify all section links are present
    expect(screen.getAllByRole('link', { name: /about/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /skills/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /education/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /experience/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /projects/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /extra curriculars/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThanOrEqual(1);

    // Verify resume link targets new PDF and has security attributes
    const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
    expect(resumeLinks[0]).toHaveAttribute('href', expect.stringContaining('Asim_Rahman_Resume.pdf'));
    expect(resumeLinks[0]).toHaveAttribute('target', '_blank');
    expect(resumeLinks[0]).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Mobile menu toggle opens and closes drawer navigation', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const openButton = screen.getByRole('button', { name: /open main menu/i });
    expect(openButton).toBeInTheDocument();
    fireEvent.click(openButton);

    const closeButton = screen.getByRole('button', { name: /close menu/i });
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
  });

  test('Footer renders updated email and secure social links', () => {
    render(<Footer />);

    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:asim.rahman321@gmail.com');

    const githubLink = screen.getByRole('link', { name: /github page/i });
    expect(githubLink).toHaveAttribute('href', 'https://www.github.com/Asim-108/');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    const linkedinLink = screen.getByRole('link', { name: /linkedin page/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/asim-rahman/');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
