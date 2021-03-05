import renderTable from '../render';
// import db from './data';

// test('function should work', () => {
//   expect(demo(1)).toBe(1);
// });

test('table should be rendered', () => {
  document.body.innerHTML = '<div class="container"></div>';
  renderTable([
    {
      id: 26,
      title: 'Побег из Шоушенка',
      imdb: 9.30,
      year: 1994,
    },
    {
      id: 25,
      title: 'Крёстный отец',
      imdb: 9.20,
      year: 1972,
    },
  ]);
  const table = document.querySelector('table');
  // expect(table).toBe(16);
  expect(table).toBeTruthy();
});
