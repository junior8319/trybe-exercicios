// App.test.js
/**
 *  EXEMPLO 1
 * */
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// afterEach(() => jest.clearAllMocks()); // faz com que, após cada teste, nosso mock seja limpo, ou seja, neste caso garante que após o teste o
                                      // fetch não seja mais um mock, isso é bem útil para que não tenha interferência entre um teste e outro.

// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toBeCalledTimes(1);
//   expect(global.fetch).toBeCalledWith(
//     'https://icanhazdadjoke.com/',
//     { headers: { Accept: 'application/json' } },
//   );
// });

// App.test.js
/**
 * EXEMPLO 2
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks()); // faz com que, após cada teste, nosso mock seja limpo, ou seja, neste caso garante que após o teste o
                                      // fetch não seja mais um mock, isso é bem útil para que não tenha interferência entre um teste e outro.

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});
