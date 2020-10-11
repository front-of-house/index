import { theme as defaultTheme, configure, getCss } from 'hypobox'
import { document } from 'presta/document'

import { theme } from '@/src/lib/theme'

configure({ theme })

const name = `sure thing`
const image = `/static/og.png`
const url = `https://sure-thing.net`

export const pages = 'src/pages/**/*.js'
export const output = 'build'

export function createDocument (ctx) {
  return document({
    foot: {
      script: [{ src: '/client.js' }]
    },
    head: {
      og: {
        site_name: name,
        image,
        url
      },
      twitter: {
        site_name: name,
        image,
        card: 'summary_large_image',
        creator: '@estrattonbailey'
      },
      meta: [
        { name: 'author', content: '@estrattonbailey' },
      ],
      link: [
        { rel: 'stylesheet', href: '/static/style.css' },
      ],
      style: [
        { id: 'style', children: getCss() },
      ],
    }
  }, ctx, {
    body: `<div id="bg"></div><div id="root">${ctx.body}</div>`,
  })
}

