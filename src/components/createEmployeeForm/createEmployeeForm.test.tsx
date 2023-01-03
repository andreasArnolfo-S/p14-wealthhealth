import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateEmployeeForm from './createEmployeeForm';

describe('<CreateEmployeeForm />', () => {
  test('it should mount', () => {
    render(<CreateEmployeeForm />);
    
    const createEmployeeForm = screen.getByTestId('CreateEmployeeForm');

    expect(createEmployeeForm).toBeInTheDocument();
  });
});