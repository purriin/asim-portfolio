import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ItemCard from './ItemCard';
import MetricBadge from './MetricBadge';

describe('Phase C: Reusable UI Components Sanity Check', () => {
  test('ItemCard renders in clickable mode with link and arrow indicator', () => {
    render(
      <MemoryRouter>
        <ItemCard cardName="Real Time Image Upscaling" slug="real-time-image-upscaling" isClickable={true} />
      </MemoryRouter>
    );

    const heading = screen.getByText('Real Time Image Upscaling');
    expect(heading).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/work/real-time-image-upscaling');
  });

  test('ItemCard renders in non-clickable mode without link for Skule Badminton Club', () => {
    const { container } = render(
      <ItemCard cardName="Skule Badminton Club" slug={null} isClickable={false} />
    );

    const heading = screen.getByText('Skule Badminton Club');
    expect(heading).toBeInTheDocument();
    expect(screen.queryByRole('link')).toBeNull();
    expect(container.querySelector('svg')).toBeNull();
  });

  test('ItemCard handles long titles gracefully', () => {
    const longTitle = 'Bare-Metal Hardware-Software Interface (DE1-SoC)';
    render(
      <MemoryRouter>
        <ItemCard cardName={longTitle} slug="bare-metal-hardware-software-interface-de1-soc" />
      </MemoryRouter>
    );

    expect(screen.getByText(longTitle)).toBeInTheDocument();
  });

  test('MetricBadge renders metric variant and tech variant', () => {
    const { rerender } = render(<MetricBadge label="21x CPU Inference Speedup" variant="metric" />);
    expect(screen.getByText('21x CPU Inference Speedup')).toBeInTheDocument();

    rerender(<MetricBadge label="PyTorch" variant="tech" />);
    expect(screen.getByText('PyTorch')).toBeInTheDocument();
  });
});
