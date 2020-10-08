const sanityClient = require('@sanity/client')
import imageURL from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'glklzjhr',
  dataset: 'production',
  useCdn: false
})

const builder = imageURL(client)

export function image (image) {
  return builder.image(image)
}
