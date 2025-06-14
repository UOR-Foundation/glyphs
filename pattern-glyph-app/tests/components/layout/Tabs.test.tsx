import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tab, TabsContainer } from '../../../src/components/layout/Tabs';

describe('Tabs Components', () => {
  it('renders a Tab with the correct label', () => {
    render(<Tab label="Test Tab" isActive={false} onClick={() => {}} />);
    expect(screen.getByText('Test Tab')).toBeInTheDocument();
  });

  it('calls onClick when a Tab is clicked', () => {
    const handleClick = jest.fn();
    render(<Tab label="Clickable Tab" isActive={false} onClick={handleClick} />);
    fireEvent.click(screen.getByText('Clickable Tab'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies active styles to an active Tab', () => {
    // This test is more about visual state; true class check might be brittle.
    // We'll check if the active class part ('border-yellow-400') is present.
    const { rerender } = render(<Tab label="Active Tab" isActive={true} onClick={() => {}} />);
    expect(screen.getByText('Active Tab').className).toContain('border-yellow-400');

    rerender(<Tab label="Active Tab" isActive={false} onClick={() => {}} />);
    expect(screen.getByText('Active Tab').className).not.toContain('border-yellow-400');
  });

  it('renders TabsContainer with children', () => {
    render(
      <TabsContainer>
        <Tab label="Tab 1" isActive={true} onClick={() => {}} />
        <Tab label="Tab 2" isActive={false} onClick={() => {}} />
      </TabsContainer>
    );
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
  });
});
