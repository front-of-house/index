export default {
  name: 'prestaDoc',
  title: 'Presta Doc',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'metaTitle',
        maxLength: 96
      }
    },
    {
      name: 'linkTitle',
      title: 'Link Title',
      type: 'string',
      options: {
        source: 'metaTitle',
      }
    },
    {
      name: 'linkDescription',
      title: 'Link Description',
      type: 'string',
      options: {
        source: 'metaDescription',
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text'
    },
  ],
  preview: {
    select: {
      title: 'linkTitle',
    },
  }
}


