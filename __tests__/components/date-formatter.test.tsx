import DateFormatter from '@/components/date-formatter';
import { render, screen } from '@testing-library/react';

describe('DateFormatter', () => {
  it('renders the date string', () => {
    const dateString = '2024-07-28T12:00:00.000Z';
    render(<DateFormatter dateString={dateString} />);
    // Check for the formatted date text.
    // The DateFormatter formats to 'yyyy/MM/dd HH:mm'
    expect(screen.getByText('2024/07/28 12:00')).toBeInTheDocument();
  });

  it('parses and formats the date string correctly', () => {
    const dateString = '2023-01-15T10:30:00.000Z';
    render(<DateFormatter dateString={dateString} />);
    // The DateFormatter formats to 'yyyy/MM/dd HH:mm'
    expect(screen.getByText('2023/01/15 10:30')).toBeInTheDocument();
  });
});

// Helper to ensure @testing-library/jest-dom matchers are available
// This is often done in a jest.setup.js file, but can be here for simplicity for now.
import '@testing-library/jest-dom';
