import merge from 'deepmerge'
import { hypostyle as hypo } from 'hypostyle'
import * as presets from 'hypostyle/presets'
import { configure } from 'hypobox'

export const hypostyle = hypo(merge(presets, {
  tokens: {
    fontFamily: {
      sans: "'IBM Plex Sans', sans-serif",
    }
  }
}))

configure(hypostyle)

export const globals = hypostyle.createGlobal({
  'html, body': {
    m: 0,
    p: 0,
  },
  '::selection': {
    background: 'blue',
    color: 'white',
  }
})
