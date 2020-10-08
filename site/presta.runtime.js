import { theme as defaultTheme, configure, getCss } from 'hypobox'
import { document } from 'presta/document'

import { theme } from '@/src/lib/theme'

configure({ theme })

const name = `estrattonbailey`
const image = `/static/og.png`
const url = `https://estrattonbailey.com`

export function createDocument (ctx) {
  return document(ctx, {
    body: `<div id="root">${ctx.body}</div>`,
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
        `<link rel="icon" type="image/png" href="/static/favicon.png">`,
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/reset.css" />`,
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/buttons.css" />`,
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/forms.css" />`,
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/lists.css" />`,
        `<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@0;1&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />`
      ],
      style: [
        `<style id="style">${getCss()}</style>`,
        `<style>
          html, body {
            color: ${theme.color.d};
            font-weight: 400;
            font-family: 'Roboto', -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
          }
          ::selection {
            background: ${theme.color.b};
            color: white;
          }
          a {
            color: ${theme.color.b};
          }
          a:visited {
            color: inherit;
          }
          a:focus {
            outline: 2px dashed ${theme.color.b};
          }
          h1, h2, h3, h4, h5, h6 {
            margin: 0;
          }
          p {
            line-height: 1.5;
            margin: 0;
          }
          ${defaultTheme.fontSize.slice(1).map((fs, i) => `h${i + 1} { font-size: ${fs} }`).join('')}
          .wysiwyg p {
            margin-bottom: ${defaultTheme.space[4]}px;
          }
          .wysiwyg ul {
            margin: ${defaultTheme.space[4]}px 0;
            list-style: disc outside;
            padding-left: ${defaultTheme.space[4]}px;
          }
          .wysiwyg h1,
          .wysiwyg h2,
          .wysiwyg h3,
          .wysiwyg h4,
          .wysiwyg h5,
          .wysiwyg h6 {
            margin: 1em 0 0.75em;
          }
          pre, code {
            font-size: 0.9rem;
            background: whitesmoke;
          }
          pre code {
            background: transparent;
          }
          pre {
            margin: ${defaultTheme.space[4]}px 0;
            padding: ${defaultTheme.space[5]}px;
            overflow: auto;
            border-radius: 6px;
          }
          pre code::selection,
          pre::selection {
            background: ${theme.color.d};
            color: white;
          }
          .project a,
          .project a:visited {
            color: ${theme.color.b};
          }
          .project pre,
          .project code {
            background: ${theme.color.t};
          }
          @media screen and (min-width: ${defaultTheme.breakpoints[1]}) {
          }
        </style>`
      ],
    }
  })
}

