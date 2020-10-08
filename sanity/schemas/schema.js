import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import root from './root'
import presta from './presta'
import prestaDoc from './prestaDoc'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    root,
    presta,
    prestaDoc
  ])
})
