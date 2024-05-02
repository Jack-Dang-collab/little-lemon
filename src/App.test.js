import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

describe('BookingForm', () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();
  const mockAvailableTimes = {
    availableTimes: ['12:00', '14:00', '16:00']
  };

  beforeEach(() => {
    render(<BookingForm submitForm={mockSubmitForm} dispatch={mockDispatch} availableTimes={mockAvailableTimes} />);
  });

  it('should allow entering a date', () => {
    const dateInput = screen.getByLabelText(/Choose Date/i);
    fireEvent.change(dateInput, { target: { value: '2022-12-01' } });
    expect(dateInput.value).toBe('2022-12-01');
  });

  it('should allow selecting a time', () => {
    const timeSelect = screen.getByLabelText(/Choose Time:/i);
    fireEvent.change(timeSelect, { target: { value: '12:00' } });
    expect(timeSelect.value).toBe('12:00');
  });

  it('should allow entering number of guests', () => {
    const guestsInput = screen.getByLabelText(/Number of Guests:/i);
    fireEvent.change(guestsInput, { target: { value: '3' } });
    expect(guestsInput.value).toBe('3');
  });

  it('should allow selecting an occasion', () => {
    const occasionSelect = screen.getByLabelText(/Occasion:/i);
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    expect(occasionSelect.value).toBe('Birthday');
  });

  it('should submit the form with all fields filled', () => {
    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '2022-12-01' } });
    fireEvent.change(screen.getByLabelText(/Choose Time:/i), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText(/Number of Guests:/i), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText(/Occasion:/i), { target: { value: 'Birthday' } });
    fireEvent.click(screen.getByLabelText('On Click'));

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  });
});
