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

## Dateien
- `index.html`: die ganze App
- `sw.js`: Offline-Cache. Bei jeder neuen Version die Zahl in `CACHE` und `VERSION` (in index.html) erhöhen.
- `manifest.webmanifest`, `icons/`: Name, Farben, App-Icons
- `img/`: t1–t6 nachgezeichnete Tuschekacheln, t7–t10 neu gezeichnet im selben Stil (SVG)
- `fonts/`: Archivo Black, Space Grotesk (SIL Open Font License)
