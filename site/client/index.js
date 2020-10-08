import operator from 'operator'
import { picoapp } from 'picoapp'

import { img } from '@/client/components/img'

const router = operator('#root')
const app = picoapp({
  img
})

app.mount()

router.on('after', ({ previousDocument, location }) => {
  document.head.replaceChild(
    previousDocument.getElementById('style'),
    document.getElementById('style')
  )
  document.title = previousDocument.title
  window.history.pushState({}, '', location)

  app.unmount()
  app.mount()
})
