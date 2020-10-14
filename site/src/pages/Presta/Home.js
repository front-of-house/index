import { h } from "hyposcript";
import { Box } from "hypobox";
import { load } from "presta/load";

import { client, image } from "@/src/lib/sanity";
import { title } from "@/src/lib/title";

import { Gutter } from "@/src/components/Gutter";
import { Alert } from "@/src/components/Alert";
import { Github } from "@/src/icons/Github";
import { Button } from "@/src/components/Button";
import { SectionButton } from "@/src/components/SectionButton";

export function getPaths() {
  return ["/presta"];
}

export function Page({ head }) {
  const page = load(
    () =>
      client.fetch(`
      *[_type == 'presta']{
        metaTitle,
        metaDescription,
        metaImage,
        docs[0]->{
          linkTitle,
          linkDescription,
          "slug": slug.current
        },
      }[0]
    `),
    { key: "presta", duration: '30s' }
  );

  if (!page) return null;

  head({
    title: title([page.metaTitle]),
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
              <Box as="img" src="/static/presta-mark.png" w="40px" />
            </Box>

            <Box as="ul" f aic>
              <Box as="li" db>
                <Box as="a" db href="/presta/docs" fs={5} fe="bold" mr={6}>Docs</Box>
              </Box>
              <Box as="li" db>
                <Box as="a" db lh="1.0" href="https://github.com/sure-thing/presta" target="_blank" fe="bold">
                  <Github w="20px" h="20px" />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box pt={80} pb={10}>
            <Box as="h2" fs={2}>The simple way to build the modern web.</Box>
          </Box>

          <Alert>
            <Box f aic fw jcb>
              <Box w={[1, 1, 'auto']}>
                Presta is in active beta. Questions, comments, ideas? Open an issue
                or PR!
              </Box>
              <Box pt={[4, 4, 0]} w={[1, 1, 'auto']}>
                <Button as="a" dib href="https://github.com/sure-thing/presta/issues/new/choose" target="_blank">New Issue</Button>
              </Box>
            </Box>
          </Alert>

          <Box f fw py={10} mx={-4}>
            <Box w={[1, 1, 1/2]} px={4}>
              <p>Render a single page – or thousands – in milliseconds, with no config. Load data from anywhere, use your preferred templating language, sleep easy.</p>
            </Box>
            <Box w={[1, 1, 1/2]} px={4} mt={[4, 4, 0]}>
              <p>Apply the same logic used to render pages statically to render in a server(less) context. Render pages with remote content, on-demand, using co-located data.</p>
            </Box>
          </Box>

          <Box as="ul" f fw pb={10} mx={-1}>
            {[
              {
                title: `0kb runtime*`,
                description: `*There is no runtime. Time to learn webpack.`,
              },
              {
                title: `Easy`,
                description: `Get started with one file, two exports, and the CLI.`,
              },
              {
                title: `Transparent`,
                description: `There's no magic, only strings. Bring back the document web.`,
              },
              {
                title: `Fast`,
                description: `Runs ES modules natively in Node with no pre-compilation.`,
              },
              {
                title: `Flexible`,
                description: `Render any format. Easily nest microsites.`,
              },
              {
                title: `Familiar`,
                description: `Go read the source: atm it's not even 700 lines.`,
              },
            ].map(f => (
              <Box as="li" db p={1} w={[1, 1/2, 1/3]}>
                <Box h="100%" bg="dAlpha" css={{ borderRadius: '6px' }}>
                  <Box p={5}>
                    <Box as="h5" mb={3} c="b">{f.title}</Box>
                    <Box as="p" fs={6}>{f.description}</Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box f aic jce pt={12}>
            <SectionButton as="a" href={`/presta/docs/${page.docs.slug}`} right title={page.docs.linkTitle} description={page.docs.linkDescription} />
          </Box>
        </Box>
      </Gutter>
    </Box>
  );
}

