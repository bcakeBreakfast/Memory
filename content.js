/*
  MEMO PUNCH · INHALTE
  ====================
  Hier stehen alle Texte über das Projekt, die beiden Menschen dahinter und die Bilder. Nur die Texte zwischen den
  Anführungszeichen ändern. Jedes Bild hat einen Titel, eine Bildbeschreibung (story) und einen Erzählschritt (step),
  jeweils auf Deutsch (de) und Englisch (en).

  Tipps
  - Ein Anführungszeichen im Text so schreiben: \"  (Backslash davor)
  - Neue Zeile in einer Geschichte: \n
  - Texte in [eckigen Klammern] sind Platzhalter und werden in der App
    gestrichelt markiert, bis du sie ersetzt.
  - Die Reihenfolge entspricht den Dateien img/t1.svg bis img/t10.svg.
*/
window.CONTENT_BUILD = 212; // technische Kennung, bitte nicht ändern
window.CONTENT = {
  // Über das Projekt: kurzer Text zur Zusammenarbeit
  project: {
    title: { de: "Über das Projekt", en: "About the project" },
    text: {
      de: "[Wie Memo Punch entstanden ist: eine Zusammenarbeit aus Zeichnung und Gestaltung. Hier steht euer gemeinsamer Text.]",
      en: "[How Memo Punch came about: a collaboration between drawing and design. Your shared text goes here.]"
    }
  },

  // Copyright: erscheint auf der Projektseite, unter jedem Bild und in den Optionen.
  // Die Namen kommen automatisch aus "people" (erste Person = Zeichnungen).
  copyright: {
    year: "2026",
    note: {
      de: "Alle Rechte vorbehalten. Die Zeichnungen dürfen ohne schriftliche Erlaubnis nicht kopiert, vervielfältigt oder weiterverwendet werden.",
      en: "All rights reserved. The drawings may not be copied, reproduced or reused without written permission."
    }
  },

  // Die Menschen dahinter. Namen sind Platzhalter (Fantasienamen), bitte ersetzen.
  people: [
    {
      name: "Ella Strich",
      signature: "ES",
      role: { de: "Zeichnungen", en: "Drawings" },
      bio: {
        de: "[Text über die Zeichnerin: wer sie ist, wie die Tusche-Kacheln entstehen, was sie an Mustern reizt.]",
        en: "[About the illustrator: who she is, how the ink tiles come to life, what draws her to patterns.]"
      },
      link: ""
    },
    {
      name: "Max Raster",
      signature: "MR",
      role: { de: "Webdesign & Entwicklung", en: "Web design & development" },
      bio: {
        de: "[Text über dich: Gestaltung, Spielidee, Umsetzung als App.]",
        en: "[About you: design, game concept, building the app.]"
      },
      link: ""
    }
  ],


  // ─────────────────────────────────────────────────────────────
  // SCHREIBVORLAGE FÜR DIE ERZÄHLUNG (Feld "step" bei jedem Bild)
  // ─────────────────────────────────────────────────────────────
  // Länge:   1 bis 3 Sätze, höchstens ca. 300 Zeichen. Wird beim Freischalten
  //          und auf dem Weg (Station antippen) angezeigt.
  // Aufbau:  ORT      Wo ist der Klecks? (= was zeigt die Zeichnung)
  //          MOMENT   Was passiert dort? Eine Begegnung, ein Hindernis, eine Entdeckung.
  //          SPUR     Was nimmt er mit oder lässt er zurück? (Farbe, eine Frage, ein Gefühl)
  // Rhythmus: Station 6, 12, 18, 24 sind Akt-Enden: dort darf etwas kippen
  //          (eine Frage, ein Verlust, eine Wende). Station 7, 13, 19 eröffnen den
  //          nächsten Akt mit einer Antwort oder einem Aufbruch.
  // Faden:   Ein wiederkehrendes Motiv hilft (bei uns: die Farbe, die der Klecks
  //          verschenkt). Die letzte Station löst es auf.
  // Beispiel: "Dann kam der Wind (MOMENT), aus allen vier Richtungen (ORT). Der Klecks
  //          hielt sich an einem gepunkteten Blatt fest (SPUR) und wartete."
  // Die Texte unten sind nur ein ENTWURF zum Zeigen, wie es wirken kann.
  // DIE ERZÄHLUNG: Ein Farbklecks reist durch die Welt aus Tusche.
  // Jedes Bild ist eine Station (Feld "step" bei den Bildern unten). Vier Akte zu je 6 Stationen.
  // ENTWURF von Claude, bitte umschreiben. Geplanter Bogen für 24 Bilder:
  //   Akt I  · Ankunft    (1–6)   Der Klecks fällt in die Welt und färbt, was er berührt.
  //   Akt II · Unterwegs  (7–12)  Er reist weiter, merkt aber, dass er selbst blasser wird.
  //   Akt III· Verblasst  (13–18) Fast ohne Farbe. Die Muster, die er gefärbt hat, helfen ihm jetzt.
  //   Akt IV · Heimkehr   (19–24) Jede Station gibt ihm Farbe zurück. Am Ende setzt er sich
  //                               unten rechts in die Ecke des Blattes: klein, rund, als Signatur.
  journey: {
    acts: [
      { from: 1,  title: { de: "Akt I · Ankunft",    en: "Act I · Arrival" } },
      { from: 7,  title: { de: "Akt II · Unterwegs", en: "Act II · On the way" } },
      { from: 13, title: { de: "Akt III · Verblasst", en: "Act III · Fading" } },
      { from: 19, title: { de: "Akt IV · Heimkehr",  en: "Act IV · Homecoming" } }
    ],
    // Prolog: erscheint beim allerersten Start vor der Anleitung (Entwurf)
    prologue: {
      de: "Es war einmal eine Welt aus Tusche. Alles darin war gezeichnet: Linien, Punkte, Muster, Seite um Seite. Nur Schwarz und Weiß.\nBis eines Tages ein kleiner Klecks Farbe vom Rand des Papiers tropfte …",
      en: "Once upon a time there was a world made of ink. Everything in it was drawn: lines, dots, patterns, page after page. Only black and white.\nUntil one day a little blot of colour dripped from the edge of the paper …"
    },
    // Wird am Ende des Weges angezeigt, solange noch Bilder fehlen
    more: { de: "Fortsetzung folgt …", en: "To be continued …" }
  },

  // ENTWURF von Claude: Titel und Texte beschreiben nur, was auf den Bildern zu sehen ist.
  // Ersetze sie durch deine eigenen Geschichten.
  images: [
    { // 1
      title: { de: "Blütenwolke", en: "Cloud of Blossoms" },
      story: { de: "Eine Wolke aus Perlenketten, Herzbögen und drei Hibiskusblüten. Je länger man hinsieht, desto mehr Schichten tauchen auf: Hinter jeder Blüte liegt noch ein Bogen, hinter jedem Bogen noch eine Perle.", en: "A cloud of pearl strings, heart-shaped arches and three hibiscus blossoms. The longer you look, the more layers appear: behind every blossom another arch, behind every arch another pearl." },
      step: { de: "Der Klecks landete mitten in einer Blütenwolke und blieb an einer Perle hängen. Dort, wo er aufkam, schimmerte die erste Blüte plötzlich rosa.", en: "The blot landed right in a cloud of blossoms and got caught on a pearl. Where it touched down, the first blossom suddenly shimmered pink." }
    },
    { // 2
      title: { de: "Sog", en: "Undertow" },
      story: { de: "Gestreifte Bänder drehen sich zur Mitte und verschwinden in einem einzigen Punkt. Das Auge wird mitgezogen, ob es will oder nicht. Tipp fürs Memory: Zähl die Streifen nicht, merk dir die Drehrichtung.", en: "Striped ribbons spiral towards the centre and vanish into a single point. Your eye gets pulled in whether it wants to or not. Memory tip: don’t count the stripes, remember which way they turn." },
      step: { de: "Der Klecks rollte los und geriet in einen Strudel. Er drehte sich, bis ihm schwindlig wurde. Erst als es still war, sah er es: Wo er gerollt war, blieb ein Hauch Farbe zurück.", en: "The blot rolled off and got caught in a whirlpool. It spun until it felt dizzy. Only when everything was still did it notice: wherever it had rolled, a hint of colour stayed behind." }
    },
    { // 3
      title: { de: "Kreuzwind", en: "Crosswind" },
      story: { de: "Bänder kreuzen sich wie Windstöße aus vier Richtungen. Dazwischen sitzen gepunktete Blätter, die als Einzige ruhig bleiben. Ein Bild über Bewegung und den stillen Punkt mittendrin.", en: "Ribbons cross like gusts from four directions. Between them sit dotted leaves, the only things holding still. An image about motion and the quiet spot in the middle of it." },
      step: { de: "Dann kam der Wind, aus allen vier Richtungen zugleich. Der Klecks hielt sich an einem gepunkteten Blatt fest und wartete, bis der Sturm über ihn hinweggezogen war.", en: "Then came the wind, from all four directions at once. The blot clung to a dotted leaf and waited until the storm had passed over it." }
    },
    { // 4
      title: { de: "Tagtraum", en: "Daydream" },
      story: { de: "Ein Gesicht im Profil, nur aus einer Linie, die Gedanken als Locken und Spiralen. Ranken und Blätter ziehen vorbei wie Notenlinien. Das leiseste Bild der Sammlung, mit viel Weiß und Luft.", en: "A face in profile drawn from a single line, its thoughts curling into loops and spirals. Vines and leaves drift past like lines of sheet music. The quietest image in the collection, full of white space." },
      step: { de: "Auf einer stillen Seite schlief ein Gesicht. Der Klecks flüsterte ihm etwas ins Ohr, und im Traum bekam es eine rosa Wange.", en: "On a quiet page a face lay sleeping. The blot whispered something in its ear, and in its dream the face got a rosy cheek." }
    },
    { // 5
      title: { de: "Raupe im Wind", en: "Caterpillar in the Wind" },
      story: { de: "Eine gestreifte Raupe windet sich durch flatternde Blätter und Flammenformen. Die schwarzen Ringe geben ihr Gewicht, die gepunkteten Flächen machen den Wind sichtbar.", en: "A striped caterpillar winds its way through fluttering leaves and flame shapes. The black rings give it weight, the dotted areas make the wind visible." },
      step: { de: "Eine gestreifte Raupe bot an, ihn ein Stück mitzunehmen. Sie war langsam, aber sie kannte den Weg durch die flatternden Blätter.", en: "A striped caterpillar offered to give the blot a ride. It was slow, but it knew the way through the fluttering leaves." }
    },
    { // 6
      title: { de: "Hibiskus", en: "Hibiscus" },
      story: { de: "Eine große Blüte, mit feinen Strichen schraffiert, auf schwarzem Grund voller Tupfen. Die Schraffur führt von den Blütenblättern nach innen zum Stempel, wie Licht, das in die Blüte fällt.", en: "A large blossom, shaded with fine strokes, on a black ground full of dots. The hatching leads from the petals inward to the stamen, like light falling into the flower." },
      step: { de: "Am Ende des ersten Hefts wartete eine Blüte auf schwarzem Grund. Sie war die Erste, die den Klecks fragte: „Wohin willst du eigentlich?“", en: "At the end of the first sketchbook a blossom waited on a black ground. It was the first to ask the blot: “Where are you actually going?”" }
    },
    { // 7
      title: { de: "Sonnenfächer", en: "Sun Fan" },
      story: { de: "Aus einer Ecke fächert ein Schachbrett auf, Ring um Ring, leicht verdreht. Ein Perlenbogen hält die Sonne zusammen. Kein Feld ist gleich groß, und doch wirkt alles geordnet.", en: "A chequerboard fans out from one corner, ring after ring, slightly twisted. A string of pearls holds the sun together. No square is the same size, yet everything feels in order." },
      step: { de: "Der Klecks wusste es nicht. Also folgte er der Sonne, die sich Ring um Ring aus der Ecke des Blattes auffächerte.", en: "The blot didn’t know. So it followed the sun, which fanned out ring by ring from the corner of the page." }
    },
    { // 8
      title: { de: "Wellen mit Blatt", en: "Waves and Leaf" },
      story: { de: "Schwarze und weiße Wellenbänder mit Punktreihen, darüber ein einzelnes geädertes Blatt. Das Blatt treibt, die Wellen ziehen weiter, und am Rand rollt sich eine Ranke ein.", en: "Black and white bands of waves with rows of dots, and a single veined leaf on top. The leaf drifts, the waves roll on, and at the edge a tendril curls up." },
      step: { de: "Hinter der Sonne begann ein Meer aus Linien. Ein einzelnes Blatt trieb darauf, und der Klecks stieg auf und ließ sich treiben.", en: "Beyond the sun lay a sea of lines. A single leaf drifted on it, and the blot climbed aboard and let itself be carried." }
    },
    { // 9
      title: { de: "Kugel-Schach", en: "Chess Sphere" },
      story: { de: "Ein Schachbrett wölbt sich in der Mitte nach vorn, als läge eine Kugel darunter. Ein Ring aus Perlen fasst die Wölbung ein. Op-Art im Kleinen: flach gezeichnet, rund gesehen.", en: "A chequerboard bulges out in the middle as if a sphere were hidden beneath. A ring of pearls frames the bulge. Op art in miniature: drawn flat, seen round." },
      step: { de: "Das Blatt strandete an einer Kugel aus Feldern. Hier sah alles gleich aus, und doch war kein Feld wie das andere. Der Klecks musste genau hinsehen, um nicht verloren zu gehen.", en: "The leaf ran aground on a sphere of squares. Everything looked the same, and yet no square was like another. The blot had to look closely so as not to get lost." }
    },
    { // 10
      title: { de: "Sternblüte", en: "Star Blossom" },
      story: { de: "Sechs Blütenblätter mit Schraffur auf schwarzem Grund, dazwischen dunkle Innenblätter und drei Staubfäden. Die Tupfen drumherum wirken wie ein Nachthimmel, in dem die Blüte selbst zum Stern wird.", en: "Six hatched petals on a black ground, with dark inner petals and three stamens in between. The dots around it read like a night sky in which the blossom itself becomes a star." },
      step: { de: "In der Nacht leuchtete eine Blüte wie ein Stern. Der Klecks ruhte sich aus und bemerkte, dass er ein wenig blasser geworden war. Hatte er zu viel Farbe verschenkt?", en: "At night a blossom shone like a star. The blot rested and noticed it had grown a little paler. Had it given away too much colour?" }
    }
  ]
};
