# memo punch · Version 3 (Gestaltung „Rams rund“)

- **App:** `index.html` (alles in einer Datei), Texte der Oberfläche in `strings.js` (Deutsch/Englisch).
- **Geschichte, Bildtitel, Personen, Copyright, Ornamente:** `content.js`.
- **Bilder:** `img/t1.webp` … (900 px), Ornamente in `deko/`.
- **Offline & Updates:** `sw.js` (Netz zuerst, sonst Speicher). Bei neuer Version lädt die App selbst neu.
- **Alte Punch-Gestaltung:** weiterhin unter `/punch/` erreichbar, mit demselben Spielstand.
- **Testmodus:** `?dev` an die Adresse hängen, dann gibt es in den Optionen „alles freischalten“.

# Memo Punch

Memory mit eigenen Tuschezeichnungen, als installierbare Web-App (PWA).

**Spielen:** https://bcakebreakfast.github.io/Memory/

## So funktioniert's
- Start mit 2 Bildern, insgesamt 10. Neue Bilder gibt es nach 2, 3, 3, 4, 4, 5, 5 und 6 gewonnenen Runden. Jedes Bild bringt ein Paar mehr (höchstens 8 Paare pro Runde).
- Nach jedem zweiten Sieg kommt ein Zwischenspiel: Reihenfolge, N-Back oder Muster-Strom.
- Vor jeder Runde liegen die Karten kurz offen. Die Vorschau wird kürzer, je näher das nächste Bild rückt.
- Mit allen 10 Bildern folgen vier Meisterstufen: Gedreht, Wandern, Leben, Blind.

## Installieren
- **iPhone:** in Safari öffnen → Teilen → „Zum Home-Bildschirm“.
- **Android:** in Chrome öffnen → Optionen → „App installieren“.

Läuft danach im Vollbild und offline. Spielstand bleibt auf dem Gerät.

## Deine Texte eintragen
Alle Texte über das Projekt, die beiden Menschen dahinter (Zeichnungen sowie Webdesign & Entwicklung) und die Geschichten zu den Bildern stehen in **`content.js`**. Die Namen „Ella Strich“ und „Max Raster“ sind Platzhalter.
1. Auf GitHub die Datei `content.js` öffnen und auf den Stift (Edit) klicken.
2. Nur die Texte zwischen den Anführungszeichen ändern, jeweils `de` (Deutsch) und `en` (Englisch).
3. Unten auf **Commit changes** klicken. Nach 1–2 Minuten ist es online, die App zeigt „Neue Version da!“.

Texte in [eckigen Klammern] sind Platzhalter und erscheinen in der App gestrichelt umrandet, bis sie ersetzt sind.
Wichtig: Nach einer Änderung in `content.js` ist nichts weiter nötig: Die App holt neue Texte automatisch beim nächsten Öffnen.

## Die Erzählung
Jedes Bild hat einen Erzählschritt (`step`) in `content.js`. Oben in der Datei steht eine Schreibvorlage (Länge, Aufbau Ort · Moment · Spur, Akt-Rhythmus). Die mitgelieferten Texte sind ein Entwurf und sollen ersetzt werden. Die Akte stehen unter `journey.acts`.

## Testmodus
Mit `?dev` am Ende der Adresse erscheint unter Optionen „Test: alles freischalten“. Ohne `?dev` ist der Eintrag unsichtbar.

## Dateien
- `index.html`: die ganze App (Designsystem-Tokens oben im CSS)
- `content.js`: Projekttext, Personen, Bildtitel und Geschichten (DE/EN)
- `i18n.js`: alle Oberflächentexte Deutsch/Englisch
- `sw.js`: Offline-Cache. Bei jeder neuen Version die Zahl in `CACHE` und `VERSION` (in index.html) erhöhen.
- `manifest.webmanifest`, `icons/`: Name, Farben, App-Icons
- `img/`: die Zeichnungen als WebP in 900 px (bewusst nur in Bildschirmgröße; die Vektor-Originale liegen nicht im Repo)
- `fonts/`: Archivo Black, Space Grotesk (SIL Open Font License)

## Rechte
Zeichnungen, Gestaltung und Code: alle Rechte vorbehalten, siehe `LICENSE`. Schriften: SIL Open Font License.

## Eigene Ornamente auf der Karte
1. Zeichnung scannen, freistellen und als SVG oder PNG mit transparentem Hintergrund speichern (quadratisch, ca. 300 × 300 px, schwarze Tusche).
2. Datei in den Ordner `deko/` legen.
3. In `content.js` unter `deko.ornamente` eintragen: `ornamente: ["deko/spirale.svg", "deko/bluete.png"]`.
Die Karte verteilt und dreht die Ornamente automatisch und hält Abstand zu den Stationen. Bleibt die Liste leer, erscheinen die eingebauten Ornamente.
