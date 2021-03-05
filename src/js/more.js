export default function sortToMore(key) {
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
