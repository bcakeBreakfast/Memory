/* Gemeinsame Helfer der Pfad-Entwürfe. Daten kommen aus ../content.js */
const C = window.CONTENT, N = C.images.length;
const IM = i => '../img/t' + (i + 1) + '.webp?v=211';
const COL = ['#FF2E88', '#2D7BFF', '#FF8A00', '#14B86A', '#8A3FFC', '#E8212E', '#00B3D6', '#FFB800'];
const col = i => COL[i % COL.length];
const T = i => C.images[i].title.de, STEP = i => C.images[i].step.de;
const DEKO = (C.deko.ornamente || []).map(o => '../' + (typeof o === 'string' ? o : o.datei));
const PROLOG = C.journey.prologue.de;
let U = Math.max(1, Math.min(N, +(new URLSearchParams(location.search).get('u') || 6)));
const PAGES = [['pfad-1-ranke.html', 'Ranke'], ['pfad-2-brett.html', 'Spielbrett'], ['pfad-3-comic.html', 'Comic'], ['pfad-4-sterne.html', 'Sternbild'], ['pfad-5-comic-weg.html', 'Comic-Weg'], ['pfad-6-start.html', 'Start']];
const $ = s => document.querySelector(s);

function chrome(idx, dark) {
  const n = document.createElement('nav');
  n.className = 'pnav' + (dark ? ' dark' : '');
  const go = k => PAGES[k][0] + '?u=', L = PAGES.length;
  n.innerHTML = '<a data-k="' + ((idx + L - 1) % L) + '" href="#" aria-label="Vorheriger Entwurf">‹</a><span>' + (idx + 1) + '/' + L + ' · ' + PAGES[idx][1] +
    '</span><a data-k="' + ((idx + 1) % L) + '" href="#" aria-label="Nächster Entwurf">›</a><button id="dMinus" aria-label="Einen Sieg zurück">−</button><button id="dPlus">+1 Sieg</button>';
  document.body.append(n);
  n.querySelectorAll('a').forEach(a => a.onclick = e => { e.preventDefault(); location.href = go(+a.dataset.k) + U });
  $('#dMinus').onclick = () => { if (U > 1) { U--; history.replaceState(0, '', '?u=' + U); window.onProgress && onProgress(-1) } };
  $('#dPlus').onclick = () => { if (U < N) { U++; history.replaceState(0, '', '?u=' + U); window.onProgress && onProgress(1) } };
  const sh = document.createElement('div');
  sh.className = 'sheet'; sh.innerHTML = '<div class="card" role="dialog" aria-modal="true"></div>';
  sh.onclick = e => { if (e.target === sh) sh.classList.remove('on') };
  document.body.append(sh);
}
function sheet(i) {
  const sh = $('.sheet'), c = sh.querySelector('.card');
  c.style.setProperty('--c', col(i));
  c.innerHTML = i < U
    ? '<img src="' + IM(i) + '" alt=""><div><small>Station ' + (i + 1) + '</small><h3>' + T(i) + '</h3><p>' + STEP(i) + '</p></div>'
    : '<div style="width:96px;height:96px;border:3px dashed #000;display:grid;place-items:center;font:28px Archivo Black">?</div><div><small>Station ' + (i + 1) + '</small><h3>Noch verborgen</h3><p>' + (i === U ? 'Gewinne die nächste Prüfung, dann geht es hier weiter.' : 'Fortsetzung folgt …') + '</p></div>';
  sh.classList.add('on');
}
