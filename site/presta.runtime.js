import { theme as defaultTheme, configure, getCss } from 'hypobox'
import { document } from 'presta/document'

import { theme } from '@/src/lib/theme'

configure({ theme })

const name = `estrattonbailey`
const image = `/static/og.png`
const url = `https://estrattonbailey.com`

export function createDocument (ctx) {
  return document(ctx, {
    body: `<div id="bg"></div><div id="root">${ctx.body}</div>`,
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
        `<link rel="stylesheet" href="/static/style.css" />`,
      ],
      style: [
        `<style id="style">${getCss()}</style>`,
      ],
    }
  })
}

