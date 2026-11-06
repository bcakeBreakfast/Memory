/*
  MEMO PUNCH · INHALTE
  ====================
  Hier stehen alle Texte über das Projekt, die beiden Menschen dahinter und die Bilder. Nur die Texte zwischen den
  Anführungszeichen ändern. Jedes Bild hat einen Titel und eine Geschichte,
  jeweils auf Deutsch (de) und Englisch (en).

  Tipps
  - Ein Anführungszeichen im Text so schreiben: \"  (Backslash davor)
  - Neue Zeile in einer Geschichte: \n
  - Texte in [eckigen Klammern] sind Platzhalter und werden in der App
    gestrichelt markiert, bis du sie ersetzt.
  - Die Reihenfolge entspricht den Dateien img/t1.svg bis img/t10.svg.
*/
window.CONTENT_BUILD = 207; // technische Kennung, bitte nicht ändern
window.CONTENT = {
  // Über das Projekt: kurzer Text zur Zusammenarbeit
  project: {
    title: { de: "Über das Projekt", en: "About the project" },
    text: {
      de: "[Wie Memo Punch entstanden ist: eine Zusammenarbeit aus Zeichnung und Gestaltung. Hier steht euer gemeinsamer Text.]",
      en: "[How Memo Punch came about: a collaboration between drawing and design. Your shared text goes here.]"
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

  // ENTWURF von Claude: Titel und Texte beschreiben nur, was auf den Bildern zu sehen ist.
  // Ersetze sie durch deine eigenen Geschichten.
  images: [
    { // 1
      title: { de: "Blütenwolke", en: "Cloud of Blossoms" },
      story: { de: "Eine Wolke aus Perlenketten, Herzbögen und drei Hibiskusblüten. Je länger man hinsieht, desto mehr Schichten tauchen auf: Hinter jeder Blüte liegt noch ein Bogen, hinter jedem Bogen noch eine Perle.", en: "A cloud of pearl strings, heart-shaped arches and three hibiscus blossoms. The longer you look, the more layers appear: behind every blossom another arch, behind every arch another pearl." }
    },
    { // 2
      title: { de: "Sog", en: "Undertow" },
      story: { de: "Gestreifte Bänder drehen sich zur Mitte und verschwinden in einem einzigen Punkt. Das Auge wird mitgezogen, ob es will oder nicht. Tipp fürs Memory: Zähl die Streifen nicht, merk dir die Drehrichtung.", en: "Striped ribbons spiral towards the centre and vanish into a single point. Your eye gets pulled in whether it wants to or not. Memory tip: don’t count the stripes, remember which way they turn." }
    },
    { // 3
      title: { de: "Kreuzwind", en: "Crosswind" },
      story: { de: "Bänder kreuzen sich wie Windstöße aus vier Richtungen. Dazwischen sitzen gepunktete Blätter, die als Einzige ruhig bleiben. Ein Bild über Bewegung und den stillen Punkt mittendrin.", en: "Ribbons cross like gusts from four directions. Between them sit dotted leaves, the only things holding still. An image about motion and the quiet spot in the middle of it." }
    },
    { // 4
      title: { de: "Tagtraum", en: "Daydream" },
      story: { de: "Ein Gesicht im Profil, nur aus einer Linie, die Gedanken als Locken und Spiralen. Ranken und Blätter ziehen vorbei wie Notenlinien. Das leiseste Bild der Sammlung, mit viel Weiß und Luft.", en: "A face in profile drawn from a single line, its thoughts curling into loops and spirals. Vines and leaves drift past like lines of sheet music. The quietest image in the collection, full of white space." }
    },
    { // 5
      title: { de: "Raupe im Wind", en: "Caterpillar in the Wind" },
      story: { de: "Eine gestreifte Raupe windet sich durch flatternde Blätter und Flammenformen. Die schwarzen Ringe geben ihr Gewicht, die gepunkteten Flächen machen den Wind sichtbar.", en: "A striped caterpillar winds its way through fluttering leaves and flame shapes. The black rings give it weight, the dotted areas make the wind visible." }
    },
    { // 6
      title: { de: "Hibiskus", en: "Hibiscus" },
      story: { de: "Eine große Blüte, mit feinen Strichen schraffiert, auf schwarzem Grund voller Tupfen. Die Schraffur führt von den Blütenblättern nach innen zum Stempel, wie Licht, das in die Blüte fällt.", en: "A large blossom, shaded with fine strokes, on a black ground full of dots. The hatching leads from the petals inward to the stamen, like light falling into the flower." }
    },
    { // 7
      title: { de: "Sonnenfächer", en: "Sun Fan" },
      story: { de: "Aus einer Ecke fächert ein Schachbrett auf, Ring um Ring, leicht verdreht. Ein Perlenbogen hält die Sonne zusammen. Kein Feld ist gleich groß, und doch wirkt alles geordnet.", en: "A chequerboard fans out from one corner, ring after ring, slightly twisted. A string of pearls holds the sun together. No square is the same size, yet everything feels in order." }
    },
    { // 8
      title: { de: "Wellen mit Blatt", en: "Waves and Leaf" },
      story: { de: "Schwarze und weiße Wellenbänder mit Punktreihen, darüber ein einzelnes geädertes Blatt. Das Blatt treibt, die Wellen ziehen weiter, und am Rand rollt sich eine Ranke ein.", en: "Black and white bands of waves with rows of dots, and a single veined leaf on top. The leaf drifts, the waves roll on, and at the edge a tendril curls up." }
    },
    { // 9
      title: { de: "Kugel-Schach", en: "Chess Sphere" },
      story: { de: "Ein Schachbrett wölbt sich in der Mitte nach vorn, als läge eine Kugel darunter. Ein Ring aus Perlen fasst die Wölbung ein. Op-Art im Kleinen: flach gezeichnet, rund gesehen.", en: "A chequerboard bulges out in the middle as if a sphere were hidden beneath. A ring of pearls frames the bulge. Op art in miniature: drawn flat, seen round." }
    },
    { // 10
      title: { de: "Sternblüte", en: "Star Blossom" },
      story: { de: "Sechs Blütenblätter mit Schraffur auf schwarzem Grund, dazwischen dunkle Innenblätter und drei Staubfäden. Die Tupfen drumherum wirken wie ein Nachthimmel, in dem die Blüte selbst zum Stern wird.", en: "Six hatched petals on a black ground, with dark inner petals and three stamens in between. The dots around it read like a night sky in which the blossom itself becomes a star." }
    }
  ]
};
