import { h } from "hyposcript";
import { Box } from "hypobox";

import { Gutter } from "@/src/components/Gutter";

export function getStaticPaths() {
  return ["/"];
}

export function template() {
  return (
    <Gutter withVertical>
      <Box as="h1" fs={4} my={0} fe={7}>you got it</Box>
    </Gutter>
  );
}
