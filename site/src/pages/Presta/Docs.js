import { h } from "hyposcript";
import { Box } from "hypobox";
import { load } from "presta/load";

import { client, image } from "@/src/lib/sanity";
import { title } from "@/src/lib/title";

import { Gutter } from "@/src/components/Gutter";
import { Github } from "@/src/icons/Github";
import { SectionButton } from "@/src/components/SectionButton";
import { Markdown } from "@/src/components/Markdown";

const docsQuery = `
  *[_type == 'presta']{
    docs[]->{
      linkTitle,
      linkDescription,
      "slug": slug.current
    }
  }[0]
`

export async function getPaths() {
  const { docs } = await client.fetch(docsQuery)

  return ['/presta/docs'].concat(docs.map(doc => `/presta/docs/${doc.slug}`))
}

export function Page({ pathname, head }) {
  const [_, slug = 'getting-started'] = pathname.match(/presta\/docs\/(.+)/) || []

  const prestaDocs = load(
    () =>
      client.fetch(docsQuery),
    { key: 'prestaDocs', duration: '30s' }
  );

  const page = load(
    () =>
      client.fetch(`
      *[_type == 'prestaDoc' && $slug == slug.current]{
        metaTitle,
        metaDescription,
        metaImage,
        linkTitle,
        linkDescription,
        body,
      }[0]
    `, { slug }),
    { key: slug, duration: '30s' }
  );

  if (!page || !prestaDocs) return null;

  const index = prestaDocs.docs.findIndex(doc => doc.slug === slug)
  const prev = prestaDocs.docs[index - 1]
  const next = prestaDocs.docs[index + 1]

  head({
    title: title([page.metaTitle, 'Presta']),
    description: page.metaDescription,
    image: image(page.metaImage).width(1200).url(),
    link: [
      { rel: 'icon', type: 'image/png', href: '/static/presta-mark-favicon.png' },
    ]
  });

  return (
    <Box css={{ overflow: 'hidden' }}>
      <Gutter withVertical>
        <Box mx="auto" mw="1100px">
          <Box f aic jcb>
            <Box as="h1" fs={3} c="b">
              <Box as="a" href="/presta">
                <Box as="img" src="/static/presta-mark.png" w="40px" />
              </Box>
            </Box>

            <Box as="ul" f aic>
              <Box as="li" db>
                <Box as="a" db lh="1.0" href="https://github.com/sure-thing/presta" target="_blank" fe="bold">
                  <Github w="20px" h="20px" />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box pt={16} f fw jcb mx={-6}>
            <Box w={[1, 1, 1/5]} px={6} />
            <Box w={[1, 1, 4/5]} px={6}>
              <Box as="h1" mb={6}>{page.metaTitle}</Box>
            </Box>

            <Box w={[1, 1, 1/5]} px={6}>
              <Box as="ul" db>
                {prestaDocs.docs.map(doc => (
                  <Box as="li" f aic mb={2}>
                    <Box as="a" lh={5} href={`/presta/docs/${doc.slug}`}>{doc.linkTitle}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box w={[1, 1, 4/5]} px={6} mt={[6, 6, 0]}>
              <Markdown>
                {page.body}
              </Markdown>

              <Box f fw jcb mt={16} mx={-4}>
                {prev ? (
                  <Box px={4} py={2} mw={[1, 1, 1/2]}>
                    <SectionButton
                      as="a"
                      h
                      href={`/presta/docs/${prev.slug}`}
                      title={prev.linkTitle}
                      description={prev.linkDescription}
                    />
                  </Box>
                ) : <Box />}
                {next && (
                  <Box f jce px={4} py={2} mw={[1, 1, 1/2]}>
                    <SectionButton
                      as="a"
                      h
                      href={`/presta/docs/${next.slug}`}
                      right
                      title={next.linkTitle}
                      description={next.linkDescription}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Gutter>
    </Box>
  );
}
