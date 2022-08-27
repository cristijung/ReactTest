import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Componente principal', () => {
  it('Mostrar o texto Testes Unitários', () => {
    render (<App />);
    expect(screen.getByText('Testes Unitários')).toBeInTheDocument();
  })

  it('Mostrar o texto Organizando arquivo ...', () => {
    render (<App />);
    expect(screen.getByText('Organizando o arquivo de Testes')).toBeInTheDocument();
  })
  
})