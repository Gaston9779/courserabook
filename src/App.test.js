import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders form and submits correctly', () => {
  render(<App />);
  
  // Verifica che tutti i campi siano presenti
  expect(screen.getByLabelText(/data/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/ospiti/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasione/i)).toBeInTheDocument();
  
  // Simula la compilazione e invio del modulo
  fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2025-03-25T12:00' } });
  fireEvent.change(screen.getByLabelText(/ospiti/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/occasione/i), { target: { value: 'Compleanno' } });
  
  fireEvent.click(screen.getByText(/invia/i));
  
  // Verifica che i dati siano stati impostati correttamente
  expect(screen.queryByText(/Tutti i campi sono obbligatori/)).not.toBeInTheDocument();
});
