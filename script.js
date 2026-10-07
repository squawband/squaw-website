const showList = document.querySelector('#show-list');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const dateFormat = new Intl.DateTimeFormat('de-CH', { day: '2-digit', month: 'short', year: 'numeric' });

fetch('data/shows.json')
  .then((response) => {
    if (!response.ok) throw new Error('Die Konzertliste konnte nicht geladen werden.');
    return response.json();
  })
  .then((shows) => {
    const upcoming = shows
      .filter((show) => new Date(`${show.date}T23:59:59`) >= new Date())
      .sort((a, b) => a.date.localeCompare(b.date));

    if (!upcoming.length) {
      showList.innerHTML = '<p class="loading">Momentan sind keine weiteren Shows angekündigt. Schau bald wieder vorbei.</p>';
      return;
    }

    showList.innerHTML = upcoming.map((show) => {
      const date = dateFormat.format(new Date(`${show.date}T12:00:00`));
      const venue = show.url
        ? `<a class="show-venue" href="${show.url}" target="_blank" rel="noopener">${show.venue}</a>`
        : `<span class="show-venue">${show.venue}</span>`;
      return `<article class="show-row"><span class="show-date">${date}</span>${venue}<span class="show-city">${show.city}</span><span class="show-arrow" aria-hidden="true">↗</span></article>`;
    }).join('');
  })
  .catch(() => {
    showList.innerHTML = '<p class="loading">Die Shows sind gerade nicht verfügbar. Bitte versuche es später nochmals.</p>';
  });

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Menü öffnen' : 'Menü schliessen');
  nav.classList.toggle('open', !expanded);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();
