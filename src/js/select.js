import sort from './sort';

export default function selectCol() {
  const theads = document.getElementsByTagName('th');
  for (const th of theads) {
    th.addEventListener('click', (e) => {
      sort(e.target);
    });
  }
}
