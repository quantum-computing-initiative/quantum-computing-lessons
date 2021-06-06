import 'reveal.js/dist/reveal.css'
import 'reveal.js/plugin/highlight/monokai.css'
//  beige, black, blood, league, moon, night, serif, simple, ...
import 'reveal.js/dist/theme/black.css'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import Notes from 'reveal.js/plugin/notes/notes.esm.js'
import Reveal from 'reveal.js'

const deck = new Reveal()
deck.initialize({
  hash: true,
  plugins: [ Markdown, Highlight, Notes ]
})

Reveal.configure({ pdfSeparateFragments: false });

