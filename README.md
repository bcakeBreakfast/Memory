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
- `img/`: t1–t6 nachgezeichnete Tuschekacheln, t7–t10 neu gezeichnet im selben Stil (SVG)
- `fonts/`: Archivo Black, Space Grotesk (SIL Open Font License)
