export default function renderTable(data) {
  const container = document.querySelector('.container');
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
