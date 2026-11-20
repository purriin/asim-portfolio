// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock ResizeObserver for JSDOM environments (used by Headless UI Dialog)
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock window.scrollTo for JSDOM environment
window.scrollTo = jest.fn();

// Mock Lenis smooth scroll for JSDOM environment
jest.mock('lenis', () => {
  return {
    __esModule: true,
    default: jest.fn().mockImplementation(() => ({
      raf: jest.fn(),
      destroy: jest.fn(),
      scrollTo: jest.fn(),
    })),
  };
});
