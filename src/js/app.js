// TODO: write code here

import db from './data';

function parse(data) {
  return JSON.parse(data);
}

function renderTable(data) {
  const container = document.getElementById('container');
  const table = document.createElement('table');
  container.appendChild(table);
  const tableHeaders = document.createElement('thead');
  table.appendChild(tableHeaders);
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  for (const key of Object.keys(data[0])) {
    const th = document.createElement('th');
    tableHeaders.appendChild(th);
    th.innerText = key;
    th.setAttribute('id', key);
  }
  for (const item of data) {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (const el of Object.entries(item)) {
      const [key, value] = el;
      tr.dataset[`${key}`] = value;
      const td = document.createElement('td');
      tr.appendChild(td);
      if (key === 'year') {
        td.innerText = `(${value})`;
      } else if (key === 'imdb') {
        td.innerText = `imdb: ${value.toFixed(2)}`;
      } else {
        td.innerText = value;
      }
    }
  }
}

function sortToMore(key) {
  const tbody = document.querySelector('tbody');
  const rows = Array.from(document.querySelectorAll('tr'));
  if (key === 'title') {
    rows.sort((a, b) => {
      if (a.dataset[`${key}`] > b.dataset[`${key}`]) {
        return 1;
      }
      if (a.dataset[`${key}`] < b.dataset[`${key}`]) {
        return -1;
      }
      return 0;
    });
  } else {
    rows.sort((a, b) => {
      if (Number(a.dataset[`${key}`]) > Number(b.dataset[`${key}`])) {
        return 1;
      }
      if (Number(a.dataset[`${key}`]) < Number(b.dataset[`${key}`])) {
        return -1;
      }
      return 0;
    });
  }
  for (const row of rows) {
    tbody.appendChild(row);
  }
}

function sortToLess(key) {
  const tbody = document.querySelector('tbody');
  const rows = Array.from(document.querySelectorAll('tr'));
  if (key === 'title') {
    rows.sort((a, b) => {
      if (a.dataset[`${key}`] < b.dataset[`${key}`]) {
        return 1;
      }
      if (a.dataset[`${key}`] > b.dataset[`${key}`]) {
        return -1;
      }
      return 0;
    });
  } else {
    rows.sort((a, b) => {
      if (Number(a.dataset[`${key}`]) < Number(b.dataset[`${key}`])) {
        return 1;
      }
      if (Number(a.dataset[`${key}`]) > Number(b.dataset[`${key}`])) {
        return -1;
      }
      return 0;
    });
  }
  for (const row of rows) {
    tbody.appendChild(row);
  }
}

function sort(el) {
  const tableHeaders = Array.from(document.getElementsByTagName('th'));
  tableHeaders.forEach((i) => {
    if (i.classList.contains('sorted') && i !== el) {
      i.className = '';
      i.innerText = `${i.id}`;
    }
  });
  if (!el.classList.contains('sorted_to-more')) {
    el.classList.add('sorted', 'sorted_to-more');
    el.innerText = `${el.id} ↓`;
    sortToMore(el.id);
  } else {
    el.classList.remove('sorted_to-more');
    el.classList.add('sorted_to-less');
    el.innerText = `${el.id} ↑`;
    sortToLess(el.id);
  }
}

function selectCol() {
  const theads = document.getElementsByTagName('th');
  for (const th of theads) {
    th.addEventListener('click', (e) => {
      sort(e.target);
    });
  }
}

renderTable(parse(db));
selectCol();

// for demonstration purpose only
export default function demo(value) {
  return value;
}
