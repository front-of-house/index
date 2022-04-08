import { h } from "hyposcript";
import { Box } from "hypobox";

import { Gutter } from "@/src/components/Gutter"
import { document } from '@/src/lib/document'

export function getStaticPaths() {
  return ["/"];
}

export function handler() {
  return document(
    <Gutter withVertical>
      <Box as="h1" fs={4} my={0} fw={7} ff='sans' c='blue'>you got it</Box>
    </Gutter>
  )
}
