import { render, screen } from '@testing-library/react';
import Layout from '@/components/layout';
import Meta from '@/components/meta'; // Layout uses Meta, so it's good to have it mocked or real
import '@testing-library/jest-dom';

// Mock the Meta component as it's not the focus of this test and might have its own dependencies (like next/head)
jest.mock('@/components/meta', () => {
  return jest.fn(() => <div data-testid="mock-meta">Mocked Meta</div>);
});

// Mock next/font/google for Inter font if Layout uses it directly or indirectly
// and it causes issues in test environment
jest.mock('next/font/google', () => ({
  Inter: () => ({
    style: {
      fontFamily: 'mocked-inter',
    },
  }),
}));


describe('Layout Component', () => {
  it('renders children correctly', () => {
    const testMessage = 'Hello from Layout test';
    render(
      <Layout>
        <div>{testMessage}</div>
      </Layout>
    );

    // Check if the children are rendered
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );

    // Check if the Footer component's content is present
    // Assuming Footer component has some identifiable text.
    // Let's check for "About this web site." which is in the current Footer.
    // This might need adjustment if the Footer content changes.
    expect(screen.getByText(/About this web site./i)).toBeInTheDocument();
  });

  it('renders the Meta component', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );
    expect(screen.getByTestId('mock-meta')).toBeInTheDocument();
  });

});
