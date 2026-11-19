# Portfolio – Zidane Kenfack Fouape

Eine Seite mit HTML, CSS und JavaScript, ohne Build-Schritt und ohne externe Abhängigkeiten. DE/EN, Dark/Light Mode, responsiv.

## Struktur

| Datei | Inhalt |
|---|---|
| `index.html` | Seitengerüst, Hero, Über mich, Kontakt |
| `content.js` | **Alle Inhalte**: Projekte, Erfahrung, Skills, Zertifikate (DE/EN) |
| `main.js` | Rendering, Sprache, Theme, Filter, Lightbox |
| `styles.css` | Design (Farben als Tokens oben in der Datei) |
| `impressum.html` | Impressum |
| `assets/img/covers/` | Projekt-Illustrationen (SVG) |
| `assets/img/screens/` | Echte Screenshots (öffnen sich in der Lightbox) |
| `assets/cv/` | Lebenslauf als PDF |

## Vor dem Veröffentlichen

1. Alle Platzhalter `⟦…⟧` ersetzen. Sie sind auf der Seite gelb markiert. Suche: `⟦` in `content.js`, `index.html`, `impressum.html`
2. Profilfoto als `assets/img/profile.jpg` ablegen und in `index.html` das `src` anpassen. Die Klasse `is-placeholder` und den Hinweis `portrait-note` entfernen
3. Lebenslauf als `assets/cv/Lebenslauf_Zidane_Kenfack_Fouape.pdf` ablegen
4. Screenshots ergänzen (empfohlen 1600×900, PNG/WebP) und in `content.js` beim Projekt unter `screens` eintragen. Das erste Bild ersetzt dann die Illustration

## Lokal ansehen

```bash
python -m http.server 8000
# http://localhost:8000
```

## Auf GitHub Pages veröffentlichen

1. Auf GitHub ein öffentliches Repo **`danezi.github.io`** anlegen
2. Dateien pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/danezi/danezi.github.io.git
   git push -u origin main
   ```
3. Im Repo: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**
4. Nach 1–2 Minuten ist die Seite online unter **https://danezi.github.io**

Englische Version direkt verlinken: `https://danezi.github.io/?lang=en`
