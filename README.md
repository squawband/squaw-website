# SQUAW – Website für GitHub Pages

Die Seite ist eine statische HTML/CSS/JavaScript-Website und kann direkt über GitHub Pages veröffentlicht werden.

## Dateien

- `index.html` – alle Website-Bereiche (Home, Shows, Band, Media, Contact)
- `style.css` – Gestaltung und mobile Darstellung
- `script.js` – lädt und sortiert die Konzertliste
- `data/shows.json` – Konzerte bearbeiten oder ergänzen
- `assets/` – SQUAW-Logo und Bandfotos (WebP-komprimiert)

## Konzert hinzufügen

In `data/shows.json` einen weiteren Eintrag ergänzen. Beispiel:

```json
{
  "date": "2027-08-21",
  "venue": "Beispiel-Club",
  "city": "Bern",
  "url": "https://beispiel.ch"
}
```

Bei mehreren Einträgen muss zwischen den Objekten ein Komma stehen. `url` ist optional. Datum bitte immer als `JJJJ-MM-TT` eintragen. Nach dem Commit aktualisiert GitHub Pages die Seite automatisch.

## Auf GitHub hochladen

1. Im Repository `squawband/squaw-website` auf **Add file → Upload files** klicken.
2. Den Inhalt dieses Ordners hochladen: `index.html`, `style.css`, `script.js`, `README.md` sowie den Ordner `data` mit `shows.json`.
3. Unten auf **Commit changes** klicken.
4. Nach dem GitHub-Pages-Deployment die Website unter `https://squawband.github.io/squaw-website/` öffnen.

Die Bilddateien müssen beim Upload mit dem Ordner `assets` hochgeladen werden. Die bestehende Domain und Wix bleiben bis zur späteren Umstellung unverändert.
