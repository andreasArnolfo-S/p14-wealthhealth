import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShowItems from './showItems';

describe('<ShowItems />', () => {
  test('it should mount', () => {
    render(<ShowItems />);
    
    const showItems = screen.getByTestId('ShowItems');

    expect(showItems).toBeInTheDocument();
  });
});