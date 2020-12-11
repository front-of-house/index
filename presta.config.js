import { configure, getCss } from 'hypobox'
import { document } from 'presta/document'
import { merge } from 'presta/utils/merge'

import { theme } from '@/src/lib/theme'

configure({ theme })

export const pages = 'src/pages/**.js'

export function createContent (ctx) {
  return document({
    head: merge(ctx.head, {
      title: 'sure thing',
      description: 'you got it',
      image: '/og.png',
      og: {
        url: `https://sure-thing.net${ctx.pathname}`,
      },
      twitter: {
        card: 'summary_large_image',
        creator: '@estrattonbailey'
      },
      meta: [ { name: 'author', content: 'https://github.com/sure-thing' } ],
      link: [
        { rel: 'icon', href: '/favicon.png' },
        { rel: 'stylesheet', href: '/style.css' },
      ],
      style: [ { children: getCss() } ],
    }),
    body: ctx.content,
  })
}

