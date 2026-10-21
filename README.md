# Frau Kellers Webseite

Eine Jekyll-Seite aus Markdown und YAML. GitHub baut sie automatisch.

## Veröffentlichen
1. Alle Dateien in ein GitHub-Repository hochladen (direkt ins Hauptverzeichnis).
2. Repository → Settings → Pages → „Deploy from a branch“ → Branch `main`, Ordner `/ (root)`.
3. Nach etwa einer Minute ist die Seite unter `https://NAME.github.io/REPOSITORY/` erreichbar.
   Dann in `_config.yml` die Zeile `baseurl: "/REPOSITORY"` aktivieren.

## Neue Seite und Menüpunkt
1. Neue Datei anlegen, z. B. `leistungen/coaching.md`, mit diesem Kopf:

       ---
       title: Coaching
       lead: Ein Satz als Einleitung.
       ---

2. In `_data/navigation.yml` unter `children:` ergänzen:
   `- title: Coaching` und `url: /leistungen/coaching/`

Eigene Bilder in `assets/img/` ablegen und so einbinden:
`![Beschreibung]({{ '/assets/img/mein-bild.jpg' | relative_url }})`
