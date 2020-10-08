export default {
  name: 'presta',
  title: 'Presta',
  type: 'document',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string'
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text'
    },
    {
      name: 'metaImage',
      title: 'Meta Image',
      type: 'image',
    },
    {
      name: 'docs',
      title: 'Docs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'prestaDoc'}}]
    },
  ],
  preview: {
    select: {
      title: 'metaTitle',
    },
  }
}
