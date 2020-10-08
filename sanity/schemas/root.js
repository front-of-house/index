export default {
  name: 'index',
  title: 'Index',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text'
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
  }
}

