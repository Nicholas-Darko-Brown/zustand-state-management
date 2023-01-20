import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Counter from './components/Counter';

test('renders Count', () => {
  render(<App />);
  const linkElement = screen.getByText(/Count/i);
  expect(linkElement).toBeInTheDocument();
});

test('clicking button increases count by 1', () => {
  const { getByText} = render(<Counter />)
  const button = screen.getByText('+')
  fireEvent.click(button)
  expect(getByText('Count: 1')).toBeInTheDocument()
})
