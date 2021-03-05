import sortToMore from './more';
import sortToLess from './less';

export default function sort(el) {
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
