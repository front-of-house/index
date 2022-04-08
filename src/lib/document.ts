import merge from 'deepmerge'
import { html, DocumentProperties } from '@presta/html'

import { globals, hypostyle } from '@/src/lib/styles'

export function document(body: string, htmlOptions: Omit<DocumentProperties, 'body'> = {}) {
  return html(merge({
    head: {
      title: 'front of house',
      description: 'you got it',
      image: 'https://f-of-h.xzy/og.png',
      twitter: {
        card: 'summary_large_image',
        creator: '@f_of_h_'
      },
      meta: [ { name: 'author', content: 'https://github.com/f-of-h' } ],
      link: [
        { rel: 'icon', href: '/favicon.png' },
        `<link rel="preconnect" href="https://fonts.googleapis.com">`,
        `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
        `<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,700;1,300;1,700&display=swap" rel="stylesheet">`,
      ],
      style: [
        { children: globals },
        { children: hypostyle.flush() },
      ]
    },
    body,
  }, htmlOptions))
}
