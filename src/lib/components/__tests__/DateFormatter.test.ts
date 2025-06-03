import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import DateFormatter from '../DateFormatter.svelte';

describe('DateFormatter.svelte', () => {
  it('correctly formats a valid ISO date string', () => {
    const testDate = '2023-10-27T10:00:00Z';
    render(DateFormatter, { props: { dateString: testDate } });

    // Expected format is 'yyyy/MM/dd HH:mm'
    // Note: The time will be in local time zone of the test runner.
    // If the original date is UTC, format function converts it.
    // For '2023-10-27T10:00:00Z', this would be '2023/10/27 10:00' if TZ is UTC,
    // or different if TZ is different. Let's check for parts.
    // A more robust test might mock date-fns or set a consistent timezone for tests.

    const timeElement = screen.getByRole('time');
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute('datetime', testDate);

    // Example: Check for year, month, day. Hour/minute can be tricky due to timezones.
    // For simplicity, let's assume the test runner's timezone is consistent or check for parts.
    // If date-fns formats '2023-10-27T10:00:00Z' as '2023/10/27 19:00' in JST (UTC+9)
    // then the textContent would be '2023/10/27 19:00'.
    // Let's check if it contains the date part, as time is timezone-sensitive.
    // A fixed string match is fragile.
    // expect(timeElement.textContent).toBe('2023/10/27 10:00'); // This would fail if TZ is not UTC

    // A slightly better check for content:
    expect(timeElement.textContent).toContain('2023/10/27');
  });

  it('renders nothing if dateString is null or undefined', () => {
    const { container } = render(DateFormatter, { props: { dateString: null } });
    // Expect the component to render an empty fragment or nothing visible
    expect(container.firstChild).toBeNull(); // Or check for a specific placeholder if it renders one
  });

  it('renders nothing for an invalid date string', () => {
    const { container } = render(DateFormatter, { props: { dateString: 'not-a-date' } });
    // Expect the component to render an empty fragment or nothing visible
    // based on current implementation which sets formattedDate = ''
    expect(container.firstChild).toBeNull();
  });

  it('renders the formatted date and time', () => {
    render(DateFormatter, { dateString: '2024-01-01T12:30:00Z' });
    // This will be timezone dependent. For UTC:
    // const expectedDateTime = '2024/01/01 12:30';
    // For local time (e.g. EST, UTC-5): '2024/01/01 07:30'
    // Let's just check it contains the date part for robustness
    expect(screen.getByText(/2024\/01\/01/)).toBeInTheDocument();
  });
});
