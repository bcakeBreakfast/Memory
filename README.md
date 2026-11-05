# Memo Punch

Memory mit eigenen Tuschezeichnungen, als installierbare Web-App (PWA).

**Spielen:** https://bcakebreakfast.github.io/memory/

## So funktioniert's
- Start mit 2 Bildern. Neue Bilder gibt es nach 2, 3, 4 und 5 gewonnenen Runden. Jedes Bild bringt ein Paar mehr.
- Vor jeder Runde liegen die Karten kurz offen. Die Vorschau wird kürzer, je näher das nächste Bild rückt.
- Mit allen 6 Bildern folgen vier Meisterstufen: Gedreht, Wandern, Leben, Blind.

## Installieren
- **iPhone:** in Safari öffnen → Teilen → „Zum Home-Bildschirm“.
- **Android:** in Chrome öffnen → Optionen → „App installieren“.

Läuft danach im Vollbild und offline. Spielstand bleibt auf dem Gerät.

## Dateien
- `index.html`: die ganze App
- `sw.js`: Offline-Cache. Bei jeder neuen Version die Zahl in `CACHE` und `VERSION` (in index.html) erhöhen.
- `manifest.webmanifest`, `icons/`: Name, Farben, App-Icons
- `img/`: die sechs Zeichnungen als SVG
- `fonts/`: Archivo Black, Space Grotesk (SIL Open Font License)
