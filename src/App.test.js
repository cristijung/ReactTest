import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from  '@testing-library/user-event';
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

  test('Verificar o texto do link e o link', () => {
    render (<App />);
    expect(screen.getByText('Clique Aqui').closest('a')).toHaveAttribute('href', 'https://www.google.com/');
  })

  test('Teste de renderização do CheckBox', () => {
    render(<App />);   
    userEvent.click(screen.getByText('Verificar'))   
    expect(screen.getByLabelText('Verificar')).toBeChecked();   
   })

   //test('Garantir que o componente de _______ está recebendo o caminho correto', () => {
    //render(
     // <ImageLoader
       // src="imagem-enter.png"        
       // alt="Imagem de Entrada"
      ///>,
    //);

  //const imageRef = screen.getByAltText('Imagem de Entrada');
  //expect(imageRef).toHaveAttribute('src', 'imagem-enter.png');
  //});

})




