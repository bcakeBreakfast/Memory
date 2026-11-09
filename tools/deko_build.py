"""Stellt die Ornament-Zeichnungen frei und vektorisiert sie.
- entfernt gerade Rahmenlinien an den Bildkanten
- behält nur das Hauptmotiv (größte zusammenhängende Fläche) plus
  kleine Teile, die nicht den Rand berühren und nahe am Motiv liegen
- glättet und vektorisiert mit potrace
"""
import sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage
import potrace

SRC = ['b2468261', '747bf518', '1e501959', 'f6be8d9b', '40cc2850',
       '1d84e2e9', 'bedbec83', '04564453', '7153e1f2']
NAMES = ['blatt', 'zweige', 'stern', 'beeren', 'schnecke',
         'tropfen', 'schleife', 'ranke', 'auge']
S = 3


def strip_frame(a):
    a = a.copy()
    h, w = a.shape
    for _ in range(2):
        for r in list(range(0, 14)) + list(range(h - 14, h)):
            if a[r].mean() > 0.55:
                a[r] = False
        for c in list(range(0, 24)) + list(range(w - 24, w)):
            if a[:, c].mean() > 0.55:
                a[:, c] = False
    return a


def main_object(a):
    lab, n = ndimage.label(a, structure=np.ones((3, 3)))
    if n == 0:
        return a
    sizes = ndimage.sum(a, lab, range(1, n + 1))
    big = int(np.argmax(sizes)) + 1
    keep = lab == big
    ys, xs = np.nonzero(keep)
    y0, y1, x0, x1 = ys.min(), ys.max(), xs.min(), xs.max()
    h, w = a.shape
    for i in range(1, n + 1):
        if i == big or sizes[i - 1] < 30:
            continue
        cy, cx = np.nonzero(lab == i)
        touches = cy.min() <= 2 or cx.min() <= 2 or cy.max() >= h - 3 or cx.max() >= w - 3
        inside = cy.min() >= y0 and cy.max() <= y1 and cx.min() >= x0 and cx.max() <= x1
        if inside and not touches:
            keep |= lab == i
    return keep


def fmt(x):
    return f"{x / S:.1f}".rstrip('0').rstrip('.')


def build(i):
    img = Image.open(f'/mnt/user-data/uploads/{SRC[i]}-image.jpg').convert('L')
    w, h = img.size
    ink = np.array(img) < 128
    ink = main_object(strip_frame(ink))
    g = np.where(ink, 0, 255).astype(np.uint8)
    big = Image.fromarray(g).resize((w * S, h * S), Image.LANCZOS).filter(ImageFilter.GaussianBlur(S * 0.9))
    bm = potrace.Bitmap(np.array(big) >= 128)
    pl = bm.trace(turdsize=S * S * 20, turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY,
                  alphamax=1.2, opticurve=True, opttolerance=0.6)
    d = []
    for c in pl:
        p = c.start_point
        d.append(f"M{fmt(p.x)} {fmt(p.y)}")
        for s in c.segments:
            if s.is_corner:
                d.append(f"L{fmt(s.c.x)} {fmt(s.c.y)}L{fmt(s.end_point.x)} {fmt(s.end_point.y)}")
            else:
                d.append(f"C{fmt(s.c1.x)} {fmt(s.c1.y)} {fmt(s.c2.x)} {fmt(s.c2.y)} {fmt(s.end_point.x)} {fmt(s.end_point.y)}")
        d.append('Z')
    ys, xs = np.nonzero(ink)
    pad = 3
    x0, y0 = max(xs.min() - pad, 0), max(ys.min() - pad, 0)
    x1, y1 = min(xs.max() + pad + 1, w), min(ys.max() + pad + 1, h)
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0} {y0} {x1 - x0} {y1 - y0}">'
           f'<path fill="#000" fill-rule="evenodd" d="{"".join(d)}"/></svg>\n')
    out = f'/home/claude/memory/pwa/deko/{NAMES[i]}.svg'
    open(out, 'w').write(svg)
    return out, len(svg)


if __name__ == '__main__':
    for i in range(9):
        print(*build(i), flush=True)
